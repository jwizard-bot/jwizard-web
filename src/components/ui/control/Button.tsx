/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { forwardRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { styled } from 'styled-components';

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

const buttonStyles: Record<ButtonType, ButtonColors> = {
  agnosticLight: {
    $fgColor: '--tint-color-950',
    $bgColor: '--light-color-100',
    $border: '--light-color-100',
    $hoverColor: '--tint-color-200',
  },
  agnosticDark: {
    $fgColor: '--light-color-100',
    $bgColor: '--tint-color-950',
    $border: '--tint-color-950',
    $hoverColor: '--tint-color-800',
  },
  light: {
    $fgColor: '--light-control-fg',
    $bgColor: '--light-control-bg',
    $border: '--light-control-bg',
    $hoverColor: '--light-control-hover-bg',
  },
  outlineLight: {
    $fgColor: '--light-control-bg',
    $bgColor: '--transparent-color',
    $border: '--light-control-bg',
    $hoverColor: '--transparent-color',
  },
  theme: {
    $fgColor: '--light-color-100',
    $bgColor: '--theme-color-600',
    $border: '--theme-color-600',
    $hoverColor: '--theme-color-700',
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ styleType, Icon, children, ...rest }, ref) => (
    <ButtonContainer ref={ref} {...buttonStyles[styleType]} {...rest}>
      {Icon && <Icon size={16} />}
      {children}
    </ButtonContainer>
  )
);

const ButtonContainer = styled.button<ButtonColors>`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-3);
  border-radius: var(--button-radius);
  font-size: var(--font-sm);
  text-align: center;
  border: ${({ $border }) => `1px solid var(${$border})`};
  padding: var(--space-2) var(--space-4);
  color: ${({ $fgColor }) => `var(${$fgColor})`};
  background-color: ${({ $bgColor }) => `var(${$bgColor})`};
  &:hover {
    background-color: ${({ $hoverColor }) => `var(${$hoverColor})`};
  }
`;

Button.displayName = 'button';

export default Button;
