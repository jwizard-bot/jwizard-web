import { kebabCase } from 'change-case';

const cssVariables: Record<string, string> = {
  white: '0 100% 100%',
  black: '0 100% 0',
  background: '0 0% 100%',
  foreground: '240 10% 3.9%',
  card: '0 0% 100%',
  cardForeground: '240 10% 3.9%',
  popover: '0 0% 100%',
  popoverForeground: '240 10% 3.9%',
  primary: '240 5.9% 10%',
  primaryForeground: '0 0% 98%',
  secondary: '240 4.8% 95.9%',
  secondaryForeground: '240 5.9% 10%',
  muted: '240 4.8% 95.9%',
  mutedForeground: '240 3.8% 46.1%',
  mutedLightForeground: '240 3.8% 46.1%',
  mutedDarkForeground: '240 5% 64.9%',
  accent: '240 4.8% 95.9%',
  accentForeground: '240 5.9% 10%',
  destructive: '0 72.22% 50.59%',
  destructiveForeground: '0 0% 98%',
  border: '240 5.9% 90%',
  input: '240 5.9% 90%',
  ring: '240 5% 64.9%',
  radius: '0.7rem',
  sidebarBackground: '0 0% 98%',
  sidebarForeground: '240 5.3% 26.1%',
  sidebarPrimary: '240 5.9% 10%',
  sidebarPrimaryForeground: '0 0% 98%',
  sidebarAccent: '240 4.8% 95.9%',
  sidebarAccentForeground: '240 5.9% 10%',
  sidebarBorder: '220 13% 91%',
  sidebarRing: '240 5% 64.9%',
  shadowSmall:
    '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
  shadowMedium:
    '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
  shadowLarge:
    '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
  primarySuccess: '142.1 70.6% 45.3%',
  primaryWarning: '24.6 95% 53.1%',
  primaryDanger: '0 84.2% 60.2%',
} as const;

const darkCssVariables: Record<string, string> = {
  background: '240 10% 3.9%',
  foreground: '0 0% 98%',
  card: '240 10% 3.9%',
  cardForeground: '0 0% 98%',
  popover: '240 10% 3.9%',
  popoverForeground: '0 0% 98%',
  primary: '0 0% 98%',
  primaryForeground: '240 5.9% 10%',
  secondary: '240 3.7% 15.9%',
  secondaryForeground: '0 0% 98%',
  muted: '240 3.7% 15.9%',
  mutedForeground: '240 5% 64.9%',
  accent: '240 3.7% 15.9%',
  accentForeground: '0 0% 98%',
  destructive: '0 62.8% 30.6%',
  destructiveForeground: '0 85.7% 97.3%',
  border: '240 3.7% 15.9%',
  input: '240 3.7% 15.9%',
  ring: '240 4.9% 83.9%',
  sidebarBackground: '240 5.9% 10%',
  sidebarForeground: '240 4.8% 95.9%',
  sidebarPrimary: '224.3 76.3% 48%',
  sidebarPrimaryForeground: '0 0% 100%',
  sidebarAccent: '240 3.7% 15.9%',
  sidebarAccentForeground: '240 4.8% 95.9%',
  sidebarBorder: '240 3.7% 15.9%',
  sidebarRing: '240 4.9% 83.9%',
  shadowSmall:
    '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
  shadowMedium:
    '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
  shadowLarge:
    '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
  primarySuccess: '142.1 76.2% 36.3%',
  primaryWarning: '20.5 90.2% 48.2%',
  primaryDanger: '0 72.2% 50.6%',
} as const;

const mapToCssProperties = (variables: Record<string, string>): Record<string, string> =>
  Object.entries(variables).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`--${kebabCase(key)}`]: value,
    }),
    {}
  );

export { cssVariables, darkCssVariables, mapToCssProperties };
