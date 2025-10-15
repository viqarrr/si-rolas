import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Filter, Search } from 'lucide-react';
import { useState } from 'react';

interface Company {
    id: number;
    name: string;
    email: string;
}

interface Partnership {
    id: number;
    contact_person: string;
    contact_email: string;
    partnership_type: string;
    status: string;
    created_at: string;
    company: Company;
}

interface Props {
    auth: any;
    partnerships: {
        data: Partnership[];
        links: any[];
        current_page: number;
        last_page: number;
    };
    filters: {
        status?: string;
        search?: string;
    };
}

const partnershipTypeLabels: Record<string, string> = {
    internship: 'Internship Program',
    job_placement: 'Job Placement',
    research: 'Research Collaboration',
    training: 'Training & Development',
    other: 'Other',
};

const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
};

export default function PartnershipsIndex({ auth, partnerships, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || 'all');

    const handleFilter = () => {
        router.get(
            route('admin.partnerships.index'),
            {
                search: search || undefined,
                status: status !== 'all' ? status : undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    return (
        <AppLayout>
          {/* header={<h2 className="text-xl leading-tight font-semibold text-gray-800">Partnership Management</h2>} */}
            <Head title="Partnership Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="md:col-span-2">
                                <div className="relative">
                                    <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by company name, email, or contact person..."
                                        className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-indigo-500 focus:ring-indigo-500"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
                                    />
                                </div>
                            </div>

                            <select
                                className="rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleFilter}
                                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
                            >
                                <Filter className="h-4 w-4" />
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* Partnerships Table */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                        {partnerships.data.length === 0 ? (
                            <div className="p-12 text-center">
                                <p className="text-gray-500">No partnerships found.</p>
                            </div>
                        ) : (
                            <>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Company
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Contact Person
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Type
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Submitted
                                                </th>
                                                <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {partnerships.data.map((partnership) => (
                                                <tr key={partnership.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4">
                                                        <div>
                                                            <div className="font-medium text-gray-900">{partnership.company.name}</div>
                                                            <div className="text-sm text-gray-500">{partnership.company.email}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div>
                                                            <div className="text-sm text-gray-900">{partnership.contact_person}</div>
                                                            <div className="text-sm text-gray-500">{partnership.contact_email}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">
                                                        {partnershipTypeLabels[partnership.partnership_type]}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span
                                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${statusColors[partnership.status]}`}
                                                        >
                                                            {partnership.status.charAt(0).toUpperCase() + partnership.status.slice(1)}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{formatDate(partnership.created_at)}</td>
                                                    <td className="px-6 py-4 text-right text-sm font-medium">
                                                        <Link
                                                            href={route('admin.partnerships.show', { id: partnership.id })}
                                                            className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                            View
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                {partnerships.last_page > 1 && (
                                    <div className="border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-1 justify-between sm:hidden">
                                                {partnerships.links.map(
                                                    (link, index) =>
                                                        link.url && (
                                                            <Link
                                                                key={index}
                                                                href={link.url}
                                                                className={`relative inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium ${
                                                                    link.active
                                                                        ? 'border-indigo-600 bg-indigo-600 text-white'
                                                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                                                }`}
                                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                                            />
                                                        ),
                                                )}
                                            </div>
                                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-700">
                                                        Showing page <span className="font-medium">{partnerships.current_page}</span> of{' '}
                                                        <span className="font-medium">{partnerships.last_page}</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm">
                                                        {partnerships.links.map((link, index) =>
                                                            link.url ? (
                                                                <Link
                                                                    key={index}
                                                                    href={link.url}
                                                                    className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                                                                        link.active
                                                                            ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600'
                                                                            : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                                                                    }`}
                                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                                />
                                                            ) : (
                                                                <span
                                                                    key={index}
                                                                    className="relative inline-flex cursor-not-allowed items-center border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
                                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                                />
                                                            ),
                                                        )}
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
