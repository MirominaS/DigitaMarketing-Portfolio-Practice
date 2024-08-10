import React from 'react';
import "./Services.css";
import sections from "../../constants/data";
import SingleService from './SingleService';

const Services = () => {
  return (
    <section className='services section-p bg-md-black' id="services">
        <div className='container'>
            <div className='services-content'>
                <svg width = "1rem" height= "1rem">
                    <lineaeGradient id = "blue-gradient" x1 = "100%" y1 = "100%" x2 = "0%" y2 = "0%">
                        <h3>Services</h3>
                        <stop stopColor='#55b3d5' offset="0%"/>
                        <stop stopColor='#5764de' offset="100%"/>
                    </lineaeGradient>
                </svg>
                <div className='item-list grid text-white text-center'>
                    {
                        sections.services.map(service => {
                            return(
                                <SingleService service = {service} key = {service.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services