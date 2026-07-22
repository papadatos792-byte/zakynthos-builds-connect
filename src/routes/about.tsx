import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Target, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { useT } from "@/lib/i18n";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Σχετικά με εμάς — ${business.name}` },
      {
        name: "description",
        content: `${business.yearsExperience}+ χρόνια εμπειρίας στη γυψοσανίδα και τις οικοδομικές εργασίες στη Ζάκυνθο.`,
      },
      { property: "og:title", content: `Σχετικά με εμάς — ${business.name}` },
      { property: "og:description", content: "Οι αξίες και η εμπειρία μας." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const valueIcons = [ShieldCheck, Handshake, Target, Heart];

export function AboutPage() {
  const { t } = useT();
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">{t.about.heroEyebrow}</span>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {business.yearsExperience}+ {t.about.heroTitleSuffix}
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {t.about.heroBodyBefore}
              {business.name}
              {t.about.heroBodyAfter}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid aspect-square place-items-center rounded-2xl border border-border bg-primary p-10 shadow-card">
              <img
                src="/images/logo.png"
                alt={business.name}
                width={400}
                height={400}
                loading="lazy"
                className="size-full max-w-xs object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-secondary/40">
        <div className="container-x">
          <span className="eyebrow">{t.about.valuesEyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t.about.valuesTitle}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v, idx) => {
              const Icon = valueIcons[idx];
              return (
                <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <span className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">{t.about.certsEyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            {t.about.certsTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {t.about.certs.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <Award className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {t.about.ctaTitle}
              </h2>
              <Button asChild variant="brand" size="lg" className="h-12 px-6">
                <Link to="/contact">{t.about.ctaBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
