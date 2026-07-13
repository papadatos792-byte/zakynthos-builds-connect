import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Αρχική" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/about", label: "Σχετικά" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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
            <span>{business.availability}</span>
          </div>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 font-medium hover:text-accent transition-colors"
          >
            <Phone className="size-3.5" aria-hidden />
            <span>{business.phone}</span>
          </a>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label={`${business.name} — Αρχική`}
        >
          <span
            aria-hidden
            className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold shadow-sm"
          >
            ΓΖ
          </span>
          <span className="font-display text-lg font-semibold leading-tight tracking-tight text-foreground sm:text-xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Κύρια πλοήγηση">
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
            <Link to="/contact">Ζήτα Προσφορά</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Κύρια πλοήγηση κινητού">
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
                <Clock className="size-3.5" aria-hidden /> {business.availability}
              </div>
              <Button asChild variant="brand" className="mx-2 mt-1">
                <Link to="/contact">Ζήτα Προσφορά</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
