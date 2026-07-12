import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (data: Record<string, string>): Errors => {
    const e: Errors = {};
    if (!data.name || data.name.trim().length < 2) e.name = "Συμπλήρωσε το όνομά σου.";
    if (!data.phone || !/^[0-9+()\-\s]{6,}$/.test(data.phone.trim()))
      e.phone = "Δώσε ένα έγκυρο τηλέφωνο.";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      e.email = "Δώσε ένα έγκυρο email.";
    if (!data.message || data.message.trim().length < 10)
      e.message = "Γράψε λίγα λόγια για το έργο σου.";
    return e;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const eMap = validate(data);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return;

    setStatus("sending");
    try {
      await submit({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          area: data.area || "",
          sqm: data.sqm || "",
          website: data.website || "",
        },
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-6" aria-hidden />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold">Ευχαριστούμε!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Λάβαμε το μήνυμά σου. Θα επικοινωνήσουμε μαζί σου το συντομότερο δυνατό στα στοιχεία
          που μας έδωσες.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Νέο μήνυμα
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Φόρμα επικοινωνίας">
      {/* Honeypot — κρυφό πεδίο για bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Όνομα" name="name" required error={errors.name} autoComplete="name" />
        <Field label="Τηλέφωνο" name="phone" type="tel" required error={errors.phone} autoComplete="tel" />
      </div>

      <Field label="Email" name="email" type="email" required error={errors.email} autoComplete="email" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Περιοχή" name="area" placeholder="π.χ. Λαγανάς, Ζάκυνθος" />
        <Field label="Τετραγωνικά (m²)" name="sqm" placeholder="π.χ. 80" inputMode="numeric" />
      </div>

      <div>
        <Label htmlFor="message">
          Μήνυμα <span className="text-accent">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Πες μας για το έργο σου: τύπος χώρου, τι θα ήθελες, ενδεικτικά τετραγωνικά…"
          className="mt-1.5"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Πατώντας «Αποστολή» συναινείς στην επικοινωνία μας μαζί σου για την αίτησή σου.
      </p>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center">
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
            <AlertCircle className="size-4" /> Κάτι πήγε στραβά. Δοκίμασε ξανά ή κάλεσέ μας.
          </p>
        )}
        <Button
          type="submit"
          variant="brand"
          size="lg"
          disabled={status === "sending"}
          className="sm:ml-auto"
        >
          <Send className="size-4" />
          {status === "sending" ? "Αποστολή..." : "Αποστολή Μηνύματος"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
};

function Field({ label, name, type = "text", required, error, ...rest }: FieldProps) {
  return (
    <div>
      <Label htmlFor={name}>
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-1.5"
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
