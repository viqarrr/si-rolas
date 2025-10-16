import FileUploadInertia from '@/components/file-upload';
import InlineNestedList from '@/components/inline-nested-list';
import QuillWrapper from '@/components/quill-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import type { Major } from '@/types';
import { router, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import React from 'react';

interface MajorsCreateProps {
    errors?: Record<string, string>;
}

export default function MajorsCreate({ errors }: MajorsCreateProps) {
    const { data, setData, post, processing, progress } = useForm<Major>({
        id: 0,
        slug: '',
        name: '',
        short_description: '',
        detail: '',
        thumbnail: '',
        logo: '',
        competencies: [],
        career_prospects: [],
    });

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleNameChange = (name: string) => {
        setData((prev) => ({
            ...prev,
            name,
            slug: generateSlug(name),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        // Basic fields
        formData.append('slug', data.slug);
        formData.append('title', data.name);
        formData.append('short_description', data.short_description);
        formData.append('detail', data.detail);

        if (data.thumbnail) {
            formData.append('thumbnail', data.thumbnail);
        }

        // Competencies
        data.competencies.forEach((competency, index) => {
            formData.append(`competencies[${index}][title]`, competency.title);
            formData.append(`competencies[${index}][description]`, competency.description);
            if (competency.image instanceof File) {
                formData.append(`competencies[${index}][image]`, competency.image);
            }
        });

        // Career prospects
        data.career_prospects.forEach((prospect, index) => {
            formData.append(`career_prospects[${index}][title]`, prospect.title);
            formData.append(`career_prospects[${index}][description]`, prospect.description);
            if (prospect.image instanceof File) {
                formData.append(`career_prospects[${index}][image]`, prospect.image);
            }
        });

        router.post(route('majors.store'), formData, {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AppLayout>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6 p-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight">Create Major</h1>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Basic Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label>Logo</Label>
                                            <FileUploadInertia
                                                value={data.logo}
                                                onChange={(file) => setData('logo', file as File)}
                                                placeholder="Upload major logo"
                                            />
                                            {errors?.logo && <p className="text-sm text-red-500">{errors.logo}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Thumbnail</Label>
                                            <FileUploadInertia
                                                value={data.thumbnail}
                                                onChange={(file) => setData('thumbnail', file as File)}
                                                placeholder="Upload major thumbnail"
                                            />
                                            {errors?.thumbnail && <p className="text-sm text-red-500">{errors.thumbnail}</p>}
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Title *</Label>
                                                <Input
                                                    id="title"
                                                    value={data.name}
                                                    onChange={(e) => handleNameChange(e.target.value)}
                                                    placeholder="Major title"
                                                />
                                                {errors?.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug *</Label>
                                                <Input
                                                    id="slug"
                                                    value={data.slug}
                                                    onChange={(e) => setData('slug', e.target.value)}
                                                    placeholder="major-slug"
                                                />
                                                {errors?.slug && <p className="text-sm text-red-500">{errors.slug}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="short_description">Short Description</Label>
                                            <Textarea
                                                id="short_description"
                                                value={data.short_description}
                                                onChange={(e) => setData('short_description', e.target.value)}
                                                placeholder="Brief description of the major"
                                                rows={3}
                                            />
                                            {errors?.short_description && <p className="text-sm text-red-500">{errors.short_description}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="detail">Detailed Description</Label>
                                            <QuillWrapper
                                                value={data.detail}
                                                onChange={(value) => setData('detail', value)}
                                                placeholder="Detailed description of the major"
                                            />
                                            {errors?.detail && <p className="text-sm text-red-500">{errors.detail}</p>}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent>
                                        <InlineNestedList
                                            items={data.competencies}
                                            onItemsChange={(items) => setData('competencies', items)}
                                            title="Competencies"
                                            itemLabel="Competency"
                                            showImage={true}
                                        />
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent>
                                        <InlineNestedList
                                            items={data.career_prospects}
                                            onItemsChange={(items) => setData('career_prospects', items)}
                                            title="Career Prospects"
                                            itemLabel="Career Prospect"
                                            showImage={true}
                                        />
                                    </CardContent>
                                </Card>

                                <div className="flex justify-end gap-4">
                                    <Button type="button" variant="outline" onClick={() => router.visit(route('majors.index'))}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Savinging...' : 'Save Major'}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
