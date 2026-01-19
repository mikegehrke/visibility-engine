'use client';

import { useParams } from 'next/navigation';

/**
 * Hook that returns a link helper function for language-prefixed URLs
 * Use this in any page/component under [lang]/ to create proper language-aware links
 */
export function useLangLink() {
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  
  /**
   * Creates a language-prefixed link
   * @param path - The path without language prefix (e.g., '/features', '/blog')
   * @returns The path with language prefix (e.g., '/en/features', '/de/blog')
   */
  const l = (path: string) => `/${lang}${path}`;
  
  return { l, lang };
}
