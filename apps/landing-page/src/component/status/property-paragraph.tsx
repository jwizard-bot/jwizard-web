'use client';

import * as React from 'react';
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { createContrastingColor } from '@jwizard-web/lib/color';
import { colors } from '@jwizard-web/ui/resolved-config';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import clsx from 'clsx';
import { usePropertyParagraphContext } from './property-paragraph-context';

type Props = {
  i18nKey: string;
  value: string | number | null;
};

const PropertyParagraph: React.FC<Props> = ({ i18nKey, value }): React.ReactElement => {
  const t = useTranslations();
  const { color } = usePropertyParagraphContext();

  const mutedLight = colors.muted['dark-foreground'];
  const mutedDark = colors.muted['light-foreground'];

  const calcColor = useCallback(
    (light: string, dark: string) => {
      if (color) {
        return {
          color: createContrastingColor(color, light, dark),
        };
      }
      return {};
    },
    [color]
  );

  return (
    <Paragraph size="sm" style={calcColor(mutedLight, mutedDark)}>
      {t(i18nKey)}:{' '}
      <strong
        style={calcColor(colors.white, colors.black)}
        className={clsx({ 'text-primary': !color })}>
        {value === null ? '?' : value}
      </strong>
    </Paragraph>
  );
};

export { PropertyParagraph };
