import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { useT } from "@/lib/i18n";
import logo from "@/assets/logo.png.asset.json";

export function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/projects", label: t.nav.projects },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-shadow ${
        scrolled ? "bg-background/90 shadow-sm" : "bg-background/70"
      }`}
    >
      {/* top utility bar — desktop only */}
      <div className="hidden border-b border-border/60 bg-primary text-primary-foreground md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-2 opacity-90">
            <Clock className="size-3.5" aria-hidden />
            <span>{t.availability}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 font-medium hover:text-accent transition-colors"
            >
              <Phone className="size-3.5" aria-hidden />
              <span>{business.phone}</span>
            </a>
            <span aria-hidden className="h-4 w-px bg-primary-foreground/25" />
            <LanguageSwitcher className="hover:bg-primary-foreground/10" />
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label={`${business.name} — ${t.nav.home}`}
        >
          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded-md bg-primary shadow-sm"
          >
            <img src={logo.url} alt="" className="size-9" width={36} height={36} />
          </span>
          <span className="font-display text-base font-semibold leading-tight tracking-tight text-foreground sm:text-lg">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t.header.mainNav}>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="brand" size="lg">
            <Link to="/contact">{t.header.cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher className="text-foreground hover:bg-secondary" />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="container-x flex flex-col py-3" aria-label={t.header.mobileNav}>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground"
              >
                <Phone className="size-4 text-accent" aria-hidden />
                {business.phone}
              </a>
              <div className="flex items-center gap-2 px-3 py-1 text-xs text-muted-foreground">
                <Clock className="size-3.5" aria-hidden /> {t.availability}
              </div>
              <Button asChild variant="brand" className="mx-2 mt-1">
                <Link to="/contact">{t.header.cta}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
