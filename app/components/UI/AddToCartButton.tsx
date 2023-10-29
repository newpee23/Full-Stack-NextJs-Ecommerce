"use client"
// REACT AND NEXT IMPORT
import { useCartStore } from "@/store/useCartStore";

// Type
import { ProductType } from "@/types/productType";

const AddToCartButton = ({ name, image, unit_amount, id, description, quantity }: ProductType) => {
  const cartStore = useCartStore();
  return (
    <>
      <button onClick={() => cartStore.addToCart({ name, image, unit_amount, id, description, quantity })} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-primary">
        Add to cart
      </button>
    </>
  )
}

export default AddToCartButton;
