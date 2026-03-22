import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Subject Matter Expert (SME) — AWS Marketplace Fulfillment Products",
      description: "Achieved SME status for 3 major AWS Marketplace fulfillment product types: Single AMI, Single AMI with CloudFormation, and Second-Party (2P) products. Drove operational excellence through data-driven reporting and process optimization.",
      technologies: ["AWS Marketplace", "Single AMI", "CloudFormation", "2P Products", "Business Analytics"],
      achievements: [
        "SME for 3 core AWS Marketplace fulfillment product types, providing technical leadership and escalation support",
        "Compiled WBR and MBR analyzing fulfillment performance metrics to inform strategic decisions",
        "Drove self-service adoption by standardizing how engineers guide sellers, reducing manual case volume",
        "Authored and maintained SOPs and scalable documentation for consistent case handling"
      ]
    },
    {
      title: "Engineer Training & Global Team Expansion",
      description: "Led structured training and mentoring programs to develop engineers to operational independence, expanding team capacity and establishing SME coverage in a new geographic region.",
      technologies: ["AWS Marketplace", "Cloud Infrastructure", "Mentoring", "Knowledge Transfer"],
      achievements: [
        "Onboarded new hires to operational independence within 1 week",
        "Mentored engineers to full SME status in 3.5 months, establishing first-ever SME presence for Single AMI in Japan",
        "Developed replicable training methodology that accelerated onboarding",
        "Enabled more effective case distribution, reducing bottlenecks and improving response times"
      ]
    },
    {
      title: "EBS Volume Migration Tool (gp2 → gp3)",
      description: "At AWS, our team managed 200+ gp2 EBS volumes across multiple regions. gp3 is 20% cheaper with better baseline performance, but manual Console migration was impractical at scale. Built a bash script that queries the EC2 API, displays volume details, migrates in batches of 10 to avoid throttling, supports --all-regions with auto-approval, and calculates savings at every level.",
      technologies: ["Bash", "AWS CLI", "EC2 API", "EBS", "Cost Optimization"],
      achievements: [
        "Migrated 200+ gp2 volumes to gp3, saving an estimated $4,000+/year across the account",
        "20% cost reduction per volume ($0.10/GB → $0.08/GB)",
        "Hours of manual Console clicking reduced to a single command completing in minutes",
        "Multi-region support with --all-regions flag — no forgotten volumes",
        "Zero downtime — online migration with no impact to running workloads",
        "Reusable across any AWS account with no configuration or cleanup needed"
      ]
    },
    {
      title: "Security Group Monitor™",
      description: "Real-time automated monitoring and remediation for open AWS security group rules (0.0.0.0/0, ::/0). Serverless CloudFormation stack deploying Lambda functions triggered by EventBridge on security group changes. Automatic rule revocation, SNS email alerts, tag-based whitelisting (Name=testing), and CloudWatch metrics. Uses CloudTrail for event capture with 7-day log retention.",
      technologies: ["AWS Lambda", "CloudFormation", "EventBridge", "CloudTrail", "SNS", "CloudWatch", "Python"],
      achievements: [
        "Real-time compliance enforcement within seconds of rule creation",
        "Fully serverless with minimal operational cost",
        "Eliminated manual security group auditing across all AWS regions",
        "Tag-based whitelisting for authorized exceptions",
        "Prevented unauthorized access through automatic rule revocation",
        "Initial scan on deployment catches pre-existing violations"
      ]
    },
    {
      title: "Lambda Runtime Bulk Updater",
      description: "Automated updates for Lambda functions running deprecated runtimes (Python 3.8, 3.9). Bash script queries Lambda API, discovers functions on specified old runtimes, and updates in parallel batches of 10 with real-time progress. Deployable via AWS CLI or CloudShell with zero setup.",
      technologies: ["Bash", "AWS CLI", "Lambda API", "CloudShell"],
      achievements: [
        "Full-day manual task reduced to under 5 minutes with zero errors",
        "Parallel batch processing of 100+ functions",
        "Reusable for future upgrades — just change two variables (old/new runtime)",
        "Supports Python, Node.js, Java, Ruby, and .NET runtimes",
        "Established as standard operational tool across the team"
      ]
    },
    {
      title: "AWS Resource Cleanup Stack",
      description: "Our AWS environment had 500+ unused EBS volumes and snapshots accumulating costs alongside orphaned CloudFormation stacks, EC2 instances, S3 buckets, and Elastic IPs. Built a CloudFormation stack deploying Lambda with EventBridge scheduling for automated lifecycle management. Configurable retention periods, tag-based protection (do-not-delete), pre-deletion email warnings, and CloudWatch metrics.",
      technologies: ["CloudFormation", "AWS Lambda", "EventBridge", "SNS", "CloudWatch", "S3", "EC2", "IAM"],
      achievements: [
        "Cleaned up 500+ unused volumes and snapshots, saving an estimated $1,500+/year in storage costs",
        "Automated lifecycle management preventing cost accumulation from forgotten resources",
        "Configurable 1–168 hour retention with 1–24 hour warning windows",
        "Tag-based protection (do-not-delete) prevents accidental deletion of critical resources",
        "Scoped IAM permissions across 30+ AWS services for comprehensive stack deletion",
        "Pre-deletion email warnings via SNS before any resource is removed"
      ]
    },
    {
      title: "Apply ZA — University Application Platform",
      description: "Production web platform helping South African learners apply to universities and TVET colleges. PWA built with vanilla JavaScript, hosted on Cloudflare Pages. PayFast payment integration, Google Sheets data sync via Apps Script, FormSubmit email notifications, and service worker (v24.1) for offline support. Admin dashboard with SHA-256 + Cloudflare Access protection.",
      technologies: ["JavaScript", "HTML5", "CSS3", "PWA", "Cloudflare Pages", "PayFast", "Google Apps Script", "Service Worker"],
      achievements: [
        "Live production platform at applyza.co.za serving South African learners",
        "Fully serverless architecture with PWA offline support",
        "Supports 26+ universities and 50 TVET colleges",
        "APS calculator for qualification checking across all universities",
        "Automated payment processing and Google Sheets data synchronization",
        "Donation system enabling free applications for disadvantaged students"
      ]
    },
    {
      title: "AI-Powered Case Summarization Tool",
      description: "Won Gen AI Hackathon. Built an AI tool that auto-generates case summaries and customer sentiment analysis, integrated into the team's CRM workflow for organization-wide adoption.",
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
      description: "Engineered AI-powered automation to streamline architecture diagram reviews for AWS Marketplace products.",
      technologies: ["AI", "JavaScript", "AWS", "Process Automation"],
      achievements: [
        "Reduced processing time by 92% (2 hours → under 10 minutes)",
        "Improved review SLA by 75% (48 hours → 12 hours)",
        "Transferred primary review responsibility to a dedicated team, freeing up senior architects"
      ]
    },
    {
      title: "Enterprise Automation Framework",
      description: "Designed enterprise-grade JavaScript automation framework integrating 40+ systems, plus Python-based serverless Lambda solution for cloud infrastructure lifecycle management.",
      technologies: ["JavaScript", "Python", "AWS Lambda", "CloudFormation", "EBS", "SNS", "CloudWatch"],
      achievements: [
        "Integrated 40+ systems into a unified automation framework",
        "Tag-based protections for cloud resources",
        "SNS alerts and CloudWatch metrics for observability",
        "Automated lifecycle management for CloudFormation stacks, EBS volumes, and Elastic IPs"
      ]
    },
    {
      title: "AWS Marketplace Self-Service UAT",
      description: "Led multiple User Acceptance Testing sessions for AWS Marketplace self-service features including pricing models, third-party product onboarding, and restricted product management.",
      technologies: ["AWS Marketplace", "UAT", "Self-Service Platforms", "Quality Assurance"],
      achievements: [
        "Accelerated product listing latency from 14 days to under 1 hour (99%+ improvement)",
        "Identified critical defects before launch, preventing negative seller experience",
        "Enabled seller self-service for version and visibility updates",
        "Eliminated manual approval delays for new product versions"
      ]
    },
    {
      title: "Professional Portfolio & CI/CD Pipeline",
      description: "Needed a professional online presence to showcase cloud engineering projects and experience. Built a React-based portfolio with automated deployment — pushing code to GitHub triggers GitHub Actions to build the React app, copy output to the ApplyZA repo, and Cloudflare Pages deploys globally. No manual builds or file copying needed.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Cloudflare Pages", "GitHub Actions CI/CD", "Kiro AI IDE"],
      achievements: [
        "Full CI/CD pipeline: push to main → auto-build → auto-deploy to production",
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
