import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import { useFilters } from '@/hooks/use-filters';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, Post } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, Plus, Search, Trash2 } from 'lucide-react';
import React from 'react';

type PostFormData = Omit<Post, "id">;
interface PostsIndexProps {
    posts: {
        data: Post[];
        links: any;
        meta: any;
    };
    filters: {
        search?: string;
        status?: string;
        type?: string;
        category?: string;
    };
}

const postsDummy = {
    data: [],
    links: [],
    meta: [],
};

const postsFilterDummy = {
    search: '',
    status: '',
    type: '',
    category: '',
};

const FILTER_OPTIONS = {
    status: [
        { value: 'all', label: 'All' },
        { value: 'draft', label: 'Draft' },
        { value: 'published', label: 'Published' },
    ],
    type: [
        { value: 'all', label: 'All' },
        { value: 'news', label: 'News' },
        { value: 'announcement', label: 'Announcement' },
    ],
    category: [
        { value: 'all', label: 'All' },
        { value: 'tech', label: 'Tech' },
        { value: 'life', label: 'Lifestyle' },
    ],
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Postingan', href: '/postingan' },
];

const PostsIndex: React.FC<PostsIndexProps> = ({ posts = postsDummy, filters = postsFilterDummy }) => {
    const { filtersState, handleFilter, search, status, type, category } = useFilters({
        initialFilters: {
            search: filters.search || '',
            status: filters.status || 'all',
            type: filters.type || 'all',
            category: filters.category || 'all',
        },
        routeName: 'posts.index',
    });
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<Post>({
        routeName: 'posts.destroy',
        getParams: (item) => ({ id: item.id }),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
                            <p className="text-muted-foreground">Manage blog posts and articles</p>
                        </div>
                        <Button asChild>
                            <Link href={route('posts.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Post
                            </Link>
                        </Button>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>All Posts</CardTitle>
                            <CardDescription>A list of all blog posts and articles</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        router.get(route('posts.index'), filtersState, { preserveState: true, replace: true });
                                    }}
                                    className="flex items-center space-x-2"
                                >
                                    <div className="relative">
                                        <Search className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search majors..."
                                            value={search}
                                            onChange={(e) => handleFilter('search', e.target.value)}
                                            className="w-64 pl-8"
                                        />
                                    </div>
                                </form>

                                <Select value={status} onValueChange={(val) => handleFilter('status', val)}>
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {FILTER_OPTIONS.status.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select value={type} onValueChange={(val) => handleFilter('type', val)}>
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {FILTER_OPTIONS.type.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select value={category} onValueChange={(val) => handleFilter('category', val)}>
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {FILTER_OPTIONS.category.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Post</TableHead>
                                        <TableHead>Excerpt</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Published</TableHead>
                                        <TableHead>Updated</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {posts.data.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center text-muted-foreground">
                                                No posts found
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        posts.data.map((post) => (
                                            <TableRow key={post.id}>
                                                <TableCell>
                                                    <div className="flex items-center space-x-3">
                                                        {post.thumbnail && (
                                                            <img
                                                                src={post.thumbnail as string}
                                                                alt={post.title}
                                                                className="h-10 w-10 rounded-md object-cover"
                                                            />
                                                        )}
                                                        <div>
                                                            <div className="font-medium">{post.title}</div>
                                                            <div className="text-sm text-muted-foreground">{post.slug}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="max-w-xs">
                                                    <p className="truncate text-sm">{post.excerpt}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant={'default'}>{post.type}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>{post.status}</Badge>
                                                </TableCell>
                                                <TableCell className="text-sm text-muted-foreground">
                                                    {post.published_at ? new Date(post.published_at).toLocaleDateString() : '-'}
                                                </TableCell>
                                                <TableCell className="text-sm text-muted-foreground">
                                                    {new Date(post.updated_at).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link href={route('posts.show', { id: post.id })}>
                                                                <Eye className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link href={route('posts.edit', { id: post.id })}>
                                                                <Edit className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="ghost" size="sm" onClick={() => setDeleteItem(post)}>
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

export default PostsIndex;
