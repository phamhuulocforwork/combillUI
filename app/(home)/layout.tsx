import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "../layout.config";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-6 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-muted-foreground text-sm">
          Built by{" "}
          <a
            href={siteConfig.links.github}
            rel="noreferrer noopener"
            target="_blank"
            className="font-medium underline underline-offset-4 transition-colors hover:text-foreground/80"
          >
            huuloc
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <div className="relative flex min-h-screen">
      <HomeLayout {...baseOptions}>
        <main className="flex-1 flex items-center justify-center">{children}</main>
        <SiteFooter />
      </HomeLayout>
    </div>
  );
}
