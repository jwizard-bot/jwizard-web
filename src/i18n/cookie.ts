'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { DateTime } from 'luxon';
import { cookies } from 'next/headers';
import { COOKIE_NAME, Language } from './config';

export async function readCookieLanguage(): Promise<string | undefined> {
  const cookieHandler = cookies();
  return cookieHandler.get(COOKIE_NAME)?.value;
}

export async function saveCookieLanguage(
  nextLanguage: Language
): Promise<void> {
  const cookieHandler = cookies();
  const maxAge = DateTime.fromJSDate(new Date())
    .plus({ days: 400 })
    .toSeconds();
  cookieHandler.set(COOKIE_NAME, nextLanguage, { maxAge });
}
