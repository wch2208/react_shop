import { useRecoilState, useRecoilValue } from "recoil";
import { CartItemAtom } from "../store/atoms/cartItemAtom";
import { CartItemCount } from "../store/atoms/CartItemCount";
import { Product, ProductsState } from "../store/atoms/ProductsAtom";

export function useUpdateCart() {
  const products = useRecoilValue(ProductsState);
  const [cartItems, setCartItems] = useRecoilState(CartItemAtom);
  const [cartItemCount, setCartItemCount] = useRecoilState(CartItemCount);

  function addCart(e: React.MouseEvent<HTMLButtonElement>) {
    const newProduct: Product | undefined = products.find(
      product => product.id.toString() === e.currentTarget.id
    );
    if (newProduct) {
      let found = false;
      const newCartItems = cartItems.map(item => {
        if (item.id === newProduct.id) {
          found = true;
          return {
            ...item,
            quantity: item.quantity + 1,
            price: Number((item.price + newProduct.price).toFixed(2)),
          };
        }
        return item;
      });
      if (!found) {
        newCartItems.push({
          id: newProduct.id,
          title: newProduct.title,
          image: newProduct.image,
          price: newProduct.price,
          quantity: 1,
        });
      }
      setCartItems(newCartItems);
      setCartItemCount(cartItemCount + 1);
    }
  }

  function removeCart(e: React.MouseEvent<HTMLButtonElement>) {
    const newProduct: Product | undefined = products.find(product => {
      return product.id.toString() === e.currentTarget.id;
    });
    //기존의 장바구니 목록에서 클릭한 대상의 id와 일치하는 대상 찾기

    const targetProduct = cartItems.find(
      item => item.id.toString() === e.currentTarget.id
    );
    //타겟의 개수 -1하여 업데이트
    if (targetProduct && newProduct) {
      const newCartItems = cartItems.map(item => {
        if (item.id === targetProduct.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
            price: Number((item.price - newProduct.price).toFixed(2)),
          };
        }
        return item;
      });
      //개수가 0인 값은 제외하여 setCartItems(newCartItems)
      const filteredCartItems = newCartItems.filter(item => item.quantity > 0);
      setCartItems(filteredCartItems);
      setCartItemCount(cartItemCount - 1);
    }
  }

  function allDeleteCart() {
    setCartItems([]);
    setCartItemCount(0);
  }

  return { addCart, removeCart, allDeleteCart };
}
