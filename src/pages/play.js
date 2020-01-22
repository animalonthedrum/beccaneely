import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'

const Play = () => {
    const data = useStaticQuery(graphql`
    query {
      play1: file(relativePath: { eq: "play/play-proj-01-1380.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play2a: file(relativePath: { eq: "play/play-proj-02-1000.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play2b: file(relativePath: { eq: "play/play-proj-03-1000.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play3: file(relativePath: { eq: "play/play-proj-04-1000.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play4: file(relativePath: { eq: "play/play-proj-05-1000.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play5a: file(relativePath: { eq: "play/play-proj-06-1000.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play5b: file(relativePath: { eq: "play/play-proj-07-1000.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play6: file(relativePath: { eq: "play/play-proj-08-1000.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play7: file(relativePath: { eq: "play/play-proj-09-1380.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play8: file(relativePath: { eq: "play/play-proj-10-1380.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play9a: file(relativePath: { eq: "play/play-proj-11-1000.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      play9b: file(relativePath: { eq: "play/play-proj-12-1000.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout prevUrl='/solsounds' nextUrl='/yogagurus'>
    <div className="project-content-container">
    <h1>Misc. Illustrations</h1>
    <div className="project-image">
    <Img fluid={data.play1.childImageSharp.fluid} alt='Illustration' />
    </div>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.play2a.childImageSharp.fluid} alt='Illustration' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.play2b.childImageSharp.fluid} alt='Illustration' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.play3.childImageSharp.fluid} alt='Illustration' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.play4.childImageSharp.fluid} alt='Illustration' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.play5a.childImageSharp.fluid} alt='Illustration' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.play5b.childImageSharp.fluid} alt='Illustration' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.play6.childImageSharp.fluid} alt='Illustration' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.play7.childImageSharp.fluid} alt='Illustration' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.play8.childImageSharp.fluid} alt='Illustration' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.play9a.childImageSharp.fluid} alt='Illustration' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.play9b.childImageSharp.fluid} alt='Illustration' />
    </div>
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default Play;