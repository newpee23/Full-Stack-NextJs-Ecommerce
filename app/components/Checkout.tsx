// REACT AND NEXT IMPORT
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/router";
import { useClerk } from "@clerk/nextjs";
import CheckoutForm from "./CheckoutForm";
// stripe-js
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromuse = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = () => {
  const router = useRouter();
  const cartStore = useCartStore();
  const {user} = useClerk();
  const [clientScret, setClientScret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const userId = user?.id;
        
        const response = await fetch("/api/create-payment-intent",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            item: cartStore.cart,
            payment_initent_id: cartStore.setPaymentIntent,
            userId: userId
          })
        })

        if(response.status === 403){
          router.push("/");
          return;
        }

        if(!response.ok){
          throw new Error("Network response is not ok");
        }

        const data = await response.json();
        if(data && data.paymentIntent){
          setClientScret(data.paymentIntent.client_secret);
          cartStore.setPaymentIntent(data.paymentIntent.id);
        } else{
          console.error("Unexpected data structure");
        }
      } catch (error) {
        console.error("There was a problem : ",error);
      }
    }
    createPaymentIntent();
  },[user])
  return (
    <div>Checkout</div>
  )
}

export default Checkout;