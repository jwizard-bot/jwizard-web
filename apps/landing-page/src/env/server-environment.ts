// environment variables only for server purposes (not included in browser bundle,
// ENTER HERE SECRETS)

type ServerEnvironment = {
  packagesRootPath: string;
};

const serverEnvironment: ServerEnvironment = {
  packagesRootPath: process.env.JWIZARD_BURNED_PACKAGES_ROOT_PATH,
};

export { type ServerEnvironment, serverEnvironment };
