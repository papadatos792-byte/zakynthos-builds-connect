import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServices } from "@/lib/services-data";
import { business } from "@/lib/business";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Υπηρεσίες — ${business.name}` },
      {
        name: "description",
        content:
          "Γυψοσανίδες τοίχων, ψευδοροφές, κρυφός φωτισμός, ανθυγρές, ηχομόνωση, θερμομόνωση και οικοδομικές εργασίες στη Ζάκυνθο.",
      },
      { property: "og:title", content: `Υπηρεσίες — ${business.name}` },
      {
        property: "og:description",
        content: "Όλες οι υπηρεσίες ξηράς δόμησης που προσφέρουμε στη Ζάκυνθο.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useT();
  const services = useServices();
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">{t.services.heroEyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            {t.services.heroTitle}
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.services.heroBody}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x space-y-16 md:space-y-24">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/85 p-8 text-primary-foreground shadow-card">
                    <span className="grid size-14 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-primary-foreground/80">{s.short}</p>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="text-base leading-relaxed text-foreground">{s.description}</p>
                  <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                    {t.services.benefits}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                          <Check className="size-3" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">
                        {t.services.ctaQuote} <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-2xl bg-accent p-8 text-accent-foreground md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  {t.services.helpTitle}
                </h2>
                <p className="mt-2 max-w-xl">{t.services.helpBody}</p>
              </div>
              <Button asChild size="lg" className="h-12 bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">{t.services.helpBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
