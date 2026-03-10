import React from "react";
import { Link } from "react-router-dom";
import "./Embedded_project.css";
import FreqResponse from "../../Assets/Images/Freq_response.png";

const ProjectDetails2 = () => {
  // Dummy data for the project details
  const projectData = {
    title: "Smart road assistant",
    description:
      "This project focuses on designing a Smart Vibrating Watch that assists hearing-impaired individuals by alerting them to vehicle horn sounds. The watch is equipped with a microphone and a frequency-based sound recognition system that detects horn sounds in real time. Upon detection, the watch triggers a vibration alert, notifying the wearer of an approaching vehicle to enhance their situational awareness and safety.",
    technologies: ["Digital filters", "Sound transducer", "Digital signal processing", "Vibration motor", "Rechargable battery"],
    githubLink: "https://matlab.mathworks.com/?elqsid=vqkyfep7kkhx4yvc2jpo",
    demoLink: "https://matlab.mathworks.com/?elqsid=vqkyfep7kkhx4yvc2jpo",
  };

  return (
    <div className="project-details-container">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 proj-img">
          <header className="header">
            <Link to="/" className="back-button">
              Back to Portfolio
            </Link>
          </header>
          <img src={FreqResponse} alt="Sound filter" />
          <div className="project-technologies">
            <h3>Technologies Used:</h3>
            <ul>
              {projectData.technologies.map((tech, index) => (
                <li key={index}>
                  <span className="custom-icon">✔</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 about-content">
          <h1>{projectData.title}</h1>
          <p>{projectData.description}</p>
          <p>
           Hearing-impaired individuals face challenges in detecting auditory cues in their environment, especially in outdoor and urban settings where vehicle
           horns play a critical role in ensuring pedestrian safety. This project aims to design and develop a Smart Vibrating Watch that helps alert 
           hearing-impaired individuals to approaching vehicles by detecting horn sounds and converting them into vibration feedback.
          </p>
          <p>
            The watch integrates a microphone, sound processing algorithms, and a vibration motor to recognize vehicle horn frequencies and provide real-time 
            haptic feedback to the wearer. This innovative assistive technology enhances situational awareness and helps reduce the risk of accidents in noisy
            or high-traffic areas.
          
          </p>
          <p>
          The Smart Vibrating Watch is a simple yet impactful assistive device designed to enhance the safety and independence of hearing-impaired individuals.
          By converting critical auditory signals into haptic feedback, this innovation bridges the accessibility gap and ensures that all individuals, 
          regardless of hearing ability, can navigate the urban environment with greater awareness and confidence.
          </p>
          <div className="project-links">
            
            <a
              href={projectData.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails2;
