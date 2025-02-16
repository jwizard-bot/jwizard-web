import { getTranslations } from 'next-intl/server';
import { ROOT_KEY } from '../config';

const getRootTranslations = async (
  locale?: string,
  namespace?: string
): Promise<(key: string) => string> =>
  await getTranslations({
    locale,
    namespace: namespace ? `${ROOT_KEY}.${namespace}` : ROOT_KEY,
  });

export default getRootTranslations;
