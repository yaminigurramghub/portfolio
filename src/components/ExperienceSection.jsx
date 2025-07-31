import React from "react";

const ExperienceSection = ({ id, title, experiences }) => {
  return (
    <section id={id} className="py-12 bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col px-6">
        <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
        <div className="relative w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-400"></div>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 !== 0;
            // const logoSrc = `/icons/${exp.company
            //   .toLowerCase()
            //   .replace(/\s/g, "-")}.png`;
            const logoSrc = `${process.env.PUBLIC_URL}/icons/${exp.company
              .toLowerCase()
              .replace(/\s/g, "-")}.png`;
            return (
              <div
                key={exp.id}
                className={`mb-8 flex ${
                  isLeft ? "justify-end" : "justify-start"
                } w-full`}
              >
                <div
                  className={`w-5/12 p-4 bg-gray-900 hover:bg-gray-800 rounded-lg shadow-md ${
                    isLeft ? "ml-3" : "mr-3"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={logoSrc}
                      alt={`${exp.company} logo`}
                      className="mr-2 max-w-[50px] max-h-[50px]"
                    />
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.date}</p>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2 text-green-400">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
