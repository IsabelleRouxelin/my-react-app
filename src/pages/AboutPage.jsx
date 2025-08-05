import React from 'react';
import '../styles/main.css';

const AboutPage = () => {
  return (
    <>
      <section className="about-section" id="about">
      <div className='container'>
        <h1 className='section-title'>Hello, I'm Isabelle</h1>
        <p className='about-text'>A legal compliance specialist turned coding enthusiast and aspiring Full Stack Developer with a passion for solving problems creatively.</p>
        </div>
        <div>
            <button>View my work</button>
            
        </div>
      </section>
      <section className="skillsSection">
        <h2>Skills & Technologies</h2>
      </section>
      <section className="featuredProjects">
        <h2>Featured Projects</h2>
        <button>View All Projects</button>
      </section>
    </>
        
  );
};

export default AboutPage;
