import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Box from "@mui/material/Box";
import Home from "./components/home/Home";
import ClothingPage from "./components/Category/Clothing";
import JeweleryPage from "./components/Category/Jewelery";
import ElectronicsPage from "./components/Category/Electronics";
import ProductDetail from "./components/PruductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import React from "react";
import { Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
        <Header />
        <React.Suspense
          fallback={
            <Typography
              variant={"h3"}
              sx={{ mt: "100px", ml: "auto", mr: "auto" }}
            >
              Loading...
            </Typography>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing" element={<ClothingPage />} />
            <Route path="/jewelery" element={<JeweleryPage />} />
            <Route path="/electronics" element={<ElectronicsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
