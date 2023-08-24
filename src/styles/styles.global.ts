import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 html {
    font-size: 62.5%;
    scroll-behavior:smooth;
 }
 
 body {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', Arial, Helvetica, sans-serif;
 }

 ::selection {
        color:#fff;
        background-color: #d87d4a; ;
 }
`;
