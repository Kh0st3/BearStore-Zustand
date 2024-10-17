"use client";

import { useEffect } from "react";
import CountBear from "@/components/bear/count.bear";
import IncreaseBear from "@/components/bear/increase.bear";
import AddProduct from "@/components/product/add.product";
import ListProduct from "@/components/product/list.product";
import { useBearsStore } from "@/store/bear.store";
import { useCartStore } from "@/store/cart.store";
import TotalProduct from "@/components/product/total.product";

const HomePage = () => {

  const bears = useBearsStore((state) => state.bears);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <p>Bears: {bears}</p>
      <CountBear />
      <IncreaseBear />
      <hr />
      <AddProduct />
      <TotalProduct />
      <ListProduct />
    </div>
  );
}

export default HomePage;
