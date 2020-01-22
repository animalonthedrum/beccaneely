import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'

const PeacebyPeace = () => {
    const data = useStaticQuery(graphql`
    query {
      pbp1: file(relativePath: { eq: "pbp/pbp-proj-1380-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pbp2: file(relativePath: { eq: "pbp/pbp-proj-1380-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pbp3: file(relativePath: { eq: "pbp/pbp-proj-1380-03.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pbp4: file(relativePath: { eq: "pbp/pbp-proj-1380-04.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout prevUrl='/mnsf' nextUrl='/solsounds'>
    <div className="project-content-container">
    <h1>Wax my back Page</h1>
    <p>Its hairy, its scary and just keeps coming back. That orange is oozing, is it sexual. Watch out for falling lavender. Scrub a dub dub. Social adds scrolling buy stuff.</p>
    <div className="project-image">
    <Img fluid={data.pbp1.childImageSharp.fluid} alt='Peace by Peace Branding' />
    </div>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.pbp2.childImageSharp.fluid} alt='Peace by Peace Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.pbp3.childImageSharp.fluid} alt='Peace by Peace Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.pbp4.childImageSharp.fluid} alt='Peace by Peace Branding' />
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default PeacebyPeace;