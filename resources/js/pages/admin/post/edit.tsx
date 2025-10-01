import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import FileUploadInertia from '@/components/file-upload';
import QuillWrapper from '@/components/quill-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PostStatus, BreadcrumbItem, Post } from '@/types';

type FormData = Omit<Post, 'id' | 'published_at' | 'updated_at'>;

interface PostCreateProps {
    postData: Post;
    errors?: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Postingan', href: '/postingan' },
    { title: 'Ubah Postingan', href: '/postingan/create' },
];

export default function PostEdit({ postData, errors = {} }: PostCreateProps) {
    const { data, setData, post, processing, progress } = useForm<FormData>({
        type: postData.type,
        status: postData.status,
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt,
        content: postData.content,
        thumbnail: postData.thumbnail,
    });

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleTitleChange = (title: string) => {
        setData((prev) => ({
            ...prev,
            title,
            slug: generateSlug(title),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('post.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold tracking-tight">Create History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {/* Photo */}
                                    <div className="space-y-2">
                                        <Label htmlFor="photo_url">Photo</Label>
                                        <FileUploadInertia
                                            value={data.thumbnail}
                                            onChange={(file) => setData('thumbnail', file as File)}
                                            placeholder="Upload post thubnail"
                                        />
                                        {errors.thumbnail && <p className="text-sm text-red-500">{errors.thumbnail}</p>}
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Title *</Label>
                                            <Input
                                                id="title"
                                                value={data.title}
                                                onChange={(e) => handleTitleChange(e.target.value)}
                                                placeholder="Major title"
                                            />
                                            {errors?.title && <p className="text-sm text-red-500">{errors.title}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="slug">Slug *</Label>
                                            <Input
                                                id="slug"
                                                value={data.slug}
                                                onChange={(e) => setData('slug', e.target.value)}
                                                placeholder="post-slug"
                                            />
                                            {errors?.slug && <p className="text-sm text-red-500">{errors.slug}</p>}
                                        </div>
                                    </div>
                                    {/*Excerpt*/}
                                    <div className="space-y-2">
                                        <Label htmlFor="excerpt">Excerpt *</Label>
                                        <Textarea
                                            id="excerpt"
                                            value={data.excerpt}
                                            onChange={(e) => setData('excerpt', e.target.value)}
                                            className={errors.excerpt ? 'border-red-500' : ''}
                                        />
                                        {errors.excerpt && <p className="text-sm text-red-500">{errors.description}</p>}
                                    </div>
                                    {/* Content */}
                                    <div className="space-y-2">
                                        <Label htmlFor="content">Content *</Label>
                                        <QuillWrapper
                                            value={data.content}
                                            onChange={(value) => setData('content', value)}
                                            placeholder="Write post content..."
                                        />
                                        {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
                                    </div>
                                    {/* Actions */}
                                    <div className="flex items-center justify-end gap-4">
                                        <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" disabled={processing} onClick={() => setData('status', PostStatus.DRAFT)}>
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing ? 'Saving...' : 'Save as Draft'}
                                        </Button>
                                        <Button type="submit" disabled={processing} onClick={() => setData('status', PostStatus.PUBLISHED)}>
                                            <Save className="mr-2 h-4 w-4" />
                                            {processing ? 'Publishing...' : 'Publish'}
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
