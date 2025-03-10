"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Define interface for props
interface NavbarProps {
  onScrollToAbout: () => void;
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onScrollToAbout,
  onScrollToProjects,
  onScrollToContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hover: {
      color: "#3b82f6",
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  // Helper function to handle navigation
  const handleNavigation = (handler: () => void, closeMenu: boolean = true) => {
    handler();
    if (closeMenu && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="text-white text-xl font-semibold">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-500">R</span>
              <span className="hidden md:inline">oja B.</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <motion.div variants={linkVariants} whileHover="hover">
              <Link
                href="/"
                className="text-gray-200 hover:text-white font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>

            <motion.div variants={linkVariants} whileHover="hover">
              <button
                onClick={() => handleNavigation(onScrollToAbout)}
                className="text-gray-200 hover:text-white font-medium relative group bg-transparent border-none cursor-pointer"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>

            <motion.div variants={linkVariants} whileHover="hover">
              <button
                onClick={() => handleNavigation(onScrollToProjects)}
                className="text-gray-200 hover:text-white font-medium relative group bg-transparent border-none cursor-pointer"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>

            <motion.div variants={linkVariants} whileHover="hover">
              <button
                onClick={() => handleNavigation(onScrollToContact)}
                className="text-gray-200 hover:text-white font-medium relative group bg-transparent border-none cursor-pointer"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>
          </div>

          {/* Resume Button */}
          <Link
            href="/resume"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
          >
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-full md:w-64 bg-gray-900/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center md:hidden"
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col space-y-6 w-full px-12">
          <motion.div variants={navItemVariants}>
            <Link
              href="/"
              className="text-white text-2xl font-medium block py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <button
              onClick={() => handleNavigation(onScrollToAbout)}
              className="text-white text-2xl font-medium block py-2 border-b border-gray-700 w-full text-left bg-transparent"
            >
              About
            </button>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <button
              onClick={() => handleNavigation(onScrollToProjects)}
              className="text-white text-2xl font-medium block py-2 border-b border-gray-700 w-full text-left bg-transparent"
            >
              Projects
            </button>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <button
              onClick={() => handleNavigation(onScrollToContact)}
              className="text-white text-2xl font-medium block py-2 border-b border-gray-700 w-full text-left bg-transparent"
            >
              Contact
            </button>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <Link
              href="/Roja_Bugade_Resume"
              className="text-white text-2xl font-medium block py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
