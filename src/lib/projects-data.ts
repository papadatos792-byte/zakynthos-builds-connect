// Λίστα φωτογραφιών έργων. Οι URLs σερβίρονται από το Lovable CDN.
const modules = import.meta.glob<{ default: { url: string } }>(
  "../assets/projects/*.jpg.asset.json",
  { eager: true },
);

export const projectPhotos: { url: string; alt: string }[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, m]) => ({
    url: m.default.url,
    alt: "Εργασία γυψοσανίδας από τη Μιχάλης Γυψοτεχνική Ζακύνθου",
  }));
