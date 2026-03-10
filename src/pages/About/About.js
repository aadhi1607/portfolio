import React from 'react'
import './About.css'
import myPic from "../../Assets/Images/mypic.jpeg";
const About = () => {
  return (
    <>
        <div className='About'>
            <div className='row'>
                <div className='col-md-6 col xl-6 col-lg-6 col-xs-12 about-img'> 
                <img src= {myPic} alt = 'profile_pic'></img>    
                </div>
                <div className='col-md-6 col xl-6 col-lg-6 col-xs-12  about-content'> 
                <h1> <u> About Me </u> </h1>
                  <p> </p>
                    <p> 
                      I am an Embedded Software Engineer with extensive experience in ARM-based microcontroller systems, real-time operating systems, and firmware 
                      development. Proficient in programming languages like C, C++, and Python, I specialize in hardware-software integration, debugging, and 
                      optimizing embedded systems for high performance. My work spans diverse domains, including IoT, automotive systems, and energy-efficient 
                      technologies. 
                    </p>
                    <p>
                    Over the years, I have contributed to impactful projects such as predictive modeling for electric vehicles, designing optimized IoT systems, 
                    and streamlining firmware for improved system efficiency. With expertise in communication protocols like SPI, I2C, and CAN Bus, I have 
                    consistently demonstrated a strong ability to tackle complex challenges and deliver innovative solutions tailored to specific technical needs.
                    </p>

                    <p>
                    Beyond technical work, I am passionate about staying at the forefront of emerging trends in embedded systems, machine learning, and smart 
                    technologies. I thrive in collaborative environments where I can learn from others and share my knowledge to drive progress. My ultimate goal 
                    is to create cutting-edge solutions that not only meet today’s demands but also pave the way for future advancements in technology.
                    </p>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default About