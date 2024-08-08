import React from "react";
import "./About.css";
// import Jump from "react-reveal/Jump";
import { Bounce } from 'react-awesome-reveal';
import photo from '../../assets/docs/Evolution-of-Coding-scaled.jpg';
const About = () => {
  return (
    <>
      <Bounce>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={photo}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              As a highly motivated and passionate software developer, my primary career goal is to leverage my strong foundation in web development, data structures, and algorithms to create innovative and efficient software solutions. I aim to continuously enhance my skills and stay updated with the latest industry trends and technologies to deliver high-quality, user-friendly applications. With a keen interest in both frontend and backend development, I aspire to contribute to dynamic projects and work with diverse teams to solve complex problems. Ultimately, I seek to advance my career by taking on challenging roles that allow me to grow as a developer and make a meaningful impact in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default About;
