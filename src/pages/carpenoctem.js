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
      <p> A little bit Fear & Loathing, a little bit boujee. Carpe Noctem, meaning Seize the Night, is a mom and pop mushroom shop based in the Poconos region of Pennsylvania. Max, founder, and his wife, Chelsea, started and run this company in the late hours of their night—when the kids are asleep and the grind of everyday life stills. Carpe Noctem is a grower, forager and supplier of organic mushrooms. I helped them get their brand off the ground with a custom hand-nibbed, inky, Ralph Steadman inspired logotype, color palette, supporting fonts, hand-drawn mushroom graphics and patterns.</p>
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