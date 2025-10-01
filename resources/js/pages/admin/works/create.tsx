import InlineNestedList from '@/components/inline-nested-list';
import QuillWrapper from '@/components/quill-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { WorkImage, WorkLink } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import React from 'react';

/**
 * Explicit form type (don't extend the full domain Work type here — keep only fields used by the form)
 */
interface WorkFormData {
    major_id: number;
    year: number;
    title: string;
    slug: string;
    description: string;
    images: Array<WorkImage>; 
    links: WorkLink[]; 
    links_to_delete: number[];
}

const WorksCreate: React.FC = () => {
    const { data, setData, post, processing, errors, progress } = useForm<WorkFormData>({
        major_id: 0,
        year: new Date().getFullYear(),
        title: '',
        slug: '',
        description: '',
        images: [],
        links: [],
        links_to_delete: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        // Basic scalar fields
        formData.append('major_id', String(data.major_id));
        formData.append('year', String(data.year));
        formData.append('title', data.title || '');
        formData.append('slug', data.slug || '');
        formData.append('description', data.description || '');

        // Images: allow mix of new Files and existing WorkImage objects
        data.images.forEach((img, idx) => {
            if (img instanceof File) {
                // new file
                formData.append('images[]', img);
            } else {
                // existing WorkImage object -> send its id so backend keeps it (or you can send URL)
                if (img.id) {
                    formData.append(`existing_images[${idx}]`, String(img.id));
                } else if (typeof img.image === 'string') {
                    formData.append(`existing_images[${idx}]`, img.image);
                }
            }
        });

        // Links: send each link. WorkLink type assumed to have optional id and url property.
        data.links.forEach((link, idx) => {
            if (link.id) {
                formData.append(`links[${idx}][id]`, String(link.id));
            }
            // if you have title for link, append it; otherwise just url
            if ((link as any).title) {
                formData.append(`links[${idx}][title]`, (link as any).title);
            }
            formData.append(`links[${idx}][url]`, link.url || '');
        });

        // Deleted link IDs
        data.links_to_delete.forEach((id) => {
            formData.append('links_to_delete[]', String(id));
        });

        router.post(route('works.store'), formData, {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AppLayout>
            <Head title="Create Work" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <h1 className="text-3xl font-bold tracking-tight">Create Work</h1>
                            <p className="text-muted-foreground">Add a new portfolio project or work item</p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Basic Information */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Basic Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Title</Label>
                                            <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <QuillWrapper
                                                value={data.description}
                                                onChange={(value) => setData('description', value)}
                                                placeholder="Write detailed description about this work..."
                                            />
                                            {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Work Images */}
                                <Card>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <InlineNestedList<WorkImage>
                                                items={data.images}
                                                onItemsChange={(items) => setData('images', items)}
                                                title="Images"
                                                itemLabel="Work Image"
                                                showImage={true}
                                            />

                                            {errors.images && <p className="text-sm text-destructive">{errors.images}</p>}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Work Links */}
                                <Card>
                                    <CardContent>
                                        <InlineNestedList<WorkLink>
                                            items={data.links}
                                            onItemsChange={(items) => setData('links', items)}
                                            title="Links"
                                            itemLabel="Publication Link"
                                            showUrl={true}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Submit Actions */}
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-muted-foreground">
                                        {processing && progress && <span>Uploading... {Math.round(progress.percentage || 0)}%</span>}
                                    </p>
                                    <div className="flex gap-2">
                                        <Button type="button" variant="outline" asChild>
                                            {/* <Link href={route("works.index")}>Cancel</Link> */}
                                            Cancel
                                        </Button>
                                        <Button type="submit" disabled={processing}>
                                            {processing ? 'Creating...' : 'Create Work'}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default WorksCreate;
