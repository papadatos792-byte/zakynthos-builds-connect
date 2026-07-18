export const projectPhotos: { url: string; alt: string }[] = Array.from(
  { length: 30 },
  (_, index) => ({
    url: `/images/projects/project-${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `Εργασία γυψοσανίδας ${index + 1} από τη Μιχάλης Γυψοτεχνική Ζακύνθου`,
  }),
);
