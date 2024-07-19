'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
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
  cookieHandler.set(COOKIE_NAME, nextLanguage);
}
