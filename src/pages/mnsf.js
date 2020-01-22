import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'

const MnSf = () => {
    const data = useStaticQuery(graphql`
    query {
      mnsf1: file(relativePath: { eq: "mnsf/sf-proj-1380-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mnsf2: file(relativePath: { eq: "mnsf/sf-proj-1380-02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mnsf3: file(relativePath: { eq: "mnsf/sf-proj-1380-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)
    return (
        <Layout prevUrl='/anytimefitness' nextUrl='/peacebypeace'>
    <div className="project-content-container">
    <h1>MN State Fair:<br/>Illustrations</h1>
    <p>These digital illustrations were a self-initiated project in celebration of the Great Minnesota Get(Eat)-Together.</p>
    <div className="project-image">
    <Img fluid={data.mnsf1.childImageSharp.fluid} alt='MN Sate Fair' />
    </div>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.mnsf2.childImageSharp.fluid} alt='MN Sate Fair' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.mnsf3.childImageSharp.fluid} alt='MN Sate Fair' />
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default MnSf;