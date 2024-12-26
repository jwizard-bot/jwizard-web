/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const arrayGenerator = (length: number, insertCallback: () => string): string[] =>
  Array.from({ length }, () => insertCallback());

export { arrayGenerator };
