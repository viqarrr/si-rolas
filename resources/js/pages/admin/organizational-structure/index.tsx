import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, OrganizationalStructure, PageProps } from '@/types';
import { Link, router } from '@inertiajs/react';
import { Edit, Plus, Trash2, Users } from 'lucide-react';

interface Props extends PageProps {
    organizationalStructures: OrganizationalStructure[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
    },
    {
        title: 'Struktur Organisasi',
        href: '/admin/struktur-organisasi',
    },
];

export default function OrganizationalStructuresIndex({ organizationalStructures }: Props) {
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<OrganizationalStructure>({
        routeName: 'admin.organizational-structures.destroy',
        getParams: (item) => ({ id: item.id, title: item.name }),
        getTitle: (item) => item.name,
    });

    console.log(organizationalStructures);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Struktur Organisasi</h1>
                            <p className="text-muted-foreground">Kelola kepemimpinan dan struktur organisasi Anda</p>
                        </div>
                        <Button asChild>
                            <Link href={route('admin.organizational-structures.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Tambah Posisi
                            </Link>
                        </Button>
                    </div>

                    {organizationalStructures.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <Users className="mb-4 h-12 w-12 text-muted-foreground" />
                                <h3 className="mb-2 text-lg font-semibold">Belum ada struktur organisasi</h3>
                                <p className="mb-6 text-center text-muted-foreground">Mulai dengan menambahkan anggota organisasi pertama Anda.</p>
                                <Button onClick={() => router.visit(route('admin.organizational-structures.create'))}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Tambah Posisi
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card>
                            <CardHeader>
                                <CardTitle>Anggota Organisasi</CardTitle>
                                <CardDescription>Daftar semua anggota dalam struktur organisasi Anda</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Anggota</TableHead>
                                            <TableHead>Jabatan</TableHead>
                                            <TableHead>Dibuat</TableHead>
                                            <TableHead className="text-right">Aksi</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {organizationalStructures.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar>
                                                            {item.photo_url ? (
                                                                <AvatarImage
                                                                  src={item.photo_url}
                                                                  alt={item.name}
                                                                  className="object-cover"
                                                                />
                                                            ) : (
                                                                <AvatarFallback>
                                                                    {item.name
                                                                        .split(' ')
                                                                        .map((n) => n[0])
                                                                        .join('')
                                                                        .toUpperCase()}
                                                                </AvatarFallback>
                                                            )}
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-medium">{item.name}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{item.position}</TableCell>
                                                <TableCell className="text-muted-foreground">
                                                    {item.created_at ? new Date(item.created_at).toLocaleDateString() : '-'}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() =>
                                                                router.visit(route('admin.organizational-structures.edit', { id: item.id }))
                                                            }
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="outline" size="sm" onClick={() => setDeleteItem(item)}>
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    )}

                    <DeleteDialog />
                </div>
            </div>
        </AppLayout>
    );
}
