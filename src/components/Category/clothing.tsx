import CardList from "../Product/cardList";
import { useRecoilValue } from "recoil";
import { ProductsState } from "../../store/atoms/ProductsAtom";

export default function ClothingPage() {
  const products = useRecoilValue(ProductsState);
  const CategoryList = products.filter(product => {
    return product.category.includes("clothing");
  });

  return (
    <>
      <CardList category="clothing" i={CategoryList.length} />
    </>
  );
}
