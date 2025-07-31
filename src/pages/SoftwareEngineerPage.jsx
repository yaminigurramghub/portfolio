import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import CertificationsSection from "../components/CertificationsSection";
import FooterSection from "../components/FooterSection";

const SoftwareEngineerPage = ({ onBack }) => {
  const experiences = [
    {
      id: 1,
      title: "Clinical Intern",
      company:
        "Dr. Pinnamaneni Siddhartha Institute Of Medical Science and Research Foundation",
      date: "2023-2025",
      responsibilities: [
        "One Year Of Rotatory Internship In All The Clinical Branches With One Month Of Internship In Rural and Urban health Care Centre. Completed a comprehensive one-year rotatory internship across core medical departments including Internal Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics, Orthopaedics,Psychiatry, Dermatology, ENT, Ophthalmology, and Community Medicine.",

        "Assisted in patient care, performed clinical procedures such as IV cannulation, wound dressing, blood sampling, and CPR. Gained hands-on experience in emergency duties, ward rounds, case presentations, and outpatient care.",

        "Developed practical skills in diagnosis, patient communication, and multidisciplinary teamwork in both rural and urban healthcare settings.",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Medicine, Bachelor of Surgery",
      institution:
        "Dr. Pinnamaneni Siddhartha Institute Of Medical Science and Research Foundation",
      date: "2018 - 2025",
      highlights: [],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Basic Life Support (BLS)",
      organization: "Indian Resuscitation Council Federation",
      date: "December, 2023",
    },
  ];

  const volunteer = [
    {
      id: 1,
      name: "Sevankur Bharat",
      organization:
        "Served tribal communities through health camps and awareness drives.",
      date: "2022 - Present",
    },
    {
      id: 2,
      name: "Robin Hood Army",
      organization:
        "Distributed surplus food, assisted in medical outreach for the needy.",
      date: "2020 - Present",
    },
    {
      id: 3,
      name: "SPARSH & Operation Smile",
      organization:
        "Promoted menstrual hygiene, cancer awareness, and cleft care",
      date: "2019 - 2020",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.classList.add(
        index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
      );
    });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Reusable Navbar */}
      <Navbar
        title="Yamini's Portfolio"
        onBack={onBack}
        resumeLink={`${process.env.PUBLIC_URL}/resume.pdf`}
      />
      {/* About Me Section */}
      <main className="pt-20 container mx-auto px-6">
        <AboutSection
          id="about"
          title="About Me"
          description={[
            "I am a passionate and driven medical graduate currently completing my MBBS at Dr. Pinnamaneni Sidhartha Institute of Medical Sciences and Research Foundation. With a comprehensive one-year rotatory internship across diverse medical specialties, including Internal Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics, and Psychiatry, I have developed robust clinical acumen and hands-on procedural expertise. My clinical competencies include diagnostics, emergency response (BLS, trauma support), IV cannulation, wound care, CPR, and patient communication, reinforced through experience in both urban and rural healthcare settings.",
            "In parallel to my clinical practice, I serve as a medical educator with platforms like Anatomy Guru and Bluepenonline, delivering integrated guidance across core MBBS subjects, mentoring future physicians to build strong conceptual and practical foundations.",
          ]}
          techIcons={["profile"]} // Updated to match iconMap
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <EducationSection
          id="education"
          title="Education"
          education={education}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ExperienceSection
          id="experience"
          title="Professional Experience"
          experiences={experiences}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <CertificationsSection
          id="certifications"
          title="Volunteer Experiences"
          certifications={volunteer}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <CertificationsSection
          id="certifications"
          title="Certifications"
          certifications={certifications}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <FooterSection />
      </main>
    </div>
  );
};

export default SoftwareEngineerPage;
