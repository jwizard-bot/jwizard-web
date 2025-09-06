import logoBlack from '@jwizard-web/assets/logo/logo-black.svg';
import logoWhite from '@jwizard-web/assets/logo/logo-white.svg';
import { cn } from './util';

const themedLogos = {
  light: { image: logoWhite, className: cn('hidden', 'dark:block') },
  dark: { image: logoBlack, className: cn('block', 'dark:hidden') },
};

export { themedLogos };
