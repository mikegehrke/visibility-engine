// Supported languages for the public pages
export const supportedLanguages = ['en', 'de'] as const;
export type Lang = (typeof supportedLanguages)[number];

// Validate lang parameter
export function isValidLang(lang: string): lang is Lang {
  return supportedLanguages.includes(lang as Lang);
}
