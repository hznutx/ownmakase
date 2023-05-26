import { Card, CardContent, Chip, Divider, Grid, ListItem, Stack, Typography, CardActionArea, Box } from "@mui/material";
import Recipepic from "../assets/image/Recipes.png";
import Searchbar from "../component/Searchbar";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

const Menu = () => {
  const [Filter, setFilter] = useState([]);
  const handleClearData = () => {
    setFilter([]);
  };

  return (
    <Stack alignItems={'center'}>
      <Box>
        <img src={Recipepic} />
      </Box>
      <Grid container justifyContent="center">
        <Grid item my={6} mx={2} justifyContent="center" xs={11} sm={6} lg={8}>
          <Searchbar />
          <Grid item xs={11} sm={6} lg={8} mt={2}>
            <Chip label="Pork" onDelete={handleClearData} sx={{ marginRight: 2 }} />
            <Chip label="Chicken" variant="outlined" onDelete={handleClearData} />
          </Grid>
        </Grid>
        <Grid item xs={11} sm={6} lg={6}>
          <Card
            sx={{ borderRadius: 10, p: 1 }}
            elevation={2} >
            <CardContent>
              <Typography variant="h5">
                menu
              </Typography>
              <Divider />
              <Typography mt={3} variant="body2" color="text.secondary">
                ingredients
              </Typography>
              <ListItem>xxxxx</ListItem>
              <ListItem>xxxxx</ListItem>
              <ListItem>xxxxx</ListItem>
              <ListItem>xxxxx</ListItem>
              <ListItem>xxxxx</ListItem>
            </CardContent>

            {/* <CardActionArea></CardActionArea> */}
          </Card>
        </Grid>
      </Grid>
      {/* <Player
        autoplay
        loop
        src=" https://assets1.lottiefiles.com/packages/lf20_MSBoM4TP3p.json"
        style={{ height: "300px", width: "300px" }}
      /> */}
    </Stack>
  );
};

export default Menu;
