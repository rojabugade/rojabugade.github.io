"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define skill data with categories and icons
const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: [
      { name: "Java", proficiency: 99 },
      { name: "C++", proficiency: 95 },
      { name: "Python", proficiency: 95 },
      { name: "SQL/PostgreSQL", proficiency: 94 },
      { name: "C", proficiency: 80 },
      { name: "TypeScript", proficiency: 75 },
      { name: "React", proficiency: 65 },
    ],
    description:
      "Developing robust, secure applications with modern frameworks and following security best practices.",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    skills: [
      { name: "Deep Learning", proficiency: 85 },
      { name: "Natural Language Processing", proficiency: 80 },
      { name: "Reinforcement Learning", proficiency: 75 },
      { name: "TensorFlow & PyTorch", proficiency: 85 },
    ],
    description:
      "Expertise in designing and implementing AI systems, neural networks, and language models for practical applications.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    skills: [
      { name: "Docker & Kubernetes", proficiency: 90 },
      { name: "AWS Services", proficiency: 85 },
      { name: "CI/CD Pipelines", proficiency: 80 },
    ],
    description:
      "Building scalable cloud infrastructure and implementing efficient deployment pipelines for continuous delivery.",
  }
];

// Define educational background
const education = [
  {
    degree: "Master's in Applid Data Science",
    specialization: "AI, Data Pipelines and Platforms",
    period: "2024 - Present",
    institution: "Syracuse University, USA",
    description:
      "Developed and deployed AI chatbot solutions using Streamlit and OpenAI: A comprehensive chatbot with functionalities like document upload Q&A, Course Information chatbot, an AI-based homework manager featuring content summarization, RAG based chat, a specialized news bot for a global law firm, and COMPASS an AI-powered university guidance system that helps international students find and track university programs, living expenses, and career opportunities in the United States.",
  },
  {
    degree: "Bachelor's in Computer Science",
    specialization: "Software Engineering",
    period: "2016 - 2019",
    institution: "University of Pune",
    description:
      "Research: Blockchain based Forensics Analysis Secure Node Diagnosis Mechanism of Smart Grid,Bugade R. (2018), Blockchain based Forensics Analysis Secure Node Diagnosis Mechanism of Smart Grid (PAPER ID: IJRAR19J2596). Developed a blockchain-based forensic analysis and secure node diagnosis mechanism for smart grids using MD5, AES, and Paillier encryption to enable efficient, secure device identification and maintenance.",
  },
];

// Define work experience
const experience = [
  {
    position: "AI & Technology Associate",
    company: "NEXIS Student Technology Lab",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Engaged with the Nexis AI team, contributing to projects in AI for innovative solutions.",
      "Developing containerized ML pipelines for reproducible experiments",
      "Collaborating with faculty on publications in AI conferences",
    ],
  },
  {
    position: "Officer Apps Dev Programmer Analyst 2",
    company: "Citigroup",
    period: "Aug 2022 – Dec 2023",
    responsibilities: [
      "Officer Apps Dev Programmer Analyst 2 at Citi, specializing in Full Stack Development (Java, ReactJS) with key contributions to Citi’s Content Publisher.",
      "Led Java migration (1.8 to 17) across 200+ files, optimized caching with Ehcache 3, integrated 3rd-party APIs, and enhanced HTML content handling using CKEditor & regex. Streamlined Agile development with JIRA, Bitbucket, uDeploy, and TeamCity for efficient deployments.",
    ],
  },
  {
    position: "Associate Consultant",
    company: "Atos | Syntel",
    period: "Jan 2020 – Aug 2022",
    responsibilities: [
      "API & Middleware Java Developer (Manulife Insurance, CreditOne Bank): Developed and deployed RESTful Java-Spring Boot APIs using GitLab, Concourse, PostgreSQL, and PCF, built CI/CD pipelines, managed client communication, and handled large SQL datasets.",
"Microservice Developer (Clydesdale Bank/Virgin Money): Designed and maintained microservices for Business Internet Banking, resolved technical issues via logs, code, and database analysis, conducted code reviews, and worked with tools like Postman, JIRA, ServiceNow, Kibana, and GitHub."
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("experience");
  const [activeSkillCategory, setActiveSkillCategory] = useState(
    skillCategories[0].id
  );

  // Setup intersection observer for animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Get the currently active skill category data
  const activeCategory =
    skillCategories.find((category) => category.id === activeSkillCategory) ||
    skillCategories[0];

  return (
    <section className="gradient-bg-about text-white py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Designing secure, scalable & intelligent tech solutions with
            expertise in AI, DevOps, and Cloud Computing
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-lg mb-10 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Section (left) */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start space-y-4">
                {/* Profile Image */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                  <img
                    src="/1.jpg"
                    alt="Roja Bugade"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-xs font-medium px-3 py-1 rounded-full text-white">
                    Available for hire
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white">Roja B.</h3>
                  <p className="text-blue-400 font-medium">
                  Apps Dev Programmer
                  </p>
                </div>
              </div>

              {/* Bio Section (right) */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400 hidden md:block">
                  Background
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                  I am a versatile, accomplished, and goal-oriented professional with almost 4 years of experience in solutioning, client engagement, 
                  SDLC, and Agile methodology as a Java developer. I have developed and managed applications for leading clients in the banking, 
                  financial services, and insurance sectors
                  </p>
                  <p>
                  With expertise in backend technologies like Java Spring Boot and microservices, I am also 
expanding my skill set in frontend development, working with React, JavaScript, and modern UI frameworks to build seamless 
user experiences.
                  </p>
                  <p>
                  My strong technical and problem-solving capabilities ensure the delivery of high-quality, end-to-end solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
            <button
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "experience"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "education"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Education
              </button>
              

              <button
                onClick={() => setActiveTab("skills")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "skills"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Skills
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div ref={ref}>
            <AnimatePresence mode="wait">
              {/* Skills Tab */}
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Skill Categories selection */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {skillCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveSkillCategory(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center ${
                          activeSkillCategory === category.id
                            ? "bg-blue-600/20 text-blue-400 border border-blue-500/50"
                            : "bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-gray-600"
                        }`}
                      >
                        <span className="text-blue-400 mr-2">
                          {category.icon}
                        </span>
                        {category.title}
                      </button>
                    ))}
                  </div>

                  {/* Active skill category details */}
                  <motion.div
                    key={activeSkillCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Skill category info */}
                      <div className="md:w-1/3">
                        <div className="flex items-center mb-4">
                          <div className="text-blue-400 mr-3">
                            {activeCategory.icon}
                          </div>
                          <h4 className="text-xl font-semibold">
                            {activeCategory.title}
                          </h4>
                        </div>
                        <p className="text-gray-300 mb-6">
                          {activeCategory.description}
                        </p>

                        {/* Animated illustration or icon for the category */}
                        <div className="hidden md:block mt-6">
                          {activeSkillCategory === "ai-ml" && (
                            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                              <div className="text-center">
                                <motion.div
                                  animate={{
                                    scale: [1, 1.05, 1],
                                    transition: {
                                      duration: 2,
                                      repeat: Infinity,
                                    },
                                  }}
                                >
                                  <svg
                                    width="140"
                                    height="140"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto"
                                  >
                                    <path
                                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.5 12H16.5"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12 7.5V16.5"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <motion.path
                                      d="M5 5L19 19"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                      }}
                                    />
                                  </svg>
                                </motion.div>
                                <p className="text-blue-400 mt-2 text-sm">
                                  Neural Networks
                                </p>
                              </div>
                            </div>
                          )}

                          {activeSkillCategory === "cloud-devops" && (
                            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                              <div className="text-center">
                                <motion.div
                                  animate={{
                                    y: [0, -5, 0],
                                    transition: {
                                      duration: 2,
                                      repeat: Infinity,
                                    },
                                  }}
                                >
                                  <svg
                                    width="140"
                                    height="100"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto"
                                  >
                                    <motion.path
                                      d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9Z"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ opacity: 0.4 }}
                                      animate={{ opacity: 1 }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                      }}
                                    />
                                    <motion.path
                                      d="M7 20V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                      }}
                                    />
                                  </svg>
                                </motion.div>
                                <p className="text-blue-400 mt-2 text-sm">
                                  Cloud Services
                                </p>
                              </div>
                            </div>
                          )}

                          {activeSkillCategory === "programming" && (
                            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                              <div className="text-center">
                                <motion.div
                                  animate={{
                                    rotateY: [0, 180, 360],
                                    transition: {
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    },
                                  }}
                                  style={{ transformStyle: "preserve-3d" }}
                                >
                                  <svg
                                    width="140"
                                    height="100"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto"
                                  >
                                    <motion.path
                                      d="M8 9L5 12L8 15"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 0.5,
                                      }}
                                    />
                                    <motion.path
                                      d="M16 9L19 12L16 15"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 0.5,
                                      }}
                                    />
                                    <motion.path
                                      d="M14 4L10 20"
                                      stroke="#3B82F6"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: 0.5,
                                      }}
                                    />
                                  </svg>
                                </motion.div>
                                <p className="text-blue-400 mt-2 text-sm">
                                  Code & Development
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Skills progress bars */}
                      <div className="md:w-2/3">
                        <div className="space-y-6">
                          {activeCategory.skills.map((skill, index) => (
                            <div key={index}>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300 font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-gray-400 text-sm">
                                  {skill.proficiency}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                  className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.proficiency}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                  }}
                                ></motion.div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Add tools & technologies used */}
                        <div className="mt-8">
                          <h5 className="text-sm font-medium text-gray-300 mb-3">
                            Tools & Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {activeSkillCategory === "ai-ml" && (
                              <>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  TensorFlow
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  PyTorch
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Keras
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  scikit-learn
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Pandas
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  NLTK
                                </span>
                              </>
                            )}

                            {activeSkillCategory === "cloud-devops" && (
                              <>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  AWS
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Docker
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Kubernetes
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Jenkins
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Terraform
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  GitHub Actions
                                </span>
                              </>
                            )}

                            {activeSkillCategory === "programming" && (
                              <>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Java
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Python
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  JavaScript
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  TypeScript
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  React
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  Next.js
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  SQL
                                </span>
                                <span className="bg-gray-700/70 text-xs px-3 py-1 rounded-full text-blue-300">
                                  NoSQL
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
                    Academic Journey
                  </h3>

                  <div className="relative border-l-2 border-blue-500 pl-8 space-y-12 ml-4">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full bg-blue-500 border-4 border-gray-900 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>

                        <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700 shadow-lg hover:shadow-blue-900/10 transition-shadow">
                          <h4 className="text-xl font-semibold text-blue-400">
                            {item.degree}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 mb-3">
                            <span className="text-gray-400">
                              {item.institution}
                            </span>
                            <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
                            <span className="text-gray-400 text-sm">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm font-medium mb-2">
                            Specialization: {item.specialization}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
                    Professional Experience
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className="bg-gray-900/50 rounded-lg p-5 border border-gray-700 shadow-lg hover:shadow-blue-900/10 transition-all hover:-translate-y-1 duration-300"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-blue-400">
                              {item.position}
                            </h4>
                            <p className="text-gray-300">{item.company}</p>
                          </div>
                          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                            {item.period}
                          </span>
                        </div>

                        <ul className="space-y-2 text-sm text-gray-400">
                          {item.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

       
      </div>
    </section>
  );
}
