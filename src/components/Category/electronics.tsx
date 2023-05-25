import CardList from "../home/cardList";
import { useRecoilValue } from "recoil";
import { ProductsAtom } from "../../recoil/ProductsAtom";

export default function ElectronicsPage() {
  const products = useRecoilValue(ProductsAtom);
  const CategoryList = products.filter(product => {
    return product.category.includes("electronics");
  });

  return (
    <>
      <CardList category="electronics" i={CategoryList.length} />
    </>
  );
}
