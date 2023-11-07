import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className='container-both d-flex'>
      <div className="blog-content">
        <h2 className='section-heading'>Don’t think, Join today!</h2>
        <p className='para'>Unlock the secrets of web development with insightful tips and support on my blog.</p>
        <form className='d-flex' action='#'>
          <input type='email' id='email-input' placeholder='Enter Your Email Id' />
          <input type='submit' value='Join' className="primary-btn" id='join-btn' />
        </form>
      </div>
	  </section>
  )
}

export default Blog;
