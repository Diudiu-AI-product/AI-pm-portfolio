import type { PropsWithChildren } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="site-root">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
