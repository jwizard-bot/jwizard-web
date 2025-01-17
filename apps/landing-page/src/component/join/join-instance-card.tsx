/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { JoinInstance } from '@/query/type/join-instance';
import logoBlack from '@jwizard-web/assets/logo/logo-black.svg';
import logoWhite from '@jwizard-web/assets/logo/logo-white.svg';
import { createContrastingTextColor } from '@jwizard-web/lib/color';
import { FlexContainer } from '@jwizard-web/ui/container';
import fullConfig from '@jwizard-web/ui/resolved-config';
import { Card } from '@jwizard-web/ui/widget/card';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { UserRoundPlus } from 'lucide-react';

const { white, black } = fullConfig.theme.colors;

const themedLogos: Record<string, string> = {
  [white]: logoWhite,
  [black]: logoBlack,
};

type Props = {
  joinInstance: JoinInstance;
};

const JoinInstanceCard: React.FC<Props> = ({
  joinInstance: { name, color, link },
}): React.ReactElement => {
  const textColor = createContrastingTextColor(color, white, black);

  return (
    <Card roundGap={false} className="w-full" style={{ backgroundColor: color, color: textColor }}>
      <OuterLink to={link} className="p-5">
        <FlexContainer justify="between" align="center">
          <FlexContainer gap>
            <img src={themedLogos[textColor]} width={30} height={30} alt="logo" />
            <h2 className="font-bold text-xl">{name}</h2>
          </FlexContainer>
          <UserRoundPlus size={20} className="me-2" />
        </FlexContainer>
      </OuterLink>
    </Card>
  );
};

export { JoinInstanceCard };
