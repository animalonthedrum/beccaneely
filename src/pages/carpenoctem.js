import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'

const CarpeNoctem = () => {
    const data = useStaticQuery(graphql`
    query {
      cpn1: file(relativePath: { eq: "carpe/cn-proj-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cpn2: file(relativePath: { eq: "carpe/cn-proj-02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cpn3: file(relativePath: { eq: "carpe/cn-proj-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cpn4: file(relativePath: { eq: "carpe/cn-proj-04.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cpn5a: file(relativePath: { eq: "carpe/cn-proj-05a.png" }) {
        childImageSharp {
          fluid(maxWidth: 675) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cpn5b: file(relativePath: { eq: "carpe/cn-proj-05b.png" }) {
        childImageSharp {
          fluid(maxWidth: 675) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout prevUrl='/surescripts' nextUrl='/anytimefitness'>
    <div className="project-content-container">
    <h1>Carpe Noctem<br/>Visual Identity</h1>
      <p>Carpe Noctem is an organic, gourmet mushroom company in the Poconos region of Pennsylvania. I’ve been working with them on brand strategy and visual assets including this hand-nibbed, inky, Ralph Steadman inspired logotype and mushroom illustration. <strong>Full case study coming soon.</strong></p>
    <div className="project-image">
    <Img fluid={data.cpn1.childImageSharp.fluid} alt='Carpe Noctem Branding' />
    </div>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.cpn2.childImageSharp.fluid} alt='Carpe Noctem Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.cpn3.childImageSharp.fluid} alt='Carpe Noctem Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.cpn4.childImageSharp.fluid} alt='Carpe Noctem Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.cpn5a.childImageSharp.fluid} alt='Carpe Noctem Branding' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.cpn5b.childImageSharp.fluid} alt='Carpe Noctem Branding' />
    </div>
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default CarpeNoctem;