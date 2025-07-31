// import React, { useEffect } from "react";
// import { FaCode } from "react-icons/fa";

// const IconTransitionAnimation = ({ onComplete }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onComplete();
//     }, 3000); // 3 seconds duration

//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
//       <div className="relative">
//         <FaCode
//           className="text-cyan-300 text-6xl animate-iconPop"
//           style={{ transformStyle: "preserve-3d" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default IconTransitionAnimation;

// src/components/IconTransitionAnimation.js

// import React, { useEffect } from "react";

// const IconTransitionAnimation = ({ onComplete, icon: Icon }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onComplete();
//     }, 3000); // 3 seconds duration

//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
//       <div className="relative">
//         <Icon
//           className="text-cyan-300 text-6xl animate-iconPop"
//           style={{ transformStyle: "preserve-3d" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default IconTransitionAnimation;

import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa"; // Fallback icon

const IconTransitionAnimation = ({ onComplete, icon: Icon }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds duration

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onComplete]);

  const IconComponent = Icon || FaSpinner; // Fallback to FaSpinner if Icon is undefined

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        <IconComponent
          className="text-cyan-300 animate-iconPop"
          style={{ transformStyle: "preserve-3d" }}
          fontSize={64} // Explicitly set size for Fluent UI icons
        />
      </div>
    </div>
  );
};

export default IconTransitionAnimation;
