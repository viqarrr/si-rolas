import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export enum PostType {
    NEWS = 'news',
    ANNOUNCEMENT = 'announcement',
    ACHIEVEMENT = 'achievement',
}

export enum PostStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
}

export enum ContactType {
    ADDRESS = 'address',
    EMAIL = 'email',
    PHONE = 'phone',
    WHATSAPP = 'whatsapp',
    INSTAGRAM = 'instagram',
    YOUTUBE = 'youtube',
}

export enum InquiryStatus {
    NEW = 'new',
    READ = 'read',
    ARCHIVED = 'archived',
}

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface NestedItemBase {
    id: number;
    _destroy?: boolean;
}

export interface MajorNestedItem extends NestedItemBase {
    major_id?: number;
    title: string;
    description: string;
    image?: File | string | null;
}

export interface WorkImage extends NestedItemBase {
    work_id?: number;
    image?: File | string | null;
}

export interface WorkLink extends NestedItemBase {
    work_id?: number;
    url: string;
}

export interface VisionMission {
    id: number;
    title: string;
    content: string;
}

export interface OrganizationalStructure {
    id: number;
    name: string;
    position: string;
    photo?: File | string | null;
}

export interface History {
    id: number;
    year: number;
    photo?: string;
    description?: string;
}

export interface Major {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    detail: string;
    logo: File | string | null;
    thumbnail: File | string | null;
    competencies: MajorNestedItem[];
    career_prospects: MajorNestedItem[];
}

export interface Work {
    id: number;
    major_id?: number;
    title: string;
    slug: string;
    description: string;
    year: number;
    images: WorkImage[];
    links: WorkLink[];
}

export interface Post {
    id: number;
    type: PostType;
    status: PostStatus;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnail?: File | string | null;
    published_at: Date;
    updated_at: Date;
}

export interface SchoolContact {
    id: number;
    type: ContactType;
    label: string;
    value: string;
    url: string;
}

export interface Inquiry {
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    status: InquiryStatus;
    created_at: Date;
}

export interface PageProps {
    auth: {
        user: User;
    };
    flash?: {
        success?: string;
        error?: string;
    };
}
