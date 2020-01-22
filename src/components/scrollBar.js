import React, { useState, useEffect } from "react";

const ScrollBar = ({name, children}) => {
   
   if (typeof window === 'undefined') {
      global.window = {}
    }
    
   let [pos, setPos] = useState(window.pageYOffset)
   let [visible, setVisible] = useState(true)
   
   useEffect(()=> {
      const handleScroll = () => {
         let temp = window.pageYOffset
         if(temp > 100){
            document.body.classList.remove('nav-top');
         }
         else {
            document.body.classList.add('nav-top');
         }
         setVisible(pos > temp);
         setPos(temp)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
   })
  
      return (
         <>
            <section className={"scrollbar " + name + ' ' + (!visible ? "scrollbar-hidden" : " ")}>
            {/* <Menu/> */}
            {children}
            </section>
         </>
         )
    }


    export default ScrollBar