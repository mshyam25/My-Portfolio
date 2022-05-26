import React from "react";
import "./Footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div id="contact">
      <footer>
        <div className="container">
          <div className="first">
            <h3 className="footer-about-text">Lets Work Together!</h3>
            <img
              src="https://www.justis.com/wp-content/uploads/2020/02/Contact-vector-800.png"
              alt="footer_image"
            />
          </div>

          <div className="first">
            <h3>Contact Me</h3>
            <ul className="content">
              <li>
                <div className="phone footer-icon-text">
                  <LocalPhoneIcon className="footer-icon" />

                  <a
                    href="tel:8220977534"
                    className="phone-text"
                    rel="noreferrer"
                  >
                    8220977534
                  </a>
                </div>
              </li>
              <li>
                <div className="email footer-icon-text">
                  {" "}
                  <MailIcon className="footer-icon" />
                  <a
                    href="mailto: shyammanikandan.22@gmail.com"
                    className="phone-text"
                    rel="noreferrer"
                  >
                    shyammanikandan.22@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="profiles">
                  <a
                    href="https://linkedin.com/in/shyamm2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon className="icon linkedin" />{" "}
                  </a>
                  <a
                    href="https://github.com/mshyam25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon className="icon github" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Portfolio © Made with React</p>
      </div>
    </div>
  );
};

export default Footer;
