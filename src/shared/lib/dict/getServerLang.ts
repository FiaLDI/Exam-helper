import { cookies } from "next/headers";
import { Language } from "@/shared/lib/language";

export async function getServerLang(): Promise<Language> {
  return ((await cookies()).get("lang")?.value as Language) ?? "en";
}
