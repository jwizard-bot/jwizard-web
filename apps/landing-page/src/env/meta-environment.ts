'use client';

import { MetaKeys } from '@/env/environment';

const getMetaContent = (name: MetaKeys): string | undefined => {
  const metaTag = document.querySelector(`meta[name="${name}"]`);
  return metaTag ? (metaTag.getAttribute('content') ?? undefined) : undefined;
};

export { getMetaContent };
