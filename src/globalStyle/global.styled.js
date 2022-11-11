import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
        font-size: 62.5%;
}


*, *:before, *:after {
  box-sizing: border-box;
}


body {
    font-family: 'Red Rose', cursive;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    background: #fff;

    }

ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

export default GlobalStyles;
