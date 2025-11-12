import { Environment, environment } from '@/env/environment';
import { ServerEnvironment, serverEnvironment } from '@/env/server-environment';

const getEnv = (): Environment => environment;

const getServerEnv = (): ServerEnvironment => serverEnvironment;

export { getEnv, getServerEnv };
