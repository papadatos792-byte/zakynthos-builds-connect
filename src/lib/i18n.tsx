import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "el" | "en";

const STORAGE_KEY = "site-lang-v1";

type Dict = typeof translations.el;

/* -------------------------------- dictionary -------------------------------- */

export const translations = {
  el: {
    lang: { el: "Ελληνικά", en: "English", switchTo: "EN" },
    availability: "Ελεύθερο ωράριο — κατόπιν συνεννόησης",
    tagline: "Γυψοσανίδες & Οικοδομικές Εργασίες στη Ζάκυνθο",
    nav: {
      home: "Αρχική",
      services: "Υπηρεσίες",
      projects: "Έργα",
      about: "Σχετικά",
      contact: "Επικοινωνία",
    },
    header: {
      cta: "Ζήτα Προσφορά",
      mainNav: "Κύρια πλοήγηση",
      mobileNav: "Κύρια πλοήγηση κινητού",
      openMenu: "Άνοιγμα μενού",
      closeMenu: "Κλείσιμο μενού",
      skip: "Παράλειψη στο περιεχόμενο",
    },
    footer: {
      taglineSuffix: "Καθαρή δουλειά, στον χρόνο που συμφωνούμε, με εγγύηση.",
      navHeading: "Πλοήγηση",
      servicesHeading: "Υπηρεσίες",
      contactHeading: "Επικοινωνία",
      region: "Ζάκυνθος · Ιόνιο",
      rights: "Όλα τα δικαιώματα διατηρούνται.",
    },
    home: {
      metaTitleSuffix: "Γυψοσανίδες & Ψευδοροφές στη Ζάκυνθο",
      metaDescription:
        "Εγκατάσταση γυψοσανίδων, ψευδοροφές, κρυφός φωτισμός & οικοδομικές εργασίες σε όλη τη Ζάκυνθο. Ζήτα άμεσα προσφορά.",
      heroRegion: "Ζάκυνθος · Ιόνιο",
      heroTitleA: "Γυψοσανίδες, ψευδοροφές & οικοδομικές",
      heroTitleB: "στη Ζάκυνθο",
      heroSubtitle:
        "χρόνια εμπειρίας σε κατοικίες, ξενοδοχεία και επαγγελματικούς χώρους. Καθαρή εγκατάσταση, σεβασμός στον χρόνο σου, εγγύηση αποτελέσματος.",
      heroCta: "Ζήτα Προσφορά Τώρα",
      statYears: "Χρόνια εμπειρίας",
      statProjects: "Έργα παντού",
      statGuarantee: "Εγγύηση εργασίας",
      guaranteeValue: "100%",
      introEyebrow: "Ποιοι είμαστε",
      introTitle: "Τοπική επιχείρηση, εξειδικευμένη στη γυψοσανίδα",
      introBodyBefore: "Η ",
      introBodyAfter:
        " δραστηριοποιείται στη Ζάκυνθο εδώ και πάνω από δύο δεκαετίες. Συνεργαζόμαστε με ιδιώτες, μηχανικούς και ξενοδόχους για να παραδώσουμε ξηρά δόμηση υψηλής ποιότητας — από απλά χωρίσματα μέχρι σύνθετες ψευδοροφές με κρυφό φωτισμό, και ό,τι άλλο ζητήσει ο πελάτης.",
      introBullets: [
        "Πιστοποιημένα υλικά (Knauf, Rigips)",
        "Ρεαλιστική προσφορά χωρίς εκπλήξεις",
        "Καθαρός χώρος εργασίας κάθε μέρα",
        "Εξυπηρέτηση σε όλο το νησί",
      ],
      introMore: "Μάθε περισσότερα για εμάς",
      features: [
        { title: "Εγγύηση αποτελέσματος", body: "Στέκουμε πίσω από κάθε έργο μας." },
        { title: "Στον χρόνο", body: "Παράδοση με σεβασμό στο πρόγραμμά σου." },
        { title: "Ποιότητα υλικών", body: "Επιλεγμένοι κατασκευαστές, πιστοποιημένα υλικά." },
        { title: "Καθαρή δουλειά", body: "Προστασία επίπλων & καθαρισμός χώρου." },
      ],
      servicesEyebrow: "Οι Υπηρεσίες μας",
      servicesTitle: "Λύσεις για κάθε ανάγκη ξηράς δόμησης",
      servicesAll: "Όλες οι υπηρεσίες",
      servicesMore: "Δες περισσότερα",
      projectsEyebrow: "Πρόσφατα Έργα",
      projectsTitle: "Δουλειές που μιλάνε από μόνες τους",
      projectsAll: "Δες όλα τα έργα",
      ctaTitle: "Έτοιμος για να ξεκινήσουμε;",
      ctaBody: "Πες μας δυο λόγια για το έργο σου. Θα επικοινωνήσουμε άμεσα με μια ξεκάθαρη πρόταση.",
      ctaBtn: "Ζήτα Προσφορά",
      ctaCall: "Κάλεσέ μας",
    },
    services: {
      metaTitlePrefix: "Υπηρεσίες",
      metaDescription:
        "Γυψοσανίδες τοίχων, ψευδοροφές, κρυφός φωτισμός, ανθυγρές, ηχομόνωση, θερμομόνωση και οικοδομικές εργασίες στη Ζάκυνθο.",
      heroEyebrow: "Υπηρεσίες",
      heroTitle: "Όλα όσα χρειάζεσαι για ξηρά δόμηση",
      heroBody:
        "Από απλά χωρίσματα μέχρι σύνθετες κατασκευές με κρυφό φωτισμό και ηχομόνωση — αναλαμβάνουμε ολόκληρο το έργο, με πιστοποιημένα υλικά και εγγύηση αποτελέσματος.",
      benefits: "Οφέλη",
      ctaQuote: "Ζήτα προσφορά για αυτή την υπηρεσία",
      helpTitle: "Δεν είσαι σίγουρος τι χρειάζεσαι;",
      helpBody: "Πες μας τι θέλεις να πετύχεις και θα σου προτείνουμε τη σωστή λύση — χωρίς κόστος για εσένα.",
      helpBtn: "Ζήτα δωρεάν συμβουλή",
    },
    about: {
      metaTitlePrefix: "Σχετικά με εμάς",
      metaDescription:
        "χρόνια εμπειρίας στη γυψοσανίδα και τις οικοδομικές εργασίες στη Ζάκυνθο. Οι αξίες μας και οι πιστοποιήσεις μας.",
      heroEyebrow: "Σχετικά με εμάς",
      heroTitleSuffix: "χρόνια στη γυψοσανίδα, στη Ζάκυνθο",
      heroBodyBefore: "Η ",
      heroBodyAfter:
        " είναι μια ατομική επιχείρηση με προσωπική παρουσία σε κάθε έργο. Από τη μελέτη μέχρι το φινίρισμα, θα έχεις έναν άνθρωπο απέναντί σου — υπεύθυνο, συνεπή και με γνώση της δουλειάς, και ό,τι άλλο ζητήσει ο πελάτης.",
      valuesEyebrow: "Οι αξίες μας",
      valuesTitle: "Πώς δουλεύουμε",
      values: [
        { title: "Ποιότητα", body: "Πιστοποιημένα υλικά και σωστή τεχνική σε κάθε έργο." },
        { title: "Ειλικρίνεια", body: "Ρεαλιστικές προσφορές, ξεκάθαροι χρόνοι, καμία έκπληξη." },
        { title: "Συνέπεια", body: "Ό,τι υποσχεθούμε, το παραδίδουμε στον χρόνο του." },
        { title: "Σεβασμός", body: "Στο χώρο σου, στα έπιπλά σου και στο πρόγραμμά σου." },
      ],
      certsEyebrow: "Πιστοποιήσεις",
      certsTitle: "Εγγύηση σοβαρότητας",
      certs: [
        "Πιστοποιημένος εφαρμοστής Knauf",
        "Έγγραφη εγγύηση εργασιών",
        "Πλήρη τιμολόγηση & νόμιμες αποδείξεις",
      ],
      ctaTitle: "Δούλεψε με έναν άνθρωπο που εμπιστεύεσαι.",
      ctaBtn: "Επικοινώνησε μαζί μας",
    },
    contact: {
      metaTitlePrefix: "Επικοινωνία",
      metaDescriptionBefore: "Επικοινώνησε με τη ",
      metaDescriptionAfter: " για προσφορά ή συμβουλή. Τηλέφωνο, email και ώρες λειτουργίας.",
      heroEyebrow: "Επικοινωνία",
      heroTitle: "Πες μας για το έργο σου",
      heroBody:
        "Συμπλήρωσε τη φόρμα ή κάλεσέ μας απευθείας. Απαντάμε σε όλα τα αιτήματα την ίδια εργάσιμη ημέρα.",
      formTitle: "Φόρμα επικοινωνίας",
      formRequiredBefore: "Τα πεδία με ",
      formRequiredAfter: " είναι υποχρεωτικά.",
      phone: "Τηλέφωνο",
      email: "Email",
      availabilityLabel: "Διαθεσιμότητα",
    },
    projects: {
      metaTitlePrefix: "Τα Έργα μας",
      metaDescription:
        "Δες φωτογραφίες από ολοκληρωμένα έργα γυψοσανίδας, ψευδοροφών, κρυφού φωτισμού και οικοδομικών εργασιών στη Ζάκυνθο.",
      heroEyebrow: "Έργα",
      heroTitle: "Τα Έργα μας",
      heroBody:
        "Ένα μικρό δείγμα από την καθημερινή μας δουλειά σε κατοικίες, ξενοδοχεία και επαγγελματικούς χώρους σε όλη τη Ζάκυνθο.",
      ctaTitle: "Θες κάτι παρόμοιο στον χώρο σου;",
      ctaBody: "Στείλε μας φωτογραφία ή σκίτσο του χώρου και θα σου προτείνουμε λύση.",
      ctaBtn: "Ζήτα προσφορά",
      imgAlt: "Εργασία γυψοσανίδας από τη Μιχάλης Γυψοτεχνική Ζακύνθου",
    },
    form: {
      aria: "Φόρμα επικοινωνίας",
      name: "Όνομα",
      phone: "Τηλέφωνο",
      email: "Email",
      area: "Περιοχή",
      areaPh: "π.χ. Λαγανάς, Ζάκυνθος",
      sqm: "Τετραγωνικά (m²)",
      sqmPh: "π.χ. 80",
      message: "Μήνυμα",
      messagePh: "Πες μας για το έργο σου: τύπος χώρου, τι θα ήθελες, ενδεικτικά τετραγωνικά…",
      consent: "Πατώντας «Αποστολή» συναινείς στην επικοινωνία μας μαζί σου για την αίτησή σου.",
      submit: "Αποστολή Μηνύματος",
      sending: "Αποστολή...",
      successTitle: "Ευχαριστούμε!",
      successBody:
        "Λάβαμε το μήνυμά σου. Θα επικοινωνήσουμε μαζί σου το συντομότερο δυνατό στα στοιχεία που μας έδωσες.",
      newMessage: "Νέο μήνυμα",
      error: "Κάτι πήγε στραβά. Δοκίμασε ξανά ή κάλεσέ μας.",
      errName: "Συμπλήρωσε το όνομά σου.",
      errPhone: "Δώσε ένα έγκυρο τηλέφωνο.",
      errEmail: "Δώσε ένα έγκυρο email.",
      errMessage: "Γράψε λίγα λόγια για το έργο σου.",
    },
    cookies: {
      aria: "Ενημέρωση για cookies",
      text: "Χρησιμοποιούμε cookies για βασικές λειτουργίες και για τη βελτίωση της εμπειρίας πλοήγησης. Πατώντας «Αποδοχή» συναινείς στη χρήση τους σύμφωνα με τους όρους μας.",
      accept: "Αποδοχή",
      decline: "Άρνηση",
    },
    notFound: {
      code: "404",
      title: "Η σελίδα δεν βρέθηκε",
      body: "Η σελίδα που αναζητάς δεν υπάρχει ή έχει μετακινηθεί.",
      back: "Επιστροφή στην Αρχική",
    },
    error: {
      title: "Κάτι δεν πήγε καλά",
      body: "Δοκίμασε ξανά ή επίστρεψε στην αρχική σελίδα.",
      retry: "Δοκίμασε ξανά",
      home: "Αρχική",
    },
    serviceItems: {
      "gypsosanides-toichon": {
        title: "Γυψοσανίδες Τοίχων",
        short: "Χωρίσματα και επενδύσεις τοίχων με πιστοποιημένα υλικά.",
        description:
          "Κατασκευάζουμε ελαφριά χωρίσματα και επενδύσεις τοίχων με μεταλλικό σκελετό και γυψοσανίδα. Ιδανικά για ανακαινίσεις κατοικιών, ξενοδοχείων και επαγγελματικών χώρων στη Ζάκυνθο.",
        benefits: [
          "Ταχύτητα κατασκευής — έργα σε λίγες ημέρες",
          "Καθαρή εγκατάσταση χωρίς μπάζα",
          "Άριστο φινίρισμα, έτοιμο για βαφή",
        ],
      },
      psevdorofes: {
        title: "Ψευδοροφές",
        short: "Επίπεδες ή σχεδιαστικές ψευδοροφές με κρυφό φωτισμό.",
        description:
          "Σχεδιάζουμε και τοποθετούμε ψευδοροφές γυψοσανίδας — επίπεδες, βαθμιδωτές ή με ενσωματωμένα φωτιστικά σώματα. Ιδανικές για κάλυψη εγκαταστάσεων και βελτίωση αισθητικής.",
        benefits: [
          "Απόκρυψη καλωδίων & αεραγωγών",
          "Δυνατότητα ενσωμάτωσης spot και LED",
          "Θερμική & ακουστική βελτίωση",
        ],
      },
      "kryfos-fotismos": {
        title: "Κρυφός Φωτισμός",
        short: "Σχεδιασμός και εγκατάσταση κρυφού φωτισμού LED.",
        description:
          "Δημιουργούμε ατμοσφαιρικές λύσεις φωτισμού με ταινίες LED σε κοιλότητες γυψοσανίδας. Μελετάμε τη διάχυση, τη θερμοκρασία χρώματος και τη σκίαση για το τέλειο αποτέλεσμα.",
        benefits: [
          "Ζεστή, διάχυτη ατμόσφαιρα",
          "Χαμηλή κατανάλωση ενέργειας",
          "Μεγάλη διάρκεια ζωής υλικών",
        ],
      },
      anthygres: {
        title: "Ανθυγρές Γυψοσανίδες",
        short: "Ειδικές γυψοσανίδες για μπάνια, κουζίνες, υγρούς χώρους.",
        description:
          "Χρησιμοποιούμε πράσινες ανθυγρές πλάκες κατάλληλες για χώρους με υψηλή υγρασία. Απαραίτητες για τα ξενοδοχειακά μπάνια και τις κουζίνες.",
        benefits: [
          "Αντοχή στην υγρασία και στους ατμούς",
          "Αποφυγή μούχλας και φθορών",
          "Συμβατές με πλακάκια και βαφές",
        ],
      },
      ichomonosi: {
        title: "Ηχομόνωση",
        short: "Ακουστική μόνωση διαχωριστικών και ορόφων.",
        description:
          "Σχεδιάζουμε συστήματα ηχομόνωσης με πετροβάμβακα και ειδικές διπλές γυψοσανίδες, ιδανικά για δωμάτια ξενοδοχείων, γραφεία και διαμερίσματα.",
        benefits: [
          "Μείωση θορύβου έως και 55 dB",
          "Ιδανικό για ξενοδοχεία & πολυκατοικίες",
          "Λεπτή κατασκευή, χωρίς απώλεια χώρου",
        ],
      },
      monosi: {
        title: "Θερμομόνωση",
        short: "Εσωτερική θερμομόνωση για εξοικονόμηση ενέργειας.",
        description:
          "Εφαρμόζουμε λύσεις εσωτερικής θερμομόνωσης με πετροβάμβακα ή EPS πίσω από γυψοσανίδα, για αισθητή μείωση κατανάλωσης θέρμανσης & ψύξης.",
        benefits: [
          "Μείωση λογαριασμών ενέργειας",
          "Άνεση όλο τον χρόνο",
          "Αναβάθμιση ενεργειακής κλάσης",
        ],
      },
      oikodomikes: {
        title: "Οικοδομικές Εργασίες",
        short: "Σοβατεπί, στοκαρίσματα, μερεμέτια, γενικές ανακαινίσεις.",
        description:
          "Αναλαμβάνουμε συνοδευτικές οικοδομικές εργασίες: στοκαρίσματα, τρίψιμο, προετοιμασία τοίχων, μικρές οικοδομικές αποκαταστάσεις.",
        benefits: [
          "Ένας συνεργάτης για όλο το έργο",
          "Συντονισμός συνεργείων",
          "Αξιόπιστη παράδοση στον χρόνο",
        ],
      },
      epikseyaseis: {
        title: "Επισκευές & Συντηρήσεις",
        short: "Αποκατάσταση φθορών σε γυψοσανίδες και ψευδοροφές.",
        description:
          "Επισκευάζουμε ρωγμές, τρύπες και φθορές από υγρασία σε υπάρχουσες κατασκευές, με άμεση εξυπηρέτηση σε όλο το νησί.",
        benefits: [
          "Άμεση εξυπηρέτηση",
          "Καθαρή εργασία σε κατοικημένους χώρους",
          "Εγγύηση αποτελέσματος",
        ],
      },
    },
  },

  en: {
    lang: { el: "Ελληνικά", en: "English", switchTo: "EL" },
    availability: "Flexible hours — by appointment",
    tagline: "Drywall & Construction Works in Zakynthos",
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    header: {
      cta: "Get a Quote",
      mainNav: "Main navigation",
      mobileNav: "Mobile main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skip: "Skip to content",
    },
    footer: {
      taglineSuffix: "Clean work, delivered on time, with a guarantee.",
      navHeading: "Navigation",
      servicesHeading: "Services",
      contactHeading: "Contact",
      region: "Zakynthos · Ionian",
      rights: "All rights reserved.",
    },
    home: {
      metaTitleSuffix: "Drywall & Suspended Ceilings in Zakynthos",
      metaDescription:
        "Drywall installation, suspended ceilings, cove lighting & construction works across Zakynthos. Request a quote today.",
      heroRegion: "Zakynthos · Ionian",
      heroTitleA: "Drywall, suspended ceilings & construction",
      heroTitleB: "in Zakynthos",
      heroSubtitle:
        "years of experience in homes, hotels and commercial spaces. Clean installation, respect for your time, guaranteed results.",
      heroCta: "Get a Quote Now",
      statYears: "Years of experience",
      statProjects: "Projects everywhere",
      statGuarantee: "Workmanship guarantee",
      guaranteeValue: "100%",
      introEyebrow: "Who we are",
      introTitle: "A local business, specialised in drywall",
      introBodyBefore: "",
      introBodyAfter:
        " has been operating in Zakynthos for over two decades. We work with homeowners, engineers and hoteliers to deliver high-quality drywall — from simple partitions to elaborate ceilings with cove lighting, and anything else the client asks for.",
      introBullets: [
        "Certified materials (Knauf, Rigips)",
        "Realistic quote with no surprises",
        "Clean work site every day",
        "Service across the whole island",
      ],
      introMore: "Learn more about us",
      features: [
        { title: "Guaranteed results", body: "We stand behind every project." },
        { title: "On time", body: "Delivery that respects your schedule." },
        { title: "Quality materials", body: "Selected manufacturers, certified products." },
        { title: "Clean work", body: "Furniture protected, site cleaned daily." },
      ],
      servicesEyebrow: "Our Services",
      servicesTitle: "Solutions for every drywall need",
      servicesAll: "All services",
      servicesMore: "Learn more",
      projectsEyebrow: "Recent Projects",
      projectsTitle: "Work that speaks for itself",
      projectsAll: "See all projects",
      ctaTitle: "Ready to get started?",
      ctaBody: "Tell us a few things about your project. We'll come back with a clear proposal.",
      ctaBtn: "Get a Quote",
      ctaCall: "Call us",
    },
    services: {
      metaTitlePrefix: "Services",
      metaDescription:
        "Wall drywall, suspended ceilings, cove lighting, moisture-resistant boards, soundproofing, insulation and construction works in Zakynthos.",
      heroEyebrow: "Services",
      heroTitle: "Everything you need for drywall",
      heroBody:
        "From simple partitions to complex builds with cove lighting and soundproofing — we handle the entire project, with certified materials and guaranteed results.",
      benefits: "Benefits",
      ctaQuote: "Request a quote for this service",
      helpTitle: "Not sure what you need?",
      helpBody: "Tell us what you want to achieve and we'll suggest the right solution — free of charge.",
      helpBtn: "Ask for free advice",
    },
    about: {
      metaTitlePrefix: "About us",
      metaDescription:
        "years of experience in drywall and construction works in Zakynthos. Our values and our certifications.",
      heroEyebrow: "About us",
      heroTitleSuffix: "years of drywall work in Zakynthos",
      heroBodyBefore: "",
      heroBodyAfter:
        " is a sole-proprietor business with personal presence on every project. From planning to finishing, you'll have a single person in front of you — responsible, consistent and knowledgeable, and open to anything else the client requests.",
      valuesEyebrow: "Our values",
      valuesTitle: "How we work",
      values: [
        { title: "Quality", body: "Certified materials and proper technique on every project." },
        { title: "Honesty", body: "Realistic quotes, clear timelines, no surprises." },
        { title: "Consistency", body: "Whatever we promise, we deliver on time." },
        { title: "Respect", body: "For your space, your furniture and your schedule." },
      ],
      certsEyebrow: "Certifications",
      certsTitle: "Serious commitment",
      certs: [
        "Certified Knauf installer",
        "Written workmanship guarantee",
        "Full invoicing & legal receipts",
      ],
      ctaTitle: "Work with someone you can trust.",
      ctaBtn: "Get in touch",
    },
    contact: {
      metaTitlePrefix: "Contact",
      metaDescriptionBefore: "Contact ",
      metaDescriptionAfter: " for a quote or advice. Phone, email and availability.",
      heroEyebrow: "Contact",
      heroTitle: "Tell us about your project",
      heroBody:
        "Fill in the form or call us directly. We reply to every request within the same working day.",
      formTitle: "Contact form",
      formRequiredBefore: "Fields marked with ",
      formRequiredAfter: " are required.",
      phone: "Phone",
      email: "Email",
      availabilityLabel: "Availability",
    },
    projects: {
      metaTitlePrefix: "Our Projects",
      metaDescription:
        "Photos of completed drywall, ceiling, cove-lighting and construction projects in Zakynthos.",
      heroEyebrow: "Projects",
      heroTitle: "Our Projects",
      heroBody:
        "A small sample of our everyday work in homes, hotels and commercial spaces across Zakynthos.",
      ctaTitle: "Want something similar in your space?",
      ctaBody: "Send us a photo or sketch of the space and we'll propose a solution.",
      ctaBtn: "Request a quote",
      imgAlt: "Drywall work by Michalis Gypsotechniki Zakynthou",
    },
    form: {
      aria: "Contact form",
      name: "Name",
      phone: "Phone",
      email: "Email",
      area: "Area",
      areaPh: "e.g. Laganas, Zakynthos",
      sqm: "Square meters (m²)",
      sqmPh: "e.g. 80",
      message: "Message",
      messagePh: "Tell us about your project: type of space, what you'd like, approximate square meters…",
      consent: "By pressing \"Send\" you consent to us contacting you regarding your request.",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Thank you!",
      successBody: "We received your message. We'll get back to you as soon as possible using the details you provided.",
      newMessage: "New message",
      error: "Something went wrong. Please try again or call us.",
      errName: "Please enter your name.",
      errPhone: "Please enter a valid phone number.",
      errEmail: "Please enter a valid email.",
      errMessage: "Please write a few words about your project.",
    },
    cookies: {
      aria: "Cookie notice",
      text: "We use cookies for essential functionality and to improve your browsing experience. By pressing \"Accept\" you consent to their use according to our terms.",
      accept: "Accept",
      decline: "Decline",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      back: "Back to Home",
    },
    error: {
      title: "Something went wrong",
      body: "Please try again or return to the home page.",
      retry: "Try again",
      home: "Home",
    },
    serviceItems: {
      "gypsosanides-toichon": {
        title: "Wall Drywall",
        short: "Partitions and wall linings with certified materials.",
        description:
          "We build lightweight partitions and wall linings with a metal frame and drywall. Ideal for renovating homes, hotels and commercial spaces in Zakynthos.",
        benefits: [
          "Fast build — projects in a few days",
          "Clean installation with no debris",
          "Excellent finish, ready to paint",
        ],
      },
      psevdorofes: {
        title: "Suspended Ceilings",
        short: "Flat or designer suspended ceilings with cove lighting.",
        description:
          "We design and install drywall suspended ceilings — flat, stepped, or with integrated light fittings. Ideal for hiding services and improving aesthetics.",
        benefits: [
          "Hides cables & ducts",
          "Integrated spot & LED options",
          "Thermal & acoustic improvement",
        ],
      },
      "kryfos-fotismos": {
        title: "Cove Lighting",
        short: "Design and installation of hidden LED lighting.",
        description:
          "We create atmospheric lighting solutions using LED strips in drywall coves. We plan the diffusion, colour temperature and shielding for the perfect result.",
        benefits: [
          "Warm, diffused ambience",
          "Low energy consumption",
          "Long-lasting materials",
        ],
      },
      anthygres: {
        title: "Moisture-Resistant Drywall",
        short: "Special drywall for bathrooms, kitchens and wet areas.",
        description:
          "We use green moisture-resistant boards suited to high-humidity areas. Essential for hotel bathrooms and kitchens.",
        benefits: [
          "Resistant to humidity and steam",
          "Prevents mould and damage",
          "Compatible with tiles and paints",
        ],
      },
      ichomonosi: {
        title: "Soundproofing",
        short: "Acoustic insulation for partitions and floors.",
        description:
          "We design soundproofing systems with rock wool and special double drywall, ideal for hotel rooms, offices and apartments.",
        benefits: [
          "Noise reduction up to 55 dB",
          "Ideal for hotels & apartment buildings",
          "Slim build, minimal space loss",
        ],
      },
      monosi: {
        title: "Thermal Insulation",
        short: "Interior thermal insulation for energy savings.",
        description:
          "We apply interior thermal insulation with rock wool or EPS behind drywall, for a noticeable reduction in heating & cooling costs.",
        benefits: [
          "Lower energy bills",
          "Comfort all year round",
          "Better energy class rating",
        ],
      },
      oikodomikes: {
        title: "Construction Works",
        short: "Skirting, plastering, patchwork, general renovations.",
        description:
          "We take on complementary construction works: plastering, sanding, wall preparation and minor building repairs.",
        benefits: [
          "One partner for the entire project",
          "Coordination of trades",
          "Reliable delivery on schedule",
        ],
      },
      epikseyaseis: {
        title: "Repairs & Maintenance",
        short: "Restoring damage on drywall and suspended ceilings.",
        description:
          "We repair cracks, holes and moisture damage on existing installations, with fast service across the whole island.",
        benefits: [
          "Fast service",
          "Clean work in occupied spaces",
          "Guaranteed results",
        ],
      },
    },
  },
} as const;

/* ------------------------------- provider hook ----------------------------- */

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("el");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "el" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = translations[lang] as Dict;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // fallback (SSR / outside provider): return Greek
    return { lang: "el" as Lang, setLang: () => {}, t: translations.el as Dict };
  }
  return ctx;
}
