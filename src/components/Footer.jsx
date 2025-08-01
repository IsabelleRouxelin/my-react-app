import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new opportunities & interesting projects.</p>
        
        <div>
            <p>&copy; 2025 Isabelle Rouxelin. All rights reserved.</p>
        </div>
    </footer>
  )
}
// need to add in contact info 
// links 

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  
};

export default Footer