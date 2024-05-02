import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0080f0",
    },
    secondary: {
      main: "#e0e0e0",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
