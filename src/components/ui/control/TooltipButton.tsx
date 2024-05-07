/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { space } from '@/styles/global';
import {
  Placement,
  arrow,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import Button, { ButtonProps } from './Button';

type TooltipProps = ButtonProps & {
  placement: Placement;
  tooltipI18nLabel: string;
};

const TooltipButton: React.FC<TooltipProps> = ({
  placement,
  tooltipI18nLabel,
  children,
  ...rest
}): JSX.Element => {
  const { styleType, ...buttonProps } = rest;

  const arrowRef = useRef(null);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      arrow({
        element: arrowRef,
      }),
    ],
  });
  const { isMounted, styles } = useTransitionStyles(context);

  const hover = useHover(context);
  const { getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <Button ref={refs.setReference} styleType={styleType} {...buttonProps}>
        {children}
      </Button>
      {isMounted && (
        <TooltipContainer
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}>
          <TooltipArrow
            ref={arrowRef}
            $x={middlewareData.arrow?.x || 0}
            $y={middlewareData.arrow?.y || 0}
          />
          {t(tooltipI18nLabel)}
        </TooltipContainer>
      )}
    </>
  );
};

const TooltipContainer = styled.div`
  background-color: ${({ theme }) => theme.main.fg};
  color: ${({ theme }) => theme.main.bg};
  border-radius: 10px;
  margin-top: ${space(2)};
  padding: ${space(2)} ${space(3)};
  font-size: var(--font-sm);
  font-weight: 500;
  box-shadow: var(--base-shadow);
`;

const TooltipArrow = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  top: ${({ $y }) => `${$y}px`};
  left: ${({ $x }) => `${$x}px`};
  background-color: ${({ theme }) => theme.main.fg};
  width: 15px;
  height: 15px;
  transform: translateY(-3px) rotate(45deg);
  z-index: -1;
`;

export default TooltipButton;