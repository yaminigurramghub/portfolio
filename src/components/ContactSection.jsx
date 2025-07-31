import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactSection = ({ title, description, linkedinLink }) => {
  return (
    <section id="contact" className="text-center mb-12 animate-slideInRight">
      <h2 className="text-cyan-300 text-2xl font-sans font-medium mb-4">
        {title}
      </h2>
      <p className="text-gray-300 mb-6">{description}</p>
      <a
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
      >
        <FaEnvelope className="inline mr-2" /> Connect with Me
      </a>
    </section>
  );
};

export default ContactSection;
