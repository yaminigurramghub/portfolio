import React from "react";
import { FaTrophy } from "react-icons/fa";

const AchievementsSection = ({ id, title, achievements }) => {
  return (
    <section id={id} className="py-12 bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col px-6">
        <h2 className="text-2xl font-bold text-cyan-500 mb-8">{title}</h2>
        <div className="w-full">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="mb-8 p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center mb-2">
                <FaTrophy className="mr-2 text-cyan-400" size={20} />
                <h3 className="text-xl font-semibold text-cyan-400">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-2">{achievement.description}</p>
              <p className="text-gray-400 text-sm">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
