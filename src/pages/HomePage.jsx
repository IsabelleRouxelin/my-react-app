import React from 'react';
import {skills} from '../data/skills';
import {weeklyProjects} from '../data/projects';
import heroImage from "../assets/images/ir.jpeg";
const HomePage = ({onSetPage}) => {
    
  return (
    <>
       {/* Hero Section */}
       <section className='hero'>
            <div className='hero-content'>
                <div className='image-container'>
                <img src={heroImage} alt="isabelle" />
                </div>
                <h1 className='hero-title'>Hello, I'm Isabelle </h1>
                <p className='hero-description'>A legal compliance specialist turned coding enthusiast and aspiring Full Stack Developer with a passion for solving problems creatively.</p>
                <div>
                    <button onClick={() => onSetPage ("project")} 
                    className="primary-button"
                    >View My Work</button>
                    <a href="#contact" className='secondary-button'>Get In Touch</a>
                </div>
            </div>
       </section>
        
        {/* Skills Section */}
        <section className='skills-section'>
            <h2 className='section-title'>Skills & Technologies</h2>
            <div className='skill-container'>
                {skills.map((skill, index) => (
                    <span key={index} className="skill"> 
                        {skill}
                    </span>
                ))}
            </div>
        </section>
        {/* Featured Projects */}
        <section className='projects-section'>
            <h2 className='section-title'>Featured Projects</h2>
            <ProjectGallery projects={weeklyProjects.slice(0,3) showFilter={false}}/>
        </section>
    </>
  );
};

//featured projects section
export default HomePage;
