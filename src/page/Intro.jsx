import { Button, Container, Grid, Stack, AppBar, Typography, InputBase, Box, Toolbar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Pic from "../assets/image/Mainpic.png";
import Logo from "../assets/image/Logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderColor: "beige",
  border: "1px",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "250px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Intro() {
  return (
    <Stack sx={{ flexGrow: 1, alignItems: "center" }}>
      <AppBar position="static" sx={{ mt: 2, backgroundColor: "#fff" }}>
        <Toolbar>
          <img src={Logo} width={64} />
          <Typography variant="h6" noWrap component="div" sx={{ textTransform: "uppercase", color: "#1A202C", }}>
            Ownmakase
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button component={Link} to="/app/page-menu" variant="outlined">
                  Menu
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/app/page-random" variant="outlined">
                  Random
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/app/page-shop-list" variant="outlined">
                  Shopping List
                </Button>
              </Grid>
              <Grid
                item
                sx={{
                  color: "#1A202C",
                  border: "1px",
                  borderColor: "ActiveBorder",
                  borderRadius: "20px",
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Grid
          container
          sx={{
            py: 5,
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
            color: "#1A202C",
          }}
        >
          <Grid item xs>
            <Typography
              variant="h2"
              color="#465670"
              fontWeight={600}
              letterSpacing={1}
            >
              Fullfill your starving!
            </Typography>
            <Typography>
              Cook delicious dishes easily and reliably. Can select the number
              of required portions from 2 to 30, the site will calculate the
              right amount of quantities you will need. You can filer food types
              like Vegan, Vegetarian, Seafood or Meat dishes.
            </Typography>
            <br />
            <Button
              component={Link}
              to="/app/page-menu"
              variant="contained"
              sx={{ mr: 3, background: "#465670" }}
            >
              Fast recipes
            </Button>
            <Button
              component={Link}
              to="/app"
              variant="contained"
              color="primary"
            >
              Explore
            </Button>
          </Grid>
          <Grid item>
            <img src={Pic} />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
export default Intro;
