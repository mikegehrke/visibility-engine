import { en } from './en';
import { de } from './de';

export type DashboardLanguage = 'en' | 'de';

// Deep readonly type that converts string literals to string
type DeepString<T> = T extends string
  ? string
  : T extends object
  ? { readonly [K in keyof T]: DeepString<T[K]> }
  : T;

export type DashboardTranslations = DeepString<typeof en>;

export const dashboardTranslations: Record<DashboardLanguage, DashboardTranslations> = {
  en,
  de,
};
