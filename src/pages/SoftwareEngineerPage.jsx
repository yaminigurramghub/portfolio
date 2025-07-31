import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import AcademicProjectsSection from "../components/AcademicProjectsSection";
import EducationSection from "../components/EducationSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificationsSection from "../components/CertificationsSection";
import FooterSection from "../components/FooterSection";

const SoftwareEngineerPage = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const skillsData = {
    "Programming Languages": {
      skills: ["C#", "Python", "JavaScript", "PowerShell", "Bash"],
    },
    "Cloud & DevOps": {
      skills: [
        "Microsoft Azure",
        "AWS",
        "GCP",
        "Terraform",
        "Packer",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    Databases: { skills: ["MSSQL", "MySQL", "MongoDB", "CosmosDB"] },
    "Frameworks & Tools": {
      skills: ["ASP.NET Core", "React JS", "Power BI", "Tableau"],
    },
  };

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Micron Technology",
      date: "May 2023 - Aug 2023",
      responsibilities: [
        "Led the migration of 50,000 users from Cisco Duo to Azure AD MFA, defining requirements, policies, enforced Zero-Trust security resulting in an annual cost savings of $800k.",

        "Developed APIs using C# ASP.NET Core and SQL Server for an automated endpoint health remediation tool, reducing time-to-resolution by 70%.",

        "Architected and deployed web applications using ASP.NET Core Web API (backend) and React.js (frontend),creating, Group Flattening, and Health Check applications.",
      ],
    },
    {
      id: 2,
      title: "Associate Software Engineer",
      company: "Micron Technology",
      date: "Feb 2022 - May 2023",
      responsibilities: [
        "Developed and implemented automated unit and integration testing for .NET applications, improving code coverage by 85% and reducing post-deployment defects by 70%.",

        "Enabled SSO for 30+ SaaS products using SAML, OIDC, and OAuth2.0, improving authentication and authorization efficiency by 80%.",

        "Built Power BI dashboards for Identity Lifecycle Management (LCM), tracking leavers, movers, joiners, and service accounts to provide actionable insights.",
      ],
    },

    {
      id: 3,
      title: "Programmer Analyst",
      company: "Cognizant",
      date: "Oct 2020 - Feb 2022",
      responsibilities: [
        "Engineered ASP.NET Web API applications and PL/SQL integrations for seamless data sharing across three enterprise systems, enhancing data integrity, ensuring reliable access to 1M+ records daily.",

        "Contributed to a cloud-based automation system using Python, and Serverless Computing, reducing manual processing by 60+ hours per week.",

        "Led 24/7 on-call support for critical business applications, resolving 95% of high-priority incidents within SLA.",
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Network Structures and Cloud Computing ",
      type: "Cloud Computing",
      description:
        "A scalable cloud infrastructure on Google Cloud using Terraform, planned, developed and deployed for the CSYE Network Structures and Cloud Computing course. Integrates Compute Engine, Cloud SQL, and Cloud Pub/Sub for a secure, high-availability of web application with automated deployments and robust monitoring.",
      date: "2024",
      technologies: [
        "Google Cloud",
        "Terraform",
        "Packer",
        "REST API's",
        "Shell Scripting",
        "GitHub Actions",
        "CI/CD",
      ],
      githubLink: "https://github.com/Nikesh984/scalable-cloudinfra-gcp",
    },
    {
      id: 2,
      title: "Advanced Big Data App-Indexing",
      type: "coding",
      description:
        "An advanced big data application designed to index and manage structured JSON data. Built with a RESTful API backed by Redis for fast data access, Elasticsearch for efficient search, RabbitMQ for async processing, and secured with OAuth2.0 for robust access control and data integrity.",
      date: "2025",
      technologies: ["dotnet", "Kafka", "Elastic Search", "Kibana"],
      githubLink: "https://github.com/Nikesh984/INFO7255_RESTAPI",
    },
  ];

  const education = [
    {
      id: 2,
      degree: "Masters in Information Systems",
      institution: "Northeastern University",
      date: "2023 - 2025",
      highlights: [
        "Worked as a Teaching Assistant for a core course (INFO 5100) of Information Systems program led by Professor & Director Kal Bugrara.",
      ],
    },
    {
      id: 1,
      degree: "Bachelor of Technology in Civil Engineering",
      institution: "G Pulla Reddy Engineering College",
      date: "2016 - 2020",
      highlights: [],
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Cultural Champion",
      description:
        "Received the Cultural Champion Award at Micron Technology for leading the Azure AD MFA migration project, demonstrating innovation, collaboration, and alignment with the company’s core values. Recognized by senior leadership, including the CEO.",
      date: "2023",
    },
    {
      id: 2,
      title: "Engineering Excellence Award",
      description:
        "Recognized with the Engineering Excellence Award by Novartis while working at Cognizant Technology Solutions, for outstanding contribution and commitment to delivering high-quality solutions.",
      date: "2021",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Microsoft Certified: Identity and Access Administrator Associate",
      organization: "Microsoft",
      date: "Planned for 2025",
    },
    {
      id: 2,
      name: "Microsoft Certified: Azure Security Engineer Associate",
      organization: "Microsoft",
      date: "Planned for 2025",
    },
  ];

  const openModal = (category) => {
    setSelectedSkills(skillsData[category].skills);
    setModalTitle(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkills([]);
    setModalTitle("");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.classList.add(
        index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
      );
    });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Reusable Navbar */}
      <Navbar title="Yamini's Portfolio" onBack={onBack} />
      {/* About Me Section */}
      <main className="pt-20 container mx-auto px-6">
        <AboutSection
          id="about"
          title="About Me"
          description={[
            "I started my journey in tech with a degree in Civil Engineering, but my passion for technology quickly rerouted my path. During my internship at Cognizant, I got hands-on with .NET development, which gave me the momentum to transition into a full-time software engineering role.",
            "After gaining solid experience, I moved to Micron Technology where I worked on Identity and Access Management (IAM) solutions — building and maintaining internal applications that secured enterprise access.",
            "Since then, I’ve been on a mission to blend secure engineering practices with scalable software systems — and I’m just getting started.",
          ]}
          techIcons={["profile"]} // Updated to match iconMap
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <EducationSection
          id="education"
          title="Education"
          education={education}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ExperienceSection
          id="experience"
          title="Professional Experience"
          experiences={experiences}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <AcademicProjectsSection
          title="Projects"
          projects={projects}
          id="projects"
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <CertificationsSection
          id="certifications"
          title="Certifications"
          certifications={certifications}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <FooterSection />
      </main>
    </div>
  );
};

export default SoftwareEngineerPage;
