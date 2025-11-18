import { Environment, environment, metaEnvironment } from '@/env/environment';
import { ServerEnvironment, serverEnvironment } from '@/env/server-environment';

const getEnv = (): Environment => environment;

const getServerEnv = (): ServerEnvironment => serverEnvironment;

const getMetaEnv = (): typeof metaEnvironment => metaEnvironment;

export { getEnv, getServerEnv, getMetaEnv };
