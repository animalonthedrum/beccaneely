import React from 'react'
import {Link} from 'gatsby'

const BreadCrumbs = ({nextUrl, prevUrl, hide}) => (
    <div className={`breadCrumbs ${hide ? hide : ""}`}>
        <ul>
            <li key='prev' className='prevPage'><Link to={prevUrl}>Prev</Link></li>
            <li key='next' className='nextPage'><Link to={nextUrl}>Next</Link></li>
        </ul>
    </div>
)

export default BreadCrumbs;