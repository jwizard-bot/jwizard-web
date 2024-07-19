'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getTranslations } from 'next-intl/server';
import { ROOT_KEY } from '../config';

const getRootTranslations = async (
  locale?: string,
  namespace?: string
): Promise<ReturnType<typeof getTranslations>> =>
  await getTranslations({
    locale,
    namespace: namespace ? `${ROOT_KEY}.${namespace}` : ROOT_KEY,
  });

export default getRootTranslations;
