import QuillWrapper from '@/components/quill-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type PageProps, type VisionMission } from '@/types';
import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { useEffect } from 'react';

interface Props extends PageProps {
    visionMission: VisionMission;
    errors: Record<string, string>;
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
    {
        title: 'Visi Misi',
        href: '/visi-misi',
    },
    {
        title: 'Ubah Visi Misi',
        href: '/visi-misi/edit',
    },
];

export default function VisionMissionsEdit({ visionMission, errors }: Props) {
    const { data, setData, post, processing } = useForm({
        title: visionMission.title,
        content: visionMission.content,
        _method: 'PUT', 
    });

        useEffect(() => {
            if (visionMission) {
                setData({
                    title: visionMission.title || '',
                    content: visionMission.content || '',
                    _method: 'PUT',
                });
            }
            console.log(visionMission);
        }, [visionMission]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('vision-missions.update', { id: visionMission.id }), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold tracking-tight">Edit Vision/Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title *</Label>
                                    <Input
                                        id="title"
                                        placeholder="e.g., Vision, Mission, Core Values"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className={errors.title ? 'border-red-500' : ''}
                                    />
                                    {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="content">Content *</Label>
                                    <QuillWrapper
                                        value={data.content}
                                        onChange={(value) => setData('content', value)}
                                        placeholder="Write detailed content about vission/mission..."
                                    />
                                    {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
                                </div>

                                <div className="flex items-center justify-end gap-4">
                                    <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Saving...' : 'Save Vision/Mission'}
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
