import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FileUploadInertia from '@/components/file-upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { BreadcrumbItem, OrganizationalStructure } from '@/types';

interface OrganizationalStructuresEditProps {
    member: OrganizationalStructure;
    errors?: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Struktur Organisasi', href: '/struktur-organisasi' },
    { title: 'Edit Data', href: '/struktur-organisasi/edit' },
];

export default function OrganizationalStructuresEdit({ member, errors = {} }: OrganizationalStructuresEditProps) {
    const { data, setData, put, processing, progress } = useForm({
        name: member.name || '',
        position: member.position || '',
        photo: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('organizational-structures.update', { id: member.id }));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold tracking-tight">Edit Member</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>

                                {/* Position */}
                                <div className="space-y-2">
                                    <Label htmlFor="position">Position *</Label>
                                    <Input
                                        id="position"
                                        value={data.position}
                                        onChange={(e) => setData('position', e.target.value)}
                                        className={errors.position ? 'border-red-500' : ''}
                                    />
                                    {errors.position && <p className="text-sm text-red-500">{errors.position}</p>}
                                </div>

                                {/* Photo */}
                                <div className="space-y-2">
                                    <Label htmlFor="photo_file">Photo</Label>
                                    <FileUploadInertia
                                        value={data.photo}
                                        onChange={(file) => setData('photo', file as File)}
                                        placeholder="Upload a photo (JPG, PNG, WebP - max 5MB)"
                                    />
                                    {errors.photo && <p className="text-sm text-red-500">{errors.photo}</p>}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-4">
                                    <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Saving...' : 'Save Member'}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
