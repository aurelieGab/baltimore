import { createGlobalStyle } from 'styled-components';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Lora } from 'next/font/google'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html { font-size: 62.5%; }

  body {
    min-height: 100vh;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: Lora;
  }
`;

export default GlobalStyles;