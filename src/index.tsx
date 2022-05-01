import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from './store';
import RoutersApp from './router';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <ThemeProvider theme={theme}>
        <RoutersApp />
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
