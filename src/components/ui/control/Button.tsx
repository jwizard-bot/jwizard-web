/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { forwardRef, useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { ThemeContext, styled } from 'styled-components';
import { space } from '@/styles/global';
import { CssThemedStyles } from '@/styles/types';

type ButtonType =
  | 'agnosticLight'
  | 'agnosticDark'
  | 'outlineLight'
  | 'light'
  | 'theme';

export type ButtonProps = {
  styleType: ButtonType;
  Icon?: React.FC<IconBaseProps>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonColors = {
  $fgColor: string;
  $bgColor: string;
  $border: string;
  $hoverColor: string;
};

const buttonStyles = ({
  control,
  main,
}: CssThemedStyles): Record<ButtonType, ButtonColors> => ({
  agnosticLight: {
    $fgColor: 'var(--gray-color-800)',
    $bgColor: 'var(--theme-color-50)',
    $border: 'var(--theme-color-50)',
    $hoverColor: 'var(--theme-color-100)',
  },
  agnosticDark: {
    $fgColor: 'var(--theme-color-50)',
    $bgColor: 'var(--gray-color-800)',
    $border: 'var(--gray-color-800)',
    $hoverColor: 'var(--gray-color-700)',
  },
  light: {
    $fgColor: main.bg,
    $bgColor: main.fg,
    $border: main.fg,
    $hoverColor: control.light.hover,
  },
  outlineLight: {
    $fgColor: main.bg,
    $bgColor: 'transparent',
    $border: main.bg,
    $hoverColor: 'transparent',
  },
  theme: {
    $fgColor: 'var(--theme-color-50)',
    $bgColor: 'var(--theme-color-650)',
    $border: 'var(--theme-color-650)',
    $hoverColor: 'var(--theme-color-700)',
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ styleType, Icon, children, ...rest }, ref) => {
    const themeContext = useContext(ThemeContext) as CssThemedStyles;
    return (
      <ButtonContainer
        ref={ref}
        {...buttonStyles(themeContext)[styleType]}
        {...rest}>
        {Icon && <Icon size={16} />}
        {children}
      </ButtonContainer>
    );
  }
);

const ButtonContainer = styled.button<ButtonColors>`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${space(3)};
  border-radius: var(--button-radius);
  font-size: var(--font-sm);
  text-align: center;
  border: ${({ $border }) => `1px solid ${$border}`};
  padding: ${space(2)} ${space(4)};
  color: ${({ $fgColor }) => $fgColor};
  background-color: ${({ $bgColor }) => $bgColor};
  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};
  }
`;

Button.displayName = 'button';

export default Button;
