import React from "react";
import { IoLogoGithub } from "react-icons/io";

const ProjectsSection = ({ title, projects }) => {
  return (
    <section id="projects" className="mb-12 animate-slideInRight">
      <h2 className="text-cyan-300 text-2xl font-sans font-medium mb-4">
        {title}
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="text-gray-400">
              Technologies: {project.technologies}
            </p>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline mt-2 inline-block"
            >
              <IoLogoGithub className="inline mr-1" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
