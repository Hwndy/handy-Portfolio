import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGithubRepos();
    }, []);

    const fetchGithubRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/Hwndy/repos');
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const repos = await response.json();
            
            // Transform the data to include additional details
            const enhancedRepos = await Promise.all(repos.map(async (repo) => {
                // Fetch languages used in the repository
                const languagesResponse = await fetch(repo.languages_url);
                const languages = await languagesResponse.json();

                return {
                    title: repo.name,
                    description: repo.description || 'No description available',
                    tech: Object.keys(languages),
                    github: repo.html_url,
                    live: repo.homepage || "#",
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    updatedAt: new Date(repo.updated_at).toLocaleDateString()
                };
            }));

            // Sort repos by latest update
            const sortedRepos = enhancedRepos.sort((a, b) => 
                new Date(b.updatedAt) - new Date(a.updatedAt)
            );

            setProjects(sortedRepos);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleButtonClick = (event) => {
        const button = event.currentTarget;
        const ripple = button.querySelector('.ripple');
        
        if (ripple) {
            ripple.remove();
        }
        
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        button.appendChild(circle);
    };

    if (loading) {
        return (
            <section className="projects" id="projects">
                <h2 className="heading">Featured <span>Projects</span></h2>
                <div className="loading">Loading projects...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="projects" id="projects">
                <h2 className="heading">Featured <span>Projects</span></h2>
                <div className="error">Error: {error}</div>
            </section>
        );
    }

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

                            <div className="project-stats">
                                <span>⭐ {project.stars}</span>
                                <span>🍴 {project.forks}</span>
                                <span>📅 {project.updatedAt}</span>
                            </div>
                            
                            <div className="project-links">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn"
                                    onClick={handleButtonClick}
                                >
                                    View Code
                                </a>
                                {project.live !== "#" && (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn"
                                        onClick={handleButtonClick}
                                    >
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
