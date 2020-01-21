import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import SEO from "../components/seo"
import Intersect from '../components/useIntersect'
import wtcGIF from "../images/home/wtc/WTC.gif"
import cnGIF from "../images/home/carpe/cn.gif"
import atfGIF from "../images/home/anytime/atf.gif"

const Row = ({children}) => (
  <div className="row">
    {children}
  </div>
)
const Project = ({title, subtitle, imgName, altText, link}) => (
    <div className="project">
    <Link to={link}>
    <Img fluid={imgName} alt={altText} />
    <h3 className="project-title">
      {title}<br/>{subtitle}
    </h3>
    </Link>
    </div>
)
const ProjectGIF = ({title, subtitle, src, altText, link}) => (
  <div className="project">
  <Link to={link}>
  <img src={src} alt={altText} />
  <h3 className="project-title">
  {title}<br/>{subtitle}
  </h3>
  </Link>
  </div>
)

const IndexPage = () => {


  const data = useStaticQuery(graphql`
  query {
    jj: file(relativePath: { eq: "home/jensjars/JJ.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    ss: file(relativePath: { eq: "home/surescripts/SS.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mnsf: file(relativePath: { eq: "home/statefair/mnsf.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sol: file(relativePath: { eq: "home/sol/sol.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    play: file(relativePath: { eq: "home/illustration/illustration.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
  <Layout>
    <SEO title="Home" />
    <div className="content-container">
    <Row>
    <ProjectGIF title='Waxing the City:' subtitle='Social Media Content' src={wtcGIF} alt='Waxing the City Social' link='/waxingthecity'/>
    <Project title={`Jen's Jars:`} subtitle='Visual Identity' imgName={data.jj.childImageSharp.fluid} altText='Jens Jars' link='/'/>
    </Row>
    <Row>
    <Project title='Surescripts:' subtitle='Brand Narrative + Guide' imgName={data.ss.childImageSharp.fluid} altText='Surescripts' link='/'/>
    <ProjectGIF title='Carpe Noctem:' subtitle='Visual Identity' src={cnGIF} alt='Carpe Noctem' link='/'/>
    </Row>
    <Intersect>
    <Row>
    <ProjectGIF title='Anytime Fitness:' subtitle='Social Media Content' src={atfGIF} alt='Anytime Fitness Social Media Content' link='/'/>
    <Project title='MN State Fair' subtitle='Illustrations' imgName={data.mnsf.childImageSharp.fluid} altText='MN State Fair Illustration' link='/'/>
    </Row>
    </Intersect>
    <Intersect>
    <Row>
    <Project title='Sol Sounds' subtitle='Logo + Identity' imgName={data.sol.childImageSharp.fluid} altText='Sol Sounds Record Branding' link='/'/>
    <Project title='Misc. Illustrations' subtitle='' imgName={data.play.childImageSharp.fluid} altText='Misc. Illustrations' link='/'/>
    </Row>
    </Intersect>
    <Intersect>
    <Row>
    <Project title='Yoga Center:' subtitle='Quarterly Catalog' imgName={data.ss.childImageSharp.fluid} altText='Yoga Center Catalog' link='/'/>
    <ProjectGIF title='Yoga Gurus' subtitle='' src={wtcGIF} alt='Yoga Gurus' link='/'/>
    </Row>
    </Intersect>
    <Intersect>
    <Row>
    <Project title='Peace by Peace Yoga:' subtitle='Visual Identity' imgName={data.ss.childImageSharp.fluid} altText='Peace by Peace Yoga Branding' link='/'/>
    <Project title='Surescripts Illustrations' subtitle='Editorial Illustrations' imgName={data.ss.childImageSharp.fluid} altText='Surescripts Illustrations' link='/'/>
    </Row>
    </Intersect>
    </div>
    
  </Layout>
)
  
}

export default IndexPage
