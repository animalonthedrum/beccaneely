import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/shop/products/products"

const Shop = () => (
  <Layout prevUrl="" nextUrl="" hide="hide">
    <SEO title="Shop" />
    <div className="content-container">
      <Products />
    </div>
  </Layout>
)

export default Shop
