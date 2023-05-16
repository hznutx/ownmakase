import { createTheme, makeStyles } from "@mui/material/styles";
import "@fontsource/kanit";
import { InputBase, gridClasses } from "@mui/material";

const theme = createTheme({
  palette: {
    background: "#fff",
    fontPalette: "#465670",
  },

  typography: {
    letterSpacing: 1,
    fontFamily: "Kanit",
    fontPalette: "#1A202C",
    h5: { fontSize: "35px" },
    h3: {
      fontSize: "55px",
      lineHeight: "65px",
      color: "#000958",
    },
    h4: {
      fontSize: "45px",
      lineHeight: "65px",
      color: "#000958",
    },
    caption: { fontSize: "16px" },
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
  },
  input: { borderRadius: "20", outerHeight: "40px" },
  components: {
    MuiIcon: { styleOverrides: { palette: "#F6B969" } },
    MuiAppBar: {
      styleOverrides: {
        root: { background: "#465670", boxShadow: "none" },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: { columns: { xs: 4, md: 12 } },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: "20px",
          p: 20,
          background: "#8DC1EF",
          borderRadius: "25px",
          fontPalette: "white",
        },
        "&:hover": {
          backgroundColor: "#4c84b5",
          boxShadow: "0",
        },
        outlinedPrimary: {
          color: "#909090",
          border: "0px",
          "&:hover": {
            border: "0",
          },
        },
        root: {
          textTransform: "capitalize",
          fontWeight: 400,
          letterSpacing: 0.5,
        },
      },
    },
  },
});

export default theme;
