/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import { getTranslations } from 'next-intl/server';
import { CardBody, CardFooter, Chip, Tooltip } from '@nextui-org/react';
import Ui from '../ui';

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
    <Ui.CardContainer
      isDimmed={!isActive}
      baseStyles="col-span-12 md:col-span-4"
      footerStyles="justify-end">
      <CardBody>
        <h1 className="text-primary leading-[18px] mb-3 font-semibold">
          {title}
        </h1>
        <p className="leading-[18px] text-sm text-default-500">{children}</p>
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
    </Ui.CardContainer>
  );
};

export default KeyFeatureCard;
