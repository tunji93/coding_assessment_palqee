import { createGlobalStyle } from "styled-components";
import theme from "theme";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100vh;
    line-height: 2.1rem;
    font-size: ${theme.typeScale.bodyText4};
    font-family: ${theme.primaryFont};
    color: ${theme.colors.black};
    background: ${theme.colors.gray};
    font-style: normal;
    font-weight: 400;
}
  
h1 {
    line-height: 4rem;
    font-size: ${theme.typeScale.header1};
}
h2 {
    line-height: 2.8rem;
    font-size: ${theme.typeScale.header2};
}
h3 {font-size: ${theme.typeScale.header3};}
h4 {font-size: ${theme.typeScale.header4};}
h5 {font-size: ${theme.typeScale.header5};}
`;

export default GlobalStyle;
