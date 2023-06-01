import CardList from "../home/cardList";
import { useRecoilValue } from "recoil";
import { ProductsList } from "../../recoil/selectors/FetchApi";

export default function ClothingPage() {
  const products = useRecoilValue(ProductsList);
  const CategoryList = products.filter(product => {
    return product.category.includes("clothing");
  });

  return (
    <>
      <CardList category="clothing" i={CategoryList.length} />
    </>
  );
}
