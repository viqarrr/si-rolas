import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Edit, Instagram, Mail, MapPin, MessageCircle, Phone, Plus, Trash2, Youtube } from 'lucide-react';
import { useDeleteConfirmation } from '@/hooks/use-delete-confirmation';
import AppLayout from '@/layouts/app-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactType, type SchoolContact } from '@/types';

interface SchoolContactsIndexProps {
    contacts: SchoolContact[];
}

export const dummyContacts: SchoolContact[] = [
    {
        id: 2,
        type: ContactType.EMAIL,
        label: 'Official Email',
        value: 'info@school.ac.id',
        url: 'mailto:info@school.ac.id',
    },
    {
        id: 3,
        type: ContactType.PHONE,
        label: 'Phone Number',
        value: '+62 31 5551234',
        url: '+62 31 5551234',
    },
    {
        id: 4,
        type: ContactType.WHATSAPP,
        label: 'WhatsApp',
        value: '+62 812 3456 7890',
        url: '+62 812 3456 7890',
    },
    {
        id: 5,
        type: ContactType.INSTAGRAM,
        label: 'Instagram',
        value: '@school_official',
        url: 'https://instagram.com/school_official',
    },
    {
        id: 6,
        type: ContactType.YOUTUBE,
        label: 'YouTube',
        value: 'School Channel',
        url: 'https://youtube.com/@schoolchannel',
    },
];

const SchoolContactsIndex: React.FC<SchoolContactsIndexProps> = ({ contacts = dummyContacts }) => {
    const { setDeleteItem, DeleteDialog } = useDeleteConfirmation<SchoolContact>({
        routeName: 'contacts.destroy',
        getParams: (item) => ({ id: item.id }),
    });

    const getTypeIcon = (type: string) => {
        const icons = {
            address: <MapPin className="h-4 w-4" />,
            email: <Mail className="h-4 w-4" />,
            phone: <Phone className="h-4 w-4" />,
            whatsapp: <MessageCircle className="h-4 w-4" />,
            instagram: <Instagram className="h-4 w-4" />,
            youtube: <Youtube className="h-4 w-4" />,
        };
        return icons[type as keyof typeof icons] || <Mail className="h-4 w-4" />;
    };

    return (
        <AppLayout>
            <Head title="School Contacts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">School Contacts</h1>
                            <p className="text-muted-foreground">Manage school contact information and social media</p>
                        </div>
                        <Button asChild>
                            <Link href={route('contacts.create')}>
                                <Plus className="mr-2 h-4 w-4" />
                                Create Contact
                            </Link>
                        </Button>
                    </div>
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Value</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {contacts.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} className="text-center text-muted-foreground">
                                                No contacts found. Create your first contact to get started.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        contacts.map((contact) => (
                                            <TableRow key={contact.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-2 font-medium">
                                                        {getTypeIcon(contact.type)}
                                                        {contact.label}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {contact.type === 'address' ? (
                                                        <span className="text-sm">{contact.value}</span>
                                                    ) : contact.url ? (
                                                        <a
                                                            href={contact.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-blue-600 underline hover:text-blue-800"
                                                        >
                                                            {contact.value}
                                                        </a>
                                                    ) : (
                                                        <span className="text-sm">{contact.value}</span>
                                                    )}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link
                                                                // href={route("school-contacts.edit", contact.id)}
                                                                href={'/kontak-sekolah/edit'}
                                                            >
                                                                <Edit className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                        <Button variant="ghost" size="sm" onClick={() => setDeleteItem(contact)}>
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <DeleteDialog />
                </div>
            </div>
        </AppLayout>
    );
};

export default SchoolContactsIndex;
