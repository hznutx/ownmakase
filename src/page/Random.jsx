import { Stack, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import RandomMeal from "../component/Randommeal";

const RandomMode = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={2}>
      <Typography variant="h5" >
        What I eat today ?
      </Typography>
      <Player autoplay loop
        src="https://assets1.lottiefiles.com/temp/lf20_nXwOJj.json"
        style={{ height: "350px", width: "350px" }}
      />
      <RandomMeal />
    </Stack>
  );
};

export default RandomMode;
