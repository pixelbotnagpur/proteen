'use client';

import {
  BarChart2,
  Bell,
  CreditCard,
  HeartPulse,
  LayoutDashboard,
  PanelLeft,
  Users,
  Dumbbell,
  Camera,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/members', icon: Users, label: 'Members' },
  { href: '/dashboard/attendance', icon: BarChart2, label: 'Attendance' },
  { href: '/dashboard/payments', icon: CreditCard, label: 'Payments' },
  {
    href: '/dashboard/subscriptions',
    icon: HeartPulse,
    label: 'Subscriptions',
  },
  {
    href: '/dashboard/notifications',
    icon: Bell,
    label: 'Notifications',
  },
  {
    href: '/dashboard/workouts',
    icon: Dumbbell,
    label: 'AI Workouts',
  },
  {
    href: '/dashboard/live-checkin',
    icon: Camera,
    label: 'Live Check-in',
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem className="border-y border-sidebar-border py-2 my-2">
          <SidebarMenuButton onClick={toggleSidebar} tooltip="Collapse Menu">
            <PanelLeft />
            <span>Collapse</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              tooltip={item.label}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
