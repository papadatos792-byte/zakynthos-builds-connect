import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock3, Award, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { business } from "@/lib/business";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${business.name} — Γυψοσανίδες & Ψευδοροφές στη Ζάκυνθο` },
      {
        name: "description",
        content: `Εγκατάσταση γυψοσανίδων, ψευδοροφές, κρυφός φωτισμός & οικοδομικές εργασίες σε όλη τη Ζάκυνθο. ${business.yearsExperience}+ χρόνια εμπειρίας. Ζήτα άμεσα προσφορά.`,
      },
      { property: "og:title", content: `${business.name} — Γυψοσανίδες στη Ζάκυνθο` },
      {
        property: "og:description",
        content: "Καθαρή δουλειά, έγκαιρη παράδοση, εγγύηση αποτελέσματος σε όλο το νησί.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Επαγγελματίας τεχνίτης εγκαθιστά γυψοσανίδα σε τοίχο"
            className="size-full object-cover opacity-25"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>

        <div className="container-x relative grid gap-10 py-16 md:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <span className="sr-only">κατηγορία:</span>
              Ζάκυνθος · Ιόνιο
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Γυψοσανίδες, ψευδοροφές &amp; οικοδομικές{" "}
              <span className="text-accent">στη Ζάκυνθο</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {business.yearsExperience}+ χρόνια εμπειρίας σε κατοικίες, ξενοδοχεία και
              επαγγελματικούς χώρους. Καθαρή εγκατάσταση, σεβασμός στον χρόνο σου, εγγύηση
              αποτελέσματος.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg" className="h-12 px-6 text-base">
                <Link to="/contact">
                  Ζήτα Προσφορά Τώρα <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={business.phoneHref}>
                  <Phone className="size-4" /> {business.phone}
                </a>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6">
              <Stat value={`${business.yearsExperience}+`} label="Χρόνια εμπειρίας" />
              <Stat value={`${business.projectsCompleted}+`} label="Ολοκληρωμένα έργα" />
              <Stat value="100%" label="Εγγύηση εργασίας" />
            </dl>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Ποιοι είμαστε</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Τοπική επιχείρηση, εξειδικευμένη στη γυψοσανίδα
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Η <strong className="text-foreground">{business.name}</strong> δραστηριοποιείται
              στη Ζάκυνθο εδώ και πάνω από δύο δεκαετίες. Συνεργαζόμαστε με ιδιώτες, μηχανικούς
              και ξενοδόχους για να παραδώσουμε ξηρά δόμηση υψηλής ποιότητας — από απλά χωρίσματα
              μέχρι σύνθετες ψευδοροφές με κρυφό φωτισμό.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Πιστοποιημένα υλικά (Knauf, Rigips)",
                "Ρεαλιστική προσφορά χωρίς εκπλήξεις",
                "Καθαρός χώρος εργασίας κάθε μέρα",
                "Εξυπηρέτηση σε όλο το νησί",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Sparkles className="size-3" aria-hidden />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">Μάθε περισσότερα για εμάς <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <Feature icon={<ShieldCheck className="size-5" />} title="Εγγύηση αποτελέσματος" body="Στέκουμε πίσω από κάθε έργο μας." />
              <Feature icon={<Clock3 className="size-5" />} title="Στον χρόνο" body="Παράδοση με σεβασμό στο πρόγραμμά σου." />
              <Feature icon={<Award className="size-5" />} title="Ποιότητα υλικών" body="Επιλεγμένοι κατασκευαστές, πιστοποιημένα υλικά." />
              <Feature icon={<Sparkles className="size-5" />} title="Καθαρή δουλειά" body="Προστασία επίπλων & καθαρισμός χώρου." />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-y bg-secondary/40">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Οι Υπηρεσίες μας</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Λύσεις για κάθε ανάγκη ξηράς δόμησης
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary">
              <Link to="/services">Όλες οι υπηρεσίες <ArrowRight className="size-4" /></Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-elegant"
              >
                <span className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent">
                  Δες περισσότερα <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Πρόσφατα Έργα</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Δουλειές που μιλάνε από μόνες τους
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { src: project1, alt: "Ψευδοροφή γυψοσανίδας με κρυφό φωτισμό LED", caption: "Ψευδοροφή με κρυφό φωτισμό" },
              { src: project2, alt: "Λευκός τοίχος γυψοσανίδας με ενσωματωμένη ράφια-εσοχή", caption: "Χώρισμα με αρχιτεκτονική εσοχή" },
              { src: project3, alt: "Εγκατάσταση θερμομόνωσης πετροβάμβακα σε τοίχο", caption: "Θερμο- & ηχομόνωση" },
            ].map((p) => (
              <figure key={p.caption} className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-border p-4 text-sm font-medium">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground shadow-elegant md:p-14">
            <div
              className="absolute -right-16 -top-16 size-64 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Έτοιμος για να ξεκινήσουμε;
                </h2>
                <p className="mt-3 max-w-xl text-primary-foreground/85">
                  Πες μας δυο λόγια για το έργο σου. Θα επικοινωνήσουμε άμεσα με μια ξεκάθαρη
                  πρόταση.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="brand" size="lg" className="h-12 px-6">
                  <Link to="/contact">Ζήτα Προσφορά <ArrowRight className="size-4" /></Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href={business.phoneHref}><Phone className="size-4" /> Κάλεσέ μας</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <div className="font-display text-3xl font-bold text-accent sm:text-4xl">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">
          {label}
        </div>
      </dd>
    </div>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <span className="grid size-10 place-items-center rounded-md bg-accent/15 text-accent">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
