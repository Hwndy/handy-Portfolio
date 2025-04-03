import React from 'react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="intro">
                <h1>SULAIMON IBRAHIM SEMAKO</h1>
                <h2>Full Stack Software Developer</h2>
                
                <div className="contact-info">
                    <p>📍 Ibeshe Housing Estate, Ikorodu, Lagos</p>
                    <p>📧 suleayo04@gmail.com</p>
                    <p>📱 08087438117</p>
                </div>

                <div className="in">
                    <div className="profile">
                        <img src={profileImg} alt="Sulaimon Ibrahim" />
                    </div>
                    
                    <div className="professional-summary">
                        <h3>Professional Summary</h3>
                        <p>
                            Results-driven Full Stack Software Developer with expertise in JavaScript (React, Node.js), 
                            and NoSQL databases. Adept at building scalable web applications, integrating APIs, 
                            and optimizing performance. Passionate about agile development, DevOps practices, 
                            and leadership in tech teams.
                        </p>
                        
                        <div className="tech-skills">
                            <span>✅ React</span>
                            <span>✅ Node.js</span>
                            <span>✅ MongoDB</span>
                            <span>✅ TypeScript</span>
                            <span>✅ AWS</span>
                            <span>✅ Docker</span>
                        </div>

                        <button onClick={() => window.open('www.linkedin.com/in/sulaimon-ibrahim-9549b624', '_blank')}>
                            Connect on LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
