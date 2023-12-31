import Stripe from "stripe";

export const getProduct = async () => {
  //  Connect Stripe Api
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
  });
  //   Get ProductLit
  const products = await stripe.products.list();
  //   Set All Product Data
  const allProducct = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
      };
    })
  );

  return allProducct;
};
