import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { RestaurantMenuOutlined, CalculateOutlined, ClassOutlined, Tune, ShoppingBasketOutlined, ManageSearchOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [curNav, setCurNav] = useState(0);
  const navigate = useNavigate()

  const onNavClick = (index, menu) => {
    setCurNav(index);
    navigate(menu.path, { replace: true })
  }

  useEffect(() => {
    console.log("reload . . .")
  }, [])

  const navMenu = [
    { title: "Explore", path: "", icon: <ManageSearchOutlined /> },
    { title: "Recipes", path: "page-menu", icon: <ClassOutlined /> },
    { title: "Random !", path: "page-random", icon: <RestaurantMenuOutlined /> },
    { title: "Shop List", path: "page-shop-list", icon: <ShoppingBasketOutlined /> },
  ];

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "white" }}
      elevation={0}
    >
      <BottomNavigation showLabels value={curNav}>
        {navMenu.map((menu, index) => (
          <BottomNavigationAction key={index} label={menu.title} icon={menu.icon} onClick={() => onNavClick(index, menu)} />
        ))}
        {/* <BottomNavigationAction label="Random !" icon={<RestaurantMenuOutlined onClick={() => onMenuClick('random-food')} />} />
        <BottomNavigationAction label="Go Shopping" icon={<CalculateOutlined onClick={() => onMenuClick('shopping-list')} />} /> */}
      </BottomNavigation>
    </Paper>
  );
}
