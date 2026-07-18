import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { business } from "@/lib/business";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Επικοινωνία — ${business.name}` },
      {
        name: "description",
        content: `Επικοινώνησε με τη ${business.name} για προσφορά ή συμβουλή. Τηλέφωνο, email και ώρες λειτουργίας.`,
      },
      { property: "og:title", content: `Επικοινωνία — ${business.name}` },
      {
        property: "og:description",
        content: "Ζήτα προσφορά για γυψοσανίδες, ψευδοροφές και οικοδομικές εργασίες στη Ζάκυνθο.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">{t.contact.heroEyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            {t.contact.heroTitle}
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.contact.heroBody}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <h2 className="font-display text-xl font-semibold">{t.contact.formTitle}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.contact.formRequiredBefore}<span className="text-accent">*</span>{t.contact.formRequiredAfter}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-4">
              <InfoCard
                icon={<Phone className="size-5" />}
                title={t.contact.phone}
                body={
                  <a href={business.phoneHref} className="font-medium text-foreground hover:text-accent">
                    {business.phone}
                  </a>
                }
              />
              <InfoCard
                icon={<Mail className="size-5" />}
                title={t.contact.email}
                body={
                  <a href={`mailto:${business.email}`} className="break-all font-medium text-foreground hover:text-accent">
                    {business.email}
                  </a>
                }
              />
              <InfoCard
                icon={<Clock className="size-5" />}
                title={t.contact.availabilityLabel}
                body={<span className="text-sm font-medium text-foreground">{t.availability}</span>}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
          </div>
          <div className="mt-1 text-sm">{body}</div>
        </div>
      </div>
    </div>
  );
}
