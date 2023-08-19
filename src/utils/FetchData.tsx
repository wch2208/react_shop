import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ProductsState } from "../store/atoms/ProductsAtom";

interface FetchDataProps {
  children: ReactNode;
}

function FetchData({ children }: FetchDataProps) {
  const setProducts = useSetRecoilState(ProductsState);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        });
    }
    fetchData();
  }, [setProducts]);
  return <>{children}</>;
}

export default FetchData;
