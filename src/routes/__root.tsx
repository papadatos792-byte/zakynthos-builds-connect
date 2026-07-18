import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { business } from "@/lib/business";
import { LanguageProvider, useT } from "@/lib/i18n";

function NotFoundComponent() {
  const { t } = useT();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">{t.notFound.code}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold">{t.notFound.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFound.body}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {t.notFound.back}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useT();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">{t.error.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.error.body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {t.error.retry}
          </button>
          <a
            href="/"
            className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-secondary"
          >
            {t.error.home}
          </a>
        </div>
      </div>
    </div>
  );
}

const siteTitle = `${business.name} — Γυψοσανίδες & Οικοδομικές στη Ζάκυνθο`;
const siteDescription = `Εγκατάσταση γυψοσανίδων, ψευδοροφές, κρυφός φωτισμός, ηχομόνωση και οικοδομικές εργασίες στη Ζάκυνθο. ${business.yearsExperience}+ χρόνια εμπειρίας, αξιόπιστη παράδοση.`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: business.name },
      { name: "theme-color", content: "#1c2942" },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: business.name },
      { property: "og:locale", content: "el_GR" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          image: "/og-image.jpg",
          telephone: `+30${business.phone.replace(/\s/g, "")}`,
          email: business.email,
          areaServed: business.region,
          description: siteDescription,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AppShell() {
  const { t } = useT();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {t.header.skip}
      </a>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieConsent />
      <Toaster />
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
