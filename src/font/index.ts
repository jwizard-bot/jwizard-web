/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import localFont from 'next/font/local';

const geist = localFont({
  src: './ttf/geist.ttf',
  display: 'swap',
  variable: '--font-body',
});

const paytone = localFont({
  src: './ttf/paytone.ttf',
  display: 'swap',
  variable: '--font-logo',
});

const localFonts = [geist, paytone] as const;

const variableNames = localFonts.reduce((acc, font) => {
  return acc ? `${acc} ${font.variable}` : font.variable;
}, '');

export { variableNames };
