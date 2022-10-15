import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const themes = [
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "dark",
        background: {
          default: "#111111",
          paper: "#10101f",
        },
        primary: {
          main: "#00d8ff",
          contrastText: "#140202",
        },
        secondary: {
          main: "#8c4fff",
          contrastText: "#ffffff",
        },
      },
      spacing: 10,
      shape: {
        borderRadius: 6,
      },
      typography: {
        fontFamily: "Lato",
      },
    })
  ),
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: "#5893df",
        },
        secondary: {
          main: "#2ec5d3",
        },
        background: {
          default: "#192231",
          paper: "#24344d",
        },
      },
    })
  ),
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: "#0f0",
        },
        background: {
          default: "#111111",
          paper: "#212121",
        },
      },
      typography: {
        fontFamily: "Open Sans",
        h1: {
          fontFamily: "Ubuntu Mono",
        },
        h2: {
          fontFamily: "Ubuntu Mono",
        },
        h3: {
          fontFamily: "Ubuntu Mono",
        },
        h4: {
          fontFamily: "Ubuntu Mono",
        },
        h6: {
          fontFamily: "Ubuntu Mono",
        },
        h5: {
          fontFamily: "Ubuntu Mono",
        },
        subtitle1: {
          fontFamily: "Ubuntu Mono",
        },
        subtitle2: {
          fontFamily: "Ubuntu Mono",
        },
        button: {
          fontFamily: "Ubuntu Mono",
          fontWeight: 900,
        },
        overline: {
          fontFamily: "Ubuntu Mono",
        },
      },
    })
  ),
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: "#ff8f00",
        },
        secondary: {
          main: "#f50057",
        },
        background: {
          default: "#310000",
          paper: "#731010",
        },
      },
      typography: {
        fontFamily: "Do Hyeon",
      },
      shape: {
        borderRadius: 16,
      },
    })
  ),
];

export default themes;
