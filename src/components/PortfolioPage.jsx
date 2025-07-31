import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaTimes,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiReact } from "react-icons/si";

const PortfolioPage = ({ onBack, pageConfig }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const skillsData = pageConfig.skills;

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

    const timer = setTimeout(() => {
      setIsSidebarVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex">
      <div
        className="fixed top-0 left-0 h-full w-4 z-50"
        onMouseEnter={() => setIsSidebarVisible(true)}
      ></div>

      <aside
        className={`w-64 bg-gray-800 p-6 fixed h-screen shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseLeave={() => setIsSidebarVisible(false)}
      >
        <h2 className="text-2xl font-bold mb-8 text-center border-b-2 border-cyan-500 pb-2">
          Menu
        </h2>
        <nav className="space-y-4">
          <button
            onClick={onBack}
            className="flex items-center w-full text-left p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <FaHome className="mr-2" /> Back to Home
          </button>
          <a
            href="#about"
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <FaUser className="mr-2" /> About
          </a>
          <a
            href="#skills"
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <FaCode className="mr-2" /> Skills
          </a>
          <a
            href="#experience"
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <FaBriefcase className="mr-2" /> Experience
          </a>
          <a
            href="#projects"
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <IoLogoGithub className="mr-2" /> Projects
          </a>
          <a
            href="#education"
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <FaGraduationCap className="mr-2" /> Education
          </a>
          <a
            href="#contact"
            className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </nav>
      </aside>

      <main
        className={`p-8 flex-1 transition-all duration-300 ${
          isSidebarVisible ? "ml-64" : "ml-0"
        }`}
      >
        <AboutSection
          title={pageConfig.about.title}
          description={pageConfig.about.description}
          techIcons={pageConfig.about.techIcons}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <SkillsSection
          title={pageConfig.skills.title}
          skillsData={skillsData}
          openModal={openModal}
        />
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition duration-200"
              >
                <FaTimes size={20} />
              </button>
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                {modalTitle}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {selectedSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ExperienceSection
          title={pageConfig.experience.title}
          experiences={pageConfig.experience.items}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ProjectsSection
          title={pageConfig.projects.title}
          projects={pageConfig.projects.items}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <EducationSection
          title={pageConfig.education.title}
          education={pageConfig.education.item}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ContactSection
          title={pageConfig.contact.title}
          description={pageConfig.contact.description}
          linkedinLink={pageConfig.contact.linkedinLink}
        />
      </main>
    </div>
  );
};

export default PortfolioPage;
