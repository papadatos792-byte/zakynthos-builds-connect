import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Το όνομα είναι υποχρεωτικό").max(100),
  phone: z
    .string()
    .trim()
    .min(6, "Δώσε ένα έγκυρο τηλέφωνο")
    .max(30)
    .regex(/^[0-9+()\-\s]+$/, "Μη έγκυρο τηλέφωνο"),
  email: z.string().trim().email("Μη έγκυρο email").max(200),
  message: z.string().trim().min(10, "Γράψε λίγα λόγια για το έργο").max(2000),
  area: z.string().trim().max(120).optional().or(z.literal("")),
  sqm: z.string().trim().max(20).optional().or(z.literal("")),
  // honeypot: πρέπει να είναι άδειο (bots το γεμίζουν)
  website: z.string().max(0, "spam").optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    // Anti-spam honeypot — απαντάμε ok για να μη μάθει το bot ότι μπλοκαρίστηκε
    if (data.website && data.website.length > 0) {
      return { ok: true as const };
    }

    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      console.error("[contact] FORMSPREE_ENDPOINT δεν έχει οριστεί");
      throw new Error("Email service not configured");
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      area: data.area || "-",
      sqm: data.sqm || "-",
      message: data.message,
      _subject: `Νέα αίτηση από τη σελίδα — ${data.name}`,
      _replyto: data.email,
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[contact] Formspree error", res.status, body);
      throw new Error(`Formspree responded ${res.status}`);
    }

    return { ok: true as const };
  });
