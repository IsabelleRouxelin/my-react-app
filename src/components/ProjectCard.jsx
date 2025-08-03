import React from "react";
import { ExternalLink } from 'lucide-react';
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
                </div>
                <p className="project-description">{project.description}</p>
            </div>
            <div className="project-tech-container">
                {project.tech.map((tech, index) => (
                    <span key={index} className="project-tech">
                    {tech}
                    </span>
                ))}
            </div>
            <div className="project-links">
                <a href={project.github} className="project-link"></a>
                <a href={project.live} className="project-link">
                    <ExternalLink size={14} />
                    Live Demo
                </a>
            </div>
        </div>
    )

};

export default ProjectCard;