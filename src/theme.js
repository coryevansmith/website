import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      marginTop: "2rem",
      textAlign: "center",
      fontSize: "4rem", // default for small screens
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
      "@media (min-width:960px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "5rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#636363",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "#f6f6f6",
    },
  },
});

export default theme;
