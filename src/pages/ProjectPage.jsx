import React from 'react';
import ProjectGallery from '../components/ProjectGallery';
import { weeklyProjects } from '../data/projects';
import '../styles/main.css';

const ProjectPage = () => {
  return (
    <section className="projects-section" id="projects">
    <div className="container">
      <h2 className="section-title">All Projects</h2>
      <p className="section-subtitle">
        Explore my collection of projects showcasing various technologies and skills.
      </p>
      <ProjectGallery projects={weeklyProjects} showFilter={true} id="project-filter"/>
    </div>
  </section>
  );
};

export default ProjectPage;
