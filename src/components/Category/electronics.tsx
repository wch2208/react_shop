import CardList from "../Product/cardList";
import { useRecoilValue } from "recoil";
import { ProductsState } from "../../store/atoms/ProductsAtom";

export default function ElectronicsPage() {
  const products = useRecoilValue(ProductsState);
  const CategoryList = products.filter(product => {
    return product.category.includes("electronics");
  });

  return (
    <>
      <CardList category="electronics" i={CategoryList.length} />
    </>
  );
}
