import React, {useState} from "react";
import emailjs from "emailjs-com";
import "../styles/main.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        emailjs.send(
          'service_peuhlh4',      
          'template_zqqh464',     
          formData,
          'fLsT3MrWVRneyy-Ga'         
        )
        .then(() => {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          setSubmitStatus('error');
          console.error('Failed to send:', error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
      };
    
      return (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <p className="form-success">Message sent successfully!</p>
          )}
          
          {submitStatus === 'error' && (
            <p className="form-error">Failed to send message. Please try again.</p>
          )}
        </form>
      
    );
};

    
export default ContactForm;