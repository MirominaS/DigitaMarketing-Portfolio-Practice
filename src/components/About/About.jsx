import React from 'react';
import "./About.css";
import images from '../../constants/images'

const About = () => {
  return (
    <section className = 'about section-p bg-dark' id="about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className='content-left'>
                    <img src={images.about_main_img} className='image-sz' alt="" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className='text'>Lorem ipsum, dolor sit amet
                         consectetur adipisicing elit. 
                         Quasi error labore at ipsa cum dolore nobis 
                         quaerat iusto quisquam laudantium amet, 
                         accusantium cumque distinctio consequatur,
                          placeat, fugit consequuntur dolorum.
                           Deleniti!</p>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ullam, temporibus. 
                            distinctio pariatur libero quos odio.</p>
                </div>
            </div>
        </div>
    </section>
  )
} 

export default About