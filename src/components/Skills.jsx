import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: ["AWS Marketplace", "EC2", "Lambda", "S3", "CloudFormation", "CloudWatch", "IAM", "SNS", "EventBridge", "EBS", "VPC", "Microsoft Azure"]
    },
    {
      category: "Infrastructure & DevOps",
      skills: ["Infrastructure as Code", "CI/CD Pipelines", "Linux", "Deployment Automation", "Serverless Architecture"]
    },
    {
      category: "Programming & Automation",
      skills: ["Python", "JavaScript", "REST APIs", "Browser Automation"]
    },
    {
      category: "Monitoring & Operations",
      skills: ["CloudWatch", "SLA Management", "Cost Optimization", "Observability"]
    },
    {
      category: "Security & Compliance",
      skills: ["IAM Policies", "Identity & Access Management", "Service Control Policies", "Security Best Practices"]
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Root Cause Analysis", "Incident Management", "User Acceptance Testing", "Cloud Lifecycle Management"]
    }
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
