import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Payment Success" />
    <h1>Thank you</h1>
    <Link to="/shop">Shop again</Link>
  </Layout>
)

export default Success