declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_CANONICAL_URL: string;
      NEXT_API_URL: string;
      NEXT_DASHBOARD_URL: string;
      JW_BURNED_BUILD_VERSION: string;
      JW_BURNED_PACKAGES_ROOT_PATH: string;
    }
  }
}

export {};
