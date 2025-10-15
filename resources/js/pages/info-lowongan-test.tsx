import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Briefcase, MapPin, Clock, Building2, Search } from 'lucide-react';

interface Company {
    id: number;
    name: string;
    logo_url: string | null;
}

interface JobPosting {
    id: number;
    title: string;
    description: string;
    job_type: string;
    work_location: string;
    location: string | null;
    salary_range: string | null;
    deadline: string;
    experience_level: string;
    company: Company;
}

interface Filters {
    search?: string;
    job_type?: string;
    work_location?: string;
    experience_level?: string;
}

interface Props {
    jobPostings: {
        data: JobPosting[];
        links: any[];
        current_page: number;
        last_page: number;
    };
    filters: Filters;
}

const jobTypeLabels: Record<string, string> = {
    full_time: 'Full Time',
    part_time: 'Part Time',
    internship: 'Internship',
    contract: 'Contract',
    freelance: 'Freelance',
};

const workLocationLabels: Record<string, string> = {
    onsite: 'On-site',
    remote: 'Remote',
    hybrid: 'Hybrid',
};

const experienceLevelLabels: Record<string, string> = {
    entry: 'Entry Level',
    mid: 'Mid Level',
    senior: 'Senior Level',
    lead: 'Lead/Manager',
};

export default function InfoLowongan({ jobPostings, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [jobType, setJobType] = useState(filters.job_type || 'all');
    const [workLocation, setWorkLocation] = useState(filters.work_location || 'all');
    const [experienceLevel, setExperienceLevel] = useState(filters.experience_level || 'all');

    const handleFilter = () => {
        router.get(route('info-lowongan.index'), {
            search: search || undefined,
            job_type: jobType !== 'all' ? jobType : undefined,
            work_location: workLocation !== 'all' ? workLocation : undefined,
            experience_level: experienceLevel !== 'all' ? experienceLevel : undefined,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getDaysRemaining = (deadline: string) => {
        const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
        return days;
    };

    return (
        <GuestLayout>
            <Head title="Info Lowongan Kerja" />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                        <h1 className="text-4xl font-bold mb-4">
                            Info Lowongan Kerja & Magang
                        </h1>
                        <p className="text-xl text-indigo-100">
                            Temukan peluang karir terbaik dari perusahaan mitra kami
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filters */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="lg:col-span-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Cari posisi atau perusahaan..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
                                    />
                                </div>
                            </div>

                            <select
                                className="border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                            >
                                <option value="all">Semua Tipe</option>
                                {Object.entries(jobTypeLabels).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>

                            <select
                                className="border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                value={workLocation}
                                onChange={(e) => setWorkLocation(e.target.value)}
                            >
                                <option value="all">Semua Lokasi</option>
                                {Object.entries(workLocationLabels).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>

                            <select
                                className="border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                value={experienceLevel}
                                onChange={(e) => setExperienceLevel(e.target.value)}
                            >
                                <option value="all">Semua Level</option>
                                {Object.entries(experienceLevelLabels).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleFilter}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                            >
                                Terapkan Filter
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-4">
                        <p className="text-gray-600">
                            Menampilkan <span className="font-semibold">{jobPostings.data.length}</span> lowongan
                        </p>
                    </div>

                    {/* Job Listings */}
                    {jobPostings.data.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                            <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Tidak ada lowongan ditemukan
                            </h3>
                            <p className="text-gray-500">
                                Coba ubah filter pencarian Anda
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {jobPostings.data.map((job) => {
                                const daysRemaining = getDaysRemaining(job.deadline);
                                const isUrgent = daysRemaining <= 7;

                                return (
                                    <Link
                                        key={job.id}
                                        href={route('info-lowongan.show', { id: job.id })}
                                        className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-6"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Company Logo */}
                                            <div className="flex-shrink-0">
                                                {job.company.logo_url ? (
                                                    <img
                                                        src={job.company.logo_url}
                                                        alt={job.company.name}
                                                        className="w-16 h-16 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                                        <Building2 className="w-8 h-8 text-white" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Job Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                            {job.title}
                                                        </h3>
                                                        <p className="text-gray-600 flex items-center gap-1 mb-3">
                                                            <Building2 className="w-4 h-4" />
                                                            {job.company.name}
                                                        </p>
                                                    </div>

                                                    {isUrgent && (
                                                        <span className="flex-shrink-0 px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                                            Segera Berakhir
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="text-gray-700 mb-4 line-clamp-2">
                                                    {job.description}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Briefcase className="w-4 h-4" />
                                                        {jobTypeLabels[job.job_type]}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {workLocationLabels[job.work_location]}
                                                        {job.location && ` • ${job.location}`}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        Deadline: {formatDate(job.deadline)}
                                                    </span>
                                                </div>

                                                {job.salary_range && (
                                                    <div className="mt-3">
                                                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                                            {job.salary_range}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {/* Pagination */}
                    {jobPostings.last_page > 1 && (
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center gap-2">
                                {jobPostings.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`px-4 py-2 rounded-md ${
                                            link.active
                                                ? 'bg-indigo-600 text-white'
                                                : link.url
                                                ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}