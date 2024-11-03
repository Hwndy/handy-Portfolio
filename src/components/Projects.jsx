import React from 'react';
import projectImage from '../assets/project-thumbnail.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <section className="featured-projects" id="work">
            <h2>FEATURED PROJECTS</h2>
            <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
            <div className='card'>
            <div className="project-card">
             
                <div className="project-info">
                    <h3>Banking Application Platform</h3>
                    <p>Teamed up with a designer to breathe life into a unique Banking Application Platform.</p>
                    <p className="project-details">Year: 2024 <br /> Full-Stack Developer</p>
                    <div className="project-links">
                        <a href="#" className="live-demo">LIVE DEMO</a>
                        <a href="#" className="see-on-github">SEE ON GITHUB</a>
                    </div>
                    
                </div>
                
            </div>
            <div className="project-card">
             
                <div className="project-info">
                <h3>E-Commerce Platform</h3>
                    <p>Teamed up with a designer to breathe life into a unique E-Comerce Platform.</p>
                    <p className="project-details">Year: 2024 <br /> Full-Stack Developer</p>
                    <div className="project-links">
                        <a href="#" className="live-demo">LIVE DEMO</a>
                        <a href="#" className="see-on-github">SEE ON GITHUB</a>
                    </div>
                </div>
                
            </div>
            <div className="project-card">
             
                <div className="project-info">
                    <h3>Promotional landing page for our favorite show</h3>
                    <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show.</p>
                    <p className="project-details">Year: 2023 <br /> Role: Front-end Developer</p>
                    <div className="project-links">
                        <a href="#" className="live-demo">LIVE DEMO</a>
                        <a href="#" className="see-on-github">SEE ON GITHUB</a>
                    </div>
                    
                </div>
                
            </div>
            </div>
        </section>
    );
};

export default Projects;
