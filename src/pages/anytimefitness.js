import React from 'react'
import Layout from '../components/layout'
import atf1 from '../images/atf/af-proj-445-01.gif'
import atf2 from '../images/atf/af-proj-445-02.png'
import atf3 from '../images/atf/af-proj-445-03.gif'
import atf4 from '../images/atf/af-proj-445-04.jpg'
import atf5 from '../images/atf/af-proj-445-05.gif'
import atf6 from '../images/atf/af-proj-445-06.png'
import atf7 from '../images/atf/af-proj-445-07.gif'
import atf8 from '../images/atf/af-proj-445-08.jpg'
import atf9 from '../images/atf/af-proj-445-09.gif'

const data = [
{src:atf1, alt:'AnytimeFitness Social'},
{src:atf2, alt:'AnytimeFitness Social'},
{src:atf3, alt:'AnytimeFitness Social'},
{src:atf4, alt:'AnytimeFitness Social'},
{src:atf5, alt:'AnytimeFitness Social'},
{src:atf6, alt:'AnytimeFitness Social'},
{src:atf7, alt:'AnytimeFitness Social'},
{src:atf8, alt:'AnytimeFitness Social'},
{src:atf9, alt:'AnytimeFitness Social'},
]
const ATF = () => (
<Layout prevUrl='/carpenoctem' nextUrl='/mnsf'>
    <div className="wtc-content-container">
    <h1>Anytime Fitness:<br/>Social Media Content</h1>
    <p>Social media content for Anytime Fitness. We ideate and create monthly content for each of Anytime Fitness’s strategic pillars: healthy lifestyle, nutrition and coaching. Our social content strategy supports the larger marketing initiative to shift brand perception from being a convenience gym to <em>the</em> gym for the results, support and expertise you need to achieve your every goal. Being on such a small team, many times I am hands on with ideas from concept through final execution.</p>
    {data.map(img => <div className='col'>
    <img src={img.src} alt={img.alt}/>
    </div>)}
    </div>
</Layout>
)

export default ATF;