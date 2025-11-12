'use client';

import { useEffect } from 'react';

type Props = {
  url?: string;
  websiteId?: string;
};

const SCRIPT_ID = 'umami-analytics';

const UmamiAnalyticsLoader = ({ url, websiteId }: Props): null => {
  useEffect(() => {
    if (typeof window === 'undefined' || document.getElementById(SCRIPT_ID)) {
      return;
    }
    if (url && websiteId) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = url;
      script.setAttribute('data-website-id', websiteId);
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [url, websiteId]);

  return null;
};

export { UmamiAnalyticsLoader };
