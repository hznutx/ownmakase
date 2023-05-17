import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { AddCircleRounded, RemoveCircle } from "@mui/icons-material";
import { Button } from "@material-ui/core";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import RandomMeal from "../component/Randommeal";

const Randommode = () => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          my: 3,
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Typography variant="h5" mb={3}>
          What I eat today ?
        </Typography>
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/temp/lf20_nXwOJj.json"
          style={{ height: "350px", width: "350px" }}
        />

        <Grid>
          <RandomMeal />
        </Grid>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Randommode;
