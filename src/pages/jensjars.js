import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import Intersect from '../components/useIntersect';

const JJ = () => {
    const data = useStaticQuery(graphql`
    query {
      jj1: file(relativePath: { eq: "jj/jj-main-1380-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj2: file(relativePath: { eq: "jj/jj-proj-1380-02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj3: file(relativePath: { eq: "jj/jj-proj-1380-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj4: file(relativePath: { eq: "jj/jj-proj-1380-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj5: file(relativePath: { eq: "jj/jj-proj-1380-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj6: file(relativePath: { eq: "jj/jj-proj-1380-06.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj7: file(relativePath: { eq: "jj/jj-proj-1380-07.png" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jj8: file(relativePath: { eq: "jj/jj-proj-1380-08.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
      <Layout prevUrl='/waxingthecity' nextUrl='/surescripts'>
        <div className="project-content-container">
        <h1>Jen's Jars: <br/>Visual Identity</h1>
        <p>I had the pleasure of working with Minnetonka based business owner, Jen Alexander, on the branding of her plant-based soups and spreads, i.e. Jen’s Jars. Jen is on a mission to make healthy, real food that is equal parts nutritious, convenient, and delicious. Jen wanted a handcrafted, bountiful, playful and lush look her her brand. I designed a branding package that included her logotype, brand illustrations, labels and signage for her markets and in-store demos. You can find these flirty little jars on the shelves at Lakewinds co-op locations and seasonally at many of Minneapolis’ farmers markets.</p>
        <div className="project-image">
        <Img fluid={data.jj1.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj2.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj3.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj4.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj5.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj6.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj7.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        <Intersect>
        <div className="project-image">
        <Img fluid={data.jj8.childImageSharp.fluid} alt='Jens Jars Branding' />
        </div>
        </Intersect>
        </div>
    </Layout>
 )   
}

export default JJ;