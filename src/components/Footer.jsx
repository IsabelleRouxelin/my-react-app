import React from 'react'
import '../styles/main.css';
// look into adding icons if possible
const Footer = () => {
  return (
    <footer className='footer' id="contact">
        <div className='container'>
          <div className='footer-content'>
            <div className='social-links'>
              <a href="https://www.linkedin.com/in/irouxelin/" className="social-link">Linkedin</a>
              <a href="https://github.com/IsabelleRouxelin" className="social-link">Github</a>
              <a href="mailto:isabelle.rouxelin@gmail.com" className="social-link">Mail</a>
            </div>
            <h2 className='footer-title'>Let's Connect</h2>
            <p className='footer-'>I'm always open to discussing new opportunities & interesting projects.</p>
          </div>
            <div className='copyright'>
              &copy; {new Date().getFullYear()} Isabelle Rouxelin. All rights reserved.
            </div>

        </div>
    </footer>
  )
}

export default Footer