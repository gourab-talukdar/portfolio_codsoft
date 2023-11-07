import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import aboutImg from '../assets/img/desk_with_person.gif';
import cvGourab from '../assets/Gourab Talukdar.pdf';
import './About.css';

const About = () => {
  return (
    <section id='about' className='container-both d-oflex align-center justify-between'>
        <div>
            <img src={aboutImg} alt='about_bg' className='section-img'/>
        </div>
        <div className='details-container'>
            <div>
                <h2 className='section-heading'>About Me</h2>
                <p className='para'>I am a skilled web developer with expertise in front-end and back-end technologies, dedicated to creating responsive and user-friendly websites that meet clients' needs and industry standards.</p>
            </div>
            <div>
                <h2 className='section-heading'>Contact Me</h2>
                <p className='para' style={{marginBottom:"1rem"}}>
                    Looking for a web developer, who can make your project professional and secure? Contact me.
                </p>
                {/* <Link to=''  >Contact</Link> */}
                <LinkScroll to='contact' className='primary-btn' style={{marginRight:"1rem"}} spy={true} smooth={true} offset={10} duration={200} >Contact</LinkScroll>
                <a href={cvGourab} className='primary-btn' download="Resume">Download CV</a>
            </div>
        </div>
    </section>
  )
}

export default About
