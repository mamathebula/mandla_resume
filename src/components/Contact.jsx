import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Let's Connect</h2>
      <div className="contact-content">
        <p>
          Open to new opportunities, collaborations, and connecting with fellow
          engineers. Let's build something great together.
        </p>
        <div className="contact-links">
          <a href="mailto:mathebulam000@gmail.com" className="contact-link">
            📧 mathebulam000@gmail.com
          </a>
          <a href="https://linkedin.com/in/mandla-mathebula-4258a518a"
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link">
            💼 LinkedIn
          </a>
          <a href="https://github.com/mamathebula"
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link">
            🐙 GitHub
          </a>
          <a href="tel:+27797749367" className="contact-link">
            📱 079 774 9367
          </a>
        </div>
        <p style={{ marginTop: '3rem', color: '#808080', fontSize: '0.9rem' }}>
          📍 Cape Town, Western Cape, South Africa
        </p>
      </div>
    </section>
  );
}

export default Contact;
