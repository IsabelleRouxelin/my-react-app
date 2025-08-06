import React from 'react';
import { skills } from '../data/skills';
import '../styles/main.css';

const AboutPage = () => {
  return (
    <div className="container">
      <section className="about-section" id="about">
        <h1 className='section-title'>Hello, I'm Isabelle</h1>
        <p className='about-text'>
          A legal compliance specialist turned coding enthusiast and aspiring Full Stack Developer 
          with a passion for solving problems creatively.
          <br />
          Whether I'm untangling complex workflows or yarn for my latest crochet project, I thrive on turning chaos into order. 
          I am excited to apply my analytical mindset and passion for learning to new coding challenges.
        </p>
      </section>
      <section className="skills-section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item"> 
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
