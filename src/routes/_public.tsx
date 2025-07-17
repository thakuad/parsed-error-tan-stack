import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { PublicSidebar } from "@/modules/public/ui/components/public-sidebar";
import { PublicHeaderView } from "@/modules/public/ui/view/public-header-view";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <PublicSidebar />
      <SidebarInset>
        <PublicHeaderView />

        <div>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
