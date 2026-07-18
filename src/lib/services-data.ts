import { Layers, PanelTop, Lightbulb, Droplets, Volume2, Snowflake, Hammer, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT } from "@/lib/i18n";

export type ServiceMeta = { slug: string; icon: LucideIcon };

// Ordering + icons for services. Text content lives in i18n (translations.serviceItems).
export const serviceMeta: ServiceMeta[] = [
  { slug: "gypsosanides-toichon", icon: Layers },
  { slug: "psevdorofes", icon: PanelTop },
  { slug: "kryfos-fotismos", icon: Lightbulb },
  { slug: "anthygres", icon: Droplets },
  { slug: "ichomonosi", icon: Volume2 },
  { slug: "monosi", icon: Snowflake },
  { slug: "oikodomikes", icon: Hammer },
  { slug: "epikseyaseis", icon: Wrench },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: readonly string[];
  icon: LucideIcon;
};

export function useServices(): Service[] {
  const { t } = useT();
  return serviceMeta.map((m) => {
    const data = t.serviceItems[m.slug as keyof typeof t.serviceItems];
    return { slug: m.slug, icon: m.icon, ...data };
  });
}
