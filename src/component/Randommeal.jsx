import React, { useState } from "react";
import randommenu from "../assets/data/menurandom.json";
import { Grid, Button, Typography, Card } from "@mui/material";

const RandomMeal = () => {
  const [randomData, setRandomData] = useState([]);
  const [rowCount, setRowCount] = useState(0);

  const getRandomResult = () => {
    const randomIndex = Math.floor(Math.random() * randommenu.data.length);
    return randommenu.data[randomIndex];
  };

  const handleRandomClick = () => {
    let newState = [];
    for (let i = 0; i < rowCount; i++) {
      newState.push(getRandomResult());
    }
    setRandomData(newState);
  };

  const handleClearData = () => {
    setRandomData([]);
  };

  const handleTryAgainClick = () => {
    const newRandomResult = getRandomResult();
    setRandomData([newRandomResult]);
  };

  const handleAdjustRows = (number) => {
    if (number === "+") {
      setRowCount((prevCount) => prevCount + 1);
    } else if (number === "-" && rowCount > 0) {
      setRowCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Grid container gap={4} flexDirection="column">
      <Grid item alignItems="center">
        <Button
          variant="contained"
          style={{
            borderRadius: "25px",
            marginRight: 10,
          }}
          onClick={() => handleAdjustRows("-")}
        >
          -
        </Button>
        <Button variant="contained">{rowCount}</Button>
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

      <Card elevation={2} sx={{ borderRadius: 10, p: 2 }}>
        {randomData.map((item, index) => (
          <Typography key={index}>{item.result}</Typography>
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
