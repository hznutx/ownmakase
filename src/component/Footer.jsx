import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { RestaurantMenuOutlined, CalculateOutlined, ClassOutlined, Tune } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()

  const onNavClick = (e, newValue) => {
    setValue(newValue);
  }

  const onMenuClick = (path) => {
    navigate(path, { replace: true })
  }

  useEffect(() => {
    console.log("reload . . .")
  }, [])


  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "white" }}
      elevation={0}
    >
      <BottomNavigation showLabels value={value} onChange={onNavClick} >
        <BottomNavigationAction label="Recipes" icon={<ClassOutlined />} onClick={() => onMenuClick('menu')} />
        <BottomNavigationAction label="Random !" icon={<RestaurantMenuOutlined onClick={() => onMenuClick('random-food')} />} />
        <BottomNavigationAction label="Go Shopping" icon={<CalculateOutlined onClick={() => onMenuClick('shopping-list')} />} />
      </BottomNavigation>
    </Paper>
  );
}
