import DangerButton from '@/components/DangerButton';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Building2, Calendar, CheckCircle, Download, Mail, MapPin, Phone, User, XCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface Company {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    website: string | null;
    description: string | null;
    logo_url: string | null;
    status: string;
}

interface Partnership {
    id: number;
    contact_person: string;
    contact_email: string;
    contact_phone: string;
    proposal_description: string;
    cover_letter: string | null;
    proposal_file_url: string | null;
    partnership_type: string;
    proposed_start_date: string | null;
    proposed_end_date: string | null;
    status: string;
    created_at: string;
    approved_at: string | null;
    rejection_reason: string | null;
    admin_notes: string | null;
    company: Company;
    approver: { name: string } | null;
}

interface Props {
    auth: any;
    partnership: Partnership;
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

export default function ShowPartnership({ auth, partnership }: Props) {
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);

    const approveForm = useForm({
        admin_notes: '',
    });

    const rejectForm = useForm({
        rejection_reason: '',
        admin_notes: '',
    });

    const handleApprove: FormEventHandler = (e) => {
        e.preventDefault();
        approveForm.post(route('admin.partnerships.approve', { id: partnership.id }), {
            onSuccess: () => {
                setShowApproveModal(false);
                approveForm.reset();
            },
        });
    };

    const handleReject: FormEventHandler = (e) => {
        e.preventDefault();
        rejectForm.post(route('admin.partnerships.reject', { id: partnership.id }), {
            onSuccess: () => {
                setShowRejectModal(false);
                rejectForm.reset();
            },
        });
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <AppLayout>
            <Head title={`Partnership - ${partnership.company.name}`} />
            <div className="flex items-center gap-4">
                <Link href={route('admin.partnerships.index')} className="text-gray-600 hover:text-gray-900">
                    <ArrowLeft className="h-5 w-5" />
                </Link>
                <h2 className="text-xl leading-tight font-semibold text-gray-800">Partnership Details</h2>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    {/* Status Banner */}
                    <div className={`rounded-lg p-4 ${statusColors[partnership.status]}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                {partnership.status === 'approved' && <CheckCircle className="h-5 w-5" />}
                                {partnership.status === 'rejected' && <XCircle className="h-5 w-5" />}
                                <span className="font-semibold">
                                    Status: {partnership.status.charAt(0).toUpperCase() + partnership.status.slice(1)}
                                </span>
                            </div>
                            {partnership.status === 'pending' && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setShowApproveModal(true)}
                                        className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
                                    >
                                        <CheckCircle className="h-4 w-4" />
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => setShowRejectModal(true)}
                                        className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                                    >
                                        <XCircle className="h-4 w-4" />
                                        Reject
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Company Information */}
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">Company Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        {partnership.company.logo_url ? (
                                            <img
                                                src={partnership.company.logo_url}
                                                alt={partnership.company.name}
                                                className="h-16 w-16 rounded-lg object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                                <Building2 className="h-8 w-8 text-white" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-gray-900">{partnership.company.name}</h4>
                                            <span
                                                className={`mt-1 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${statusColors[partnership.company.status]}`}
                                            >
                                                Company {partnership.company.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
                                        <div className="flex items-start gap-2">
                                            <Mail className="mt-0.5 h-5 w-5 text-gray-400" />
                                            <div>
                                                <div className="text-sm text-gray-500">Email</div>
                                                <div className="text-gray-900">{partnership.company.email}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Phone className="mt-0.5 h-5 w-5 text-gray-400" />
                                            <div>
                                                <div className="text-sm text-gray-500">Phone</div>
                                                <div className="text-gray-900">{partnership.company.phone}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-2 md:col-span-2">
                                            <MapPin className="mt-0.5 h-5 w-5 text-gray-400" />
                                            <div>
                                                <div className="text-sm text-gray-500">Address</div>
                                                <div className="text-gray-900">{partnership.company.address}</div>
                                            </div>
                                        </div>

                                        {partnership.company.website && (
                                            <div className="md:col-span-2">
                                                <div className="mb-1 text-sm text-gray-500">Website</div>
                                                <a
                                                    href={partnership.company.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-600 hover:text-indigo-700"
                                                >
                                                    {partnership.company.website}
                                                </a>
                                            </div>
                                        )}

                                        {partnership.company.description && (
                                            <div className="md:col-span-2">
                                                <div className="mb-1 text-sm text-gray-500">Description</div>
                                                <p className="whitespace-pre-line text-gray-900">{partnership.company.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Person */}
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Person</h3>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="flex items-start gap-2">
                                        <User className="mt-0.5 h-5 w-5 text-gray-400" />
                                        <div>
                                            <div className="text-sm text-gray-500">Name</div>
                                            <div className="text-gray-900">{partnership.contact_person}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <Mail className="mt-0.5 h-5 w-5 text-gray-400" />
                                        <div>
                                            <div className="text-sm text-gray-500">Email</div>
                                            <div className="text-gray-900">{partnership.contact_email}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <Phone className="mt-0.5 h-5 w-5 text-gray-400" />
                                        <div>
                                            <div className="text-sm text-gray-500">Phone</div>
                                            <div className="text-gray-900">{partnership.contact_phone}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Proposal Details */}
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">Proposal Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="mb-1 text-sm text-gray-500">Partnership Type</div>
                                        <div className="font-medium text-gray-900">{partnershipTypeLabels[partnership.partnership_type]}</div>
                                    </div>

                                    {(partnership.proposed_start_date || partnership.proposed_end_date) && (
                                        <div className="flex items-center gap-4">
                                            {partnership.proposed_start_date && (
                                                <div className="flex items-start gap-2">
                                                    <Calendar className="mt-0.5 h-5 w-5 text-gray-400" />
                                                    <div>
                                                        <div className="text-sm text-gray-500">Start Date</div>
                                                        <div className="text-gray-900">{formatDate(partnership.proposed_start_date)}</div>
                                                    </div>
                                                </div>
                                            )}

                                            {partnership.proposed_end_date && (
                                                <div className="flex items-start gap-2">
                                                    <Calendar className="mt-0.5 h-5 w-5 text-gray-400" />
                                                    <div>
                                                        <div className="text-sm text-gray-500">End Date</div>
                                                        <div className="text-gray-900">{formatDate(partnership.proposed_end_date)}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div>
                                        <div className="mb-1 text-sm text-gray-500">Proposal Description</div>
                                        <p className="whitespace-pre-line text-gray-900">{partnership.proposal_description}</p>
                                    </div>

                                    {partnership.cover_letter && (
                                        <div>
                                            <div className="mb-1 text-sm text-gray-500">Cover Letter</div>
                                            <p className="whitespace-pre-line text-gray-900">{partnership.cover_letter}</p>
                                        </div>
                                    )}

                                    {partnership.proposal_file_url && (
                                        <div>
                                            <div className="mb-2 text-sm text-gray-500">Proposal Document</div>
                                            <a
                                                href={partnership.proposal_file_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-700 transition hover:bg-gray-200"
                                            >
                                                <Download className="h-4 w-4" />
                                                Download Proposal
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Admin Notes & Rejection Reason */}
                            {(partnership.admin_notes || partnership.rejection_reason) && (
                                <div className="rounded-lg bg-white p-6 shadow-sm">
                                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Admin Notes</h3>
                                    {partnership.rejection_reason && (
                                        <div className="mb-4">
                                            <div className="mb-1 text-sm text-gray-500">Rejection Reason</div>
                                            <p className="whitespace-pre-line text-red-900">{partnership.rejection_reason}</p>
                                        </div>
                                    )}
                                    {partnership.admin_notes && (
                                        <div>
                                            <div className="mb-1 text-sm text-gray-500">Notes</div>
                                            <p className="whitespace-pre-line text-gray-900">{partnership.admin_notes}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Timeline */}
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">Timeline</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <div className="text-gray-500">Submitted</div>
                                        <div className="font-medium text-gray-900">{formatDate(partnership.created_at)}</div>
                                    </div>

                                    {partnership.approved_at && (
                                        <div>
                                            <div className="text-gray-500">{partnership.status === 'approved' ? 'Approved' : 'Rejected'}</div>
                                            <div className="font-medium text-gray-900">{formatDate(partnership.approved_at)}</div>
                                            {partnership.approver && <div className="text-gray-600">by {partnership.approver.name}</div>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Approve Modal */}
            {showApproveModal && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
                    <div className="w-full max-w-md rounded-lg bg-white p-6">
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">Approve Partnership</h3>
                        <form onSubmit={handleApprove}>
                            <div className="mb-4">
                                <InputLabel htmlFor="admin_notes" value="Admin Notes (Optional)" />
                                <textarea
                                    id="admin_notes"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    rows={4}
                                    value={approveForm.data.admin_notes}
                                    onChange={(e) => approveForm.setData('admin_notes', e.target.value)}
                                    placeholder="Add any notes about this approval..."
                                />
                                <InputError message={approveForm.errors.admin_notes} className="mt-2" />
                            </div>

                            <p className="mb-4 text-sm text-gray-600">
                                This will approve the partnership and{' '}
                                {partnership.company.status === 'pending'
                                    ? 'create a company account with login credentials.'
                                    : 'notify the company.'}
                            </p>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowApproveModal(false)}
                                    className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                                    disabled={approveForm.processing}
                                >
                                    Cancel
                                </button>
                                <PrimaryButton disabled={approveForm.processing}>
                                    {approveForm.processing ? 'Approving...' : 'Confirm Approval'}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Reject Modal */}
            {showRejectModal && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
                    <div className="w-full max-w-md rounded-lg bg-white p-6">
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">Reject Partnership</h3>
                        <form onSubmit={handleReject}>
                            <div className="mb-4">
                                <InputLabel htmlFor="rejection_reason" value="Rejection Reason *" />
                                <textarea
                                    id="rejection_reason"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    rows={4}
                                    value={rejectForm.data.rejection_reason}
                                    onChange={(e) => rejectForm.setData('rejection_reason', e.target.value)}
                                    placeholder="Explain why this partnership is being rejected..."
                                    required
                                />
                                <InputError message={rejectForm.errors.rejection_reason} className="mt-2" />
                            </div>
                            <div className="mb-4">
                                <InputLabel htmlFor="reject_admin_notes" value="Admin Notes (Optional)" />
                                <textarea
                                    id="reject_admin_notes"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    rows={3}
                                    value={rejectForm.data.admin_notes}
                                    onChange={(e) => rejectForm.setData('admin_notes', e.target.value)}
                                    placeholder="Add any internal notes..."
                                />
                                <InputError message={rejectForm.errors.admin_notes} className="mt-2" />
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowRejectModal(false)}
                                    className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                                    disabled={rejectForm.processing}
                                >
                                    Cancel
                                </button>
                                <DangerButton disabled={rejectForm.processing}>
                                    {rejectForm.processing ? 'Rejecting...' : 'Confirm Rejection'}
                                </DangerButton>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
