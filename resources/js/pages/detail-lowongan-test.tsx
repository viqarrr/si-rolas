import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { 
    Briefcase, MapPin, Clock, Building2, DollarSign, 
    Users, Calendar, ExternalLink, Mail, ArrowLeft 
} from 'lucide-react';

interface Company {
    id: number;
    name: string;
    logo_url: string | null;
    description: string | null;
    website: string | null;
}

interface JobPosting {
    id: number;
    title: string;
    description: string;
    requirements: string;
    job_type: string;
    work_location: string;
    location: string | null;
    salary_range: string | null;
    deadline: string;
    positions_available: number;
    skills_required: string[] | null;
    experience_level: string;
    apply_method: string;
    apply_link_or_email: string;
    views_count: number;
    company: Company;
}

interface Props {
    jobPosting: JobPosting;
    relatedJobs: JobPosting[];
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

export default function ShowJobPosting({ jobPosting, relatedJobs }: Props) {
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

    const daysRemaining = getDaysRemaining(jobPosting.deadline);
    const isUrgent = daysRemaining <= 7;

    const handleApply = () => {
        if (jobPosting.apply_method === 'link') {
            window.open(jobPosting.apply_link_or_email, '_blank');
        } else {
            const subject = `Application for ${jobPosting.title}`;
            const body = `Dear ${jobPosting.company.name} Team,\n\nI am interested in applying for the ${jobPosting.title} position.\n\nBest regards,`;
            window.location.href = `mailto:${jobPosting.apply_link_or_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    };

    return (
        <GuestLayout>
            <Head title={jobPosting.title} />

            <div className="min-h-screen bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    {/* Back Button */}
                    <Link
                        href={route('info-lowongan.index')}
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Daftar Lowongan
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Job Header */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex items-start gap-4 mb-6">
                                    {jobPosting.company.logo_url ? (
                                        <img
                                            src={jobPosting.company.logo_url}
                                            alt={jobPosting.company.name}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                    ) : (
                                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                            <Building2 className="w-10 h-10 text-white" />
                                        </div>
                                    )}

                                    <div className="flex-1">
                                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                            {jobPosting.title}
                                        </h1>
                                        <p className="text-lg text-gray-600 flex items-center gap-2 mb-3">
                                            <Building2 className="w-5 h-5" />
                                            {jobPosting.company.name}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                                                {jobTypeLabels[jobPosting.job_type]}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                                                {experienceLevelLabels[jobPosting.experience_level]}
                                            </span>
                                            {isUrgent && (
                                                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                                                    Segera Berakhir ({daysRemaining} hari)
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="w-5 h-5" />
                                        <div>
                                            <div className="text-sm text-gray-500">Lokasi</div>
                                            <div className="font-medium">
                                                {workLocationLabels[jobPosting.work_location]}
                                                {jobPosting.location && ` • ${jobPosting.location}`}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-5 h-5" />
                                        <div>
                                            <div className="text-sm text-gray-500">Deadline</div>
                                            <div className="font-medium">{formatDate(jobPosting.deadline)}</div>
                                        </div>
                                    </div>

                                    {jobPosting.salary_range && (
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <DollarSign className="w-5 h-5" />
                                            <div>
                                                <div className="text-sm text-gray-500">Gaji</div>
                                                <div className="font-medium">{jobPosting.salary_range}</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5" />
                                        <div>
                                            <div className="text-sm text-gray-500">Posisi Tersedia</div>
                                            <div className="font-medium">{jobPosting.positions_available} posisi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Job Description */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Deskripsi Pekerjaan
                                </h2>
                                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                                    {jobPosting.description}
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Persyaratan
                                </h2>
                                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                                    {jobPosting.requirements}
                                </div>
                            </div>

                            {/* Skills Required */}
                            {jobPosting.skills_required && jobPosting.skills_required.length > 0 && (
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        Keahlian yang Dibutuhkan
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {jobPosting.skills_required.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Company Info */}
                            {jobPosting.company.description && (
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        Tentang Perusahaan
                                    </h2>
                                    <p className="text-gray-700 whitespace-pre-line">
                                        {jobPosting.company.description}
                                    </p>
                                    {jobPosting.company.website && (
                                        <a
                                            href={jobPosting.company.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mt-4"
                                        >
                                            Kunjungi Website
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Apply Button */}
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                <button
                                    onClick={handleApply}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-lg"
                                >
                                    {jobPosting.apply_method === 'link' ? (
                                        <>
                                            <ExternalLink className="w-5 h-5" />
                                            Lamar Sekarang
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="w-5 h-5" />
                                            Kirim Lamaran via Email
                                        </>
                                    )}
                                </button>

                                <p className="text-sm text-gray-500 text-center mt-4">
                                    {daysRemaining > 0 
                                        ? `${daysRemaining} hari lagi untuk melamar`
                                        : 'Lowongan akan segera ditutup'
                                    }
                                </p>
                            </div>

                            {/* Related Jobs */}
                            {relatedJobs.length > 0 && (
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        Lowongan Serupa
                                    </h3>
                                    <div className="space-y-4">
                                        {relatedJobs.map((job) => (
                                            <Link
                                                key={job.id}
                                                href={route('info-lowongan.show', { id: job.id })}
                                                className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-500 hover:shadow-sm transition"
                                            >
                                                <h4 className="font-medium text-gray-900 mb-1">
                                                    {job.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    {job.company.name}
                                                </p>
                                                <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                                                    {jobTypeLabels[job.job_type]}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}