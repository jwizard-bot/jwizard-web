/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { space } from '@/styles/global';

const NotFoundPage: React.FC = (): JSX.Element => (
  <NotFoundContainer>
    <Header>404</Header>
    <Paragraph>Page not found.</Paragraph>
    <LinkElement to="/">Return to home page</LinkElement>
  </NotFoundContainer>
);

const NotFoundContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${space(10)} 0;
`;

const Header = styled.h1`
  font-family: var(--font-logo);
  font-size: var(--font-8xl);
  margin-bottom: ${space(1)};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.p.fg};
  margin-bottom: ${space(8)};
  font-weight: 500;
`;

const LinkElement = styled(Link)`
  font-weight: 500;
  border-radius: var(--button-radius);
  font-size: var(--font-sm);
  text-align: center;
  padding: ${space(3)} ${space(5)};
  color: var(--gray-color-0);
  background-color: var(--gray-color-500);
  &:hover {
    background-color: var(--gray-color-600);
  }
`;

export default NotFoundPage;
