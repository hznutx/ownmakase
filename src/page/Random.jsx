import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Random from "../image/choice.png";
import { AddCircleRounded, RemoveCircle } from "@mui/icons-material";
import { Button, TextField } from "@material-ui/core";
import { Player } from "@lottiefiles/react-lottie-player";

const Randommode = () => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          my: 5,
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
        {/* <img src={Random} /> */}
        <Box my={3} display="flex" alignItems="center" width={200} gap={3}>
          <RemoveCircle sx={{ color: "#F6B969" }} />
          <Button sx={{ color: "#8DC1EF" }} />
          <AddCircleRounded sx={{ color: "#F6B969" }} />
          <Typography variant="h6">meals</Typography>
        </Box>
        <Box mb={5} display="flex" width={200} alignItems="center" gap={3}>
          <RemoveCircle sx={{ color: "#F6B969" }} />
          <Button sx={{ color: "#8DC1EF" }} />
          <AddCircleRounded sx={{ color: "#F6B969" }} />
          <Typography variant="h6">Day</Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            textTransform: "capitalize",
            height: "50px",
            fontSize: "20px",
            p: 20,
            background: "#A14686",
            borderRadius: "25px",
            color: "white",
          }}
        >
          Random !
        </Button>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Randommode;
