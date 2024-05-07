/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { space } from '@/styles/global';

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement>;

const Header = forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ children, ...rest }, ref) => (
    <HeaderContainer ref={ref} {...rest}>
      {children}
    </HeaderContainer>
  )
);

Header.displayName = 'h1';

const HeaderContainer = styled.h1`
  font-size: var(--font-5xl);
  font-family: var(--font-logo);
  &::after {
    content: '.';
    margin-left: ${space(1)};
    color: var(--gray-color-500);
  }
`;

export default Header;
