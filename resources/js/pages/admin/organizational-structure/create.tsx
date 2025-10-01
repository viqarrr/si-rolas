import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FileUploadInertia from '@/components/file-upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { BreadcrumbItem, OrganizationalStructure } from '@/types';

type FormData = Omit<OrganizationalStructure,"id">;

interface OrganizationalStructuresCreateProps {
    errors?: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Struktur Organisasi', href: '/struktur-organisasi' },
    { title: 'Tambah Data', href: '/struktur-organisasi/create' },
];

export default function OrganizationalStructuresCreate({ errors = {} }: OrganizationalStructuresCreateProps) {
    const { data, setData, post, processing, progress } = useForm<FormData>({
        name: '',
        position: '',
        photo: null as unknown as File,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('organizational-structures.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold tracking-tight">Add Organization Member</CardTitle>
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
                                            placeholder="e.g., Dr. John Smith"
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
                                            placeholder="e.g., Principal, Vice Principal"
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
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                        >
                                            <Save className="mr-2 h-4 w-4" />
                                            {/* {processing ? "Saving..." : "Save Member"} */}
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
