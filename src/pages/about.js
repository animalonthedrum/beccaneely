import React from 'react';
import Layout from '../components/layout'
import {Container, FullWidth} from '../components/container'
const About = () => (
<Layout>
    <Container>
    <FullWidth flex='2' align='center' child='center'>
            <div className='project-card'>
            <h2 className='project-title'>Waxing the City: Social</h2>
            </div>
            <div className='project-card'>
            <h2 className='project-title'>Anytime Fitness: Social Content</h2>
            </div>
        </FullWidth>
        <FullWidth flex='1' align='center' child='center'>
        <div className='project-card'>
            <h2 className='project-title'>Jen's Jars</h2>
            </div>
        </FullWidth>
        <FullWidth flex='2' align='center' child='center'>
            <div className='project-card'>
            <h2 className='project-title'>Surescripts: Brand Guide</h2>
            </div>
            <div className='project-card'>
            <h2 className='project-title'>Surescripts: Brand Narrative</h2>
            </div>
        </FullWidth>
        <FullWidth flex='1' align='center' child='center'>
        <div className='project-card'>
            <h2 className='project-title'>Waxing the City</h2>
            </div>
        </FullWidth>
        <FullWidth flex='2' align='center' child='center'>
            <div className='project-card'>
            <h2 className='project-title'>Yoga Center Catalog</h2>
            </div>
            <div className='project-card'>
            <h2 className='project-title'>Yoga Gurus</h2>
            </div>
        </FullWidth>
        <FullWidth flex='1' align='center' child='center'>
        <div className='project-card'>
            <h2 className='project-title'>Sol Sounds</h2>
            </div>
        </FullWidth>
        <FullWidth flex='2' align='center' child='center'>
            <div className='project-card'>
            <h2 className='project-title'>MN State Fair</h2>
            </div>
            <div className='project-card'>
            <h2 className='project-title'>Play: Misc Illustrations</h2>
            </div>
        </FullWidth>


</Container>
</Layout>
)

export default About
