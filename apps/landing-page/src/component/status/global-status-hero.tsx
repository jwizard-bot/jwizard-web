import * as React from 'react';
import NextLink from 'next/link';
import { SeverityIcon } from '@jwizard-web/ui/component/severity-icon';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';

type Props = {
  up: boolean | null;
  headerContent: string;
  otherDomesticServicesUrl: string;
  otherDomesticServicesStatusI18n: string;
  externalServicesWebsiteUrl: string;
  t: (i18nKey: string) => string;
};

const GlobalStatusHero: React.FC<Props> = ({
  up,
  headerContent,
  otherDomesticServicesUrl,
  otherDomesticServicesStatusI18n,
  externalServicesWebsiteUrl,
  t,
}): React.ReactElement => (
  <SafetyContainer spaceUp="large" spaceBelow="large">
    <FlexContainer col className="sm:items-center">
      <FlexContainer col align="center" gap="normal">
        <SeverityIcon allGood={up} size="lg" iconSize={25} />
        <Header headingVariant="h1" margin="none" className="text-center" size="md">
          {headerContent}
        </Header>
        <Paragraph className="md:max-w-[60%] sm:text-center">{t('description')}</Paragraph>
      </FlexContainer>
      <FlexContainer gap="normal" toColOnSmallDevices fullWidthOnSmallDevices className="mt-6">
        <Button asChild size="lg">
          <NextLink href={otherDomesticServicesUrl} className="w-full" scroll={false}>
            {t(otherDomesticServicesStatusI18n)}
            <ArrowRight />
          </NextLink>
        </Button>
        <Button asChild variant="outline" size="lg">
          <OuterLink to={externalServicesWebsiteUrl} className="w-full">
            {t('checkOtherServicesStatus')}
            <SquareArrowOutUpRight />
          </OuterLink>
        </Button>
      </FlexContainer>
    </FlexContainer>
  </SafetyContainer>
);

export { GlobalStatusHero };
