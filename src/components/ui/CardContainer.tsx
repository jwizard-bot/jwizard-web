/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';
import { Card, CardProps } from '@nextui-org/react';
import { generateName } from './helper';

type Props = {
  isOpaque?: boolean;
  isDimmed?: boolean;
  baseStyles?: string;
  footerStyles?: string;
} & Omit<HTMLProps<CardProps>, 'className'>;

const CardContainer = forwardRef<HTMLDivElement, Props>(
  ({ baseStyles, footerStyles, isOpaque, isDimmed, children }, ref) => (
    <Card
      ref={ref}
      isBlurred
      radius="md"
      classNames={{
        base: clsx(
          'p-2 backdrop-blur dark:border dark:border-default-100 text-primary',
          {
            'bg-primary-foreground/90 dark:bg-primary-foreground/80': isOpaque,
            'opacity-40': isDimmed,
          },
          baseStyles
        ),
        footer: footerStyles,
      }}>
      {children}
    </Card>
  )
);

CardContainer.displayName = generateName('CardContainer');

export default CardContainer;
