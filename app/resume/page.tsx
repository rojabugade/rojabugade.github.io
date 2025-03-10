// app/resume/page.tsx 
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
          Resume
        </h1>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Roja Bugade</h2>
            <a
              href="/Roja_Bugade_Resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </a>
          </div>

          <div className="space-y-8">
            {/* Education Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium">
                    Master's in Applied Data Science
                  </h4>
                  <p className="text-gray-300">
                    Syracuse University | Jan 2024 - Dec 2025
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">
                    Bachelor's in Computer Engineering
                  </h4>
                  <p className="text-gray-300">
                    University of Pune | Sep 2016 - Jun 2019
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium">
                    Officer Apps Dev Programmer Analyst 2
                  </h4>
                  <p className="text-gray-300">Citi | Aug 2022 - Dec 2023</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
                    <li>
                      Full Stack Developer (Java, ReactJS) for Citi’s Content
                      Publisher.
                    </li>
                    <li>
                      Led Java migration (1.8 to 17) across 200+ files,
                      optimized caching, and enhanced content handling.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Associate Consultant</h4>
                  <p className="text-gray-300">
                    Atos | Syntel | Jan 2020 - Aug 2022
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
                    <li>
                      Developed RESTful APIs and microservices using Java Spring
                      Boot.
                    </li>
                    <li>
                      Implemented CI/CD pipelines, handled SQL datasets, and
                      managed client communication.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Programming & Backend</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li>Java, Spring Boot, Microservices, Python</li>
                    <li>SQL, PostgreSQL, Elastic Search</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Frontend & Cloud</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li>React, JavaScript, HTML</li>
                    <li>
                      AWS (S3, IAM, EC2, Lambda, CodeDeploy, CodePipeline)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">DevOps & Data</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li>Docker, Kubernetes, Kafka, Snowflake</li>
                    <li>Power BI, Tableau, NLP, TensorFlow, Keras</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="text-center">
          <nav
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-lg py-3 shadow-lg"
            style={{ opacity: 1, transform: "none" }}>
            <a
              href="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              <svg
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
              Back to Homepage
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}