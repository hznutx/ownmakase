import React, { useState } from "react";
import randommenu from "../assets/data/menurandom.json";
import { Grid, Button, Typography, Card, Box } from "@mui/material";
import { RestaurantMenu } from "@mui/icons-material";

const RandomMeal = () => {
  const [randomData, setRandomData] = useState([]);
  const [rowCount, setRowCount] = useState(0);

  const getRandomtitle = () => {
    const randomIndex = Math.floor(Math.random() * randommenu.data.length);
    return randommenu.data[randomIndex];
  };

  const handleRandomClick = () => {
    let newState = [];
    for (let i = 0; i < rowCount; i++) {
      newState.push(getRandomtitle());
    }
    setRandomData(newState);
  };

  const handleClearData = () => {
    setRandomData([]);
  };
  const handleAdjustRows = (number) => {
    if (number === "+") {
      setRowCount((prevCount) => prevCount + 1);
    } else if (number === "-" && rowCount > 0) {
      setRowCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Grid
      container
      flexDirection="column"
      gap={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <Button
          variant="contained"
          style={{
            borderRadius: "25px",
            marginRight: 15,
          }}
          onClick={() => handleAdjustRows("-")}
        >
          -
        </Button>
        <Button variant="contained" disabled={!rowCount}>
          {rowCount}
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "25px",
            marginLeft: 15,
          }}
          onClick={() => handleAdjustRows("+")}
        >
          +
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          style={{
            textTransform: "capitalize",
            height: "50px",
            fontSize: "20px",
            p: 20,
            borderRadius: "25px",
            color: "white",
          }}
          color="secondary"
          disabled={!rowCount}
          onClick={handleRandomClick}
        >
          {!randomData.length ? "Random" : "Try Again"}
        </Button>
      </Grid>
      <Card elevation={2} sx={{ borderRadius: 10, p: 2 }}>
        {randomData.map((item, index) => (
          <Typography fontSize="25px" key={index}>
            <RestaurantMenu sx={{ mr: 1 }} />
            {item.title}
          </Typography>
        ))}
      </Card>

      <Button
        variant="contained"
        style={{
          borderRadius: "25px",
        }}
        onClick={handleClearData}
      >
        Clear Data
      </Button>
    </Grid>
  );
};

export default RandomMeal;
