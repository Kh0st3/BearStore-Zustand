import { useCartStore } from "@/store/cart.store";

const TotalProduct = () => {
        
        const getTotalItems = useCartStore((state) => state.getTotalItems());
        const getTotalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <div>
      <p>Total Items: {getTotalItems}</p>
      <p>Total Price: {getTotalPrice}</p>
    </div>
  );
}

export default TotalProduct;
