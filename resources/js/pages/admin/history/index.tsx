import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, History, PageProps } from '@/types';
import { Link, router } from '@inertiajs/react';
import { Clock, Edit, Plus, Trash2 } from 'lucide-react';

interface HistoryIndexProps extends PageProps {
    histories: History[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
    {
        title: 'Struktur Organisasi',
        href: '/struktur-organisasi',
    },
];

const historiesDummyData = [
    {
        id: 1,
        year: 2020,
        photo_url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
        description:
            'Successfully transitioned to digital learning during the pandemic, ensuring continuity of education for all students with innovative online learning solutions.',
        created_at: '2024-01-05T08:00:00.000Z',
    },
    {
        id: 2,
        year: 2015,
        photo_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
        description:
            'Achieved A-grade accreditation from the National Education Board, recognizing our commitment to educational excellence and quality standards.',
        created_at: '2024-01-05T08:30:00.000Z',
    },
    {
        id: 3,
        year: 2010,
        photo_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
        description:
            'Establishment of Information Technology department with state-of-the-art computer laboratories to meet growing demand for tech professionals.',
        created_at: '2024-01-05T09:00:00.000Z',
    },
    {
        id: 4,
        year: 2000,
        photo_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
        description:
            'Construction of new academic building completed, expanding our capacity to serve more students with modern facilities and learning spaces.',
        created_at: '2024-01-05T09:30:00.000Z',
    },
    {
        id: 5,
        year: 1985,
        photo_url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop',
        description:
            'School was founded with the vision to provide quality vocational education to the community and prepare students for successful careers.',
        created_at: '2024-01-05T10:00:00.000Z',
    },
];

export default function HistoryIndex({ histories = historiesDummyData }: HistoryIndexProps) {
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<History>({
        routeName: 'history.destroy',
        getParams: (item) => ({ id: item.id }),
    });
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">School History</h1>
                            <p className="text-muted-foreground">Manage historical milestones and achievements</p>
                        </div>
                        <Button asChild>
                            <Link href={route('histories.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add History
                            </Link>
                        </Button>
                    </div>

                    {histories.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <Clock className="mb-4 h-12 w-12 text-muted-foreground" />
                                <h3 className="mb-2 text-lg font-semibold">No history records</h3>
                                <p className="mb-6 text-center text-muted-foreground">Start building your school's historical timeline.</p>
                                <Button onClick={() => (window.location.href = '/histories/create')}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add History
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {histories.map((item) => (
                                <Card key={item.id}>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-2xl font-bold text-primary">{item.year}</CardTitle>
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
                                        {item.photo && (
                                            <img src={item.photo} alt={`History ${item.year}`} className="mb-4 h-48 w-full rounded-md object-cover" />
                                        )}
                                        <p className="text-sm text-muted-foreground">
                                            {item.description && item.description.length > 150
                                                ? `${item.description.substring(0, 150)}...`
                                                : item.description || 'No description available'}
                                        </p>
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
