import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Work } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Plus, Search, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

interface WorksIndexProps {
    works: Work[];
    filters: {
        search?: string;
        active?: string;
    };
}
export const dummyWorks = [
    {
        id: 1,
        major_id: 2,
        title: 'Interactive 3D Exhibition',
        slug: 'interactive-3d-exhibition',
        description: 'A virtual exhibition project built with Unity and WebGL integration.',
        year: 2023,
        cover_image: '/images/works/exhibition-cover.jpg',
        images: [
            {
                id: 11,
                work_id: 1,
                image: '/images/works/exhibition-1.jpg',
            },
            {
                id: 12,
                work_id: 1,
                image: '/images/works/exhibition-2.jpg',
            },
        ],
        links: [
            {
                id: 21,
                work_id: 1,
                url: 'https://github.com/example/exhibition',
            },
            {
                id: 22,
                work_id: 1,
                url: 'https://exhibition-demo.vercel.app',
            },
        ],
    },
    {
        id: 2,
        major_id: 3,
        title: 'Mobile Learning App',
        slug: 'mobile-learning-app',
        description: 'Cross-platform mobile application for online learning with quizzes and progress tracking.',
        year: 2024,
        cover_image: '/images/works/learning-app-cover.png',
        images: [
            {
                id: 13,
                work_id: 2,
                image: '/images/works/learning-app-1.png',
            },
            {
                id: 14,
                work_id: 2,
                image: '/images/works/learning-app-2.png',
            },
        ],
        links: [
            {
                id: 23,
                work_id: 2,
                url: 'https://play.google.com/store/apps/details?id=com.learning.app',
            },
            {
                id: 24,
                work_id: 2,
                url: 'https://github.com/example/learning-app',
            },
        ],
    },
];

const dummyFilters = {
    search: '',
    active: 'all',
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
    {
        title: 'Karya',
        href: '/karya',
    },
];

const WorksIndex: React.FC<WorksIndexProps> = ({ works = dummyWorks, filters = dummyFilters }) => {
    const [search, setSearch] = useState(filters.search || '');
    const [activeFilter, setActiveFilter] = useState(filters.active || 'all');
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<Work>({
        routeName: 'works.destroy',
        getParams: (item) => ({ id: item.id }),
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(
            route('majors.index'),
            { search, active: activeFilter },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    const handleFilterChange = (value: string) => {
        setActiveFilter(value);
        router.get(
            route('majors.index'),
            { search, active: value },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Works" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Works</h1>
                            <p className="text-muted-foreground">Manage projects and portfolio items</p>
                        </div>
                        <Button asChild>
                            <Link href={route('works.create')}>
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
                                            placeholder="Cari karya..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-64 pl-8"
                                        />
                                    </div>
                                </form>

                                <Select value={activeFilter} onValueChange={handleFilterChange}>
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="Jurusan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="seni-tari">Seni Tari</SelectItem>
                                        <SelectItem value="seni-musik">Seni Musik</SelectItem>
                                        <SelectItem value="seni-karawitan">Seni Karawitan</SelectItem>
                                        <SelectItem value="seni-pedalangan">Seni Pedalangan</SelectItem>
                                        <SelectItem value="seni-teater">Seni Teater</SelectItem>
                                        <SelectItem value="kriya-kreatif-logam-dan-perhiasan">Kriya Kreatif Logam dan Perhiasan</SelectItem>
                                        <SelectItem value="kriya-kreatif-kulit-dan-imitasi">Kriya Kreatif Kulit dan Imitasi</SelectItem>
                                        <SelectItem value="kriya-kreatif-kayu-dan-rotan">Kriya Kreatif Kayu dan Rotan</SelectItem>
                                        <SelectItem value="kriya-kreatif-batik-dan-tekstil">Kriya Kreatif Batik dan Tekstil</SelectItem>
                                        <SelectItem value="seni-lukis">Seni Lukis</SelectItem>
                                        <SelectItem value="desain-komunikasi-visual">Desain Komunikasi Visual</SelectItem>
                                        <SelectItem value="produksi-film">Produksi Film</SelectItem>
                                        <SelectItem value="animasi">Animasi</SelectItem>
                                        <SelectItem value="pengembangan-perangkat-lunak-dan-gim">Pengembangan Perangkat Lunak dan Gim</SelectItem>
                                        <SelectItem value="desain-interior-dan-teknik-furnitur">Desain Interior dan Teknik Furnitur</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Work</TableHead>
                                        <TableHead>Summary</TableHead>
                                        <TableHead>Images</TableHead>
                                        <TableHead>Links</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {works.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center text-muted-foreground">
                                                No works found
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        works.map((work) => (
                                            <TableRow key={work.id}>
                                                <TableCell>
                                                    <div className="flex items-center space-x-3">
                                                        {work.images && (
                                                            <img
                                                                src={work.images[0].image as string}
                                                                alt={work.title}
                                                                className="h-10 w-10 rounded-md object-cover"
                                                            />
                                                        )}
                                                        <div>
                                                            <div className="font-medium">{work.title}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="max-w-xs">
                                                    <p className="truncate text-sm">{work.description}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">{work.images.length}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">{work.links.length}</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button variant="ghost" size="sm" asChild>
                                                            {/* <Link href={route('works.edit', work.id)}> */}
                                                            <Link href={'/karya/edit'}>
                                                                <Edit className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="ghost" size="sm" onClick={() => setDeleteItem(work)}>
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <DeleteDialog />
                </div>
            </div>
        </AppLayout>
    );
};

export default WorksIndex;
