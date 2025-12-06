// lib/imageUtils.ts

// Function to generate color-coded placeholder images for projects
export function generatePlaceholderImage(projectName: string): string {
  // Define project categories by keywords
  const categories = {
    ai: [
      "ai",
      "ml",
      "machine learning",
      "neural",
      "compass",
      "nlp",
      "language",
    ],
    blockchain: [
      "blockchain",
      "crypto",
      "ethereum",
      "web3",
      "solidity",
      "property",
    ],
    web: ["web", "react", "javascript", "frontend", "ui", "scout", "dashboard"],
    cloud: ["cloud", "aws", "azure", "serverless", "lambda", "docker"],
  };

  // Determine which category this project belongs to
  const name = projectName.toLowerCase();
  let category = "default";

  Object.entries(categories).forEach(([cat, keywords]) => {
    if (keywords.some((keyword) => name.includes(keyword))) {
      category = cat;
    }
  });

  // Return the appropriate placeholder based on category
  switch (category) {
    case "ai":
      return "/images/placeholder-ai.jpg";
    case "blockchain":
      return "/images/placeholder-blockchain.jpg";
    case "web":
      return "/images/placeholder-web.jpg";
    case "cloud":
      return "/images/placeholder-cloud.jpg";
    default:
      return "/images/placeholder-generic.jpg";
  }
}

// Function to check if an image exists
export async function imageExists(url: string): Promise<boolean> {
  if (!url || url.includes("placeholder")) return false;

  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Function to generate repository-specific image URLs
export function getProjectImage(repoName: string): string {
  // First try repository-specific images
  const imageMap: Record<string, string> = {
    "COMPASS-The-AI-Bot-main": "/images/compass-ai-bot.png",
    "Blockchain-Based-Property-Registration": "/images/blockchain-property.png",
    AIScout: "/images/aiscout-placeholder.png",
  };

  // If we have a specific image for this repo, use it
  if (imageMap[repoName]) {
    return imageMap[repoName];
  }

  // Otherwise generate a placeholder based on the project name
  return generatePlaceholderImage(repoName);
}
