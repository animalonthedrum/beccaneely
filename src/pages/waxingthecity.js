import React from 'react'
import Layout from '../components/layout'
import wtc1 from '../images/wtc/wtc-01.gif'
import wtc2 from '../images/wtc/wtc-02.gif'
import wtc3 from '../images/wtc/wtc-03.jpg'
import wtc4 from '../images/wtc/wtc-04.gif'
import wtc5 from '../images/wtc/wtc-05.gif'
import wtc6 from '../images/wtc/wtc-06.gif'
import wtc7 from '../images/wtc/wtc-07.gif'
import wtc8 from '../images/wtc/wtc-08.gif'
import wtc9 from '../images/wtc/wtc-09.gif'
import wtc10 from '../images/wtc/wtc-10.jpg'
import wtc11 from '../images/wtc/wtc-11.gif'
import wtc12 from '../images/wtc/wtc-12.gif'

const data = [
{src:wtc1, alt:'2'},
{src:wtc2, alt:'3'},
{src:wtc3, alt:'3'},
{src:wtc4, alt:'scrub'},
{src:wtc5, alt:'scrub'},
{src:wtc6, alt:'scrub'},
{src:wtc7, alt:'scrub'},
{src:wtc8, alt:'scrub'},
{src:wtc9, alt:'scrub'},
{src:wtc10, alt:'scrub'},
{src:wtc11, alt:'scrub'},
{src:wtc12, alt:'scrub'},
]
const WTC = () => (
<Layout prevUrl='/yogagurus' nextUrl='/jensjars'>
    <div className="wtc-content-container">
    <h1>Waxing the City:<br/>Social Media Content</h1>
    <p>We ideate and create monthly content for franchisees and the Waxing the City accounts. Key strategies are to draw awareness to WTC as an educator and bring attention to their growing roster of beauty products.</p>
    {data.map(img => <div className='col'>
    <img src={img.src} alt={img.alt}/>
    </div>)}
    </div>
</Layout>
)

export default WTC;