// import React from "react";

const EducationSection = ({ id, title, education }) => {
  return (
    <section id={id} className="py-12 bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col px-6">
        <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
        <div className="w-full">
          {education.map((edu, index) => {
            const logoSrc = `${process.env.PUBLIC_URL}/icons/${edu.institution
              .toLowerCase()
              .replace(/\s/g, "-")}.png`;
            return (
              <div
                key={edu.id}
                className="mb-8 p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-center mb-2">
                  <img
                    src={logoSrc}
                    alt={`${edu.institution} logo`}
                    className="mr-2 max-w-[50px] max-h-[50px]"
                  />
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg mb-2">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.date}</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-green-400">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
