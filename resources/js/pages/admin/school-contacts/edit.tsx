import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ContactType, type SchoolContact } from '@/types';

type FormData = Omit<SchoolContact, 'id'>;

interface SchoolContactsCreateProps {
    contactData: SchoolContact;
}

const existingContact = 
    {
        id: 1,
        type: ContactType.ADDRESS,
        label: 'School Address',
        value: 'Jl. Pendidikan No. 123, Surabaya, Jawa Timur',
        url: 'Jl. Pendidikan No. 123, Surabaya, Jawa Timur',
    };

const SchoolContactsCreate: React.FC<SchoolContactsCreateProps> = ({ contactData = existingContact }) => {
    const { data, setData, put, processing, errors } = useForm<FormData>({
        type: contactData.type,
        label: contactData.label,
        value: contactData.value,
        url: contactData.url,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('school-contacts.store'));
    };

    const isTextareaType = (type: string) => {
        return type === 'address';
    };

    const getPlaceholder = (type: string) => {
        const placeholders = {
            address: 'Enter the school address...',
            email: 'school@example.com',
            phone: '+1 (555) 123-4567',
            whatsapp: '+1 (555) 123-4567',
            instagram: '@schoolname',
            youtube: 'School Channel Name',
        };
        return placeholders[type as keyof typeof placeholders] || 'Enter value...';
    };

    const getUrlPlaceholder = (type: string) => {
        const placeholders = {
            email: 'mailto:school@example.com',
            phone: 'tel:+15551234567',
            whatsapp: 'https://wa.me/15551234567',
            instagram: 'https://instagram.com/schoolname',
            youtube: 'https://youtube.com/@schoolname',
        };
        return placeholders[type as keyof typeof placeholders] || 'https://...';
    };

    const shouldShowUrlField = (type: string) => {
        return type && type !== 'address';
    };

    return (
        <AppLayout>
            <Head title="Create School Contact" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Create School Contact</CardTitle>
                                <CardDescription>Enter the details for the new contact</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="type">Type *</Label>
                                    <Select value={data.type} disabled>
                                    </Select>
                                    {errors.type && <p className="text-sm text-destructive">{errors.type}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="label">Label *</Label>
                                    <Input
                                        id="label"
                                        value={data.label}
                                        onChange={(e) => setData('label', e.target.value)}
                                        placeholder="e.g. Main Office, Official Email, etc."
                                    />
                                    {errors.label && <p className="text-sm text-destructive">{errors.label}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="value">Value *</Label>
                                    {isTextareaType(data.type) ? (
                                        <Textarea
                                            id="value"
                                            value={data.value}
                                            onChange={(e) => setData('value', e.target.value)}
                                            placeholder={getPlaceholder(data.type)}
                                            rows={3}
                                        />
                                    ) : (
                                        <Input
                                            id="value"
                                            value={data.value}
                                            onChange={(e) => setData('value', e.target.value)}
                                            placeholder={getPlaceholder(data.type)}
                                        />
                                    )}
                                    {errors.value && <p className="text-sm text-destructive">{errors.value}</p>}
                                </div>

                                {shouldShowUrlField(data.type) && (
                                    <div className="space-y-2">
                                        <Label htmlFor="url">URL</Label>
                                        <Input
                                            id="url"
                                            type="url"
                                            value={data.url}
                                            onChange={(e) => setData('url', e.target.value)}
                                            placeholder={getUrlPlaceholder(data.type)}
                                        />
                                        {errors.url && <p className="text-sm text-destructive">{errors.url}</p>}
                                        <p className="text-xs text-muted-foreground">Optional: Add a clickable link for this contact</p>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                <div className="flex w-full justify-end gap-2 pt-6">
                                    <Button type="button" variant="outline" asChild>
                                        <Link href={route("school-contacts.index")}>Cancel</Link>
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Updating...' : 'Update Contact'}
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};

export default SchoolContactsCreate;
