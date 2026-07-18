import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useT } from "@/lib/i18n";

const KEY = "cookie-consent-v1";

export function CookieConsent() {
  const { t } = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  if (!visible) return null;

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookies.aria}
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-card p-4 shadow-elegant sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
            <Cookie className="size-5" aria-hidden />
          </span>
          <p className="text-sm text-foreground">{t.cookies.text}</p>
        </div>
        <div className="flex shrink-0 gap-2 sm:ml-auto">
          <Button variant="outline" size="sm" onClick={() => decide("declined")}>
            {t.cookies.decline}
          </Button>
          <Button variant="brand" size="sm" onClick={() => decide("accepted")}>
            {t.cookies.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
