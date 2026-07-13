import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Target, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Σχετικά με εμάς — ${business.name}` },
      {
        name: "description",
        content: `${business.yearsExperience}+ χρόνια εμπειρίας στη γυψοσανίδα και τις οικοδομικές εργασίες στη Ζάκυνθο. Οι αξίες μας και οι πιστοποιήσεις μας.`,
      },
      { property: "og:title", content: `Σχετικά με εμάς — ${business.name}` },
      { property: "og:description", content: "Οι αξίες και η εμπειρία μας." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Ποιότητα", body: "Πιστοποιημένα υλικά και σωστή τεχνική σε κάθε έργο." },
  { icon: Handshake, title: "Ειλικρίνεια", body: "Ρεαλιστικές προσφορές, ξεκάθαροι χρόνοι, καμία έκπληξη." },
  { icon: Target, title: "Συνέπεια", body: "Ό,τι υποσχεθούμε, το παραδίδουμε στον χρόνο του." },
  { icon: Heart, title: "Σεβασμός", body: "Στο χώρο σου, στα έπιπλά σου και στο πρόγραμμά σου." },
];

const certs = [
  "Πιστοποιημένος εφαρμοστής Knauf",
  "Ασφαλισμένη επιχείρηση με ΤΕΕ",
  "Έγγραφη εγγύηση εργασιών",
  "Πλήρη τιμολόγηση & νόμιμες αποδείξεις",
];

export function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">Σχετικά με εμάς</span>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {business.yearsExperience}+ χρόνια στη γυψοσανίδα, στη Ζάκυνθο
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Η {business.name} είναι μια ατομική επιχείρηση με προσωπική παρουσία σε κάθε έργο.
              Από τη μελέτη μέχρι το φινίρισμα, θα έχεις έναν άνθρωπο απέναντί σου — υπεύθυνο,
              συνεπή και με γνώση της δουλειάς.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <img
                src={teamImg}
                alt={business.name}
                width={1400}
                height={1000}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-secondary/40">
        <div className="container-x">
          <span className="eyebrow">Οι αξίες μας</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Πώς δουλεύουμε
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground">
                  <v.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Πιστοποιήσεις</span>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Εγγύηση σοβαρότητας
          </h2>
          <ul className="mt-6 space-y-3">
            {certs.map((c) => (
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
                Δούλεψε με έναν άνθρωπο που εμπιστεύεσαι.
              </h2>
              <Button asChild variant="brand" size="lg" className="h-12 px-6">
                <Link to="/contact">Επικοινώνησε μαζί μας</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
