import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
  },
});

export default theme;
