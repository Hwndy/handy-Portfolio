import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "handy-Portfolio",
            description: "A modern portfolio website built with React and Vite, featuring responsive design and dynamic content sections.",
            tech: ["React", "Vite", "CSS3"],
            github: "https://github.com/Hwndy/handy-Portfolio",
            live: "#"
        },
        {
            title: "Farmera",
            description: "An agri-tech platform for monitoring farm productivity and sales. Features real-time dashboard and logistics optimization.",
            tech: ["React", "Node.js", "MongoDB"],
            github: "https://github.com/Hwndy/Farmera",
            live: "#"
        },
        {
            title: "Tic-Tac-Toe",
            description: "Interactive Tic-Tac-Toe game built with React, featuring player turns and win detection.",
            tech: ["React", "JavaScript", "CSS"],
            github: "https://github.com/Hwndy/Tic-Tac-Toe",
            live: "#"
        },
        {
            title: "Handy-Ecommerce",
            description: "Full-stack e-commerce platform with product catalog, cart management, and secure checkout integration.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/Hwndy/Handy-Ecommerce",
            live: "#"
        },
        {
            title: "Handy-Blog",
            description: "Personal blog platform with content management system and responsive design.",
            tech: ["React", "Node.js", "MongoDB"],
            github: "https://github.com/Hwndy/Handy-Blog",
            live: "#"
        },
        {
            title: "Handy-Chat",
            description: "Real-time chat application with private messaging and group chat functionality.",
            tech: ["React", "Socket.io", "Node.js"],
            github: "https://github.com/Hwndy/Handy-Chat",
            live: "#"
        }
    ];

    return (
        <section className="projects" id="projects">
            <h2 className="heading">Featured <span>Projects</span></h2>
            
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="tech-stack">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                                    View Code
                                </a>
                                {project.live !== "#" && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
