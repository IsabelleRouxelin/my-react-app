import React from 'react';

const HomePage = () => {
  return (
    <>
      <section className="hero">
      <div>
        <h1>Hello, I'm Isabelle</h1>
        <p>An Aspiring Full-Stack Developer passionate about creating innovative web solutions.</p>
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

export default HomePage;
