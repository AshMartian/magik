import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import { MantineProvider } from '@mantine/core';

import App from './App';
import { theme } from './Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
