
## Στόχος
Να στέλνει η φόρμα επικοινωνίας πραγματικά emails στο **`ermalshqevi@gmail.com`** (email της επιχείρησης) μέσω **Formspree**, χωρίς να χρειάζεται domain ή backend setup.

## Αλλαγές στον κώδικα

### 1. `src/lib/business.ts`
Αλλαγή του `email` από `lazourasdim@gmail.com` σε **`ermalshqevi@gmail.com`**. Αυτόματα ενημερώνονται:
- Header (κουμπί email)
- Footer (στοιχεία επικοινωνίας)
- Σελίδα Επικοινωνίας (info card)
- SEO schema.org LocalBusiness

### 2. `src/lib/contact.functions.ts`
Ο server function θα κάνει `fetch` στο Formspree endpoint (ήδη υλοποιημένο σε προηγούμενο turn):
- Διαβάζει `FORMSPREE_ENDPOINT` από `process.env` (secret).
- Στέλνει `name, email, phone, area, sqm, message` + `_subject` + `_replyto` = email πελάτη.
- Σε error → throw, ώστε η φόρμα να δείξει «Κάτι πήγε στραβά».
- Το honeypot (`website`) παραμένει.

### 3. Αποθήκευση `FORMSPREE_ENDPOINT` ως secret
Μέσω της ασφαλούς φόρμας του Lovable (όχι στον κώδικα).

## Τι πρέπει να κάνεις εσύ

### Α. Δημιουργία Formspree form (5 λεπτά)
1. Πήγαινε στο **https://formspree.io/register** και κάνε εγγραφή.
2. Επιβεβαίωσε το email σου.
3. Dashboard → **+ New Form**
   - Name: `Γυψοτεχνική Ζακύνθου`
   - Send emails to: **`ermalshqevi@gmail.com`** ← το email του πελάτη
4. Αντέγραψε το endpoint (`https://formspree.io/f/xxxxxxxx`) και πες μου «έτοιμο».
5. Θα σου ανοίξω τη φόρμα ασφαλούς εισαγωγής για να το παστάρεις.

**Σημαντικό**: Το Formspree θα στείλει email επιβεβαίωσης στο `ermalshqevi@gmail.com` — ο ιδιοκτήτης πρέπει να πατήσει το link «Confirm» πριν αρχίσουν να έρχονται τα mails.

## Πώς θα ελέγξεις ότι το email φτάνει

### 1. Δοκιμή στο preview
- Άνοιξε το preview → μενού → **Επικοινωνία**
- Συμπλήρωσε τη φόρμα με πραγματικά στοιχεία (χρησιμοποίησε δικό σου email στο πεδίο «Email»)
- Πάτα **Αποστολή Μηνύματος**
- ✅ Επιτυχία: κουμπί «Αποστολή...» → πράσινο «Ευχαριστούμε!»
- ❌ Αποτυχία: κόκκινο μήνυμα «Κάτι πήγε στραβά»

### 2. Έλεγχος inbox στο `ermalshqevi@gmail.com`
- Το email φτάνει σε **≤1 λεπτό**
- Αποστολέας: `noreply@formspree.io`
- Θέμα: «Νέα αίτηση από τη σελίδα — [Όνομα]»
- **Έλεγξε και τον φάκελο Spam** — αν είναι εκεί, «Not spam»
- Πρώτο mail: πάτα το «Confirm» link του Formspree

### 3. Αν δεν έρθει σε 5 λεπτά
- Formspree dashboard → **Submissions**: αν φαίνεται εκεί, το πρόβλημα είναι στο Gmail (spam)
- Αν δεν φαίνεται, στείλε μου screenshot από το console — θα δω αν επέστρεψε 401/422

### 4. Validation (χωρίς αποστολή)
- Άδεια φόρμα + submit → κόκκινα μηνύματα κάτω από κάθε πεδίο
- Email `abc` → «Δώσε ένα έγκυρο email»
- Μήνυμα <10 χαρακτήρες → «Γράψε λίγα λόγια»

### 5. Δοκιμή σε κινητό
- Άνοιξε το preview URL στο κινητό
- Επιβεβαίωσε ότι η φόρμα είναι responsive
- Το κουμπί τηλεφώνου στο header ανοίγει την εφαρμογή κλήσης

### 6. Μετά το deploy
- Επανάλαβε τα βήματα 1-2 στο τελικό `.lovable.app` URL

## Σύνδεση με GitHub (μετά την ολοκλήρωση)

Ναι, το Lovable υποστηρίζει two-way sync με GitHub. Βήματα:

1. Στο Lovable editor, πάτα το **+ (Plus)** κάτω αριστερά στο chat input
2. **GitHub** → **Connect project**
3. Εξουσιοδότησε το Lovable GitHub App
4. Επίλεξε GitHub account/organization
5. **Create Repository** → δημιουργείται νέο repo με όλο τον κώδικα

Από εκεί και μετά:
- Αλλαγές στο Lovable → αυτόματο push στο GitHub
- Αλλαγές στο GitHub → αυτόματο sync στο Lovable
- Μπορείς να κάνεις `git clone` το repo και να δουλέψεις τοπικά

**Περιορισμοί**: Ένας GitHub λογαριασμός ανά Lovable account. Δεν γίνεται import υπάρχοντος repo — μόνο export.

## Formspree free plan περιορισμοί
- **50 submissions/μήνα** (αρκετά για local business)
- Δεν έχει auto-reply στον πελάτη
- Το «reply-to» είναι το email του πελάτη → πατάς «Απάντηση» στο Gmail και πάει σε αυτόν

## Επόμενα βήματα
1. Θα αλλάξω το business email σε `ermalshqevi@gmail.com`
2. Δημιούργησε τον λογαριασμό Formspree με email παραλαβής `ermalshqevi@gmail.com`
3. Στείλε μου το endpoint URL
