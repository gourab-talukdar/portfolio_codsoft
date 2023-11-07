import React from 'react';
import HeroImg from '../assets/img/hero_img.gif';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero' className='container-both d-oflex align-center justify-between'>
      <div className=''>
        <div className='hero-txt'>
            <h4>Hey There,</h4>
            <h1>i'm <span>Gourab</span><br/>a web developer</h1>
        </div>
        <p className='para'>I am a professional web developer, who designs, creates, and maintains websites, using various technologies to ensure a seamless and user-friendly online experience with awesome responsive UI.</p>

        <div className='primary-link'>
            <Link to='/' className='d-oflex align-center'>About Me <span className="material-icons material-symbols-outlined">navigate_next</span></Link>
        </div>
        <LinkScroll to='contact' className='primary-btn' spy={true} smooth={true} offset={10} duration={200} >Hire Me</LinkScroll>
      </div>
      <div>
        <img src={HeroImg} alt='hero_bg' className='section-img' />
      </div>
    </section>
  )
}

export default Hero;
