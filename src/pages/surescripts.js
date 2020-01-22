import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect'

const Surescripts = () => {
    const data = useStaticQuery(graphql`
    query {
      ss1: file(relativePath: { eq: "ss/ss-proj-brandguide-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss2a: file(relativePath: { eq: "ss/ss-proj-brandguide-02a.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss2b: file(relativePath: { eq: "ss/ss-proj-brandguide-02b.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss3a: file(relativePath: { eq: "ss/ss-proj-brandguide-03a.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss3b: file(relativePath: { eq: "ss/ss-proj-brandguide-03b.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss4a: file(relativePath: { eq: "ss/ss-proj-brandguide-04a.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ss4b: file(relativePath: { eq: "ss/ss-proj-brandguide-04b.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ssN1: file(relativePath: { eq: "ss/ss-proj-narrative-1380-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ssN2: file(relativePath: { eq: "ss/ss-proj-narrative-1000-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ssN3: file(relativePath: { eq: "ss/ss-proj-narrative-1000-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ssN4: file(relativePath: { eq: "ss/ss-proj-narrative-1000-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ssN5: file(relativePath: { eq: "ss/ss-proj-narrative-1000-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout prevUrl='/jensjars' nextUrl='/carpenoctem'>
    <div className="project-content-container">
    <h1>Surescripts:<br/>Brand Guide + Narrative</h1>
      <p>this place sucked to work at. But i traded in a fitbit for airpods!</p>
    <div className="project-image">
    <Img fluid={data.ss1.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.ss2a.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.ss2b.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.ss3a.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.ss3b.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.ss4a.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.ss4b.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image">
    <Img fluid={data.ssN1.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.ssN2.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.ssN3.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    </div>
    </Intersect>
    <Intersect>
    <div className="project-image-row">
    <div className="project-image-col">
    <Img fluid={data.ssN4.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    <div className="project-image-col">
    <Img fluid={data.ssN5.childImageSharp.fluid} alt='Surescripts Branding' />
    </div>
    </div>
    </Intersect>
    </div>
</Layout>
 )   
}

export default Surescripts;