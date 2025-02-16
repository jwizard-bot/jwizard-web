import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocalStorage } from 'usehooks-ts';
import {
  FlexContainer,
  FloatingContainer,
  SafetyContainer,
  SlideMotionContainer,
} from '../container';
import { useMounted } from '../hook/use-mounted';
import { Button } from '../widget/button';
import { Card, CardContent } from '../widget/card';
import { Paragraph } from '../widget/paragraph';

type Props = {
  onTranslate: (i18nKey: string) => string;
  children: React.ReactNode;
};

const CookieConsentModalBase: React.FC<Props> = ({
  onTranslate,
  children,
}): React.ReactElement | null => {
  const mounted = useMounted();
  const [accepted, setAccepted] = useLocalStorage('jwizard-cookie-consent', false);

  if (!mounted) {
    return null;
  }

  return (
    <FloatingContainer mode="fixed" alignmentY="bottom" zIndex={90} className="w-full">
      <AnimatePresence>
        {!accepted && (
          <SlideMotionContainer>
            <SafetyContainer>
              <Card className="sm:m-4">
                <CardContent>
                  <FlexContainer toColOnSmallDevices gap="normal" justify="between">
                    <FlexContainer col>
                      <Paragraph size="sm" className="text-primary font-semibold mb-1">
                        {onTranslate('cookies.header')}
                      </Paragraph>
                      <Paragraph size="sm">{onTranslate('cookies.description')}</Paragraph>
                    </FlexContainer>
                    <FlexContainer
                      col
                      gap="small"
                      fullWidthOnSmallDevices
                      className="min-w-[180px]">
                      <Button asChild className="w-full">
                        {children}
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setAccepted(true)}>
                        {onTranslate('cookies.accept')}
                      </Button>
                    </FlexContainer>
                  </FlexContainer>
                </CardContent>
              </Card>
            </SafetyContainer>
          </SlideMotionContainer>
        )}
      </AnimatePresence>
    </FloatingContainer>
  );
};

export { CookieConsentModalBase };
