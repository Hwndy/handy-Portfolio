import React from "react";
import profileImage from "../assets/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      
      <div className="about-content">
        <div className="about-img">
          <img src={profileImage} alt="Sulaimon Ibrahim" />
        </div>

        <div className="about-text">
          <h3>Full Stack Software Developer</h3>
          <p>
            Results-driven Full Stack Software Developer specializing in JavaScript ecosystem 
            with expertise in React, Node.js, and NoSQL databases. Currently working at P+ Measurements 
            where I develop scalable web applications and optimize backend performance.
          </p>

          <div className="experience-grid">
            <div className="exp-item">
              <h4>Technical Expertise</h4>
              <ul>
                <li>Frontend: React, TypeScript, TailwindCSS</li>
                <li>Backend: Node.js, Express.js, Django</li>
                <li>Databases: MongoDB, PostgreSQL, MySQL</li>
                <li>DevOps: AWS, Docker, CI/CD, Git</li>
              </ul>
            </div>

            <div className="exp-item">
              <h4>Education</h4>
              <ul>
                <li>B.Sc. Microbiology - Lagos State University</li>
                <li>Full Stack Development - SAIL LAB</li>
                <li>Web Development - LAG-UP Program</li>
              </ul>
            </div>
          </div>

          <div className="achievements">
            <h4>Leadership & Achievements</h4>
            <ul>
              <li>General Secretary - MSSN-LASU (2023-2024)</li>
              <li>Award of Excellence: Executive of the Year</li>
              <li>DFA-NITDA Full Stack Certification</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
