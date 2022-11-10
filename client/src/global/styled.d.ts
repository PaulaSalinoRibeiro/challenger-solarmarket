import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    colors: {
      main: string,
      secondary: string,
      terciary: string,
      textLight: string,
    },
    background: {
      main: string,
      secondary: string,
    },
    shadow: {
      main: string,
      secondary: string,
    },
  }
};