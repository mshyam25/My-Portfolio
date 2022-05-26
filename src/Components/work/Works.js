import React from "react";
import "./Works.css";
const Works = () => {
  return (
    <>
      <h3 className="LinkTitle" id="work">
        Work Experience
      </h3>
      <div className="full_timeline_container">
        <div className="timeline_container">
          <div className="timeline_container_card present_box">
            <div className="timline_border"></div>
            <div className="timeline_container_card_body">
              <h1 className="timeline_container_card_title">
                11/2021 - Present
              </h1>
              <p className="timeline_companyname">Tata Consultancy Services</p>
              <p className="timeline_role">Developer</p>
              <p className="timeline_container_card_details">
                Developing new UI components based on Requirements using
                functional components.
              </p>
            </div>
          </div>
          {/* <!-- card2 --> */}
          <div className="timeline_container_card">
            <div className="timeline_container_card_body">
              <h1 className="timeline_container_card_title">
                06/2020 - 10/2021
              </h1>
              <p className="timeline_companyname">Tata Consultancy Services</p>
              <p className="timeline_role">Technical Analyst</p>
              <p className="timeline_container_card_details">
                <ul>
                  <li>
                    Served as primary point of contact for support relating to
                    owned solutions and products.
                  </li>
                  <li>
                    Followed up with clients to verify optimal customer
                    satisfaction following support engagement and problem
                    resolution.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* <!-- card 3 --> */}
          <div className="timeline_container_card">
            <div className="timeline_container_card_body">
              <h1 className="timeline_container_card_title">
                07/2018 - 05/2020
              </h1>
              <p className="timeline_companyname">Tata Consultancy Services</p>
              <p className="timeline_role">Production Support Engineer</p>
              <p className="timeline_container_card_details">
                <ul>
                  <li>
                    Worked with software development team on reported errors and
                    bugs on newly released software and assisted in deployment
                    of release fixes.
                  </li>
                  <li>
                    Documented technical workflows and knowledge to educate
                    newly hired employees.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* <!-- card 4 --> */}
          <div className="timeline_container_card">
            <div className="timeline_container_card_body">
              <h1 className="timeline_container_card_title">
                03/2018 - 06/2018
              </h1>
              <p className="timeline_companyname">Tata Consultancy Services</p>
              <p className="timeline_role">Graduate Engineering Trainee</p>
              <p className="timeline_container_card_details">
                <ul>
                  <li>
                    Planned website development, converting mockups into usable
                    web presence with HTML, JavaScript, AJAX and JSON coding.
                  </li>
                  <li>
                    Multi-tasked across multiple functions and roles to meet
                    deadlines and organizational expectations.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
