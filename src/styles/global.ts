import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.backgroundGradient};
  }

  scrollbar-color:
    ${({ theme }) => theme.primaryText} transparent;

  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 1.8rem;
    border: 0.5rem solid transparent;
  }

  *::selection {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
