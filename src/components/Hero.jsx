import React from 'react';

function Hero() {
  const scrollToContact = () => {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>MANDLA MATHEBULA</h1>
        <p className="title">Senior Cloud Support Engineer | Automation & Infrastructure</p>
        <p>
          Senior Cloud Support Engineer with 4+ years of experience delivering measurable customer and operational impact across
          AWS and Azure environments. Promoted to Senior Engineer within 21 months at Amazon Web Services (AWS) for
          driving automation that reduced operational latency by 99%, improving Service Level Agreement (SLA) performance by 75%, and leading cross-functional initiatives.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
