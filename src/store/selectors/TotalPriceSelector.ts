import { selector } from "recoil";
import { CartItemAtom } from "../atoms/cartItemAtom";

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const CartItems = get(CartItemAtom);
    return CartItems.reduce((total, CartItem) => {
      // return total + CartItem.price;
      return Number((total + CartItem.price).toFixed(2));
    }, 0);
  },
});
