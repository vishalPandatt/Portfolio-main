import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import portfolioimg from "./assets/portfolioimg.jpg";
import blogsiteImg from "./assets/projects/blogsite.png";
import ecommerceImg from "./assets/projects/ecommerce.png";
import taskManagerImg from "./assets/projects/taskmanager.png";
import newsImg from "./assets/projects/news.png";
import resuMindImg from "./assets/projects/resumind.png"
import roastMyWebsiteImg from "./assets/projects/roastMyWebsiteImg.png"

import {FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SiMysql, SiCplusplus } from "react-icons/si";
import { Parallax } from "react-parallax";

export default function App() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">

    <Navbar/>

      {/* 🎇 Hero Section */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">

  {/* 🌌 Background Particles */}
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      },
      particles: {
        color: { value: "#a855f7" },
        links: { color: "#a855f7", distance: 150, enable: true, opacity: 0.4, width: 1 },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        number: { value: 50, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }}
    className="absolute top-0 left-0 w-full h-full"
  />


  {/* ✨ Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl">
    
    {/* 🏆 Name with Glow */}
    <motion.h1
      className="text-5xl md:text-7xl font-bold leading-tight"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hi, I’m 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 animate-pulse">
        {" "}Vishal Vashishth 
      </span>
    </motion.h1>

    {/* 📝 Subtitle */}
    <motion.p
      className="mt-6 text-lg md:text-2xl text-gray-300 max-w-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Crafting <span className="text-purple-400 font-semibold">modern, elegant</span> and 
      <span className="text-pink-400 font-semibold"> functional websites</span> with passion and precision.
    </motion.p>

    {/* ✅ Typing Effect */}
    <motion.div
      className="mt-4 text-xl md:text-2xl text-purple-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Typewriter
        words={['💻 Web Developer', '🧩 Problem Solver', '🚀 Tech Enthusiast']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </motion.div>

    {/* 🚀 Buttons */}
    <div className="mt-10 flex gap-6">
      <motion.a
        href="#about"
        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-medium shadow-lg transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 View My Work
      </motion.a>

      <motion.a
        href="#contact"
        className="px-6 py-3 border border-purple-400 hover:bg-purple-500 hover:text-white rounded-full text-purple-400 font-medium shadow-lg transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📩 Contact Me
      </motion.a>
    </div>
  </div>
</section>


      {/* 📝 About Me Section */}
<section id="about" className="relative z-10 py-24 px-6 md:px-20 bg-gray-900 overflow-hidden">


  <div className="max-w-5xl mx-auto relative z-10">
    <motion.h2
      className="text-4xl font-bold mb-12 text-purple-400 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      About Me
    </motion.h2>

    {/* 📦 Glassmorphic Card */}
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-12 text-center border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* 👤 Profile Photo with animated hover effect */}
<motion.div
  className="relative inline-block group"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* 🖼 Profile Image */}
  <motion.img
    src={portfolioimg}
    alt="Vishal Vashishth"
    className="w-40 h-40 mx-auto rounded-full border-4 border-purple-400 shadow-lg mb-6 
               group-hover:shadow-purple-500/80 group-hover:scale-110 
               group-hover:rotate-2 transition-all duration-500 ease-in-out"
    whileHover={{ rotate: 2, scale: 1.1 }}
  />
</motion.div>


      {/* 📜 Bio */}
      <motion.p
        className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hi! I’m <span className="text-purple-400 font-semibold">Vishal Vashishth</span>, 
        a <span className="text-purple-300 font-medium">Full-Stack Web Developer</span> passionate about 
        creating <span className="text-pink-400 font-semibold">modern, elegant</span> & 
        <span className="text-purple-300 font-semibold"> user-friendly</span> web apps.  
        With experience in <span className="text-purple-300">React, Node.js, MongoDB, Express.js</span>, 
        I bring ideas to life with clean code and creative design. 🚀
      </motion.p>

      {/* 🎯 Extra Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 text-center">
        <div className="p-4 bg-gray-700/40 rounded-xl">
          🎓 <span className="font-semibold text-purple-300">B.Tech CSE</span>
          <p className="text-sm mt-1">Computer Science Engineering</p>
        </div>
        <div className="p-4 bg-gray-700/40 rounded-xl">
          💻 <span className="font-semibold text-purple-300">3+ Year</span>
          <p className="text-sm mt-1">Hands-on Development</p>
        </div>
        <div className="p-4 bg-gray-700/40 rounded-xl">
          🌍 <span className="font-semibold text-purple-300">Open to Work</span>
          <p className="text-sm mt-1">Available for internships & projects</p>
        </div>
      </div>

      {/* 📥 Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href="/resume.pdf" download="Vishal_Vashishth_Resume.pdf" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-medium shadow-lg transition">
          📄 Download Resume
        </a>
        <a href="#contact" className="px-6 py-3 border border-purple-400 hover:bg-purple-500 hover:text-white rounded-full text-purple-400 font-medium shadow-lg transition">
          🤝 Let’s Connect
        </a>
      </div>
    </motion.div>
  </div>
</section>

💼 Experience Section
<section id="experience" className="relative z-10 py-20 px-6 md:px-20 bg-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-12 text-purple-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      💼 Experience & Internships
    </motion.h2>

    <div className="space-y-8">
      
      {/* 🏢 Internship 1 */}
      <motion.div
        className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-purple-300">
          Web Development Intern – Cantilever.in
        </h3>
        <p className="text-gray-300 mt-2">June 2024 – July 2024</p>
        <ul className="text-gray-400 mt-3 list-disc list-inside">
          <li>Developed a complete e-commerce frontend and admin dashboard</li>
          <li>Built responsive designs and integrated Firebase backend for a news site</li>
          <li>Worked with mentors to improve full-stack development skills</li>
        </ul>
      </motion.div>

      {/* 🏢 Internship 2 */}
      <motion.div
        className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-purple-300">
          Web Development Intern – Cantilever.in
        </h3>
        <p className="text-gray-300 mt-2">June 2025 – July 2025</p>
        <ul className="text-gray-400 mt-3 list-disc list-inside">
          <li>Developed <span className="text-purple-400 font-medium">BlogSite</span> – a fully functional blogging platform with CRUD features & authentication</li>
          <li>Built <span className="text-purple-400 font-medium">Task Manager</span> – a productivity tool with task sorting, filtering & JWT authentication</li>
          <li>Enhanced expertise in <span className="text-purple-400 font-medium">React, Node.js, MongoDB, Express</span> by working on real-world projects</li>
        </ul>
      </motion.div>

    </div>
  </div>
</section>

{/* 🏆 Achievements Section */}
<section id="achievements" className="relative z-10 py-20 px-6 md:px-20 bg-gray-900">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-12 text-purple-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      🏆 Achievements
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "🥉 Hackathon Winner", desc: "8th Place at HCL Guvi Hackathon Lucknow", icon: "🏆" },
        { title: "Projects", desc: "Built multiple full-stack web apps & personal projects", icon: "💻" },
        { title: "🛠 Training Program", desc: "Completed a 1-month full-stack Dev Training at Flikt Technology", icon: "🚀" }
      ].map((ach, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-5xl mb-3">{ach.icon}</div>
          <h3 className="text-xl font-semibold text-purple-300">{ach.title}</h3>
          <p className="text-gray-400 mt-2">{ach.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ⚡ Skills Section */}
<section id="skills" className="relative z-10 py-20 px-6 md:px-20 bg-gray-900">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-12 text-purple-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      ⚡ Skills & Technologies
    </motion.h2>

    {/* 🛠 Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },   // ✅ Added SQL
        { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> }, // ✅ Added C++
      ].map((skill, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/50 
                     transition transform hover:-translate-y-3 relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {/* ✨ Icon with hover spin */}
          <motion.div
            className="text-5xl mb-3 group-hover:animate-spin-slow transition-all duration-500"
          >
            {skill.icon}
          </motion.div>

          {/* 📛 Skill Name */}
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition">
            {skill.name}
          </h3>

          {/* 🌈 Glowing Ring Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-40 transition duration-500"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<Parallax
  bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"  // 🌄 Change this to a cool BG
  strength={400}
>
  <section id="projects" className="relative z-10 py-20 px-6 md:px-20 bg-black/70">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-purple-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 My Projects
      </motion.h2>

      {/* 📦 Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "BlogSite",
            img: blogsiteImg,
            desc: "A fully functional blog platform with authentication and CRUD features.",
            tech: ["React", "Next.js", "Node.js", "MongoDB","Express.js","JWT"],
            github: "https://github.com/vishalPandatt",
            live: "https://blog-site-silk-nine.vercel.app/"
          },
          {
            title: "E-Commerce App",
            img: ecommerceImg,
            desc: "An online store with cart, payment, and admin dashboard.",
            tech: ["React", "Express", "MongoDB","Node.js","JWT"],
            github: "https://github.com/vishalPandatt",
            live: "https://github.com/vishalPandatt/e_commerce_site"
          },
          {
            title: "RoastMyWebsite: Free AI Website Audit Tool",
            img: roastMyWebsiteImg,
            desc: "An AI-powered website auditor that analyses any URL in 30 seconds and gives a brutally honest report — SEO score, UX score, performance grade, specific issues with fixes, and an overall A–F rating. Built with Next.js and Gemini 2.5.",
            tech: ["Next.js", "React", "Gemini 2.5", "Google AI SDK"],
            github: "https://github.com/vishalPandatt",
            live: "https://roast-my-website-murex.vercel.app/"
          },
          {
            title: "Task Manager",
            img: taskManagerImg,
            desc: "A task management app with sorting, filtering, and JWT auth.",
            tech: ["React", "Node.js", "Express.js", "MongoDB","JWT"],
            github: "https://github.com/vishalPandatt",
            live: "https://tasktodourgently.netlify.app/"
          },
          {
            title: "News Website",
            img: newsImg,
            desc: "A Website which fetches real-time news and displays, with login and logout using Firebase.",
            tech: ["React", "Node.js", "Firebase"],
            github: "https://github.com/vishalPandatt",
            live: "https://github.com/vishalPandatt/Cantilever-News_platform"
          },
          {
            title: "ResuMind: AI-Powered Resume Analyzer",
            img: resuMindImg,
            desc: "A modern web application that helps job seekers optimize their resumes by providing an instant match score against any job description. It uses AI to give actionable feedback, including missing keywords and personalized suggestions.",
            tech: ["Next.js", "React", "Python", "Flask", "Gemini API", "Cloudinary"],
            github: "https://github.com/vishalPandatt",
            live: "https://resume-analyser-henna.vercel.app/"
          },

        ].map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/60 p-5 rounded-2xl shadow-lg border border-gray-700
                       hover:shadow-purple-500/50 transition transform hover:-translate-y-3 
                       backdrop-blur-md group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* 📸 Project Image with Zoom Effect */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* 📝 Title & Description */}
            <h3 className="text-2xl font-semibold text-purple-400">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.desc}</p>

            {/* 🏷 Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 🔗 Buttons with Glow */}
            <div className="flex justify-center gap-4 mt-5">
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white shadow-md hover:shadow-purple-400/40 transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white shadow-md hover:shadow-purple-400/40 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
</Parallax>



    {/* 📩 Contact Section */}
<section id="contact" className="relative z-10 py-16 px-6 md:px-20 bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-4 text-purple-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      📩 Contact Me
    </motion.h2>

    <motion.p
      className="text-gray-300 text-lg mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      Let’s connect! Whether you have a project, a question, or just want to say hi — I’d love to hear from you.
    </motion.p>

    {/* 📧 Email & Phone */}
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-lg mx-auto mb-8">
      <p className="text-gray-300 text-lg">
        📧 Email:{" "}
        <a
          href="vishal112vp@gmail.com?subject=Hello Vishal&body=I saw your portfolio and..."
          className="text-purple-400 hover:underline"
        >
          vishal112vp@gmail.com
        </a>
      </p>
      <p className="text-gray-300 text-lg mt-2">
        📞 Phone:{" "}
        <a
          href="tel:+918533833720"
          className="text-purple-400 hover:underline"
        >
          +91 8533833720
        </a>
      </p>
    </div>

    {/* 🌍 Social Links with Bounce Effect */}
    <div className="flex justify-center gap-8 mt-6 text-4xl">
      <motion.a
        href="https://github.com/vishalPandatt"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.2 }}
      >
        <FaGithub className="text-gray-300 hover:text-purple-400 transition" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/vishal-vashishth-b4920337b"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.2 }}
      >
        <FaLinkedin className="text-gray-300 hover:text-purple-400 transition" />
      </motion.a>
      <motion.a
        href="https://twitter.com/Vishal_VP_"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.2 }}
      >
        <FaTwitter className="text-gray-300 hover:text-purple-400 transition" />
      </motion.a>
    </div>
      {/* 📍 Location */}
      <p className="text-gray-300 text-lg mt-2">
        📍 Location: <span className="text-purple-400">Khandhari, Agra, India</span>
      </p>
  </div>
</section>


      <Footer/>

    </div>
  );
}
