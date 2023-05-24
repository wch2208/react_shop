import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import Box from "@mui/material/Box";
import FashionPage from "./components/Category/clothing";
import Home from "./components/home/Home";
import AccesoryPage from "./components/Category/jewelery";
import DigitalPage from "./components/Category/electronics";
import ProductDetail from "./components/PruductDetail/ProductDetail";
import Cart from "./components/Category/Cart";

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
          <Route path="/" element={<Home />} />
          <Route path="/Fashion" element={<FashionPage />} />
          <Route path="/Accesory" element={<AccesoryPage />} />
          <Route path="/Digital" element={<DigitalPage />} />
          <Route path="/Product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
