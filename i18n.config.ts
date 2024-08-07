export const locales = ["en", "fr", "al"] as const;
export type Locale = (typeof locales)[number];