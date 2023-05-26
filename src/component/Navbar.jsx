import { AppBar, Box, Toolbar, IconButton, Typography, Badge, ListItem, ListItemIcon, ListItemButton, ListItemText, Drawer, Stack, } from "@mui/material";
import { AccountCircle, Menu as MenuIcon, Kitchen, ShoppingCart, BookmarkBorder, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import theme from "../theme";
import Logo from "../assets/image/Logo.png";

const listRightMenu = [
  { name: "Account", icon: <AccountCircle /> },
  { name: "Setting", icon: <Settings /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const [open, setState] = useState(false);

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  const toggle = () => setOpen(prev => !prev)

  const listMenu = () => (
    <Box height={'100vh'} width={250} bgcolor={'white'} onClick={toggle}>
      {listRightMenu.map((thisMenu, index) => (
        <ListItem key={index}>
          <ListItemButton>
            <ListItemIcon>
              {thisMenu.icon}
            </ListItemIcon>
            <ListItemText primary={thisMenu.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  return (
    <Box>
      <Drawer anchor={'right'} open={open} onClose={toggle} style={theme} >
        {listMenu()}
      </Drawer>
      <AppBar position="fixed">
        <Toolbar >
          <Box component={Link} to="/">
            <img src={Logo} width={55} />
          </Box>
          <Box flexGrow={1}  >
            <Typography variant="h6" textAlign="center" textTransform="uppercase" letterSpacing="2px">
              Ownmakase
            </Typography>
          </Box>
          <Stack>
            <IconButton size="large" color="inherit" onClick={toggle}>
              <Badge badgeContent={4} color="error">
                <MenuIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
