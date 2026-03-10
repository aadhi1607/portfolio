import React from "react";
import { Link } from "react-router-dom";
import "./Embedded_project.css";
import embeddedImage from "../../Assets/Images/Embedded.png";

const ProjectDetails1 = () => {
  // Dummy data for the project details
  const projectData = {
    title: "Social media News App",
    description:
      "This project involves developing an IoT-based smart greenhouse system using Arduino. The system monitors environmental factors such as temperature, humidity, and soil moisture, and adjusts conditions like water supply, temperature moderation, and lighting conditions automatically.",
    technologies: ["MongoDB", "Javascript", "React", "Express.js", "Node.js", "Github"],
    githubLink: "https://github.com/aadhi1607/SocialmediaNewsApp",
    
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
          
          <p>
            Social Media  is an innovative social media platform that combines the power of news sharing and social interaction. Users can discover, share, 
            and discuss news articles with friends, making it a hub for staying informed and connected. The platform's real-time chat feature encourages 
            meaningful conversations around the latest topics.
          </p>
          <p>
            To enhance engagement, SocialSphere tracks likes and comments, providing users with insights into the most popular and trending news. A personalized 
            feed ensures that users see content tailored to their interests, keeping their experience relevant and engaging.
          </p>
          <p>
            With its seamless design and interactive features, SocialSphere transforms how news is consumed and shared. It bridges the gap between staying 
            updated and staying connected, fostering a dynamic community of informed individuals.
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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails1;
