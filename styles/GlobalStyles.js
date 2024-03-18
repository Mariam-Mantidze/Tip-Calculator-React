import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body {
    font-family: "Space Mono", monospace;
    font-weight: 700;
    background: rgba(197, 228, 231, 1);
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}


button,
input {
  font-family: "Space Mono", sans-serif;
}

`;
