'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { CardBody } from '@nextui-org/react';
import Motion from './motion';
import Ui from './ui';

const CookieConsent: React.FC = (): JSX.Element | null => {
  const t = useTranslations();
  const [isAccepted, setAccepted] = useLocalStorage(
    'jwizard-cookie-consent',
    false
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Ui.FloatingContainer
      mode="fixed"
      alignmentY="bottom"
      zIndex={90}
      className="w-full">
      <AnimatePresence>
        {!isAccepted && (
          <Motion.SlideMotionElement>
            <Ui.SafetyContainer>
              <Ui.CardContainer isOpaque baseStyles="sm:m-4">
                <CardBody>
                  <Ui.FlexContainer toColOnSmallDevices gap justify="between">
                    <Ui.FlexContainer col>
                      <Ui.Paragraph
                        size="sm"
                        className="text-primary font-semibold mb-1">
                        {t('cookiesHeader')}
                      </Ui.Paragraph>
                      <Ui.Paragraph size="sm">
                        {t('cookiesDescription')}
                      </Ui.Paragraph>
                    </Ui.FlexContainer>
                    <Ui.FlexContainer
                      col
                      fullWithOnSmallDevices
                      className="gap-1 min-w-[180px]">
                      <Ui.Button
                        as={NextLink}
                        href="/privacy-policy"
                        className="w-full">
                        {t('title.privacyPolicy')}
                      </Ui.Button>
                      <Ui.Button
                        variant="bordered"
                        className="w-full"
                        onClick={() => setAccepted(true)}>
                        {t('cookiesAccept')}
                      </Ui.Button>
                    </Ui.FlexContainer>
                  </Ui.FlexContainer>
                </CardBody>
              </Ui.CardContainer>
            </Ui.SafetyContainer>
          </Motion.SlideMotionElement>
        )}
      </AnimatePresence>
    </Ui.FloatingContainer>
  );
};

export default CookieConsent;
