import styled from "styled-components";

export const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;

    &::-webkit-scrollbar {
      width: 0.3rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
  }

  body {
    width: 100%;
  }

  h1 {
    font-size: 3.5rem;
    color: #333;
  }

  h2 {
    font-size: 2.8rem;
    font-family: "Abril Fatface", cursive;
    font-weight: 100;
    color: #333;
  }

  h3,
  h4 {
    font-size: 1.4rem;
    color: #333;
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-size: 1rem;
    line-height: 200%;
    color: #696969;
    font-family: "Montserrat", sans-serif;
  }
  a {
    text-decoration: none;
  }

  img {
    display: block;
  }
`;
