import React from 'react';
import { ReactTyped } from 'react-typed';
import './Home.css';
import Resume from '../../Assets/Docs/resume2.pdf'
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>
          Hi 👋 I am  a
        </h2>
        <h1>
        <ReactTyped
            strings={['MERN stack developer!','Firmware developer!','Embedded engineer!' ]}
            typeSpeed={100} // Adjust typing speed here
            backSpeed={10} // Set to inf to avoid backspacing
            startDelay={500} // Initial delay before typing starts
            loop={true} // Loop through the texts infinitely
            showCursor={true} // Show blinking cursor
          />
        </h1>
        <div className='home-buttons'>
          <a className='btn btn-hire' href = "https://www.linkedin.com/in/aadithiyan-murugappan-a10611289/" > Hire Me </a>
          <a className='btn btn-cv' href={Resume} download="Adithiyan_Murugappan_Resume.pdf"> My Resume </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
