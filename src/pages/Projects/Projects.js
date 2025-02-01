import React from "react";
import "./Projects.css";
import Embedded from "../../Assets/Images/embedded_systems.png";
import Machine from "../../Assets/Images/machinelearning.jpg";
import Firmware from "../../Assets/Images/firmware.jpg";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Welcome to my project showcase! Here, you’ll find a collection of
          the projects I’ve worked on, demonstrating my skills in Embedded
          engineering, programming, and creative problem-solving. These projects
          reflect my ability to take on diverse challenges and deliver
          innovative, user-friendly solutions. These projects are not just
          examples of my work, but a testament to my passion for technology and
          continuous learning.
        </p>
        {/* Card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Embedded systems</span>
                <img src={Embedded} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Arduino</span>
                <span className="card-detail-badge">IoT</span>
                <span className="card-detail-badge">ARM</span>
                <span className="card-detail-badge">I2C</span>
                <span className="card-detail-badge">UART</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    Smart greenhouse systems
                  </h6>
                </div>
                <a className="ad-btn" href="/project-details">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Website development</span>
                <img src={Machine} alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node JS</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Javascript</span>
                <span className="card-detail-badge">Express JS</span>
                <span className="card-detail-badge">Pytorch</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Social media news app
                  </h5>
                </div>
                <a className="ad-btn" href="/project-details1">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Signal processing</span>
                <img src={Firmware} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Signal processing</span>
                <span className="card-detail-badge">Digital filter design</span>
                <span className="card-detail-badge">Bandpass filter</span>
                <span className="card-detail-badge">Soldering</span>
                <span className="card-detail-badge">MATLAB</span>
                
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Smart road assistant
                  </h5>
                </div>
                <a className="ad-btn" href="/project-details2">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
