import { useState } from "react";
import { Button, Typography, Card, Stack, Box } from "@mui/material";
import { RestaurantMenu } from "@mui/icons-material";
// 
import randommenu from "../assets/data/menurandom.json";

const RandomMeal = () => {
  const [randomData, setRandomData] = useState([]);
  const [rowCount, setRowCount] = useState(1);

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
    <Stack alignItems={'center'} gap={2}>
      <Stack flexDirection={'row'} gap={2}>
        <Button variant="contained" style={{ borderRadius: "25px" }}
          onClick={() => handleAdjustRows("-")}
        >
          -
        </Button>
        <Typography boxShadow={'1px 1px 6px grey'} textAlign={'center'} width={60} px={1} py={1.5}
          borderRadius={'25px'} color={'white'} bgcolor={!rowCount ? '#dedfde' : '#8DC1EF'}>
          {rowCount}
        </Typography>
        <Button variant="contained" style={{ borderRadius: "25px" }}
          onClick={() => handleAdjustRows("+")}
        >
          +
        </Button>
      </Stack>
      <Box>
        <Button variant="contained"
          style={{
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
      </Box>
      {!!randomData.length &&
        <Card elevation={2} sx={{ borderRadius: 4, px: 2, py: 1 }}>
          {randomData.map((item, index) => (
            <Stack key={index} flexDirection={'row'} alignItems={'center'}>
              <RestaurantMenu sx={{ mr: 1 }} />
              <Typography fontSize="20px" >
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Card>}
      <Button variant="contained" style={{ borderRadius: "25px" }} onClick={handleClearData} >
        Clear Data
      </Button>
    </Stack>
  );
};

export default RandomMeal;
