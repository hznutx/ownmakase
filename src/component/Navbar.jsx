import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";

import Logo from "../image/Logo.png";
import { Link } from "react-router-dom";
import theme from "../theme";

const Navbar = () => {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
        background: "white",
      }}
      role="navigation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {["Account", "Bookmark", "Inhouse Item", "My Recipes"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircle /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </Box>
  );

  const anchor = "right";

  return (
    <Box
      sx={{
        flexGrow: 1,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
      }}
    >
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        style={theme}
      >
        {list(anchor)}
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <Box component={Link} to="/">
            <img src={Logo} width={55} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", sm: "flex" },
                textTransform: "uppercase",
                justifyContent: "center",
                alignItems: "center",
                justifyItems: "center",
                letterSpacing: "2px",
              }}
            >
              Ownmakase
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              color="inherit"
              onClick={toggleDrawer(anchor, true)}
            >
              <Badge badgeContent={4} color="error">
                <MenuIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
