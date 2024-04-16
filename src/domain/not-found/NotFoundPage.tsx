/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

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
`;

const Header = styled.h1`
  font-family: var(--font-logo);
  font-size: var(--font-8xl);
  margin-bottom: var(--space-1);
`;

const Paragraph = styled.p`
  color: var(--paragraph-fg);
  margin-bottom: var(--space-8);
  font-weight: 500;
`;

const LinkElement = styled(Link)`
  font-weight: 500;
  border-radius: var(--button-radius);
  font-size: var(--font-sm);
  text-align: center;
  padding: var(--space-3) var(--space-5);
  color: var(--light-color-100);
  background-color: var(--theme-color-600);
  &:hover {
    background-color: var(--theme-color-700);
  }
`;

export default NotFoundPage;
