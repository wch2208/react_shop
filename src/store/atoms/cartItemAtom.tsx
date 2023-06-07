import { atom } from "recoil";

export interface Item {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartItemAtom = atom<Item[]>({
  key: "CartItemAtom",
  default: [],
});
