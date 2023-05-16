import * as React from "react";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import { Link, matchPath } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{ d: "" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recipes" icon={<ClassOutlinedIcon />} />
        <BottomNavigationAction
          label="Random !"
          icon={<RestaurantMenuOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Go Shopping"
          icon={<CalculateOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
