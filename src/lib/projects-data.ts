export const projectPhotos: { url: string; alt: string }[] = Array.from(
  { length: 30 },
  (_, index) => ({
    url: `/images/projects/project-01 (${index + 1}).jpg`,
    alt: `Εργασία γυψοσανίδας ${index + 1}`,
  }),
);
