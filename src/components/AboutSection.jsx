import React, { useEffect, useRef } from "react";

const AboutSection = ({ id, title, description, techIcons }) => {
  const iconMap = {
    steth: "steth.png",
    profile: "profile_pic.png",
  };

  const iconContainerRef = useRef(null);

  useEffect(() => {
    const container = iconContainerRef.current;
    if (!container) return;

    let currentIndex = 0;
    const icons = container.children;
    const totalIcons = techIcons.length;
    const animationDuration = 3000; // 3 seconds per icon

    const animateIcons = () => {
      // Hide all icons
      for (let i = 0; i < icons.length; i++) {
        icons[i].style.opacity = "0";
      }
      // Show current icon
      icons[currentIndex].style.opacity = "1";

      currentIndex = (currentIndex + 1) % totalIcons;
    };

    animateIcons(); // Initial call
    const interval = setInterval(animateIcons, animationDuration);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [techIcons]);

  return (
    <section className="mb-12 py-12 rounded-lg shadow-md" id={id}>
      <div className="flex flex-col md:flex-row items-center justify-between px-6">
        {/* Description (Left Portion) */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-cyan-500 mb-4">{title}</h2>
          {description.map((para, index) => (
            <p
              key={index}
              className="text-gray-300 text-lg leading-relaxed mt-4 first:mt-0"
            >
              {para}
            </p>
          ))}
        </div>
        {/* Animated Icons (Right Portion) */}
        <div className="md:w-1/2 p-6 flex items-center justify-center">
          <div
            ref={iconContainerRef}
            className="relative h-[500px] w-[300px] flex items-center justify-center"
          >
            {techIcons.map((tech, index) => {
              const iconFile = iconMap[tech.toLowerCase()] || "default.png"; // Fallback if no match
              // const iconSrc = `${process.env.PUBLIC_URL}/icons/${iconFile}`;
              return (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/icons/${iconFile}`}
                  alt={`${tech} icon`}
                  className="absolute max-w-[400px] max-h-[400px] transition-opacity duration-700"
                  style={{ opacity: 0 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
