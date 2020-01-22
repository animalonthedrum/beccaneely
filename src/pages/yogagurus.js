import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'

const YogaGurus = () => {
    const data = useStaticQuery(graphql`
    query {
      yg1: file(relativePath: { eq: "gurus/guru-proj-1000-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yg2: file(relativePath: { eq: "gurus/guru-proj-1000-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yg3: file(relativePath: { eq: "gurus/guru-proj-1000-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yg4: file(relativePath: { eq: "gurus/guru-proj-1000-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yg5: file(relativePath: { eq: "gurus/guru-proj-1000-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout>
    <div className="project-content-container">
    <h1>Wax my back Page</h1>
    <p>Its hairy, its scary and just keeps coming back. That orange is oozing, is it sexual. Watch out for falling lavender. Scrub a dub dub. Social adds scrolling buy stuff.</p>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.yg1.childImageSharp.fluid} alt='Yoga Gurus Illustration' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.yg2.childImageSharp.fluid} alt='Yoga Guru Illustration' />
    </div>
    </div>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.yg3.childImageSharp.fluid} alt='Yoga Guru Illustration' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.yg4.childImageSharp.fluid} alt='Yoga Guru Illustration' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col-solo">
    <Img fluid={data.yg5.childImageSharp.fluid} alt='Yoga Guru Illustration' />
    </div>
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default YogaGurus;