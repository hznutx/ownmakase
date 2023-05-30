import { Box, Container, Grid, Stack, Typography, createTheme, } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
// 
import SearchBar from "../components/Searchbar";
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

const MenuGrid = ({ path, menuImg, menuTitle }) => {
  return (
    <Grid item xs={2} sm={4} md={6} component={Link} to={path} >
      <img src={menuImg} width="100%" />
      <Typography variant="h6">
        {menuTitle}
      </Typography>
    </Grid>
  )
}

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
              <MenuGrid path='/app/random-food' menuImg={Random} menuTitle={'Random Daily meal'} />
              <MenuGrid path='/app/shopping-list' menuImg={ShoppingPic} menuTitle={'Shopping List'} />
              <MenuGrid menuImg={Bag} menuTitle={'In house item'} />
              <MenuGrid menuImg={RecipePic} menuTitle={'Recipes'} />
            </Grid>
          </ThemeProvider>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
