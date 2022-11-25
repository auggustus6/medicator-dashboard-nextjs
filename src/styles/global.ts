import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  theme: {
    removeBg?: boolean;
  };
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

html {
  font-size: 62.5%;
}

body {
  font-family: 'Inter', sans-serif;
}

    ${({ theme }) => css` body {
        background: ${theme.colors.white};
        font-family: ${theme.font.family};
        color: ${theme.colors.gray};
    `}
  `;

export default GlobalStyles;
