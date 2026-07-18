import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useT } from "@/lib/i18n";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function ContactForm() {
  const { t } = useT();
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (data: Record<string, string>): Errors => {
    const e: Errors = {};
    if (!data.name || data.name.trim().length < 2) e.name = t.form.errName;
    if (!data.phone || !/^[0-9+()\-\s]{6,}$/.test(data.phone.trim()))
      e.phone = t.form.errPhone;
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      e.email = t.form.errEmail;
    if (!data.message || data.message.trim().length < 10)
      e.message = t.form.errMessage;
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
        <h3 className="mt-4 font-display text-xl font-semibold">{t.form.successTitle}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t.form.successBody}</p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          {t.form.newMessage}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label={t.form.aria}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.form.name} name="name" required error={errors.name} autoComplete="name" />
        <Field label={t.form.phone} name="phone" type="tel" required error={errors.phone} autoComplete="tel" />
      </div>

      <Field label={t.form.email} name="email" type="email" required error={errors.email} autoComplete="email" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.form.area} name="area" placeholder={t.form.areaPh} />
        <Field label={t.form.sqm} name="sqm" placeholder={t.form.sqmPh} inputMode="numeric" />
      </div>

      <div>
        <Label htmlFor="message">
          {t.form.message} <span className="text-accent">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder={t.form.messagePh}
          className="mt-1.5"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <p className="text-xs text-muted-foreground">{t.form.consent}</p>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center">
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
            <AlertCircle className="size-4" /> {t.form.error}
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
          {status === "sending" ? t.form.sending : t.form.submit}
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
