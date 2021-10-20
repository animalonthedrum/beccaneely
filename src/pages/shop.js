
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Cart from "../components/shop/cart";

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import Products from "../components/shop/products";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Shop = () => (
  <Layout>
    <SEO title="Shop" />
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/success`}
      cancelUrl={`${window.location.origin}/shop`}
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <Products />
      <Cart />
    </CartProvider>
  </Layout>
);

export default Shop;