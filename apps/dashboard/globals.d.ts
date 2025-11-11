declare global {
  interface Window {
    jw: {
      WEBPACK_CANONICAL_URL: string;
      WEBPACK_LANDING_PAGE_URL: string;
    };
  }

  namespace NodeJS {
    interface ProcessEnv {
      WEBPACK_IS_PROD: boolean;
      WEBPACK_BUILD_VERSION: string;
    }
  }
}

export {};
