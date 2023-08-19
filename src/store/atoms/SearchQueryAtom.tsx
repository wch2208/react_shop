import { atom } from "recoil";
import { Product } from "./ProductsAtom";

export const SearchQueryAtom = atom<Product[]>({
  key: "SearchQueryAtom",
  default: [],
});
