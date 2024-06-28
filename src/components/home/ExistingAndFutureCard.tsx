/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Skeleton,
  Tooltip,
} from '@nextui-org/react';

type Props = {
  title?: string;
  isActive?: boolean;
  isLoaded?: boolean;
  children?: React.ReactNode;
};

const ExistingAndFutureCard: React.FC<Props> = ({
  title,
  isActive,
  isLoaded,
  children,
}): JSX.Element => {
  const { t } = useTranslation(['homePage']);

  return (
    <Card
      isBlurred
      radius="md"
      classNames={{
        base: clsx([
          'text-default-500 p-2 backdrop-blur',
          'dark:border dark:border-default-100',
          'col-span-12 md:col-span-4',
          { 'opacity-40': !isActive && isLoaded },
        ]),
        footer: 'justify-end',
      }}>
      <CardBody>
        <Skeleton className="rounded-lg w-full min-h-16" isLoaded={isLoaded}>
          <h1 className="text-primary leading-[18px] mb-3 font-semibold">
            {title}
          </h1>
          <p className="leading-[18px] text-sm">{children}</p>
        </Skeleton>
      </CardBody>
      <CardFooter>
        <Tooltip
          content={t(isActive ? 'activeTooltip' : 'upcomingTooltip')}
          className="max-w-[250px]">
          <Skeleton className="rounded-lg" isLoaded={isLoaded}>
            <Chip
              size="sm"
              className={clsx(
                isActive && isLoaded && 'bg-primary text-default'
              )}>
              {t(isActive ? 'active' : 'upcoming')}
            </Chip>
          </Skeleton>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default ExistingAndFutureCard;
