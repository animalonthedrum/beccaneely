import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

const Info= () => {
    const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "becca.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Layout hide='hide'>
        <div className="about-content-container">
        <div className="row">
        <div className="col">
            <Img fluid={data.me.childImageSharp.fluid} alt='Becca Neely Photo'/>
            </div>
            <div className="col">
                <h2>Greetings</h2>
                <p>I enjoy sharing beauty, bravery and intimacy in all that I do. My favorite thing about being a creative is bringing ideas to life. Making them tangible, digestible, and lasting. Bridging the gap between nebulous inspiration and physical existence. We creatives are magic makers—it’s true. I love that I’m in a profession where I can use intuition and empathy to visualize the feeling of a mission, brand, or idea. My favorite ideas are ones that inspire, universalize, and shift perspectives.</p>
                <p>I’ve been art making, designing and illustrating for over a decade. I’ve learned to be scrappy, to be quick on my toes, to be adaptable, to ask questions, to keep learning and endlessly loving the craft. “Use what you’ve got, do what you can, start where you are.” (Arthur Ashe)</p>
                <p>Outside of work, you’ll find me: on a meditation cushion, making a mess in the kitchen, or lost in the woods. I’m currently living in Robbinsdale, Minnesota with my partner and our dogs: Waffles and Mr. Weenie.</p>
                <p>Top 5 Strengths: Empathy, Strategic, Ideation, Intellection and Futuristic.</p>
                <h3>Contact</h3>
                <a href="mailto:becca.m.neely@gmail.com">becca.m.neely@gmail.com</a>
            </div>
        </div>
        </div>
    
</Layout>
 )   
}

export default Info;