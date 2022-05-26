import React from "react";
import "./About.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import InterestsIcon from "@mui/icons-material/Interests";
const About = () => {
  return (
    <div id="about">
      {" "}
      <h3 className="LinkTitle">About Page</h3>
      <div className="card_container">
        <div className="about_container">
          <div className="about_container_box">
            <h2>Education</h2>
            <h3>
              <SchoolIcon className="about_icon" />
            </h3>
            <p>
              I Have a Bachelor's degree in Electronics and Communication
              Engineering from Thiagarajar College of Engineering.
            </p>
          </div>
          <div className="about_container_box">
            <h2>Work</h2>
            <h3>
              <WorkIcon className="about_icon" />
            </h3>

            <p>
              A Software Engineer working for Tata Consultancy Services,
              awestruck by the different UI experiences, I gradually developed
              interest in Web Development.
            </p>
          </div>
          <div className="about_container_box">
            <h2>Interest</h2>
            <h3>
              <InterestsIcon className="about_icon" />
            </h3>
            <p>
              I have done a few Full stack Projects and mini projects. Apart
              from work, I like to spend time reading about space and very
              passionate about Football.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
