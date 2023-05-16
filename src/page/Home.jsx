import Navbar from "../component/Navbar";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  createTheme,
} from "@mui/material";
import SearchBar from "../component/Searchbar";
import Random from "../image/choice.png";
import Shoppingpic from "../image/Shoppingpic.png";
import Bag from "../image/bag.png";
import Recipepic from "../image/Recipes.png";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import React from "react";

const GridthemeItem = createTheme({
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
          // border: "1px solid #EFEFF0",
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
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container
        sx={{
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Grid my={6}>
          <SearchBar />
        </Grid>
        <Typography variant="h5" my={5}>
          What Would You like ?
        </Typography>
        <Box>
          <ThemeProvider theme={GridthemeItem}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
              padding={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                justifyItems: "center",
                color: "#1A202C",
              }}
            >
              <Grid
                item
                xs={2}
                sm={4}
                md={6}
                component={Link}
                to="/random-food"
              >
                <img src={Random} width="100%" />
                <Typography variant="h6" my={3}>
                  Random Daily meal
                </Typography>
              </Grid>
              <Grid item xs component={Link} to="/shoppinglist">
                <img src={Shoppingpic} width="100%" />
                <Typography variant="h6" my={3}>
                  Shopping List
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={6} component={Link}>
                <img src={Bag} width="100%" />
                <Typography variant="h6" my={3}>
                  Inhouse item
                </Typography>
              </Grid>
              <Grid item xs component={Link} to="/menu">
                <img src={Recipepic} width="100%" />
                <Typography variant="h6" my={3}>
                  Recipes
                </Typography>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </Container>
      <Footer />
    </Stack>
  );
};

export default Home;
