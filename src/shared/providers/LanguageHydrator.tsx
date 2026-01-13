"use client";

import { useEffect } from "react";
import { Language } from "@/shared/lib";
import { useLanguageStore } from "@/features/language-switcher/model/useLanguageStore";

export function LanguageHydrator({ lang }: { lang: Language }) {
  const hydrate = useLanguageStore((s) => s.hydrate);

  useEffect(() => {
    hydrate(lang);
  }, [lang, hydrate]);

  return null;
}
