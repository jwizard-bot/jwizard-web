/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { TranslationSources } from '@/i18n';

type HeaderSize = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  i18nText?: string;
  translationSources?: TranslationSources[];
  isCentered?: boolean;
  size?: HeaderSize;
} & HTMLAttributes<HTMLHeadingElement>;

const ContentHeader = forwardRef<HTMLHeadingElement, Props>(
  (
    {
      i18nText,
      translationSources,
      isCentered = false,
      size = 'sm',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation(translationSources);
    return (
      <h3
        ref={ref}
        className={clsx(
          'font-logo mb-4 sm:mb-8',
          { 'text-center': isCentered },
          { 'text-3xl sm:text-4xl': size === 'sm' },
          { 'text-4xl sm:text-5xl': size === 'md' },
          { 'text-5xl sm:text-6xl': size === 'lg' },
          { 'text-6xl sm:text-8xl': size === 'xl' },
          className
        )}
        {...rest}>
        {i18nText ? t(i18nText) : children}
        <span className="text-default-400"></span>
      </h3>
    );
  }
);

ContentHeader.displayName = 'ContentHeader';

export default ContentHeader;
