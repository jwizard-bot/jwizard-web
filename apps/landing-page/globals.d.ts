declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWIZARD_CANONICAL_URL: string;
      JWIZARD_API_URL: string;
      JWIZARD_DASHBOARD_URL: string;
      JWIZARD_BURNED_BUILD_VERSION: string;
      JWIZARD_BURNED_PACKAGES_ROOT_PATH: string;
    }
  }
}

export {};
