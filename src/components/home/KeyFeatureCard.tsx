/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import { getTranslations } from 'next-intl/server';
import { Card, CardBody, CardFooter, Chip, Tooltip } from '@nextui-org/react';

type Props = {
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

const KeyFeatureCard: React.FC<Props> = async ({
  title,
  isActive,
  children,
}): Promise<JSX.Element> => {
  const t = await getTranslations();
  return (
    <Card
      isBlurred
      radius="md"
      classNames={{
        base: clsx([
          'text-default-500 p-2 backdrop-blur',
          'dark:border dark:border-default-100',
          'col-span-12 md:col-span-4',
          { 'opacity-40': !isActive },
        ]),
        footer: 'justify-end',
      }}>
      <CardBody>
        <h1 className="text-primary leading-[18px] mb-3 font-semibold">
          {title}
        </h1>
        <p className="leading-[18px] text-sm">{children}</p>
      </CardBody>
      <CardFooter>
        <Tooltip
          content={t(isActive ? 'activeTooltip' : 'upcomingTooltip')}
          className="max-w-[250px]">
          <Chip
            size="sm"
            className={clsx(isActive && 'bg-primary text-default')}>
            {t(isActive ? 'active' : 'upcoming')}
          </Chip>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default KeyFeatureCard;
