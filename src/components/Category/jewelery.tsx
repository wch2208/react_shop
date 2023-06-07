import CardList from "../Product/cardList";
import { useRecoilValue } from "recoil";
import { ProductsState } from "../../store/atoms/ProductsAtom";

export default function JeweleryPage() {
  const products = useRecoilValue(ProductsState);
  const CategoryList = products.filter(product => {
    return product.category.includes("jewelery");
  });

  return (
    <>
      <CardList category="jewelery" i={CategoryList.length} />
    </>
  );
}
