'use server';

import { cookies } from 'next/headers';
import { Language } from '@jwizard-web/lib/i18n';
import { DateTime } from 'luxon';
import { COOKIE_NAME } from './config';

export async function readCookieLanguage(): Promise<string | undefined> {
  const cookieHandler = await cookies();
  return cookieHandler.get(COOKIE_NAME)?.value;
}

export async function saveCookieLanguage(nextLanguage: Language): Promise<void> {
  const cookieHandler = await cookies();
  const maxAge = DateTime.fromJSDate(new Date()).plus({ days: 400 }).toSeconds();
  cookieHandler.set(COOKIE_NAME, nextLanguage, { maxAge });
}
