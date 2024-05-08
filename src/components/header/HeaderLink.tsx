/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { devices } from '@/styles/global';
import { useIsRootContext } from './context/IsRootContext';

type Props = {
  to: string;
  i18nLabel: string;
};

const HeaderLink: React.FC<Props> = ({ to, i18nLabel }): JSX.Element => {
  const { isRoot } = useIsRootContext();
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
  color: ${({ $isRoot, theme }) =>
    $isRoot ? 'var(--gray-color-0)' : theme.main.fg};
  &:hover {
    color: var(
      ${({ $isRoot }) => ($isRoot ? '--gray-color-200' : '--gray-color-400')}
    );
  }
`;

export default HeaderLink;
