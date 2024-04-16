/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { devices } from '@/styles/global';
import { IsRootContext, IsRootProps } from './MainHeader';

type Props = {
  to: string;
  i18nLabel: string;
};

const HeaderLink: React.FC<Props> = ({ to, i18nLabel }): JSX.Element => {
  const { isRoot } = useContext<IsRootProps>(IsRootContext);
  const { t } = useTranslation();

  return (
    <HeaderListElement>
      <HeaderAnchorLink to={to} $isRoot={isRoot}>
        {t(i18nLabel)}
      </HeaderAnchorLink>
    </HeaderListElement>
  );
};

const HeaderListElement = styled.li`
  display: none;
  @media only ${devices.md} {
    display: block;
  }
`;

const HeaderAnchorLink = styled(Link)<{ $isRoot: boolean }>`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(
    ${({ $isRoot }) => ($isRoot ? '--header-link-root-fg' : '--header-link-fg')}
  );
  &:hover {
    color: var(
      ${({ $isRoot }) =>
        $isRoot ? '--header-link-hover-root-fg' : '--header-link-hover-fg'}
    );
  }
`;

export default HeaderLink;
