// app/components/Server/FetchGithub.tsx
"use server";

/**
 * Service for fetching project data from GitHub
 */

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string;
  githubLink: string;
  demoLink: string;
  fullDescription: string;
}

// Project metadata for enhancing GitHub data
const projectMetadata: Record<string, Partial<ProjectData>> = {
  "COMPASS-The-AI-Bot-main": {
    title: "COMPASS - The AI Bot",
    features: [
    "AI-driven university recommendation",
"Personalized university suggestions",
"Interactive chatbot assistant",
"Living expense tracking",
"Career opportunity insights",
"University program comparison"
    ],
    technologies:
      "Python, TensorFlow/PyTorch, Flask/FastAPI, SQLite/PostgreSQL, Docker",
    tags: ["Python", "TensorFlow", "NLP", "Flask", "Docker"],
    fullDescription: `COMPASS is an advanced AI-powered chatbot built with natural language processing (NLP) capabilities that can understand and respond intelligently to user inputs, making it a versatile virtual assistant.

    The system processes and interprets user queries with contextual awareness, engages in meaningful conversations, helps with predefined tasks, and adapts to user preferences over time for improved interactions.`,
  },
  "Blockchain-Based-Property-Registration": {
    title: "Blockchain-Based Property Registration",
    features: [
      "Decentralized Ledger",
      "Smart Contracts",
      "User Authentication",
      "Immutable Records",
      "Transaction History",
    ],
    technologies: "Ethereum/Hyperledger, Solidity, Node.js, IPFS, React.js",
    tags: ["Blockchain", "Ethereum", "Solidity", "Node.js", "React"],
    fullDescription: `This project implements a secure, transparent, and decentralized property registration system using blockchain technology. By leveraging blockchain's immutability and cryptographic security, the system ensures that property records are tamper-proof, reducing fraud and enhancing trust between buyers, sellers, and government authorities.

    The system stores property records on a blockchain to prevent unauthorized modifications, automates property transactions through smart contracts, and maintains a complete record of ownership transfers.`,
  },
  AIScout: {
    title: "AIScout",
    features: [
      "Content Aggregation",
      "Sentiment Analysis",
      "Real-time Updates",
      "Customizable Feeds",
      "Analytics Dashboard",
    ],
    technologies: "React.js, Python, AWS Lambda, DynamoDB, Machine Learning",
    tags: ["AWS", "Serverless", "React", "Python", "NLP"],
    fullDescription:
      "A sophisticated platform that aggregates content from various sources and performs real-time sentiment analysis using AI. The system provides users with insights into content trends and emotional tones, helping them make informed decisions about the information they consume.",
  },
};

// Helper functions - must be async for Server Actions
async function getProjectImageInternal(repoName: string): Promise<string> {
  const imageMap: Record<string, string> = {
    "COMPASS-The-AI-Bot-main": "/images/compass-ai-bot.png",
    "Blockchain-Based-Property-Registration": "/images/blockchain-property.png",
    AIScout: "/images/aiscout-placeholder.png",
  };

  // If we have a specific image for this repo, use it
  if (imageMap[repoName]) {
    return imageMap[repoName];
  }

  // Otherwise generate a placeholder
  return `/api/placeholder/400/200?text=${repoName.replace(/-/g, " ")}`;
}

async function getDemoLinkInternal(
  repoName: string,
  homepage: string
): Promise<string> {
  // Use homepage URL from GitHub if available
  if (homepage && homepage !== "") {
    return homepage;
  }

  // Otherwise use default demo links or "#" for no demo
  const demoMap: Record<string, string> = {
    "COMPASS-The-AI-Bot-main": "#",
    "Blockchain-Based-Property-Registration": "#",
    AIScout: "#",
  };

  return demoMap[repoName] || "#";
}

// Fetch GitHub repos for a specific user
export async function fetchGitHubRepos(
  username: string
): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GithubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

// Map GitHub repos to project data
async function mapReposToProjects(repos: GithubRepo[]): Promise<ProjectData[]> {
  // Filter repos based on the keys in projectMetadata
  const projectRepos = repos.filter(
    (repo) =>
      Object.keys(projectMetadata).includes(repo.name) ||
      Object.keys(projectMetadata).some((key) =>
        repo.name.toLowerCase().includes(key.toLowerCase())
      )
  );

  const projects = await Promise.all(
    projectRepos.map(async (repo, index) => {
      // Find matching metadata key (exact match or partial match)
      const metadataKey =
        Object.keys(projectMetadata).find(
          (key) =>
            repo.name === key ||
            repo.name.toLowerCase().includes(key.toLowerCase())
        ) || repo.name;

      const metadata = projectMetadata[metadataKey] || {};

      return {
        id: repo.id || index + 1,
        title: metadata.title || repo.name.replace(/-/g, " "),
        description:
          metadata.description ||
          repo.description ||
          "No description available",
        image: await getProjectImageInternal(repo.name),
        tags: metadata.tags || repo.topics || ["JavaScript"],
        features: metadata.features || ["Feature 1", "Feature 2", "Feature 3"],
        technologies: metadata.technologies || "JavaScript, React, Node.js",
        githubLink: repo.html_url,
        demoLink: await getDemoLinkInternal(repo.name, repo.homepage),
        fullDescription:
          metadata.fullDescription ||
          repo.description ||
          "No detailed description available",
      };
    })
  );

  return projects;
}

// Main function to get projects
export async function getProjects(
  username: string = "RojaBugade"
): Promise<ProjectData[]> {
  try {
    const repos = await fetchGitHubRepos(username);
    const projects = await mapReposToProjects(repos);

    // If GitHub API fails or returns no matching projects, return fallback data
    if (projects.length === 0) {
      return getFallbackProjects();
    }

    return projects;
  } catch (error) {
    console.error("Error getting projects:", error);
    return getFallbackProjects();
  }
}

// Fallback projects in case GitHub API fails
async function getFallbackProjects(): Promise<ProjectData[]> {
  return [
    {
      id: 1,
      title: "COMPASS - The AI Bot",
      description:
        "An advanced AI-powered chatbot designed to assist users with various tasks including answering queries, providing recommendations, and engaging in interactive conversations.",
      image: "compass.png",
      tags: ["Python", "TensorFlow", "NLP", "Flask", "Docker"],
      features: [
        "AI-driven university recommendation",
"Personalized university suggestions",
"Interactive chatbot assistant",
"Living expense tracking",
"Career opportunity insights",
"University program comparison"
      ],
      technologies:
        "Python, TensorFlow/PyTorch, Flask/FastAPI, SQLite/PostgreSQL, Docker",
      githubLink: "https://github.com/rojabugade/compass-assistant",
      demoLink: "#",
      fullDescription: "",
    },
    {
      id: 2,
      title: "Banking Application",
      description:
        "Spring boot application which provide REST service for money transfer using Gradle.",
      image: "/db.jpg",
      tags: ["Blockchain", "Ethereum", "Solidity", "Node.js", "React"],
      features: [
        "Account Creation",
"Balance Inquiry",
"Fund Transfer",
"Spring Boot Framework",
"RESTful API Integration",
"Gradle Build System"
      ],
      technologies: "Ethereum/Hyperledger, Solidity, Node.js, IPFS, React.js",
      githubLink:
        "https://github.com/rojabugade/Banking-Application",
      demoLink: "#",
      fullDescription: "",
    },
    
    {
      id: 3,
      title: "Student Association PowerApp",
      description:
        "The Power App is a solution for the Student Association. It encompasses the development, customization, and maintenance of the Power App tailored to the needs of the Student Association.",
      image: "StudentAssociationPowerApp.png.jpeg",
      tags: ["AWS", "Serverless", "React", "Python", "NLP"],
      features: [
        "Student Association Management",
        "Event Scheduling & Promotion",
        "Member Directory & Communication",
        "Resource & Document Sharing",
        "Feedback Collection & Surveys",
        "Real-time Notifications",
        "Microsoft PowerApps Integration",
        "User-friendly Student Portal",
        "Collaboration & Engagement",
        "Digital Student Organization Platform",
      ],
      technologies: "React.js, Python, AWS Lambda, DynamoDB, Machine Learning",
      githubLink: "https://github.com/rojabugade/StudentAssociationPowerApp",
      demoLink: "#",
      fullDescription:"",
    },

    {
      id: 4,
      title: "SpringBoot-Application",
      description:
        "This website contains a simple spring boot application in which CRUD operations are performed. Here one can add, delete, update and retrieve the Aliens(E.g. Person, Customer, Student, Employee etc.).",
      image: "springbootapp.png",
      tags: ["AWS", "Serverless", "React", "Python", "NLP"],
      features: [
        "CRUD Operations",
        "Spring Boot Framework",
        "RESTful API",
        "MySQL Database Integration",
        "JPA/Hibernate ORM",
        "Maven Build Automation",
        "MVC Architecture",
        "Exception Handling",
        "Unit Testing with JUnit",
      ],
      technologies: "React.js, Python, AWS Lambda, DynamoDB, Machine Learning",
      githubLink: "https://github.com/rojabugade/SpringBoot-Application",
      demoLink: "#",
      fullDescription:"",
    },
  ];
}
