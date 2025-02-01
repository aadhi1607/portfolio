import React from "react";
import { Link } from "react-router-dom";
import "./Embedded_project.css";
import embeddedImage from "../../Assets/Images/Embedded.png";

const ProjectDetails = () => {
  // Dummy data for the project details
  const projectData = {
    title: "Smart Greenhouse Systems",
    description:
      "This project involves developing an IoT-based smart greenhouse system using Arduino. The system monitors environmental factors such as temperature, humidity, and soil moisture, and adjusts conditions like water supply, temperature moderation, and lighting conditions automatically.",
    technologies: ["Arduino", "IoT", "ARM", "I2C", "UART"],
    githubLink: "https://github.com/aadhi1607/Smart-greenhouse-system",
    demoLink: "https://www.tinkercad.com/things/kmQ8nj3r5ya-brave-albar-duup",
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
          <img src={embeddedImage} alt="Smart Greenhouse System" />
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
            This project develops a smart greenhouse system using advanced technologies to optimize growing conditions of crops. The smart greenhouse
            features environmental sensors that continuously monitor temperature, light intensity, and soil moisture. These sensors provide real-time
            data to Arduino Due (controller), which automatically adjusts cooling, lighting, and irrigation systems.
          </p>
          <p>
            An automated irrigation system, guided by soil moisture data and weather forecasts, delivers precise water amounts, enhancing efficiency and
            preventing over- or under-watering. LED grow lights supplement natural light, ensuring optimal photosynthesis. Remote monitoring is achieved
            via integrating the Arduino Due with ESP8266 Node MCU which is connected to Wi-Fi at our home.
          </p>
          <p>
            It transmits sensor data such as temperature, soil moisture, and light intensity, which can be accessed via smartphone or a PC. This project
            demonstrates significant improvements in crop yield, quality, and resource efficiency, contributing to sustainable agriculture and food
            security, and providing a practical solution for modern farming.
          </p>
          <div className="project-links">
            <a
              href={projectData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
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

export default ProjectDetails;
