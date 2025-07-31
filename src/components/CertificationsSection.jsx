// import React from "react";
// import { FaCertificate } from "react-icons/fa";

// const CertificationsSection = ({ title, certifications }) => {
//   return (
//     <section className="py-12 bg-gray-900 rounded-lg shadow-md">
//       <div className="flex flex-col px-6">
//         <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
//         <div className="w-full">
//           {certifications.map((cert, index) => (
//             <div
//               key={cert.id}
//               className="mb-8 p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
//             >
//               <div className="flex items-center mb-2">
//                 <FaCertificate className="mr-2 text-cyan-400" size={20} />
//                 <h3 className="text-xl font-semibold text-cyan-400">
//                   {cert.name}
//                 </h3>
//               </div>
//               <p className="text-gray-300 text-lg mb-2">{cert.organization}</p>
//               <p className="text-gray-400 text-sm">{cert.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsSection;

import React from "react";

const CertificationsSection = ({ id, title, certifications }) => {
  return (
    <section id={id} className="py-12 bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col px-6">
        <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
        <div className="w-full">
          {certifications.map((cert, index) => {
            const logoSrc = `${process.env.PUBLIC_URL}/icons/${cert.name
              .toLowerCase()
              .replace(/\s/g, "-")}.png`;
            return (
              <div
                key={cert.id}
                className="mb-8 p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-center mb-2">
                  <img
                    src={logoSrc}
                    alt={`${cert.organization} logo`}
                    className="mr-2 max-w-[50px] max-h-[50px]"
                  />
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg mb-2">
                  {cert.organization}
                </p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
