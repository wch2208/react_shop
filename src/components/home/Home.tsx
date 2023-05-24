import React from "react";
import CardList from "./cardList";
import CarouselSection from "./carousel";

export default function Main() {
  return (
    <>
      <CarouselSection />
      <CardList category={"jewelery"} />
      <CardList category={"electronics"} />
      <CardList category={"clothing"} />
    </>
  );
}
