import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { projectPhotos } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Τα Έργα μας — ${business.name}` },
      {
        name: "description",
        content: `Δες φωτογραφίες από ολοκληρωμένα έργα γυψοσανίδας, ψευδοροφών, κρυφού φωτισμού και οικοδομικών εργασιών στη Ζάκυνθο.`,
      },
      { property: "og:title", content: `Τα Έργα μας — ${business.name}` },
      {
        property: "og:description",
        content: "Γκαλερί από πρόσφατα έργα ξηράς δόμησης στη Ζάκυνθο.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Έργα</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Τα Έργα μας
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Ένα μικρό δείγμα από την καθημερινή μας δουλειά σε κατοικίες, ξενοδοχεία και
            επαγγελματικούς χώρους σε όλη τη Ζάκυνθο.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projectPhotos.map((p, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.url}
                    alt={p.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-2xl bg-accent p-8 text-accent-foreground md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Θες κάτι παρόμοιο στον χώρο σου;
                </h2>
                <p className="mt-2 max-w-xl">
                  Στείλε μας φωτογραφία ή σκίτσο του χώρου και θα σου προτείνουμε λύση.
                </p>
              </div>
              <Button asChild size="lg" className="h-12 bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Ζήτα προσφορά <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
