import React from "react";
import "./Skills.css";

import { Skilllist } from "../../utils/Skilllist";
const Skills = () => {
  return (
    <>
      <div className="container Skills">
        
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Skills
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, tools and networking protocols 
          </p>
        
        <div className="row">
          {Skilllist.map((tech) => (
            
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;