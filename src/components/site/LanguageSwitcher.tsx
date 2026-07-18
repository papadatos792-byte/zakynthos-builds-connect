import { Languages } from "lucide-react";
import { useT, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();
  const next: Lang = lang === "el" ? "en" : "el";
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${className}`}
      aria-label={`Switch language to ${next === "el" ? "Ελληνικά" : "English"}`}
      title={next === "el" ? "Ελληνικά" : "English"}
    >
      <Languages className="size-3.5" aria-hidden />
      <span>{lang === "el" ? "EN" : "EL"}</span>
    </button>
  );
}
