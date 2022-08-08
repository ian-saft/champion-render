import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './redux/store';

import Pages from './pages';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Pages />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
