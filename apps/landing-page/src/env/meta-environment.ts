'use client';

// meta environments are visible for client which not yet initialized react (or in non-react
// components code)
import { MetaKeys } from '@/env/environment';

const getMetaContent = (name: MetaKeys): string | undefined => {
  const metaTag = document.querySelector(`meta[name="${name}"]`);
  return metaTag ? (metaTag.getAttribute('content') ?? undefined) : undefined;
};

export { getMetaContent };
