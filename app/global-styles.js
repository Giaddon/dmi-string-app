import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  p,
  label {
    line-height: 1.2em;
  }
`;

export default GlobalStyle;
