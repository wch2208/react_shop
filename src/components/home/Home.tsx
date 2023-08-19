import CardList from "../Product/cardList";
import CarouselSection from "../Product/carousel";

export default function Home() {
  const displayCount = 4;

  return (
    <>
      <CarouselSection />
      <CardList category={"jewelery"} i={displayCount} />
      <CardList category={"electronics"} i={displayCount} />
      <CardList category={"clothing"} i={displayCount} />
    </>
  );
}
