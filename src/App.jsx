import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import Intro from "./page/Intro";
import Home from "./page/Home";
import MenuPage from "./page/Menu";
import RandomFood from "./page/Random";
import ShoppingList from "./page/Goshopping";
import AppLayout from "./page/AppLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="app" element={<AppLayout />} >
          <Route path="" element={<Home />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="random-food" element={<RandomFood />} />
          <Route path="shoppinglist" element={<ShoppingList />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
export default App;
