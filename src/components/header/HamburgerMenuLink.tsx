/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { space } from '@/styles/global';

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
  padding: ${space(2)} 0;
  width: 100%;
  color: ${({ theme }) => theme.main.fg};
  &:hover {
    color: var(--gray-color-400);
  }
`;

export default HamburgerMenuLink;
