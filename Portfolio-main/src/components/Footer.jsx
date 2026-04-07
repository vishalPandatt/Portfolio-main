import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-700">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg text-purple-400 font-semibold">Sumit Chandra</h2>
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-5 mt-4 md:mt-0 text-xl">
          <a href="https://github.com/Sumit123chandra" target="_blank" className="hover:text-purple-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sumit-chandra-925014258" target="_blank" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" className="hover:text-purple-400 transition">
            <FaTwitter />
          </a>
        </div>
      </motion.div>

    </footer>
  );
}
