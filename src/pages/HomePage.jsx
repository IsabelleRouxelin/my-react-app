import React from 'react';
import ProjectGallery from '../components/ProjectGallery';
import { skills } from '../data/skills';
import { weeklyProjects } from '../data/projects';
import '../styles/main.css';

const HomePage = () => {
    
  return (
    <>
       {/* Hero Section */}
       <section className='hero'>
            <div className='hero-content'>
                <div className='hero-image-container'>
                <img src="/images/ir.jpeg" alt="profile" className='hero-image' />
                </div>
                <h1 className='hero-title'>Hello, I'm Isabelle </h1>
                <p className='hero-subtitle'>A legal compliance specialist turned coding enthusiast and aspiring Full Stack Developer with a passion for solving problems creatively.</p>
                <div className='hero-btns'>
                    <a href="#projects" className="btn">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
       </section>
        
        {/* Skills Section */}
        <section className='skills-section'>
            <h2 className='section-title'>Skills & Technologies</h2>
            <div className='skill-container'>
                {skills.map((skill, index) => (
                    <div key={index} className="skill=item"> 
                        {skill}
                    </div>
                ))}
            </div>
        </section>

        {/* Featured Projects */}
        <section className='projects-section'>
            <h2 className='section-title'>Featured Projects</h2>
            <ProjectGallery 
            projects={weeklyProjects.slice(0, 3)} 
            showFilter={false} 
          />
        </section>
    </>
  );
};
export default HomePage;
