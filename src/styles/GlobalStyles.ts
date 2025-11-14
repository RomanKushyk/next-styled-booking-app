"use client";

import { createGlobalStyle } from "styled-components";
import Background from "@/assets/icons/background.svg";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #E28F11;
    --foreground: #16171B;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #E28F11;
      --foreground: #FFFFFF;
    }
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: var(--foreground);
    background: var(--background) url("${Background.src}") center/cover no-repeat;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;
