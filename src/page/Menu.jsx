import { Grid, Stack } from "@mui/material";
import Recipepic from "../image/Recipes.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Menu = () => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid container justifyContent="center">
        <img src={Recipepic} />
      </Grid>
      <Footer />
    </Stack>
  );
};

export default Menu;
