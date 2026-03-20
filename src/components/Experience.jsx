import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Amazon Web Services (AWS)",
      role: "Senior Cloud Support Engineer",
      duration: "March 2026 – Present",
      achievements: [
        "Promoted to Senior Engineer within 21 months for excellence in automation and operational optimization",
        "Subject Matter Expert (SME) for key AWS Marketplace product listing types including Single AMI, Single AMI with CloudFormation, and third-party products",
        "Compiled Weekly Business Reviews (WBR) and Monthly Business Reviews (MBR) analyzing fulfillment performance metrics to inform strategic decisions"
      ]
    },
    {
      company: "Amazon Web Services (AWS)",
      role: "Cloud Support Engineer",
      duration: "June 2024 – March 2026",
      achievements: [
        "Engineered Artificial Intelligence (AI) powered architecture diagram review automation, reducing processing time by 92% and improving review Service Level Agreement (SLA) by 75%",
        "Designed enterprise-grade JavaScript automation framework integrating 40+ systems",
        "Developed Python-based serverless Lambda solution for cloud infrastructure lifecycle management",
        "Led winning team in Gen AI Hackathon — built AI case summarization tool saving 8-16 hours daily across the team",
        "Accelerated AWS Marketplace product listing latency from 14 days to under 1 hour (99%+ improvement)",
        "Established architecture review process, reducing review SLA from 48 hours to 12 hours (75% improvement)",
        "Mentored engineers to operational independence, expanding team capacity across global time zones",
        "Eliminated 16+ day operational backlog (550+ cases) within 3 business days, achieving top performer recognition",
        "Supported AWS License Manager launch enabling Amazon Elastic Compute Cloud (EC2) customers to switch Red Hat subscriptions without re-deployment across all AWS regions"
      ]
    },
    {
      company: "Momentum Metropolitan Holdings",
      role: "Cloud Engineer",
      duration: "June 2023 – May 2024",
      achievements: [
        "Primary technical contact for AWS and Microsoft Azure clients, managing 150+ AWS accounts",
        "Managed AWS and Azure service incidents in collaboration with AWS/Microsoft Support teams",
        "Assisted clients in implementing security and compliance measures across cloud environments",
        "Developed automation solutions to enhance operational efficiency",
        "Collaborated with Solutions Architects and DevOps engineers on cross-functional initiatives"
      ]
    },
    {
      company: "Momentum Metropolitan Holdings",
      role: "Branch VIP Support Engineer",
      duration: "June 2021 – May 2023",
      achievements: [
        "Provided application and device troubleshooting for VIP and executive-level users",
        "Performed root cause analysis across systems to resolve complex incidents",
        "Handled incident management, service requests, and remote standby support",
        "Communicated critical updates to senior management following escalation protocols"
      ]
    },
    {
      company: "Momentum Metropolitan Holdings",
      role: "IT Support Engineer (Internship)",
      duration: "November 2020 – May 2021",
      achievements: [
        "Provided on-site and remote technical support for hardware, software, and networking issues",
        "Supported Alexander Forbes system migration project across 3 branches following Momentum acquisition",
        "Managed domain integration, system configurations, and data backup operations"
      ]
    }
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <div className="company">{exp.company}</div>
                <h3>{exp.role}</h3>
              </div>
              <div className="duration">{exp.duration}</div>
            </div>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
