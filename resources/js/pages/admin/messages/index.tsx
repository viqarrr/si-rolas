import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilters } from '@/hooks/use-filters';
import AppLayout from '@/layouts/app-layout';
import { InquiryStatus, type Inquiry } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, Mail, MailCheck, Search } from 'lucide-react';
import React from 'react';

interface InquiriesIndexProps {
    inquiries: {
        data: Inquiry[];
        links: any;
        meta: any;
    };
    filters: {
        search?: string;
        status?: string;
    };
}

const inquiriesDummy = {
    data: [],
    links: [],
    meta: [],
};

const inquiriesFilterDummy = {
    search: '',
    status: '',
};

const InquiriesIndex: React.FC<InquiriesIndexProps> = ({ inquiries = inquiriesDummy, filters = inquiriesFilterDummy }) => {
    const { filtersState, handleFilter, search, status } = useFilters({
        initialFilters: {
            search: filters.search || '',
            status: filters.status || 'all',
        },
        routeName: 'inquiries.index',
    });

    const toggleReadStatus = (id: number, currentStatus: InquiryStatus) => {
        router.patch(`/inquiries/${id}`, {
            status: currentStatus === InquiryStatus.READ ? InquiryStatus.ARCHIVED : InquiryStatus.READ,
        });
    };

    return (
        <AppLayout>
            <Head title="Contacts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Inquiries</h1>
                            <p className="text-muted-foreground">Manage contact form submissions</p>
                        </div>
                    </div>

                    <Card>
                        <CardContent>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search inquiries..."
                                        value={search}
                                        onChange={(e) => handleFilter('search', e.target.value)}
                                        className="pl-9"
                                    />
                                </div>
                                <Select value={status} onValueChange={(value) => handleFilter('status', value)}>
                                    <SelectTrigger className="w-40">
                                        <SelectValue placeholder="All Status" />
                                    </SelectTrigger>
                                    <SelectContent defaultValue={'all'}>
                                        <SelectItem value="all">All Status</SelectItem>
                                        <SelectItem value="read">Read</SelectItem>
                                        <SelectItem value="unread">Unread</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Contact</TableHead>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Message Preview</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Received</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {inquiries.data.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center text-muted-foreground">
                                                No contact submissions found
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        inquiries.data.map((inquiry) => (
                                            <TableRow key={inquiry.id} className={inquiry.status !== InquiryStatus.READ ? 'bg-muted/30' : ''}>
                                                <TableCell>
                                                    <div>
                                                        <div className="font-medium">{inquiry.name}</div>
                                                        <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-medium">{inquiry.subject}</TableCell>
                                                <TableCell className="max-w-xs">
                                                    <p className="truncate text-sm">{inquiry.message}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant={inquiry.status == InquiryStatus.READ ? 'default' : 'secondary'}>
                                                        {inquiry.status == InquiryStatus.READ ? 'Read' : 'Unread'}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-sm text-muted-foreground">
                                                    {new Date(inquiry.created_at).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => toggleReadStatus(inquiry.id, inquiry.status)}
                                                            title={inquiry.status == InquiryStatus.READ ? 'Mark as unread' : 'Mark as read'}
                                                        >
                                                            {inquiry.status == InquiryStatus.READ ? (
                                                                <Mail className="h-4 w-4" />
                                                            ) : (
                                                                <MailCheck className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                        <Button variant="ghost" size="sm" asChild>
                                                            <Link href={route('inquiries.show', { id: inquiry.id })}>
                                                                <Eye className="h-4 w-4" />
                                                            </Link>
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
                </div>
            </div>
        </AppLayout>
    );
};

export default InquiriesIndex;
