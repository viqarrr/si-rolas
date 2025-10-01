import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, PageProps, VisionMission } from '@/types';
import { Link, router } from '@inertiajs/react';
import { Edit, Eye, Plus, Trash2 } from 'lucide-react';

interface Props extends PageProps {
    visionMissions: VisionMission[];
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
];

const visionMissionsDummyData: VisionMission[] = [
    {
        id: 1,
        title: 'Our Vision',
        content:
            'To become a leading vocational school that produces skilled, innovative, and character-driven graduates who are ready to compete in the global job market and contribute to sustainable national development.',
        created_at: '2024-01-15T08:00:00.000Z',
        updated_at: '2024-01-15T08:00:00.000Z',
    },
    {
        id: 2,
        title: 'Our Mission',
        content:
            "1. Provide quality vocational education that aligns with industry standards and technological developments.<br>2. Develop students' technical skills, creativity, and entrepreneurial spirit.<br>3. Foster character building based on noble values and national culture.<br>4. Build partnerships with industry, government, and educational institutions.<br>5. Continuously improve facilities, infrastructure, and teaching quality.",
        created_at: '2024-01-15T08:30:00.000Z',
        updated_at: '2024-01-15T08:30:00.000Z',
    },
];

export default function VissionMissionsIndex({ visionMissions = visionMissionsDummyData }: Props) {
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<VisionMission>({
        routeName: 'vision-missions.destroy',
        getParams: (item) => ({ id: item.id }),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Vision & Mission Ta iki</h1>
                            <p className="text-muted-foreground">Manage your organization's vision and mission statements</p>
                        </div>
                        <Button asChild>
                            <Link href={route('vission-missions.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Vission or Missions
                            </Link>
                        </Button>
                    </div>

                    {visionMissions.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <Eye className="mb-4 h-12 w-12 text-muted-foreground" />
                                <h3 className="mb-2 text-lg font-semibold">No vision or mission statements</h3>
                                <p className="mb-6 text-center text-muted-foreground">
                                    Get started by creating your first vision or mission statement.
                                </p>
                                <Button onClick={() => router.visit(route('vision-missions.create'))}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add New
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6">
                            {visionMissions.map((item) => (
                                <Card key={item.id}>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                                <CardDescription>Created {new Date(item.created_at).toLocaleDateString()}</CardDescription>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => router.visit(route('vision-missions.edit', { id: item.id }))}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="sm" onClick={() => setDeleteItem(item)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div
                                            className="prose max-w-none text-sm text-muted-foreground"
                                            dangerouslySetInnerHTML={{
                                                __html: item.content.length > 300 ? item.content.substring(0, 300) + '...' : item.content,
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                    <DeleteDialog />
                </div>
            </div>
        </AppLayout>
    );
}
