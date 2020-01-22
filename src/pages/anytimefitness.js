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
    <h1>Wax my back Page</h1>
    <p>Its hairy, its scary and just keeps coming back. That orange is oozing, is it sexual. Watch out for falling lavender. Scrub a dub dub. Social adds scrolling buy stuff.</p>
    {data.map(img => <div className='col'>
    <img src={img.src} alt={img.alt}/>
    </div>)}
    </div>
</Layout>
)

export default ATF;