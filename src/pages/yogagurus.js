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
        <Layout prevUrl='/play' nextUrl='/waxingthecity'>
    <div className="project-content-container">
    <h1>Yoga Gurus</h1>
    <p>This was a self-initiated project that started from a doodle in my yoga teacher training notes. I illustrated a few of the fellas responsible for bringing yoga to the West. They're pretty incredible dudes, who've inspired many mind/body/souls.</p>
    <p>Oh, and I paired them with an inspiring quote—because you gotta, right?</p>
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