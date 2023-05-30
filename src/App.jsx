import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import Intro from "./page/Intro";
import Home from "./page/Home";
import MenuPage from "./page/Menu";
import RandomFood from "./page/Random";
import ShoppingList from "./page/Goshopping";
import AppLayout from "./page/AppLayout";
import UneemoTestEnv from "./page/uneemo/UneemoTestEnv.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="app" element={<AppLayout />} >
          <Route path="" element={<Home />} />
          <Route path="page-menu" element={<MenuPage />} />
          <Route path="page-random" element={<RandomFood />} />
          <Route path="page-shop-list" element={<ShoppingList />} />
          <Route path="uneemo-test-env" element={<UneemoTestEnv />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
export default App;
