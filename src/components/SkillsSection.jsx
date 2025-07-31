import React from "react";
import { FaCheck, FaCircle, FaDotCircle } from "react-icons/fa";
import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaTools,
  FaLock,
  FaProcedures,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

const SkillsSection = ({ id, title, skillsData }) => {
  const categoryIcons = {
    "Programming Languages": FaCode,
    "Cloud & DevOps": FaCloud,
    Databases: FaDatabase,
    "Frameworks & Tools": FaTools,
    "Authentication & Authorization": FaLock,
    "Directory Services": FaDatabase,
    "Lifecycle Management": FaUserShield,
    "Security & Compliance": FaShieldAlt,
  };

  return (
    <section id={id} className="py-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-6">
        {/* Description (Left Portion) */}
        <div className="md:w-1/2 p-2">
          <h2 className="text-2xl font-bold text-cyan-500 mb-4">{title}</h2>
        </div>
      </div>

      {/* Technical Skills Cards */}
      <div className="px-6 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {Object.keys(skillsData).map((category) => {
          const IconComponent = categoryIcons[category] || FaTools; // Fallback icon if category not mapped
          return (
            <div
              key={category}
              className="bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center">
                <IconComponent className="mr-2 text-cyan-400" size={20} />
                {category}
              </h3>
              <ul className="text-gray-300 space-y-1">
                {skillsData[category].skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <FaDotCircle className="mr-2 text-gray-500" size={12} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
