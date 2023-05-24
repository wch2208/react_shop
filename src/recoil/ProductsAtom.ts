import { atom } from "recoil";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const ProductsAtom = atom<Array<Product>>({
  key: "productsAtom",
  default: [],
});
