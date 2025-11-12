declare global {
  interface Window {
    jw: {
      JWIZARD_CANONICAL_URL: string;
      JWIZARD_LANDING_PAGE_URL: string;
      JWIZARD_ANALYTICS_UMAMI_URL?: string;
      JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID?: string;
    };
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWIZARD_IS_PROD: boolean;
      JWIZARD_BUILD_VERSION: string;
    }
  }
}

export {};
