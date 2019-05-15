import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
    background-image: url(${process.env.PUBLIC_URL + "/images/background.jpg"});
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

const theme: DefaultTheme = {
  borderRadius: "3px",
  colors: {
    main: "#000",
    secondary: "#DFE3E6",
    background: "#6B808C",
  },
  fontFamily: "Montserrat",
  typography: {
    fontSize: "13px",
    lineHeight: "19px",
  },
};

export { theme };
