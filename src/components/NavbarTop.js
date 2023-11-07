import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import './NavbarTop.css';

const NavbarTop = () => {
  const menu = useRef();
  const [isShadowNav, setIsShadowNav] = useState('');

  const closeMenu = () => {
    menu.current.style.right = '-350px';
  };
  const openMenu = () => {
    menu.current.style.right = '0';
  };
  const perfectMobileScroll = (e) => {
    window.scrollY = window.pageYOffset  - 90;
    closeMenu();
  }
  
  useEffect(()=>{
    const sections = document.querySelectorAll('section');
    
    const navLinks = menu.current.childNodes;
    window.addEventListener("scroll", ()=>{
      setIsShadowNav( (window.pageYOffset > 100) ? 'shadow' : '');
      
      sections.forEach(sec => {
        let top = window.pageYOffset;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        
        if(top+150 >= offset && top <= offset + height){
          let secId = sec.getAttribute('id');
          navLinks.forEach(links => {
            links.classList.remove('active');
            if(links.getAttribute('data-section') === secId){
              (secId === 'contact') ? links.setAttribute('class', 'nav-btn active') : links.setAttribute('class', 'active');;
              
            }
          })
        }
      })

    })

    
  });

  return (
    <div id='nav-top' className={'d-oflex justify-between align-center container-both '+isShadowNav} >
      <h1 id='logo'>Portfolio</h1>
      <span className="material-icons material-symbols-outlined d-none cursor-pointer" id='menu-btn' onClick={openMenu}>menu</span>
      <ul className='nav-lists' ref={menu}>
        <li className='active' data-section='hero'><Link to='hero' spy={true} smooth={true} offset={10} duration={200} onClick={perfectMobileScroll} >Home</Link></li>
        <li data-section='about'><Link to='about' spy={true} smooth={true} offset={10} duration={200} onClick={perfectMobileScroll} >About</Link></li>
        <li data-section='project'><Link to='project' spy={true} smooth={true} offset={10} duration={200} onClick={perfectMobileScroll} >Project</Link></li>
        <li data-section='blog'><Link to='blog' spy={true} smooth={true} offset={10} duration={200} onClick={perfectMobileScroll} >Blog</Link></li>
        <li data-section='client'><Link to='client' spy={true} smooth={true} offset={10} duration={200} onClick={perfectMobileScroll} >Review</Link></li>
        <li className='nav-btn' data-section='contact'><Link to='contact' spy={true} smooth={true} offset={10} duration={200} onClick={perfectMobileScroll} >Contact</Link></li>
        <span className='material-icons material-symbols-outlined d-none cursor-pointer' id='menu-close-btn' onClick={closeMenu}>close</span>
      </ul>
    </div>
  )
}
export default NavbarTop;
