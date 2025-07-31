import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6">
        <p className="mb-2">© 2025 All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-cyan-400"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
