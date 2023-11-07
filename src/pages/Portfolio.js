import React from 'react';
import NavbarTop from '../components/NavbarTop';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';
import Project from '../components/Project';
import Client from '../components/Client';
import Contact from '../components/Contact';

const Portfolio = () => {
  return (
    <>
      <NavbarTop/>
      <Hero />
      <About />
      <Project />
      <Blog />
      <Client />
      <Contact />
    </>
  )
}

export default Portfolio;
