import React, {useState} from "react";
import ProjectCard from "./ProjectCard";

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
                project.tech.some()
            );
        }
    };
    return (
        <div className="project-gallery">
            {/*filter button */}
            <div>
                <button></button>
            </div>
            {/*grid for project */}
            <div className="projects-grid">

            </div>
            {/*error message  */}
        </div>
    );
};

export default ProjectGallery;