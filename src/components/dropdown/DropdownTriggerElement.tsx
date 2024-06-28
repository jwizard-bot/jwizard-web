/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { IconBaseProps, IconType } from 'react-icons/lib';
import { DropdownTrigger } from '@nextui-org/react';
import Ui from '../ui';

type Props = {
  i18nKey: string;
  ChevronIcon: IconType;
  iconProps: IconBaseProps;
};

const DropdownTriggerElement: React.FC<Props> = ({
  i18nKey,
  ChevronIcon,
  iconProps,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DropdownTrigger>
      <Ui.TransparentButton
        className="p-0"
        endContent={<ChevronIcon {...iconProps} />}>
        {t(`${i18nKey}.text`)}
      </Ui.TransparentButton>
    </DropdownTrigger>
  );
};

export default DropdownTriggerElement;
