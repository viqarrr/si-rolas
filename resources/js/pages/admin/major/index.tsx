import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Major } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, Plus, Search, Trash2 } from 'lucide-react';

interface Props {
    majors: Major[];
    filters: {
        search?: string;
    };
}

const majorsIndexData = [
    {
        id: 1,
        slug: 'informatics',
        title: 'Informatics Engineering',
        short_description: 'Focuses on software development, AI, and systems.',
        detail: 'Focuses on software development, AI, and systems.',
        logo: 'https://via.placeholder.com/80x80.png?text=IT',
        thumbnail: 'https://via.placeholder.com/80x80.png?text=IT',
        competencies: [
            { major_id: 1, title: 'title', description: 'description' },
            { major_id: 1, title: 'title', description: 'description' },
            { major_id: 1, title: 'title', description: 'description' },
        ],
        career_prospects: [
            { major_id: 1, title: 'title', description: 'description' },
            { major_id: 1, title: 'title', description: 'description' },
            { major_id: 1, title: 'title', description: 'description' },
        ],
        created_at: '2025-09-20',
        updated_at: '2025-09-21',
    },
    {
        id: 2,
        slug: 'graphic-design',
        title: 'Graphic Design',
        short_description: 'Learn design principles, branding, and multimedia.',
        detail: 'Learn design principles, branding, and multimedia.',
        logo: 'https://via.placeholder.com/80x80.png?text=Design',
        thumbnail: 'https://via.placeholder.com/80x80.png?text=Design',
        competencies: [
            { major_id: 2, title: 'title', description: 'description' },
            { major_id: 2, title: 'title', description: 'description' },
            { major_id: 2, title: 'title', description: 'description' },
        ],
        career_prospects: [
            { major_id: 2, title: 'title', description: 'description' },
            { major_id: 2, title: 'title', description: 'description' },
            { major_id: 2, title: 'title', description: 'description' },
        ],
        created_at: '2025-09-15',
        updated_at: '2025-09-18',
    },
    {
        id: 3,
        slug: 'mechanical-engineering',
        title: 'Mechanical Engineering',
        short_description: 'Covers machines, automotive, and industrial systems.',
        detail: 'Covers machines, automotive, and industrial systems.',
        logo: 'https://via.placeholder.com/80x80.png?text=Mech',
        thumbnail: 'https://via.placeholder.com/80x80.png?text=Mech',
        competencies: [
            { major_id: 3, title: 'title', description: 'description' },
            { major_id: 3, title: 'title', description: 'description' },
            { major_id: 3, title: 'title', description: 'description' },
        ],
        career_prospects: [
            { major_id: 3, title: 'title', description: 'description' },
            { major_id: 3, title: 'title', description: 'description' },
            { major_id: 3, title: 'title', description: 'description' },
        ],
        created_at: '2025-09-10',
        updated_at: '2025-09-19',
    },
];

const dummyFilters = {
    search: '',
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Jurusan', href: '/jurusan' },
];

export default function MajorsIndex({ majors = majorsIndexData, filters = dummyFilters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<Major>({
        routeName: 'majors.destroy',
        getParams: (item) => ({ id: item.id }),
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(
            route('majors.index'),
            { search },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Majors" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Majors</h1>
                            <p className="text-muted-foreground">Manage academic majors and their competencies</p>
                        </div>
                        <Button asChild>
                            <Link href={route('majors.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Work
                            </Link>
                        </Button>
                    </div>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-4">
                                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                                    <div className="relative">
                                        <Search className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search majors..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-64 pl-8"
                                        />
                                    </div>
                                </form>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Logo</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Competencies</TableHead>
                                        <TableHead>Career Prospects</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {majors.map((major) => (
                                        <TableRow key={major.id}>
                                            <TableCell>
                                                <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                                                    {major.logo ? (
                                                        <img src={major.logo as string} alt={major.title} className="h-full w-full object-cover" />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center">
                                                            <Eye className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{major.title}</div>
                                                <div className="text-sm text-muted-foreground">{major.slug}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="max-w-xs truncate">{major.short_description}</div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{major.competencies.length}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{major.career_prospects.length}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        // onClick={() => router.visit(route('majors.edit', major.id))}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" onClick={() => setDeleteItem(major)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            {majors.length === 0 && (
                                <div className="py-12 text-center">
                                    <p className="text-muted-foreground">No majors found.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <DeleteDialog />
                </div>
            </div>
        </AppLayout>
    );
}
