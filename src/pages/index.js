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


  const data = useStaticQuery(graphql`
  query {
    jj: file(relativePath: { eq: "home/jensjars/jj-main-1000-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    ss: file(relativePath: { eq: "home/surescripts/SS.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mnsf: file(relativePath: { eq: "home/statefair/mnsf.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sol: file(relativePath: { eq: "home/sol/sol-main-1000.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    play: file(relativePath: { eq: "home/play/play.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

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
