import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaRegFileAlt } from "react-icons/fa";

const Navbar = ({ title, onBack, resumeLink }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsSidebarOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // Matches py-4 + padding
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.log(`Element with id "${targetId}" not found`);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 shadow-xl z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Hamburger Menu (Sticks to complete left) */}
          <FaBars
            className="text-white text-2xl cursor-pointer hover:text-cyan-300 transition duration-300"
            onClick={() => setIsSidebarOpen(true)}
          />
          <p>{title}</p>
          {/* Social Icons (Sticks to complete right) */}
          <div className="flex space-x-4">
            <a
              href={resumeLink} // Replace with the actual path or URL to your SE resume
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
              className="text-white hover:text-cyan-300 transition duration-300"
            >
              <FaRegFileAlt size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-yamini-saraswathi-gurram-28b9a6293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                title="LinkedIn"
                className="text-white hover:text-cyan-300 transition duration-300"
                size={24}
              />
            </a>
            <a href="mailto:yaminisaraswathigurram2023@gmail.com">
              <FaEnvelope
                title="Email"
                className="text-white hover:text-cyan-300 transition duration-300"
                size={24}
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar for Menu Options */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-gray-800 to-gray-700 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 rounded-r-lg`}
      >
        <div className="pt-8 pr-6 pb-6 pl-10">
          <FaTimes
            className="text-white text-2xl cursor-pointer mb-6 hover:text-cyan-300 transition duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
          <ul className="space-y-6">
            <li>
              <a
                href="#about"
                className="text-lg hover:text-cyan-300 hover:underline transition duration-300"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-lg hover:text-cyan-300 hover:underline transition duration-300"
                onClick={(e) => handleNavClick(e, "education")}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-lg hover:text-cyan-300 hover:underline transition duration-300"
                onClick={(e) => handleNavClick(e, "experience")}
              >
                Professional Experience
              </a>
            </li>
            <li>
              <a
                href="#vexperience"
                className="text-lg hover:text-cyan-300 hover:underline transition duration-300"
                onClick={(e) => handleNavClick(e, "vexperience")}
              >
                Volunteer Experience
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-lg hover:text-cyan-300 hover:underline transition duration-300"
                onClick={(e) => handleNavClick(e, "certifications")}
              >
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
