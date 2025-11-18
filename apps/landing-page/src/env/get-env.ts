import { Environment, environment, metaEnvironment, serverEnvironment } from '@/env/environment';

const getEnv = (): Environment => environment;

const getServerEnv = (): typeof serverEnvironment => serverEnvironment;

const getMetaEnv = (): typeof metaEnvironment => metaEnvironment;

export { getEnv, getServerEnv, getMetaEnv };
