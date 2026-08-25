import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/civic")({
  component: CivicLayout,
  head: () => ({
    meta: [{ title: "Civic desk — SheVegas" }],
  }),
});

function CivicLayout() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}
