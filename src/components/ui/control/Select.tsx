/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { space } from '@/styles/global';

type SelectType = 'agnosticDark';

type Props = {
  styleType: SelectType;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

type SelectColors = {
  $fgColor: string;
  $bgColor: string;
};

const selectStyles: Record<SelectType, SelectColors> = {
  agnosticDark: {
    $fgColor: 'var(--theme-color-50)',
    $bgColor: 'var(--gray-color-800)',
  },
};

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ styleType, ...rest }, ref) => (
    <SelectContainer {...selectStyles[styleType]}>
      <SelectWrapper ref={ref} {...selectStyles[styleType]} {...rest} />
    </SelectContainer>
  )
);

const SelectWrapper = styled.select<SelectColors>`
  font-size: var(--font-sm);
  font-weight: 500;
  border-radius: var(--button-radius);
  padding: ${space(2)} ${space(10)} ${space(2)} ${space(6)};
  color: ${({ $fgColor }) => $fgColor};
  background-color: ${({ $bgColor }) => $bgColor};
  appearance: none;
`;

const SelectContainer = styled.div<SelectColors>`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ $fgColor }) => $fgColor};
  }
`;

Select.displayName = 'select';

export default Select;
