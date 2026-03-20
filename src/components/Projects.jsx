import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Subject Matter Expert (SME) — AWS Marketplace Fulfillment Products",
      description: "Achieved Subject Matter Expert (SME) status for 3 major AWS Marketplace fulfillment product types: Single AMI, Single AMI with CloudFormation, and Second-Party (2P) Internal and Third-Party products. Drove operational excellence through data-driven reporting, process optimization, and continuous improvement initiatives.",
      technologies: ["AWS Marketplace", "Single AMI", "CloudFormation", "2P Products", "Business Analytics"],
      achievements: [
        "Subject Matter Expert (SME) for 3 core AWS Marketplace fulfillment product types, providing technical leadership and escalation support",
        "Compiled Weekly Business Reviews (WBR) and Monthly Business Reviews (MBR) analyzing fulfillment performance metrics to inform strategic decisions",
        "Identified and drove initiatives to improve customer experience and support engineer efficiency, including self-service adoption and process standardization",
        "Drove self-service adoption by standardizing how engineers guide sellers toward self-service capabilities, reducing manual case volume",
        "Authored and maintained Standard Operating Procedures (SOPs) and scalable documentation to ensure consistent case handling, reduce ambiguity, and enable independent knowledge sharing across the team"
      ]
    },
    {
      title: "AI-Powered Case Summarization Tool",
      description: "Won Gen AI Hackathon. Built an Artificial Intelligence (AI) tool that automatically generates case summaries and customer sentiment analysis, integrated into the team's Customer Relationship Management (CRM) workflow for organization-wide adoption.",
      technologies: ["Artificial Intelligence (AI)", "CRM Integration", "Python", "Automation"],
      achievements: [
        "5-10 minutes saved per case review",
        "Team-wide adoption across all Support Engineers",
        "Deployed to production as standard practice",
        "Estimated 8-16 hours saved daily across the team"
      ]
    },
    {
      title: "AI-Powered Architecture Diagram Review",
      description: "Engineered Artificial Intelligence (AI) powered automation to streamline architecture diagram reviews for AWS Marketplace products.",
      technologies: ["AI", "JavaScript", "AWS", "Process Automation"],
      achievements: [
        "Reduced processing time by 92% (2 hours to under 10 minutes)",
        "Improved review Service Level Agreement (SLA) by 75% (48 hours to 12 hours)",
        "Transferred primary review responsibility to a dedicated team, freeing up senior architects for complex work"
      ]
    },
    {
      title: "Enterprise Automation Framework",
      description: "Designed enterprise-grade JavaScript automation framework integrating 40+ systems, plus Python-based serverless Lambda solution for cloud infrastructure lifecycle management.",
      technologies: ["JavaScript", "Python", "AWS Lambda", "CloudFormation", "Elastic Block Store (EBS)", "Simple Notification Service (SNS)", "CloudWatch"],
      achievements: [
        "Integrated 40+ systems into a unified automation framework",
        "Tag-based protections for cloud resources",
        "Simple Notification Service (SNS) alerts and CloudWatch metrics for observability",
        "Automated lifecycle management for CloudFormation stacks, Elastic Block Store (EBS) volumes, and Elastic IPs"
      ]
    },
    {
      title: "AWS Marketplace Self-Service User Acceptance Testing (UAT)",
      description: "Led multiple User Acceptance Testing (UAT) sessions for AWS Marketplace self-service features including pricing models, third-party product onboarding, and restricted product management.",
      technologies: ["AWS Marketplace", "User Acceptance Testing (UAT)", "Self-Service Platforms", "Quality Assurance"],
      achievements: [
        "Accelerated product listing latency from 14 days to under 1 hour (99%+ improvement)",
        "Identified critical defects before launch, preventing negative seller experience",
        "Enabled seller self-service for version and visibility updates",
        "Eliminated manual approval delays for new product versions"
      ]
    },
    {
      title: "Engineer Training & Global Team Expansion",
      description: "Led structured training and mentoring programs to develop engineers to operational independence, expanding team capacity and establishing Subject Matter Expert (SME) coverage in a new geographic region.",
      technologies: ["AWS Marketplace", "Cloud Infrastructure", "Mentoring", "Knowledge Transfer"],
      achievements: [
        "Onboarded new hires to operational independence within 1 week, enabling them to handle complex cloud product cases without supervision",
        "Mentored engineers to full Subject Matter Expert (SME) status in 3.5 months, establishing first-ever SME presence for Single AMI, one of AWS Marketplace's key listing types, in a new region (Japan)",
        "Developed replicable training methodology that accelerated onboarding and expanded team capacity",
        "Enabled more effective case distribution across a broader resource pool, reducing bottlenecks and improving response times"
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "The site you're viewing right now — a React-based portfolio hosted on Cloudflare Pages as part of the ApplyZA platform. Built using Kiro, an AI-powered IDE, for rapid development and code generation. Features a full CI/CD pipeline: pushing code to the Mandla CV GitHub repo triggers GitHub Actions to automatically build the React app, copy the output to the ApplyZA repo, commit and push — then Cloudflare Pages picks up the change and deploys it globally. No manual builds or file copying needed.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Cloudflare Pages", "GitHub Actions CI/CD", "Kiro AI IDE"],
      achievements: [
        "Full CI/CD pipeline: push to main → GitHub Actions builds React app → copies to ApplyZA repo → Cloudflare deploys automatically",
        "Built with Kiro, an AI-powered IDE for accelerated development",
        "Dark and light theme support using CSS custom properties",
        "Responsive design optimized for mobile and desktop",
        "Hosted globally via Cloudflare's edge network with HTTPS",
        "Live at applyza.co.za/resume_mandla/"
      ]
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
