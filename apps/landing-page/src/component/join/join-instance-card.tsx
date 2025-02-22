import * as React from 'react';
import { JoinInstance } from '@/query/type/join-instance';
import { createContrastingColor } from '@jwizard-web/lib/color';
import { FlexContainer } from '@jwizard-web/ui/container';
import { colors } from '@jwizard-web/ui/resolved-config';
import { Card } from '@jwizard-web/ui/widget/card';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { UserRoundPlus } from 'lucide-react';

type Props = {
  joinInstance: JoinInstance;
};

const JoinInstanceCard: React.FC<Props> = ({
  joinInstance: { name, color, link, avatarUrl },
}): React.ReactElement => {
  const textColor = createContrastingColor(color, colors.white, colors.black);

  return (
    <Card roundGap="none" className="w-full" style={{ backgroundColor: color, color: textColor }}>
      <OuterLink to={link} className="p-4">
        <FlexContainer justify="between" align="center">
          <FlexContainer gap="normal" align="center">
            <img src={avatarUrl} width={40} height={40} alt="logo" className="rounded-md" />
            <h2 className="font-bold text-xl">{name}</h2>
          </FlexContainer>
          <UserRoundPlus size={20} className="me-2" />
        </FlexContainer>
      </OuterLink>
    </Card>
  );
};

export { JoinInstanceCard };
