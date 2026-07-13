// Στοιχεία επιχείρησης — placeholder τιμές. Ενημέρωσε εδώ όταν έχεις τα πραγματικά.
export const business = {
  name: "Γυψοτεχνική Ζακύνθου",
  shortName: "Γυψοτεχνική",
  tagline: "Γυψοσανίδες & Οικοδομικές Εργασίες στη Ζάκυνθο",
  phone: "+30 697 399 3719",
  phoneHref: "tel:+306973993719",
  email: "lazourasdim@gmail.com",
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
