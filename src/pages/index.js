import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import Intersect from '../components/useIntersect'

const Row = ({children}) => (
  <div className="row">
    {children}
  </div>
)

const IndexPage = () => {

return (
  <Layout prevUrl='' nextUrl='' hide='hide'>
    <SEO title="Home" />
    <div className="content-container">
    <h1>HOME PAGE</h1>
    </div>
    
  </Layout>
)
  
}

export default IndexPage
