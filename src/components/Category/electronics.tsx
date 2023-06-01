import CardList from "../home/cardList";
import { useRecoilValue } from "recoil";
import { ProductsList } from "../../recoil/selectors/FetchApi";

export default function ElectronicsPage() {
  const products = useRecoilValue(ProductsList);
  const CategoryList = products.filter(product => {
    return product.category.includes("electronics");
  });

  return (
    <>
      <CardList category="electronics" i={CategoryList.length} />
    </>
  );
}
