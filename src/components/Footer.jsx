import React, {useState} from 'react'
import '../styles/main.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className='footer' id="contact">
        <div className='container'>
          <div className='footer-content'>
            <div className='social-links'>
              <a 
                href="https://www.linkedin.com/in/irouxelin/" 
                className="social-link"
                aria-label="Linkedin"
              >
                <FaLinkedin className="social-icon"/>
              </a>
              <a 
                href="https://github.com/IsabelleRouxelin" 
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub className="social-icon"/>
              </a>
            </div>
            <h2 className='footer-title'>Let's Connect</h2>
            <p className='footer-'>I'm always open to discussing new opportunities & interesting projects.</p>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="btn"
            >
              {showForm ? 'Hide Contact Form' : 'Open Contact Form'}
            </button>
          </div>
          {showForm && <ContactForm />}
          <div className='copyright'>
            &copy; {new Date().getFullYear()} Isabelle Rouxelin. All rights reserved.
          </div>
        </div>
    </footer>
  )
}

export default Footer