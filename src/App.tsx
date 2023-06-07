import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Box from "@mui/material/Box";
import Home from "./components/home/Home";
import ClothingPage from "./components/Category/clothing";
import JeweleryPage from "./components/Category/jewelery";
import ElectronicsPage from "./components/Category/electronics";
import ProductDetail from "./components/PruductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import { useRecoilValue } from "recoil";
import { ProductsState } from "./store/atoms/ProductsAtom";

function App() {
  const productsState = useRecoilValue(ProductsState);
  console.log(productsState);

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
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/jewelery" element={<JeweleryPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
