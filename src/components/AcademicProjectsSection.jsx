import React from "react";
import { FaProjectDiagram, FaCode, FaDatabase, FaGithub } from "react-icons/fa";

const AcademicProjectsSection = ({ id, title, projects }) => {
  return (
    <section id={id} className="py-12 bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col px-6">
        <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
        <div className="w-full">
          {projects.map((project, index) => {
            const IconComponent =
              project.type === "coding"
                ? FaCode
                : project.type === "database"
                ? FaDatabase
                : FaProjectDiagram;
            return (
              <div
                key={project.id}
                className="mb-8 p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 relative"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 text-gray-300 hover:text-cyan-400"
                >
                  <FaGithub size={20} />
                </a>
                <div className="mb-2">
                  <IconComponent
                    className="mr-2 text-cyan-400 inline-block"
                    size={20}
                    href={project.githubLink}
                  />
                  <h3 className="text-xl font-semibold text-cyan-400 inline-block">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg mb-2">
                  {project.description}
                </p>
                <p className="text-gray-400 text-sm">{project.date}</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-400">•</span>
                    {project.technologies.join(", ")}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjectsSection;

// import React, { useRef } from "react";
// import {
//   FaProjectDiagram,
//   FaCode,
//   FaDatabase,
//   FaGithub,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// const AcademicProjectsSection = ({ id, title, projects }) => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     const scrollAmount = 300; // Adjust based on card width
//     if (container) {
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const defaultImageUrl =
//     "https://via.placeholder.com/300x200?text=Project+Image"; // Placeholder image

//   return (
//     <section id={id} className="py-12 bg-gray-900 rounded-lg shadow-md">
//       <div className="flex flex-col px-6">
//         <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
//         <div className="relative">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 z-10"
//             style={{ marginLeft: "-40px" }} // Shift arrow left to avoid overlapping first card
//             aria-label="Scroll left"
//           >
//             <FaArrowLeft size={20} />
//           </button>
//           <div
//             ref={scrollContainerRef}
//             className="flex flex-row space-x-6 overflow-x-auto scrollbar-hide pb-4 pl-10" // Add padding-left to shift cards right
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {projects.map((project, index) => {
//               const IconComponent =
//                 project.type === "coding"
//                   ? FaCode
//                   : project.type === "database"
//                   ? FaDatabase
//                   : FaProjectDiagram;
//               let imageUrl = defaultImageUrl; // Default to placeholder
//               if (
//                 project.githubLink &&
//                 typeof project.githubLink === "string"
//               ) {
//                 const githubUsername = project.githubLink.split("/")[3];
//                 const repoName = project.githubLink.split("/")[4].split("#")[0];
//                 imageUrl = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/main/screenshot.png`;
//               }

//               return (
//                 <div
//                   key={project.id}
//                   className="min-w-[300px] p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 flex flex-col justify-between"
//                 >
//                   <div>
//                     <a
//                       href={project.githubLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-300 hover:text-cyan-400 mb-2 inline-block"
//                     >
//                       <FaGithub size={20} />
//                     </a>
//                     <div className="mb-2">
//                       <IconComponent
//                         className="mr-2 text-cyan-400 inline-block"
//                         size={20}
//                       />
//                       <h3 className="text-xl font-semibold text-cyan-400 inline-block">
//                         {project.title}
//                       </h3>
//                     </div>
//                     <img
//                       src={imageUrl}
//                       alt={`${project.title} screenshot`}
//                       className="w-full h-32 object-cover rounded-md mb-2"
//                       onError={(e) => {
//                         e.target.src = defaultImageUrl;
//                       }} // Fallback to placeholder on error
//                     />
//                     <p className="text-gray-300 text-lg mb-2">
//                       {project.description}
//                     </p>
//                     <p className="text-gray-400 text-sm">{project.date}</p>
//                     <ul className="text-gray-300 mt-2 space-y-1">
//                       <li className="flex items-center">
//                         <span className="mr-2 text-green-400">•</span>
//                         {project.technologies.join(", ")}
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 z-10"
//             aria-label="Scroll right"
//           >
//             <FaArrowRight size={20} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AcademicProjectsSection;
