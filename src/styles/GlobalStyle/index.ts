import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #e1e3e4;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
