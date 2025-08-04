import React from 'react';
import {skills} from '../data/skills';
import {weeklyProjects} from '../data/projects';

const HomePage = ({onSetPage}) => {
  return (
    <>
       {/* Hero Section */}
       <section className='hero'>
            <div className='hero-content'>
                <div className='image-container'>
                    <img src="./images/ir.jpeg" alt="image" />
                </div>
                <h1 className='hero-title'>Hello, I'm Isabelle </h2>
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
        <section>

        </section>
    </>
  );
};
// need hero section 
// skills section 
//featured projects section
export default HomePage;
