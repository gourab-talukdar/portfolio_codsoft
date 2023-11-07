import React from 'react';
import'./Contact.css';

import fbLogo from '../assets/img/fb_logo.png';
import githubLogo from '../assets/img/github_logo.png';
import LinkedInLogo from '../assets/img/LinkedIn_logo.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id='contact' className='container-both d-oflex  justify-center flex-col'>
        <div className='d-flex flex-col '>
            <p className='meta-section-heading'>Get in Touch</p>
            <h2 className='section-heading'>Contact Me</h2>
        </div>
        <p className='meta-details'>There are several platforms on which i'm available like FaceBook, LinkedIn, Github</p>

        <div className='contact-details-container d-oflex align-center justify-between'>
            <div>
                <h4>Phone Number</h4>
                <Link to='tel:7001634925' className='d-oflex align-center'><span className="material-icons material-symbols-outlined">call</span>+91 7001634925</Link>
            </div>
            <div>
                <h4>Email</h4>  
                <Link to='mailto:iamgourabtalukdar@gmail.com' className='d-oflex align-center'><span className="material-icons material-symbols-outlined">mail</span> iamgourabtalukdar@gmail.com</Link>
            </div>

        </div>
        <div className='social-media d-flex'>
            <Link to='https://www.facebook.com/iamgourabtalukdar/' target='_blank'><img src={fbLogo} alt='fb_logo' /></Link>
            <Link to='https://github.com/gourab-talukdar' target='_blank'><img src={githubLogo} alt='github_logo' /></Link>
            <Link to='https://www.linkedin.com/in/gourabtalukdar/' target='_blank'><img src={LinkedInLogo} alt='LinkedIn_logo_logo' /></Link>
        </div>
        <p className='meta-details' id='copy-right'>&copy; {new Date().getFullYear()}, All Rights Reserved</p>
    </section>
  )
}

export default Contact;
