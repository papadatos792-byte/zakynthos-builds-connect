import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock } from "lucide-react";
import { business } from "@/lib/business";
import { services } from "@/lib/services-data";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo.url}
              alt={business.name}
              className="size-10 shrink-0"
              width={40}
              height={40}
            />
            <span className="font-display text-lg font-semibold">{business.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            {business.tagline}. Καθαρή δουλειά, στον χρόνο που συμφωνούμε, με εγγύηση.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Πλοήγηση
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/80 hover:text-accent">Αρχική</Link></li>
            <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent">Υπηρεσίες</Link></li>
            <li><Link to="/projects" className="text-primary-foreground/80 hover:text-accent">Έργα</Link></li>
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">Σχετικά με εμάς</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent">Επικοινωνία</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Υπηρεσίες
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-primary-foreground/80 hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Επικοινωνία
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <a href={business.phoneHref} className="text-primary-foreground/85 hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <a
                href={`mailto:${business.email}`}
                className="break-all text-primary-foreground/85 hover:text-accent"
              >
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <span className="text-primary-foreground/85">{business.availability}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>© {year} {business.name}. Όλα τα δικαιώματα διατηρούνται.</p>
          <p>Ζάκυνθος · Ιόνιο</p>
        </div>
      </div>
    </footer>
  );
}
