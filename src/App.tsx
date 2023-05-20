import Header from "./components/home/header";
import CarouselSection from "./components/home/carousel";
import CardList from "./components/home/cardList";
import Footer from "./components/home/footer";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box style={{ maxWidth: "100vw" }}>
      <Header />
      <CarouselSection />
      <CardList />
      <CardList />
      <CardList />
      <Footer />
    </Box>
  );
}

export default App;
