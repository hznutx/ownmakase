import { Box, Container, Grid, Stack, Typography, createTheme, } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
// 
import SearchBar from "../component/Searchbar";
import Random from "../assets/image/choice.png";
import ShoppingPic from "../assets/image/Shoppingpic.png";
import Bag from "../assets/image/bag.png";
import RecipePic from "../assets/image/Recipes.png";

const GridThemeItem = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        container: { columns: { xs: 4, md: 12 } },
        item: {
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          wordSpacing: 3,
          boxShadow: 2,
          p: 5,
          "&:hover": {
            border: "1px solid #8DC1EF",
          },
          borderRadius: 12,
          textDecorationLine: "none",
        },
      },
    },
  },
});

const Home = () => {
  return (
    <Container>
      <Stack gap={2}>
        <SearchBar />
        <Typography variant="h5" >
          What Would You like ?
        </Typography>
        <Box>
          <ThemeProvider theme={GridThemeItem}>
            <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 12 }} padding={5} >
              <Grid item xs={2} sm={4} md={6} component={Link} to="/app/random-food" >
                <img src={Random} width="100%" />
                <Typography variant="h6">
                  Random Daily meal
                </Typography>
              </Grid>
              <Grid item xs component={Link} to="/shoppinglist">
                <img src={ShoppingPic} width="100%" />
                <Typography variant="h6" >
                  Shopping List
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={6} component={Link}>
                <img src={Bag} width="100%" />
                <Typography variant="h6" >
                  Inhouse item
                </Typography>
              </Grid>
              <Grid item xs component={Link} to="/menu">
                <img src={RecipePic} width="100%" />
                <Typography variant="h6">
                  Recipes
                </Typography>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
