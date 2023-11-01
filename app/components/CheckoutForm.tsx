// REACT AND NEXT IMPORT
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/router";
import { useClerk } from "@clerk/nextjs";

// stripe-js
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <div>CheckoutForm</div>
  )
}

export default CheckoutForm;