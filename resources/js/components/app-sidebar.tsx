import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Clock, Eye, FileText, Folder, GraduationCap, Home, MessageSquare, Phone, Users, Wrench } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    { title: 'Dashboard', href: dashboard(), icon: Home },
    { title: 'Struktur Organisasi', href: '/struktur-organisasi', icon: Users },
    { title: 'Visi Misi', href: '/visi-misi', icon: Eye },
    { title: 'Sejarah', href: '/sejarah', icon: Clock },
    { title: 'Jurusan', href: '/jurusan', icon: GraduationCap },
    { title: 'Karya', href: '/karya', icon: Wrench },
    { title: 'Postingan', href: '/postingan', icon: FileText },
    { title: 'Kontak', href: '/kontak', icon: Phone },
    { title: 'Pesan', href: '/pesan', icon: MessageSquare },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
