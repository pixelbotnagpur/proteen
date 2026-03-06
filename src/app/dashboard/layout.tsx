'use client';

import { DashboardNav } from '@/components/dashboard-nav';
import { Logo } from '@/components/icons';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const adminAvatar = PlaceHolderImages.find(img => img.id === 'admin-avatar');

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollWrapperRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollWrapperRef.current,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="h-svh overflow-hidden">
      <SidebarProvider>
        <Sidebar side="left" variant="inset" collapsible="icon">
          <SidebarHeader className="flex flex-row items-center gap-2 p-2">
            <Logo className="size-8 text-primary" />
            <h1 className="text-xl font-bold group-data-[collapsible=icon]:hidden">
              Proteen
            </h1>
          </SidebarHeader>
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
          <SidebarFooter className="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto"
                >
                  <div className="flex w-full items-center gap-2">
                    <Avatar className="size-8">
                      {adminAvatar && <AvatarImage
                        src={adminAvatar.imageUrl}
                        alt={adminAvatar.description}
                      />}
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                      <span className="text-sm font-semibold">Admin</span>
                      <span className="text-xs text-muted-foreground">
                        admin@proteen.com
                      </span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
                className="w-full min-w-[14rem]"
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@proteen.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="p-0 overflow-hidden">
          <div
            ref={scrollWrapperRef}
            className="h-full w-full overflow-y-auto p-4 md:p-8 no-scrollbar"
          >
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
