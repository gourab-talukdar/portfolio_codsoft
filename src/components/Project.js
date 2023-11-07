import React from 'react';
import proj1 from '../assets/img/wordsworth.JPG';
import proj2 from '../assets/img/redsky.JPG';
import proj3 from '../assets/img/diptiagrotech.JPG';
import proj4 from '../assets/img/onlineexam.JPG';
import './Project.css';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <section id='project' className='container-both d-oflex  justify-center flex-col'>
        <div>
            <h2 className='section-heading'>Projects</h2>
        </div>
        <div className='project-container'>
            <Link to='https://wordsworthschool.com/' target='_blank'>
                <div className='project-container__item'>
                    <img src={proj1} alt='project_img' />
                </div>
            </Link>
            <Link to='https://redskyeducations.co.in/' target='_blank'>
                <div className='project-container__item'>
                    <img src={proj2} alt='project_img' />
                </div>
            </Link>
            <Link to='https://onlineexamportal.wordsworthschool.com/student_portal/' target='_blank'>
                <div className='project-container__item'>
                    <img src={proj4} alt='project_img' />
                </div>
            </Link>
            <Link to='https://www.diptiagrotech.com/index.php' target='_blank'>
                <div className='project-container__item'>
                    <img src={proj3} alt='project_img' />
                </div>
            </Link>
        </div>
        <div className='d-flex' style={{margin: '2rem auto'}}>
            <div className='primary-link'>
                <Link to='https://github.com/gourab-talukdar' target='_blank' className='d-oflex align-center'>View All Projects <span className="material-icons material-symbols-outlined">navigate_next</span></Link>
            </div>
        </div>
    </section>
  )
}

export default Project;
