/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  to: string;
};

const HamburgerMenuLink: React.FC<Props> = ({ to }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <li>
      <LinkElement to={`/${to}`}>{t(to)}</LinkElement>
    </li>
  );
};

const LinkElement = styled(Link)`
  display: block;
  font-weight: 500;
  padding: var(--space-2) 0;
  width: 100%;
  color: var(--hamburger-menu-link-fg);
  &:hover {
    color: var(--hamburger-menu-link-hover-fg);
  }
`;

export default HamburgerMenuLink;
