import CardList from "../Product/cardList";
import { useRecoilValue } from "recoil";
import { ProductsList } from "../../store/selectors/FetchApi";

export default function JeweleryPage() {
  const products = useRecoilValue(ProductsList);
  const CategoryList = products.filter(product => {
    return product.category.includes("jewelery");
  });

  return (
    <>
      <CardList category="jewelery" i={CategoryList.length} />
    </>
  );
}
