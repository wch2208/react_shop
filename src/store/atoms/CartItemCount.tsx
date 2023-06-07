import { atom } from "recoil";

export const CartItemCount = atom<number>({
  key: "CartItemCount",
  default: 0,
});
