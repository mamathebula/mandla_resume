import React from 'react';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/mandla.jpeg`} alt="Mandla Mathebula" className="about-photo" />
        </div>
        <div className="about-text">
          <p>
            Senior Cloud Support Engineer with 4+ years of experience delivering measurable customer and
            operational impact across AWS and Azure environments. Proven record of driving
            automation that reduced operational latency by 99%, improving Service Level Agreement (SLA) performance by 75%, and delivering cost savings
            through enterprise-grade automation.
          </p>
          <p>
          Promoted to Senior Engineer within 21 months at Amazon Web Services (AWS)
            for driving automation that reduced operational latency by 99%, improving SLA performance by 75%, and leading cross-functional initiatives. Won a Gen AI Hackathon for an AI-powered case summarization
            tool deployed to production.
          </p>
          <p>
            Based in Cape Town, Western Cape. Passionate about building scalable cloud
            infrastructure and automation solutions that drive real operational impact.
          </p>

          <div className="certifications">
            <h3>Education</h3>
            <div>
              <span className="cert-badge">National Diploma in Information Technology - Intelligent Industrial Systems — Tshwane University of Technology (2021)</span>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <div>
              <span className="cert-badge">AWS Certified Cloud Practitioner</span>
              <span className="cert-badge">Microsoft Cybersecurity Architect (SC-100)</span>
              <span className="cert-badge">Microsoft Security, Compliance & Identity (SC-900)</span>
              <span className="cert-badge">Microsoft 365 Fundamentals (MS-900)</span>
              <span className="cert-badge">Mac-OS Support Essentials 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
