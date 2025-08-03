import React from 'react'
// look into adding icons if possible
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <h2 className='footer-title'>Let's Connect</h2>
            <p className='footer-description'>I'm always open to discussing new opportunities & interesting projects.</p>
            <div>
                <a href="mailto:isabelle.rouxelin@gmail.com" className='contact-link'></a>
                <a href="https://github.com/IsabelleRouxelin" className='contact-link'></a>
                <a href="https://www.linkedin.com/in/irouxelin/" className='contact-link'></a>
            </div>
            <div>
                <p>&copy; 2025 Isabelle Rouxelin. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer