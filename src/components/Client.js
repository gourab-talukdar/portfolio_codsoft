import React, { useMemo, useState } from 'react';
import './Client.css';
import ClientBox from './ClientBox';
import clientRedSky from '../assets/img/client-redsky.JPG';
import clientDiptiAgrotech from '../assets/img/client-dipti-agrotech.jpg';
import clientWordsWorth from '../assets/img/client-words-worth.jpg';


const Client = () => {
    const [active, setActive] = useState(1);
    const clientDetails = useMemo(()=>{
        return (
            [
                {
                    c_id: 1,
                    name: "Mr. Anirban Das",
                    designation: "Founder",
                    company_name: "RedSky Educations Pvt. Ltd.",
                    review: "Exceptional web development service, exceeded all expectations, and delivered a highly responsive, visually stunning website that perfectly represents our brand.",
                    client_img: clientRedSky
                },
                {
                    c_id: 2,
                    name: "Mr. Subrata Deb Roy",
                    designation: "Founder & Director",
                    company_name: "Dipti Agro Tech Pvt. Ltd.",
                    review: "Outstanding job on the web development project; the website exceeds our expectations in both design and functionality.",
                    client_img: clientDiptiAgrotech
                },
                {
                    c_id: 3,
                    name: "Mr. Biswarup Saha",
                    designation: "Founder",
                    company_name: "Words Worth School",
                    review: "Delivered an exceptional website that exceeded our expectations in both design and functionality.",
                    client_img: clientWordsWorth
                }
            ]
        );
    }, []);

  return (
    <section id='client' className='container-both d-oflex  justify-center flex-col'>
        <div className='d-flex flex-col '>
            <p className='meta-section-heading'>Reviews of</p>
            <h2 className='section-heading'>My Clients</h2>
        </div>
        <div className='client-container d-flex'>
            {
                clientDetails.map((client)=>{
                    return(<ClientBox key={client.c_id} client={client} active={active} />);
                })
            }
        </div>
        <div className='dot-container d-flex'>
            {
                clientDetails.map((client)=>{
                    return(<span key={client.c_id} className={`dot ${client.c_id === active ? 'active' : ''}`} onClick={()=>setActive(client.c_id)} ></span>);
                })
            }
        </div>
    </section>
  )
}

export default Client;

