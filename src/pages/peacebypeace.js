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
    <h1>Peace by Peace Yoga: <br/>Brand Identity</h1>
    <p>Founded by twin cities yogini, Taralee Cayce, Peace by Piece offers trauma-informed yoga, breath work and hatha yoga in the healing serenity of a salt cave. We wanted the logo to feel therapeutic, spiritual and relaxed—evoking the same feels as Taralee’s classes. The pieces of mosaic making up the logo mark remind us that broken is beautiful. The color palette is inspired by the pink Himalayan salt bricks that structure the halotherapeutic cave walls. Accompanied by peaceful, calm and gentle blues.</p>
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