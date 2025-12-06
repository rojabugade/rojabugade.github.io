"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FullBlogContent from "./FullBlogContent";

export default function MastersJourneyPage() {
  const [showFullReflection, setShowFullReflection] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">
            M.S. Applied Data Science Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A reflective journey through the Master&apos;s program at Syracuse
            University
          </p>
        </motion.div>

        {/* Video Presentation Section
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">
            Personal Reflection
          </h2>
          <div className="aspect-video bg-gray-900/50 rounded-lg mb-4 flex items-center justify-center border border-gray-700">
            <p className="text-gray-400">
              [Video Embed Placeholder - Add your Loom or YouTube video here]
            </p>
          </div>
          <p className="text-gray-300">
            A brief summary of my experience in the Applied Data Science program
            and my transition from Software Engineering to Data Platforms.
          </p>
        </motion.section> */}

        {/* Program Learning Outcomes Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Program Learning Outcomes (PLOs)
          </h2>
          <p className="text-gray-300 mb-6">
            The M.S. in Applied Data Science curriculum is built on six core
            outcomes. Below is my interpretation of these goals and how I
            demonstrated mastery of them during my studies.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "1. Collect, Store, and Access Data",
                take: "It's about architecture—designing scalable pipelines and databases (SQL/NoSQL) rather than just querying existing ones.",
                courses: "IST 659 & IST 722",
                project: "Student Association PowerApp",
                evidence:
                  "Designed a normalized relational database schema to ensure data integrity for hundreds of student records.",
              },
              {
                title: "2. Create Actionable Insight",
                take: 'The "so what?" of data science. Translating raw numbers into a narrative that solves specific business or societal problems.',
                courses: "IST 688",
                project: "COMPASS - The AI Bot",
                evidence:
                  'Built a full-lifecycle application that solved the specific problem of "information overload" for international students.',
              },
              {
                title: "3. Apply Visualization & Predictive Models",
                take: "Selecting the right algorithms (Regression, LLMs) and visualization tools to make complex data understandable.",
                courses: "IST 687",
                project: "Energy Consumption Prediction",
                evidence:
                  "Used Linear Regression in R to forecast building energy usage and visualized error rates to optimize cost savings.",
              },
              {
                title: "4. Use Programming Languages (R/Python)",
                take: "Technical proficiency in automating analysis and building reproducible, custom applications.",
                courses: "IST 652 & IST 707",
                project: "",
                evidence:
                  "Demonstrated across all projects, utilizing Python for the COMPASS backend (Flask/Streamlit) and R for statistical analysis in Energy Prediction.",
              },
              {
                title: "5. Communicate Insights",
                take: "The translation layer—explaining technical constraints to managers and business value to engineers.",
                courses: "",
                project: "Student Association PowerApp",
                evidence:
                  "Collaborated with a cross-functional group to translate student needs into a technical database solution.",
              },
              {
                title: "6. Apply Ethics",
                take: "Ensuring data systems do not harm. Focusing on bias, privacy, and transparency.",
                courses: "",
                project: "COMPASS - The AI Bot",
                evidence:
                  "Implemented RAG (Retrieval-Augmented Generation) guardrails to prevent AI hallucinations, ensuring students received accurate, safe information.",
              },
            ].map((plo, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {plo.title}
                </h3>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold">My Take:</span> {plo.take}
                </p>
                <div className="ml-4">
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-blue-300">
                      How I Achieved It:
                    </span>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    {plo.courses && <li>Course: {plo.courses}</li>}
                    {plo.project && <li>Project: {plo.project}</li>}
                    <li>Evidence: {plo.evidence}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Project Deep Dives Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Project Deep Dives
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Project A: COMPASS - The AI Bot",
                role: "Lead RAG Pipeline Developer",
                tech: "Python, OpenAI, Docker, Streamlit",
                goal: "Simplify the university search process for international students.",
                insight:
                  "The bot synthesized fragmented data into personalized answers, significantly reducing the research time for students.",
                context: "Completed for IST 688 (Building HC-AI Apps).",
              },
              {
                title: "Project B: Student Association PowerApp",
                role: "Backend Database Architect",
                tech: "PowerApps, SQL, AWS",
                goal: "Digitize manual event tracking and member directories.",
                insight:
                  "Provided immediate operational visibility into member engagement, allowing the board to optimize event scheduling based on real attendance data.",
                context: "Completed for IST 659 (Data Admin Concepts).",
              },
              {
                title: "Project C: Energy Consumption Prediction",
                role: "Lead Predictive Analyst",
                tech: "R, Linear Regression",
                goal: "Forecast building energy spikes to reduce costs.",
                insight:
                  "Identified correlations between specific weather patterns and energy spikes, enabling proactive 'pre-cooling' strategies.",
                context: "Completed for IST 687 (Intro to Data Science).",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-semibold text-blue-300">Role:</span>{" "}
                    {project.role}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-300">
                      Tech Stack:
                    </span>{" "}
                    {project.tech}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-300">
                      The Goal:
                    </span>{" "}
                    {project.goal}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-300">
                      Actionable Insight:
                    </span>{" "}
                    {project.insight}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-300">
                      Academic Context:
                    </span>{" "}
                    {project.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Summary & Blog Button Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Reflection & Synthesis
          </h2>
          <div className="space-y-4 text-gray-300 mb-6">
            <h3 className="text-xl font-semibold text-blue-300">
              Summary of My Academic Journey
            </h3>
            <p>
              My journey through the M.S. in Applied Data Science has been a
              process of integrating my previous experience as a software
              engineer with the new analytical capabilities required of a data
              scientist.
            </p>
            <p>
              <span className="font-semibold">Foundation:</span> Coming into the
              program with a background in Java, I was already comfortable with
              programming (PLO 4). However, courses like IST 659 and IST 722
              expanded this skill set from &quot;writing code&quot; to
              &quot;architecting data systems&quot; (PLO 1).
            </p>
            <p>
              <span className="font-semibold">Transformation:</span> The core
              transformation occurred in learning how to generate insight (PLO
              2). Through the Energy Consumption project, I learned that a model
              is only useful if it solves a business problem.
            </p>
            <p>
              <span className="font-semibold">Responsibility:</span> Finally,
              the program instilled a deep sense of ethical responsibility.
              Working on COMPASS taught me that with the power of AI comes the
              responsibility to prevent bias and ensure transparency (PLO 6).
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowFullReflection(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center"
            >
              Read Full Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </button>
          </div>
        </motion.section>

        {/* Full Blog Modal */}
        <AnimatePresence>
          {showFullReflection && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowFullReflection(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 border border-gray-700 rounded-xl max-w-5xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-8 py-4 flex justify-between items-center z-10">
                  <h2 className="text-2xl font-semibold text-blue-400">
                    Full Reflection Blog
                  </h2>
                  <button
                    onClick={() => setShowFullReflection(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-8">
                  <FullBlogContent />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
