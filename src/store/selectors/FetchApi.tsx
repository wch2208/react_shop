import { selector } from "recoil";
import { Product } from "../atoms/ProductsAtom";

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await response.json();
  return data;
};

export const ProductsList = selector({
  key: "ProductsList",
  get: async () => {
    return await fetchData();
  },
});
