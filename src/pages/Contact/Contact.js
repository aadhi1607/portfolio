import React from "react";
import Contactme from "../../Assets/Images/ContactMe.png";
import "./Contact.css";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={Contactme} alt="Contact" className="image" />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h3>Contact Information</h3>
                  <p className="mb-4">Feel free to reach out via the following channels:</p>
                  <p>
                    <strong>Email:</strong> aadimurugappan@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 514-573-2486
                  </p>
                  <h6 className="mt-4">
                    Connect With Me:
                    <a
                      href="https://www.linkedin.com/in/aadithiyan-murugappan-a10611289/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <BsLinkedin
                        color="blue"
                        size={30}
                        className="ms-2"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/aadi1607"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                    >
                      <BsFacebook
                        color="blue"
                        size={30}
                        className="ms-2"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/_.a_a_d_h_i._/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                    >
                      <BsInstagram
                        color="pink"
                        size={30}
                        className="ms-2"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
