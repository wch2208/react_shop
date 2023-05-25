import CardList from "../home/cardList";
import { useRecoilValue } from "recoil";
import { ProductsAtom } from "../../recoil/ProductsAtom";

export default function ClothingPage() {
  const products = useRecoilValue(ProductsAtom);
  const CategoryList = products.filter(product => {
    return product.category.includes("clothing");
  });

  return (
    <>
      <CardList category="clothing" i={CategoryList.length} />
    </>
  );
}
