/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type TProps = {
  to: string;
  i18nLabel: string;
  isLast?: boolean;
};

const NavigationLinkElement: React.FC<TProps> = ({
  to,
  i18nLabel,
  isLast,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <li>
        <NavigationLink to={to}>{t(i18nLabel)}</NavigationLink>
      </li>
      {!isLast && <BulletSeparator>&bull;</BulletSeparator>}
    </>
  );
};

const NavigationLink = styled(Link)`
  color: var(--light-color-100);
  font-weight: medium;
  font-size: var(--font-sm);
  line-height: var(--line-height-sm);
  &:hover {
    text-decoration: underline;
  }
`;

const BulletSeparator = styled.li`
  margin: 0 var(--space-2);
`;

export default NavigationLinkElement;
