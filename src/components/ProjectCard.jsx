import React from "react";
import '../styles/main.css';

const ProjectCard = (props) => {
    const project = props.project;

    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
                <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span>Overview</span>
                </div>
                <p className="project-description">{project.description}</p>
            </div>
            <div className="project-tech">
                {project.tech.map((tech, index) => (
                    <span key={index} className="tech-item">
                    {tech}
                    </span>
                ))}
            </div>
            <div className="project-links">
                <a href={project.github} className="project-link">
                    <span>Code</span>
                </a>
                <a href={project.live} className="project-link">
                    <span>Live Demo</span>
                </a>
            </div>
        </div>
    )

};

export default ProjectCard;