import { Route, Routes } from "react-router-dom";
import Intro from "./page/Intro";
import Home from "./page/Home";
import MenuPage from "./page/Menu";
import RandomFood from "./page/Random";
import ShoppingList from "./page/Goshopping";
import { Stack, ThemeProvider } from "@mui/material";
import theme from "./theme.jsx";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="random-food" element={<RandomFood />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
