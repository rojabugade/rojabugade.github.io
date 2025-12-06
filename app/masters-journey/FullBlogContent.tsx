import React from 'react';

export default function FullBlogContent() {
  return (
    <div className="space-y-6 text-gray-300">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold text-blue-400 mb-2">
          From Code to Insight: My Journey Through the M.S. in Applied Data Science
        </h2>
        <p className="text-gray-400 italic">
          By Roja B. M.S. Applied Data Science Candidate, Fall 2025 Track: Data Pipelines and Platforms
        </p>
      </div>

      {/* Introduction */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Introduction: The "Why" Behind the Degree
        </h3>
        <p className="mb-3">
          When I joined Syracuse University in 2024, I wasn't a novice to technology. With nearly four years of experience as a
          Java Developer in the banking and financial services sector, I knew how to build software. I knew the rigors of Agile
          methodologies, the intricacies of Spring Boot microservices, and the pressure of delivering robust code for high-stakes clients.
        </p>
        <p>
          However, I felt a gap in my skillset. In my professional life, I was building the pipes—the backend systems that moved data
          from point A to point B—but I didn't fully understand the water flowing through them. I saw the rise of AI and Big Data, and I
          realized that the future of engineering wasn't just about application logic; it was about data intelligence. I enrolled in the
          M.S. in Applied Data Science (ADS) program with a specific goal: to pivot from being a pure software engineer to a Data Engineer
          who understands the entire lifecycle of data, from ingestion to actionable insight.
        </p>
      </div>

      {/* Expectations vs. Reality */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Expectations vs. Reality
        </h3>
        <p className="mb-3">
          <span className="font-semibold text-blue-300">What I Expected:</span> Honestly, I came in expecting a "Computer Science 2.0" degree.
          I assumed we would spend two years optimizing algorithms, writing complex Python scripts, and memorizing mathematical formulas for
          machine learning models. I expected the challenge to be purely technical—syntax, libraries, and runtime efficiency.
        </p>
        <p className="mb-3">
          <span className="font-semibold text-blue-300">What I Learned:</span> The reality was a paradigm shift. While the technical rigor was there,
          the program surprised me by emphasizing the "Applied" in Applied Data Science. I learned that clean code is useless if it solves the wrong problem.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <span className="font-semibold">The "So What?" Factor:</span> In classes like IST 687 (Introduction to Data Science), I wasn't just
            graded on my R code; I was graded on whether my analysis generated value. This was a shock to my developer mindset. I realized that
            data science is less about coding and more about storytelling with evidence.
          </li>
          <li>
            <span className="font-semibold">The 80/20 Rule:</span> I expected to spend 80% of my time tuning models. In reality, courses like
            IST 659 (Data Administration) and IST 722 (Data Warehouse) taught me that 80% of the work is actually collecting, cleaning, and
            architecting the data.
          </li>
          <li>
            <span className="font-semibold">Ethics is Not a Sidebar:</span> I expected ethics to be a single lecture. Instead, through projects
            like COMPASS in IST 688, I learned that ethical considerations—bias, hallucinations, privacy—must be baked into the architecture from day one.
          </li>
        </ul>
      </div>

      {/* PLOs Section */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Achieving the Program Learning Outcomes (PLOs)
        </h3>
        <p className="mb-4">
          The ADS program is built on six pillars. Here is how I navigated them, leveraging my background in "Data Pipelines and Platforms."
        </p>

        {/* PLO 1 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            1. Collect, Store, and Access Data
          </h4>
          <p className="mb-2 italic">Outcome: Identify and leverage applicable technologies to manage data.</p>
          <p className="mb-2">
            This PLO was the foundation of my "Data Pipelines" track. Coming from a relational database background in banking, I was comfortable
            with SQL. However, IST 722 (Data Warehousing) pushed me to understand enterprise-scale data architecture. I learned the difference
            between transactional databases (OLTP) and analytical warehouses (OLAP).
          </p>
          <p className="mb-2">
            Specifically, during a lab in IST 722, I had to design a Dimensional Model for a retail dataset. In my previous job, I was trained
            to use 3rd Normal Form (3NF) to avoid redundancy at all costs. But in this course, I had to unlearn that. I learned to intentionally
            denormalize data into "Fact" and "Dimension" tables (Star Schema) to optimize for read-heavy analytical queries. It was a lightbulb
            moment: I realized that "efficient" storage in software engineering is often "inefficient" for data science. This ability to switch
            mental models between OLTP and OLAP architectures is now one of my strongest assets as a data engineer.
          </p>
          <p>
            Additionally, in IST 659, I revisited the fundamentals of data modeling. For the Student Association PowerApp project, I had to
            architect a normalized database that could handle complex relationships between students, events, and attendance records without
            data redundancy.
          </p>
        </div>

        {/* PLO 2 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            2. Create Actionable Insight
          </h4>
          <p className="mb-2 italic">Outcome: Use the full data science life cycle to solve context-specific problems.</p>
          <p className="mb-2">
            This was the hardest shift for me. As a developer, I was used to "features." In Data Science, the currency is "insight." In IST 687,
            working on the Energy Consumption Prediction project, my team didn't just hand over a regression model. We analyzed the coefficients
            to tell a story: "When temperature rises by X degrees, cost rises by Y." This wasn't just math; it was business logic that could save money.
          </p>
          <p>
            Similarly, in IST 688, the COMPASS chatbot wasn't built just to show off OpenAI's API. It was built to solve the anxiety of
            international students. The "insight" was the personalized matching of student profiles to university programs, turning a generic
            search process into a tailored advisory session.
          </p>
        </div>

        {/* PLO 3 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            3. Apply Visualization and Predictive Models
          </h4>
          <p className="mb-2 italic">Outcome: Generate insight using visual and predictive tools.</p>
          <p className="mb-2">
            My journey with predictive modeling began in IST 687 and matured in IST 707 (Applied Machine Learning).
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-2">
            <li>
              <span className="font-semibold">Predictive:</span> I moved from simple linear regression to understanding classification algorithms
              and clustering. I learned that the "best" model isn't always the most complex one; sometimes a simple decision tree offers more
              interpretability than a neural network.
            </li>
            <li>
              <span className="font-semibold">Visualization:</span> I learned that a dashboard is a product. In IST 737 (Visual Analytic Dashboards),
              I learned that visualization is about guiding the user's eye to the anomaly or the trend.
            </li>
          </ul>
          <p>
            For example, during the Energy Consumption project, we initially plotted raw energy usage over time using ggplot2 in R, but the chart
            was just a wall of noise. I decided to pivot the visualization strategy. I faceted the data by "Hour of Day" and colored the points by
            "Humidity Levels." Suddenly, a clear pattern emerged: high energy usage wasn't just correlated with heat, but specifically with high
            humidity in the late afternoon. This visualization transformed a messy dataset into a clear recommendation for building managers to
            adjust dehumidification schedules, proving that the right chart is worth a thousand lines of code.
          </p>
        </div>

        {/* PLO 4 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            4. Use Programming Languages (R & Python)
          </h4>
          <p className="mb-2 italic">Outcome: Support the generation of insight through code.</p>
          <p className="mb-2">
            With my 4 years of Java experience, I wasn't afraid of code, but the style of coding in Data Science is different.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <span className="font-semibold">Python:</span> In IST 652 (Scripting for Data Analysis), I refined my Python skills. Unlike the
              verbose, object-oriented nature of Java, Python for data science is functional and script-heavy. I fell in love with libraries
              like Pandas for data manipulation and Flask for building quick APIs.
            </li>
            <li>
              <span className="font-semibold">R:</span> This was new territory. IST 687 introduced me to the statistical power of R. While I
              still prefer Python for production pipelines, I respect R's brevity for exploratory data analysis and statistical testing.
            </li>
          </ul>
        </div>

        {/* PLO 5 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            5. Communicate Insights to Broad Audiences
          </h4>
          <p className="mb-2 italic">Outcome: Translate analytics for diverse stakeholders.</p>
          <p className="mb-2">
            In my previous job, I spoke "developer to developer." In this program, I had to speak "analyst to stakeholder." The Student Association
            PowerApp project was a crash course in this.
          </p>
          <p>
            I remember a specific meeting with the Student Association board where I tried to explain the database schema. I started talking about
            "Foreign Keys" and "One-to-Many relationships" to explain why we couldn't just type event names into the student spreadsheet. I saw
            their eyes glaze over immediately. I realized I was failing PLO 5. I paused, pivoted, and drew a simple whiteboard sketch: "Think of
            this like a bucket. If we put the event name in the student bucket, we have to type it 100 times. If we give the event its own bucket,
            we type it once and draw a line." They got it immediately. That moment taught me that clarity is more important than technical precision
            when communicating with stakeholders.
          </p>
        </div>

        {/* PLO 6 */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            6. Apply Ethics
          </h4>
          <p className="mb-2 italic">Outcome: Evaluation of fairness, bias, and privacy.</p>
          <p>
            Ethics is often theoretical, but IST 688 made it practical. When building COMPASS, we used Large Language Models (LLMs). We immediately
            ran into the "black box" problem. How do we know the AI isn't hallucinating a fake scholarship? I implemented a RAG (Retrieval-Augmented
            Generation) pipeline to ground the AI's answers in verified PDF documents. This was a direct application of PLO 6—engineering transparency
            and safety into the product to protect the user.
          </p>
        </div>
      </div>

      {/* Deep Dive Projects */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Deep Dive: The Projects That Defined My Degree
        </h3>

        {/* Project 1: COMPASS */}
        <div className="mb-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            1. COMPASS - The AI Bot (IST 688)
          </h4>
          <p className="mb-2">
            <span className="font-semibold">The Challenge:</span> International students face information overload when applying to US universities.
            Data is scattered across hundreds of PDF pages.
          </p>
          <p className="mb-2">
            <span className="font-semibold">The Tech:</span> Python, OpenAI API, Streamlit, Docker, Vector Databases.
          </p>
          <p className="mb-2">
            <span className="font-semibold">My Role:</span> I was the lead engineer for the RAG pipeline. I wrote the scripts to ingest university
            course catalogs, chunk the text, and store them in a vector store.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Technical Hurdle:</span> The biggest challenge we faced was the context window limit of the LLM. Initially,
            I tried to feed entire PDF chapters into the prompt, which caused constant token overflow errors and high latency. I had to engineer a
            solution using a recursive character text splitter. I wrote a Python script to chunk the documents into 1,000-token segments with a
            200-token overlap to preserve context. This wasn't just a coding fix; it was an engineering decision that balanced cost, performance,
            and accuracy, directly contributing to the project's success.
          </p>
          <p>
            <span className="font-semibold">The Insight:</span> By grounding the AI in ground-truth documents, we created a tool that didn't just
            "chat"—it advised. It bridged the gap between raw data availability and student accessibility.
          </p>
        </div>

        {/* Project 2: PowerApp */}
        <div className="mb-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            2. Student Association PowerApp (IST 659)
          </h4>
          <p className="mb-2">
            <span className="font-semibold">The Challenge:</span> A student organization was managing hundreds of members and events using
            disconnected spreadsheets.
          </p>
          <p className="mb-2">
            <span className="font-semibold">The Tech:</span> SQL, Microsoft PowerApps, ERD Modeling.
          </p>
          <p className="mb-2">
            <span className="font-semibold">My Role:</span> Backend Architect. I focused on the "Collect and Store" aspect (PLO 1). I designed
            the Entity-Relationship Diagram (ERD) to ensure the database was normalized (3NF).
          </p>
          <p>
            <span className="font-semibold">The Insight:</span> The move to a relational database allowed for real-time reporting. We provided
            the student board with a dashboard showing exactly which events had low attendance, enabling data-driven marketing decisions.
          </p>
        </div>

        {/* Project 3: Energy */}
        <div className="mb-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            3. Energy Consumption Prediction (IST 687)
          </h4>
          <p className="mb-2">
            <span className="font-semibold">The Challenge:</span> Predict building energy usage to optimize heating/cooling schedules and reduce
            carbon footprint.
          </p>
          <p className="mb-2">
            <span className="font-semibold">The Tech:</span> R, Linear Regression, ggplot2.
          </p>
          <p className="mb-2">
            <span className="font-semibold">My Role:</span> Lead Analyst. I handled the statistical modeling and error analysis.
          </p>
          <p>
            <span className="font-semibold">The Insight:</span> We found that humidity, not just temperature, was a massive driver of energy spikes.
            This insight meant that "pre-cooling" strategies needed to account for dew points, not just the thermometer.
          </p>
        </div>
      </div>

      {/* NEXIS Experience */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Beyond the Classroom: The NEXIS Experience
        </h3>
        <p className="mb-2 font-semibold text-blue-300">
          AI & Technology Associate, NEXIS Student Technology Lab (Feb 2025 - Present)
        </p>
        <p className="mb-2">
          While coursework provided the theory, my time at the NEXIS Lab provided the chaos of the real world. As an AI Associate, I wasn't
          given a syllabus; I was given problems. Working in a research lab environment taught me unstructured problem-solving. I collaborated
          with peers from different disciplines—designers, engineers, and researchers.
        </p>
        <p>
          A distinct memory from the lab was when I was tasked with integrating a new open-source computer vision model into our existing workflow.
          There was almost no documentation, and the dependencies were breaking our current environment. I spent two days just reading GitHub
          issues and experimenting with different container builds. Unlike a class assignment with a clear rubric, nobody knew the "right" answer.
          I had to define the solution myself. This experience reinforced PLO 5 (Communication) because I had to constantly explain these technical
          blockers to non-technical lab leads, justifying why a "simple update" was taking three days of engineering time. It was here that I truly
          felt the transition from "student" to "practitioner."
        </p>
      </div>

      {/* Conclusion */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Conclusion: Reflections and What's Next
        </h3>

        <div className="mb-4">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            My Favorite Class: IST 722 - Data Warehouse
          </h4>
          <p>
            If I had to pick one course that defined my "Data Pipelines" track, it would be IST 722. Why? Because it was the bridge between my
            past and my future. It took my SQL knowledge and scaled it up. Learning about Dimensional Modeling, Star Schemas, and ETL (Extract,
            Transform, Load) pipelines gave me the blueprint for how modern companies handle Big Data. It wasn't about "getting an A"; it was
            about learning the architecture I want to build in my career.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            The Biggest Surprise
          </h4>
          <p>
            The biggest surprise was realizing that Context is King. I came in thinking the "best" data scientist was the one who knew the most
            math. I leave realizing that the best data scientist is the one who understands the business domain best. You can have the most
            advanced neural network in the world, but if it predicts something the business can't act on, it's worthless.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-blue-300 mb-2">
            Final Thoughts
          </h4>
          <p className="mb-2">
            Graduating from Syracuse University is not the end of my learning; it's the start of my specialization. I am leaving this program
            not just as a Java Developer, but as a Data Engineer who can architect the platforms that make AI possible. I have learned to
            Collect (PLO 1), Model (PLO 3), and Communicate (PLO 5), but most importantly, I have learned to treat data with the ethical respect
            it deserves (PLO 6).
          </p>
          <p className="font-semibold text-blue-300 text-lg">
            I am ready to build the next generation of intelligent, data-driven applications.
          </p>
        </div>
      </div>
    </div>
  );
}
