import { Container, Stack } from "@mui/material";
import React from "react";
import Recipepic from "../image/Recipes.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Menu = () => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container sx={{ alignItems: "center" }}>
        <img src={Recipepic} />
      </Container>
      <Footer />
    </Stack>
  );
};

export default Menu;
