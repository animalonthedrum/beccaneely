import React, { useState, useEffect } from 'react';
import useLockBodyScroll from './use-lock-body-scroll';
import { Link } from "gatsby"


function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    var isScrolling;
    // console.log('scroll');
    const topOffset = () => {
      window.clearTimeout( isScrolling );
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {
        // Run the callback
        // console.log( 'Scrolling has stopped.' );
    
      }, 100);
    }
    window.addEventListener("scroll", topOffset);
    return () => {
      // console.log('unscroll');
      window.removeEventListener("scroll", topOffset);
    };
  }, [])



  return (
    <div className='mobile-menu'>
      <div className="menuButton">
        <button onClick={() => setMenuOpen(true)}><span></span><span></span></button>
      </div>

      {menuOpen && (
        <NavLinks
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

function NavLinks({ onClose }) {
  useLockBodyScroll();
  return (
    <ul className="menu-overlay" onClick={onClose}>
      <li><Link to="/" onClick={onClose}>Work</Link></li>
      <li><Link to="/info" onClick={onClose}>Info</Link></li>
    </ul>
  );
}


export default Menu