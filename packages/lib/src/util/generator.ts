const arrayGenerator = (length: number, insertCallback: () => string): string[] =>
  Array.from({ length }, () => insertCallback());

export { arrayGenerator };
