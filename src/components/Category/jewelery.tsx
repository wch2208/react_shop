import CardList from "../home/cardList";
import { useRecoilValue } from "recoil";
import { ProductsAtom } from "../../recoil/ProductsAtom";

export default function FashionPage() {
  const products = useRecoilValue(ProductsAtom);
  const CategoryList = products.filter(product => {
    return product.category.includes("jewelery");
  });

  return (
    <>
      <CardList category="jewelery" i={CategoryList.length} />
    </>
  );
}
