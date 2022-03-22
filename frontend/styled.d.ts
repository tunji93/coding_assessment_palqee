declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };

    primaryFont: string;
    
    typeScale: {
      header1: string;
      header2: string;
      header3: string;
      header4: string;
      header5: string;
      bodyText1: string;
      bodyText2: string;
      bodyText3: string;
      bodyText4: string;
      bodyText5: string;
    };
  }
}
