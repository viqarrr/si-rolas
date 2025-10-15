import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import GuestLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function CreateJobPosting() {
    const { data, setData, post, processing, errors } = useForm({
        company_name: '',
        email: '',
        phone: '',
        address: '',
        website: '',
        description: '',
        logo: null as File | null,
        title: '',
        job_description: '',
        requirements: '',
        job_type: 'full_time',
        work_location: 'onsite',
        location: '',
        salary_range: '',
        apply_method: 'link',
        apply_link_or_email: '',
        deadline: '',
        positions_available: 1,
        skills_required: [] as string[],
        experience_level: 'entry',
    });

    const [skillInput, setSkillInput] = useState('');

    const addSkill = () => {
        if (skillInput.trim() && !data.skills_required.includes(skillInput.trim())) {
            setData('skills_required', [...data.skills_required, skillInput.trim()]);
            setSkillInput('');
        }
    };

    const removeSkill = (skill: string) => {
        setData(
            'skills_required',
            data.skills_required.filter((s) => s !== skill),
        );
    };

    const submit: FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('job-postings.store'));
    };

    return (
        <GuestLayout>
            <Head title="Submit Job Posting" />

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Submit Job Posting</h1>
                        <p className="mt-2 text-gray-600">Post your job opening and reach talented students and alumni.</p>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <form onSubmit={submit} className="space-y-8 p-6">
                            {/* Company Information */}
                            <div>
                                <h2 className="mb-4 text-xl font-semibold text-gray-900">Company Information</h2>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <InputLabel htmlFor="company_name" value="Company Name *" />
                                        <TextInput
                                            id="company_name"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.company_name}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('company_name', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.company_name} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="email" value="Company Email *" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full"
                                            value={data.email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('email', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="phone" value="Company Phone *" />
                                        <TextInput
                                            id="phone"
                                            type="tel"
                                            className="mt-1 block w-full"
                                            value={data.phone}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('phone', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.phone} className="mt-2" />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <InputLabel htmlFor="address" value="Company Address *" />
                                        <textarea
                                            id="address"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            rows={3}
                                            value={data.address}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('address', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.address} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="website" value="Company Website" />
                                        <TextInput
                                            id="website"
                                            type="url"
                                            className="mt-1 block w-full"
                                            value={data.website}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('website', e.target.value)}
                                            placeholder="https://example.com"
                                        />
                                        <InputError message={errors.website} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="logo" value="Company Logo" />
                                        <input
                                            id="logo"
                                            type="file"
                                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
                                            accept="image/*"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('logo', e.target.files?.[0] || null)}
                                        />
                                        <p className="mt-1 text-sm text-gray-500">Max 5MB (JPG, PNG, GIF, WebP)</p>
                                        <InputError message={errors.logo} className="mt-2" />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <InputLabel htmlFor="description" value="Company Description" />
                                        <textarea
                                            id="description"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            rows={4}
                                            value={data.description}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                        />
                                        <InputError message={errors.description} className="mt-2" />
                                    </div>
                                </div>
                            </div>

                            {/* Job Details */}
                            <div>
                                <h2 className="mb-4 text-xl font-semibold text-gray-900">Job Details</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <InputLabel htmlFor="title" value="Job Title *" />
                                        <TextInput
                                            id="title"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.title}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('title', e.target.value)}
                                            placeholder="e.g. Senior Software Engineer"
                                            required
                                        />
                                        <InputError message={errors.title} className="mt-2" />
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <InputLabel htmlFor="job_type" value="Job Type *" />
                                            <select
                                                id="job_type"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                value={data.job_type}
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData('job_type', e.target.value)}
                                                required
                                            >
                                                <option value="full_time">Full Time</option>
                                                <option value="part_time">Part Time</option>
                                                <option value="internship">Internship</option>
                                                <option value="contract">Contract</option>
                                                <option value="freelance">Freelance</option>
                                            </select>
                                            <InputError message={errors.job_type} className="mt-2" />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="experience_level" value="Experience Level *" />
                                            <select
                                                id="experience_level"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                value={data.experience_level}
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData('experience_level', e.target.value)}
                                                required
                                            >
                                                <option value="entry">Entry Level</option>
                                                <option value="mid">Mid Level</option>
                                                <option value="senior">Senior Level</option>
                                                <option value="lead">Lead/Manager</option>
                                            </select>
                                            <InputError message={errors.experience_level} className="mt-2" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <InputLabel htmlFor="work_location" value="Work Location *" />
                                            <select
                                                id="work_location"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                value={data.work_location}
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData('work_location', e.target.value)}
                                                required
                                            >
                                                <option value="onsite">On-site</option>
                                                <option value="remote">Remote</option>
                                                <option value="hybrid">Hybrid</option>
                                            </select>
                                            <InputError message={errors.work_location} className="mt-2" />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="location" value="Location" />
                                            <TextInput
                                                id="location"
                                                type="text"
                                                className="mt-1 block w-full"
                                                value={data.location}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('location', e.target.value)}
                                                placeholder="e.g. Jakarta, Indonesia"
                                            />
                                            <InputError message={errors.location} className="mt-2" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <InputLabel htmlFor="salary_range" value="Salary Range" />
                                            <TextInput
                                                id="salary_range"
                                                type="text"
                                                className="mt-1 block w-full"
                                                value={data.salary_range}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('salary_range', e.target.value)}
                                                placeholder="e.g. 5-10 million IDR"
                                            />
                                            <InputError message={errors.salary_range} className="mt-2" />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="positions_available" value="Positions Available" />
                                            <TextInput
                                                id="positions_available"
                                                type="number"
                                                className="mt-1 block w-full"
                                                value={data.positions_available}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData('positions_available', parseInt(e.target.value))
                                                }
                                                min="1"
                                            />
                                            <InputError message={errors.positions_available} className="mt-2" />
                                        </div>
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="job_description" value="Job Description *" />
                                        <textarea
                                            id="job_description"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            rows={6}
                                            value={data.job_description}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('job_description', e.target.value)}
                                            placeholder="Describe the job responsibilities and what you're looking for..."
                                            required
                                        />
                                        <InputError message={errors.job_description} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="requirements" value="Requirements *" />
                                        <textarea
                                            id="requirements"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            rows={6}
                                            value={data.requirements}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('requirements', e.target.value)}
                                            placeholder="List the qualifications and requirements..."
                                            required
                                        />
                                        <InputError message={errors.requirements} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="skills_required" value="Required Skills" />
                                        <div className="mt-1 flex gap-2">
                                            <TextInput
                                                id="skills_required"
                                                type="text"
                                                className="block w-full"
                                                value={skillInput}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSkillInput(e.target.value)}
                                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        addSkill();
                                                    }
                                                }}
                                                placeholder="Add a skill and press Enter"
                                            />
                                            <button
                                                type="button"
                                                onClick={addSkill}
                                                className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300"
                                            >
                                                Add
                                            </button>
                                        </div>
                                        {data.skills_required.length > 0 && (
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {data.skills_required.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800"
                                                    >
                                                        {skill}
                                                        <button type="button" onClick={() => removeSkill(skill)} className="hover:text-indigo-900">
                                                            ×
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <InputError message={errors.skills_required} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="deadline" value="Application Deadline *" />
                                        <TextInput
                                            id="deadline"
                                            type="date"
                                            className="mt-1 block w-full"
                                            value={data.deadline}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('deadline', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.deadline} className="mt-2" />
                                    </div>
                                </div>
                            </div>

                            {/* Application Method */}
                            <div>
                                <h2 className="mb-4 text-xl font-semibold text-gray-900">How to Apply</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <InputLabel htmlFor="apply_method" value="Application Method *" />
                                        <select
                                            id="apply_method"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            value={data.apply_method}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData('apply_method', e.target.value)}
                                            required
                                        >
                                            <option value="link">External Application Link</option>
                                            <option value="email">Email Application</option>
                                        </select>
                                        <InputError message={errors.apply_method} className="mt-2" />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="apply_link_or_email"
                                            value={data.apply_method === 'link' ? 'Application Link *' : 'Application Email *'}
                                        />
                                        <TextInput
                                            id="apply_link_or_email"
                                            type={data.apply_method === 'link' ? 'url' : 'email'}
                                            className="mt-1 block w-full"
                                            value={data.apply_link_or_email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('apply_link_or_email', e.target.value)}
                                            placeholder={data.apply_method === 'link' ? 'https://careers.example.com/apply' : 'careers@example.com'}
                                            required
                                        />
                                        <InputError message={errors.apply_link_or_email} className="mt-2" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-4">
                                <PrimaryButton disabled={processing}>{processing ? 'Submitting...' : 'Submit Job Posting'}</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
