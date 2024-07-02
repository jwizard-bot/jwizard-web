/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { TranslationSources } from '@/i18n';

type Size = 'md' | 'xl';

type Props = {
  i18nText?: string;
  i18nTranslations?: TranslationSources[];
  size?: Size;
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  (
    { i18nText, i18nTranslations, size = 'xl', children, className, ...rest },
    ref
  ) => {
    const { t } = useTranslation(i18nTranslations);

    return (
      <p
        ref={ref}
        className={clsx(
          'text-default-500',
          {
            'text-xl': size === 'xl',
            'text-md': size === 'md',
          },
          className
        )}
        {...rest}>
        {i18nText ? t(i18nText) : children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
