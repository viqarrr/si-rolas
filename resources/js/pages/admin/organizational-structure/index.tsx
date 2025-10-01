import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
        href: '/',
    },
    {
        title: 'Struktur Organisasi',
        href: '/struktur-organisasi',
    },
];

const organizationalStructuresDummyData = [
    {
        id: 1,
        name: 'Dr. Ahmad Wijaya, M.Pd.',
        position: 'Principal',
        photo_url: 'organizational-structure/principal.jpg',
        created_at: '2024-01-10T08:00:00.000Z',
    },
    {
        id: 2,
        name: 'Siti Nurhaliza, S.Pd., M.M.',
        position: 'Vice Principal - Academic Affairs',
        photo_url: 'organizational-structure/vice-academic.jpg',
        created_at: '2024-01-10T08:30:00.000Z',
    },
    {
        id: 3,
        name: 'Budi Santoso, S.Pd.',
        position: 'Vice Principal - Student Affairs',
        photo_url: 'organizational-structure/vice-student.jpg',
        created_at: '2024-01-10T09:00:00.000Z',
    },
    {
        id: 4,
        name: 'Indira Sari, S.Kom.',
        position: 'Head of IT Department',
        photo_url: 'organizational-structure/head-it.jpg',
        created_at: '2024-01-11T08:00:00.000Z',
    },
    {
        id: 5,
        name: 'Raden Mas Suryo, S.T.',
        position: 'Head of Engineering Department',
        photo_url: 'organizational-structure/head-engineering.jpg',
        created_at: '2024-01-11T08:30:00.000Z',
    },
];

export default function OrganizationalStructuresIndex({ organizationalStructures = organizationalStructuresDummyData }: Props) {
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<OrganizationalStructure>({
        routeName: 'organizational-structure.destroy',
        getParams: (item) => ({ id: item.id }),
    });
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Organizational Structure</h1>
                            <p className="text-muted-foreground">Manage your organization's leadership and structure</p>
                        </div>
                        <Button asChild>
                            <Link href={route('organizational-structures.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Work
                            </Link>
                        </Button>
                    </div>

                    {organizationalStructures.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <Users className="mb-4 h-12 w-12 text-muted-foreground" />
                                <h3 className="mb-2 text-lg font-semibold">No organizational structure</h3>
                                <p className="mb-6 text-center text-muted-foreground">Get started by adding your first organizational member.</p>
                                <Button onClick={() => router.visit(route('organizational-structures.create'))}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Member
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card>
                            <CardHeader>
                                <CardTitle>Organization Members</CardTitle>
                                <CardDescription>A list of all members in your organizational structure</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Member</TableHead>
                                            <TableHead>Position</TableHead>
                                            <TableHead>Created</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {organizationalStructures.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar>
                                                            <AvatarFallback>
                                                                {item.name
                                                                    .split(' ')
                                                                    .map((n) => n[0])
                                                                    .join('')
                                                                    .toUpperCase()}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-medium">{item.name}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{item.position}</TableCell>
                                                <TableCell className="text-muted-foreground">
                                                    {new Date(item.created_at).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => router.visit(route('organizational-structures.edit', { id: item.id }))}
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
