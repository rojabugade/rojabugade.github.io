"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Define interface for component props
interface HeroSectionProps {
  handleScrollToAbout: () => void;
  handleScrollToContact: () => void;
}

// Animated tech words that will rotate
const techWords = [
  "AI & ML",
  "Cloud Computing",
  "DevOps",
  "Web Development",
  "Security",
  "Full Stack",
];

export default function HeroSection({ handleScrollToAbout, handleScrollToContact}: HeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Ref for the hero section container
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Typing and backspacing effect
  useEffect(() => {
    const currentWord = techWords[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Move to next word after deleting
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % techWords.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  // Determine if cursor should blink
  const shouldBlink =
    !isDeleting && currentText === techWords[currentWordIndex];

  // Mouse-following particles effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; color: string; id: number }>
  >([]);
  const particleCount = 15; // Number of particles
  const [isMouseInHero, setIsMouseInHero] = useState(false);

  useEffect(() => {
    const heroElement = heroSectionRef.current;

    if (!heroElement) return;

    const handleMouseEnter = () => {
      setIsMouseInHero(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInHero(false);
      // Clear particles when mouse leaves hero section
      setParticles([]);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseInHero) return;

      // Get bounding rect of hero section to calculate relative position
      const rect = heroElement.getBoundingClientRect();

      // Check if mouse is within hero section bounds
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setMousePosition({ x: e.clientX, y: e.clientY });

        // Create new particles on mouse move
        const newParticle = {
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 2, // Random size between 2px and 10px
          color: getRandomColor(),
          id: Date.now() + Math.random(), // Unique ID
        };

        setParticles((prev) => [
          ...prev.slice(-particleCount + 1),
          newParticle,
        ]);
      }
    };

    // Add event listeners
    heroElement.addEventListener("mouseenter", handleMouseEnter);
    heroElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listeners
      heroElement.removeEventListener("mouseenter", handleMouseEnter);
      heroElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseInHero]);

  // Random pastel color generator for particles
  const getRandomColor = () => {
    const colors = [
      "rgba(59, 130, 246, 0.5)", // blue
      "rgba(16, 185, 129, 0.5)", // green
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(249, 115, 22, 0.5)", // orange
      "rgba(236, 72, 153, 0.5)", // pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Variants for main content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Floating elements animation
  const floatingAnimation = {
    y: ["-10px", "10px", "-10px"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Text appear animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={heroSectionRef}
      className="gradient-bg-main min-h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Interactive Particle Effect - Now contained within the hero section */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              left: particle.x,
              top: particle.y,
              zIndex: 0,
            }}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{
              opacity: 0,
              scale: 2,
              x: (Math.random() - 0.5) * 100,
              y: (Math.random() - 0.5) * 100,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={floatingAnimation}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 },
          }}
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Content container */}
      <div className="z-10 container mx-auto px-8 md:px-12 lg:max-w-6xl">
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main title with glowing effect */}
          <motion.h1
            variants={itemVariants}
            className="font-mono font-bold text-6xl sm:text-7xl md:text-8xl text-white mb-6 tracking-tighter text-glow"
          >
            Roja <span className="text-blue-500">B.</span>
          </motion.h1>

          {/* Developer byline with typing animation */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 px-4 py-2 rounded-full mb-8"
          >
            <div className="flex items-center">
              <span className="text-green-400 text-lg sm:text-xl mr-2">
                &gt;
              </span>
              <span className="text-lg sm:text-xl text-gray-200 mr-2">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-400">developer</span> =
              </span>
              <motion.span className="font-mono text-lg sm:text-xl text-purple-400">
                "{currentText}"
              </motion.span>
              <span
                className={`text-white text-lg sm:text-xl ml-1 ${
                  shouldBlink ? "animate-blink" : "opacity-100"
                }`}
              >
                |
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-10"
          >
           Versatile Java Developer with ~4 years of experience in solutioning, client engagement, and Agile SDLC. Expertise in Java Spring Boot, microservices, and backend development, with growing skills in React and modern UI frameworks to deliver seamless user experiences. Proven problem-solving and technical capabilities in banking, financial services, and insurance domains. 
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              onClick={handleScrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 flex items-center shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.button>

            
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 mt-10">
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rojabugade/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/roja_bugade/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ffffff" }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent"></div>

      {/* Floating code snippets for background decoration */}
      <motion.div
        className="absolute top-1/4 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <pre className="text-xs text-blue-300 font-mono">
          {`function optimizeSystem(data) {
  return data
    .filter(item => item.priority > 0.8)
    .map(item => ({
      ...item,
      optimized: true
    }));
}`}
        </pre>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <pre className="text-xs text-green-300 font-mono">
          {`class AIAgent {
  constructor(params) {
    this.learning = true;
    this.accuracy = 0.95;
    this.models = params.models;
  }
  
  async predict(input) {
    // ML logic here
  }
}`}
        </pre>
      </motion.div>
    </div>
  );
}
