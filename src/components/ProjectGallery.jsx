import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import '../styles/main.css';

const ProjectGallery = ({projects, showFilter = true}) => {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('all');
    const filterOptions =["all", "JavaScript", "Python", "React", "HTML", "CSS", "Node.js", "API"];
    
    //filter projects based on selected tech
    const filterProjects = (tech) => {
        if (tech === "all") {
            setFilteredProjects(projects);
            setActiveFilter("all");
        } else {
            const filtered = projects.filter(project => 
                project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
            );
            setFilteredProjects(filtered);
            setActiveFilter(tech);
        }
    };

     return (
    <div className="project-gallery">
      {showFilter && (
        <div className="projects-filter">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => filterProjects(filter)}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <p className="no-projects">No projects found with this filter.</p>
      )}
    </div>
  );
};

export default ProjectGallery;