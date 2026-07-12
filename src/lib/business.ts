// Στοιχεία επιχείρησης — placeholder τιμές. Ενημέρωσε εδώ όταν έχεις τα πραγματικά.
export const business = {
  name: "Γυψοτεχνική Ζακύνθου",
  shortName: "Γυψοτεχνική",
  tagline: "Γυψοσανίδες & Οικοδομικές Εργασίες στη Ζάκυνθο",
  phone: "26950 43210",
  phoneHref: "tel:+302695043210",
  email: "info@gypsotechniki-zakynthos.gr",
  address: {
    street: "Λεωφ. Δημοκρατίας 45",
    city: "Ζάκυνθος",
    postalCode: "29100",
    country: "GR",
    region: "Ζάκυνθος",
  },
  hours: [
    { day: "Δευτέρα – Παρασκευή", time: "08:00 – 17:00" },
    { day: "Σάββατο", time: "09:00 – 14:00" },
    { day: "Κυριακή", time: "Κλειστά" },
  ],
  hoursShort: "Δευ–Παρ 08:00–17:00",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  yearsExperience: 22,
  projectsCompleted: 480,
} as const;
