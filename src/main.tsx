/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import EntrypointComponent from './components/EntrypointComponent.tsx';
import './styles/compound.css';

const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <EntrypointComponent />
  </React.StrictMode>
);
