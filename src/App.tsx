import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/home/header";
import CarouselSection from "./components/home/carousel";
import CardList from "./components/home/cardList";
import Footer from "./components/home/footer";
import Box from "@mui/material/Box";
import FashionPage from "./components/Category/Fashion";
import Main from "./components/home/Main";
import AccesoryPage from "./components/Category/Accesory";
import DigitalPage from "./components/Category/Digital";
import ProductDetail from "./components/PruductDetail/ProductDetail";

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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Fashion" element={<FashionPage />} />
          <Route path="/Accesory" element={<AccesoryPage />} />
          <Route path="/Digital" element={<DigitalPage />} />
          <Route path="/Product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
