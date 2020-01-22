import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import Intersect from '../components/useIntersect'
import wtcGIF from "../images/home/wtc/WTC.gif"
import cnGIF from "../images/home/carpe/cn.gif"
import atfGIF from "../images/home/anytime/atf.gif"
import pbpGIF from "../images/home/pbp/pbp.gif"
import guruGIF from "../images/home/gurus/gurus_main.gif"

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
    jj: file(relativePath: { eq: "home/jensjars/jj-main-1000-01.jpg" }) {
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
    sol: file(relativePath: { eq: "home/sol/sol-main-1000.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    play: file(relativePath: { eq: "home/play/play.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
  <Layout hide='hide'>
    <SEO title="Home" />
    <div className="content-container">
    <Row>
    <ProjectGIF title='Waxing the City:' subtitle='Social Media Content' src={wtcGIF} alt='Waxing the City Social' link='/waxingthecity'/>
    <Project title={`Jen's Jars:`} subtitle='Visual Identity' imgName={data.jj.childImageSharp.fluid} altText='Jens Jars' link='/jensjars'/>
    </Row>
    <Row>
    <Project title='Surescripts:' subtitle='Brand Narrative + Guide' imgName={data.ss.childImageSharp.fluid} altText='Surescripts' link='/surescripts'/>
    <ProjectGIF title='Carpe Noctem:' subtitle='Visual Identity' src={cnGIF} alt='Carpe Noctem' link='/carpenoctem'/>
    </Row>
    <Intersect>
    <Row>
    <ProjectGIF title='Anytime Fitness:' subtitle='Social Media Content' src={atfGIF} alt='Anytime Fitness Social Media Content' link='/anytimefitness'/>
    <Project title='MN State Fair' subtitle='Illustrations' imgName={data.mnsf.childImageSharp.fluid} altText='MN State Fair Illustration' link='/mnsf'/>
    </Row>
    </Intersect>
    <Intersect>
    <Row>
    <ProjectGIF title='Peace by Peace Yoga:' subtitle='Visual Identity' src={pbpGIF} altText='Peace by Peace Yoga Branding' link='/peacebypeace'/>
    <Project title='Sol Sounds' subtitle='Logo + Identity' imgName={data.sol.childImageSharp.fluid} altText='Sol Sounds Record Branding' link='/solsounds'/>
    {/* <Project title='Surescripts Illustrations' subtitle='Editorial Illustrations' imgName={data.ss.childImageSharp.fluid} altText='Surescripts Illustrations' link='/'/> */}
    </Row>
    </Intersect>
    <Intersect>
    <Row>
    {/* <Project title='Yoga Center:' subtitle='Quarterly Catalog' imgName={data.ss.childImageSharp.fluid} altText='Yoga Center Catalog' link='/'/> */}
    <Project title='Misc. Illustrations' subtitle='' imgName={data.play.childImageSharp.fluid} altText='Misc. Illustrations' link='/play'/>
    <ProjectGIF title='Yoga Gurus' subtitle='' src={guruGIF} alt='Yoga Gurus' link='/yogagurus'/>
    </Row>
    </Intersect>
    </div>
    
  </Layout>
)
  
}

export default IndexPage
