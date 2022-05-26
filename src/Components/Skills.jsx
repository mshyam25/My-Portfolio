import React from "react";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      {/* <h2 className="section-heading">Skills and Tools</h2> */}
      <h3 className="LinkTitle">Skills and Tools</h3>
      <div className="skills">
        <div className="skill-box">
          <img
            src="img/skills/react.svg"
            className="skill-icon"
            alt="React icon"
          />
          <p className="skill-text">React</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/redux.svg"
            className="skill-icon"
            alt="Redux icon"
          />
          <p className="skill-text">Redux</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/nodejs.svg"
            className="skill-icon"
            alt="Nodejs icon"
          />
          <p className="skill-text">Node js</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/mongodb.svg"
            className="skill-icon"
            alt="Mongodb icon"
          />
          <p className="skill-text">Mongodb</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/js.svg"
            className="skill-icon"
            alt="Javascript icon"
          />
          <p className="skill-text">Javascript</p>
        </div>
        <div className="skill-box">
          <img src="img/skills/git.svg" className="skill-icon" alt="Git icon" />
          <p className="skill-text">Git</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/css3.svg"
            className="skill-icon"
            alt="CSS icon"
          />
          <p className="skill-text">CSS</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/html5.svg"
            className="skill-icon"
            alt="Html icon"
          />
          <p className="skill-text">Html</p>
        </div>
        <div className="skill-box">
          <img
            src="img/skills/vscode.svg"
            className="skill-icon"
            alt="vsCode icon"
          />
          <p className="skill-text">VS Code</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
