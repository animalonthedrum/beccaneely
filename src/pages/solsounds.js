import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'
import ssGif from '../images/sol/sol-proj-1380-04.gif'

const SolSounds = () => {
    const data = useStaticQuery(graphql`
    query {
      ss1: file(relativePath: { eq: "sol/sol-proj-1380-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss2: file(relativePath: { eq: "sol/sol-proj-1380-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss3: file(relativePath: { eq: "sol/sol-proj-1380-03.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss5: file(relativePath: { eq: "sol/sol-proj-1380-05.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss6: file(relativePath: { eq: "sol/sol-proj-1380-06.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss7: file(relativePath: { eq: "sol/sol-proj-1380-08.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout prevUrl='/peacebypeace' nextUrl='/play'>
    <div className="project-content-container">
    <h1>Sol Sounds:<br/>Logo + Identity</h1>
      <p>did this logo for $200</p>
    <div className="project-image">
    <Img fluid={data.ss1.childImageSharp.fluid} alt='Sol Sounds Branding' />
    </div>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.ss2.childImageSharp.fluid} alt='Sol Sounds Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.ss3.childImageSharp.fluid} alt='Sol Sounds Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <img src={ssGif} alt='Sol Sounds Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.ss5.childImageSharp.fluid} alt='Sol Sounds Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.ss6.childImageSharp.fluid} alt='Sol Sounds Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.ss7.childImageSharp.fluid} alt='Sol Sounds Branding' />
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default SolSounds;