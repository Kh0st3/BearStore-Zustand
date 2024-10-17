import { useCartStore } from "@/store/cart.store";

const ListProduct = () => {

    const items = useCartStore((state) => state.items)

  return (
    <div>
      <pre>
        {JSON.stringify(items, null, 2)}
      </pre>
    </div>
  );
}

export default ListProduct;
