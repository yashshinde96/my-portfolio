import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert("Thanks for reaching out! I'll reply soon.");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const skills = [
    { name: "Python", color: "from-sky-400 to-blue-500" },
    { name: "HTML/CSS", color: "from-blue-400 to-sky-500" },
    { name: "JavaScript", color: "from-sky-300 to-blue-400" },
    { name: "React", color: "from-blue-500 to-sky-600" },
    { name: "Git", color: "from-sky-400 to-blue-500" },
    { name: "MySQL", color: "from-blue-400 to-sky-500" },
    { name: "Tailwind CSS", color: "from-sky-300 to-blue-400" },
  ];

  const projects = [
    {
      title: "Supply Chain Transparency Using Blockchain",
      date: "Jan 2025 - Present",
      desc: "Building a decentralized application to track and verify supply chain processes using blockchain technology. Ensures transparency, traceability, and security in product movement.",
      gradient: "from-sky-400 to-blue-500",
      icon: "🔗"
    },
    {
      title: "AI Driven Disease Diagnosis",
      date: "Feb 2025 - Present",
      desc: "Developing an intelligent system using Machine Learning and Deep Learning to diagnose diseases based on medical data and symptoms with high accuracy.",
      gradient: "from-blue-400 to-sky-500",
      icon: "🩺"
    },
    {
      title: "Rock Paper Scissor Game",
      desc: "Interactive game with AI opponent. Built with JavaScript and modern UI. Features score tracking and smooth animations.",
      gradient: "from-sky-300 to-blue-400",
      icon: "✊"
    },
    {
      title: "Calculator App",
      desc: "Supports basic arithmetic operations. Responsive and user-friendly design. Lightweight and efficient performance.",
      gradient: "from-blue-500 to-sky-600",
      icon: "🧮"
    },
    {
      title: "Personal Portfolio",
      desc: "Interactive UI with animations. Fully responsive for all devices. Features a dynamic project showcase.",
      gradient: "from-sky-400 to-blue-500",
      icon: "💼"
    }
  ];

  const certifications = [
    { title: "4 Times University Ranker", org: "Achieved rank in 2nd sem, 3rd sem, 4th sem, 5th sem and 11th rank in 4th semester under VTU", color: "from-sky-400 to-blue-500" },
    { title: "Full-Stack Python Development", org: "XCEL CORP (USA)", color: "from-blue-400 to-sky-500" },
    { title: "Deloitte - Technology Job Simulation", org: "Deloitte", color: "from-sky-300 to-blue-400" },
    { title: "NEXORA", org: "Jain College Of Engineering, Machhe", color: "from-blue-500 to-sky-600" },
    { title: "TCS iON Career Edge - Young Professional", org: "TCS", color: "from-sky-400 to-blue-500" },
    { title: "HACK-O-MANIA", org: "VSM Institute of Technology", color: "from-blue-400 to-sky-500" },
    { title: "Python Programming Internship", org: "InternPe", color: "from-sky-300 to-blue-400" },
    { title: "Prompt Engineering", org: "Simplilearn", color: "from-blue-500 to-sky-600" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-sky-50 to-blue-50 text-gray-800 font-sans">
      {/* ===== Navbar ===== */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Yash Shinde
          </h1>
          <div className="space-x-6 hidden md:flex text-sm">
            {["About", "Experience", "Journey", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-sky-600 transition-all duration-300 hover:scale-110 inline-block font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-100/50 to-gray-100/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in text-gray-800">
            Hi, I'm <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent animate-gradient">Yash Shinde</span>.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 animate-fade-in-delay">
            I'm a <span className="font-semibold text-sky-600">Final-Year AIML Student</span>
          </p>
          <a
            href="#about"
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-sky-500/50 transition-all transform hover:scale-110 inline-block font-semibold"
          >
            Explore My Journey ✨
          </a>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-24 px-6 relative bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl shadow-sky-500/30 ring-4 ring-sky-400/50">
                <img 
                  src="yash.jpg" 
                  alt="Yash Shinde" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <p>
                I am a final-year Artificial Intelligence and Machine Learning (AIML) student with an aggregate <span className="text-sky-600 font-bold">CGPA of 8.93</span> till the 6th semester. I am proficient in core technologies like Python, SQL, and possess additional experience in frontend development using HTML, CSS, and JavaScript gained through project work.
              </p>
              <p>
                I have a demonstrated ability to solve problems, build applications, and quickly adapt to evolving technologies through academic and simulated projects. I am passionate about <span className="text-blue-600 font-semibold">innovation</span>, eager to learn and improve, and motivated to contribute my technical foundation to challenging, real-world technology challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Work Experience Section ===== */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Work Experience
          </h3>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-200">
              <h4 className="text-3xl font-semibold text-sky-600 mb-3">Full-Stack Python Development</h4>
              <p className="text-blue-600 mb-4 text-lg font-medium">XCEL CORP (USA) | July 2025</p>
              <p className="text-gray-600 text-lg">
                Working on full-stack development projects using Python, building scalable web applications and implementing both frontend and backend solutions with modern frameworks and technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-200">
              <h4 className="text-3xl font-semibold text-blue-600 mb-3">Python Programming Intern (Remote)</h4>
              <p className="text-sky-600 mb-4 text-lg font-medium">InternPe | Aug 2025</p>
              <p className="text-gray-600 text-lg">
                Completed a 1-month remote internship in Python programming, working on real-world projects that enhanced coding, debugging, and optimization skills. Gained exposure to coding standards, problem-solving, and collaborative development, while being recognized for professionalism in an online environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== My Journey Section ===== */}
      <section id="journey" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            My Journey
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-sky-500 pl-8 bg-sky-50 p-6 rounded-r-2xl hover:bg-sky-100 transition-all shadow-md">
              <h4 className="text-3xl font-semibold text-sky-600 mb-3">🎓 B.E in AI & ML Engineering</h4>
              <p className="text-gray-600 mb-2 text-lg">VSM Institute of Technology | Aug 2022 - Present</p>
              <p className="text-blue-600 font-bold text-xl">CGPA: 8.93 (Till 6th Sem)</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-8 bg-blue-50 p-6 rounded-r-2xl hover:bg-blue-100 transition-all shadow-md">
              <h4 className="text-3xl font-semibold text-blue-600 mb-3">📚 12th/PUC</h4>
              <p className="text-gray-600 mb-2 text-lg">Basavaprabhu Kore PU College, Chikodi | Nov 2020 - Jun 2022</p>
              <p className="text-sky-600 font-bold text-xl">Percentage: 83.52%</p>
            </div>
            <div className="border-l-4 border-sky-600 pl-8 bg-sky-50 p-6 rounded-r-2xl hover:bg-sky-100 transition-all shadow-md">
              <h4 className="text-3xl font-semibold text-sky-700 mb-3">🏫 10th Grade</h4>
              <p className="text-gray-600 mb-2 text-lg">CK High School, Examba | Jun 2017 - Aug 2020</p>
              <p className="text-blue-600 font-bold text-xl">Percentage: 83.5%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Technical Skills Section ===== */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className={`bg-gradient-to-br ${skill.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 hover:rotate-3`}>
                <span className="font-bold text-2xl text-white drop-shadow-lg block text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            My Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-1 border border-gray-200"
              >
                <div className={`text-6xl mb-4 bg-gradient-to-br ${proj.gradient} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
                  {proj.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3 text-sky-700">
                  {proj.title}
                </h4>
                {proj.date && <p className="text-sm text-blue-600 mb-3 font-semibold">{proj.date}</p>}
                <p className="text-gray-600">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Certifications Section ===== */}
      <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Certifications & Achievements 🏆
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${cert.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:rotate-1`}
              >
                <h4 className="text-xl font-bold mb-2 text-white drop-shadow-lg">
                  {cert.title}
                </h4>
                <p className="text-white/95 text-sm font-medium">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch 💬
          </h3>
          <p className="text-gray-600 mb-12 text-xl">
            Have a question or want to work together? Feel free to leave me a message below!
          </p>

          <div className="grid gap-6 text-left bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-2xl">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-gray-800 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800 placeholder-gray-500"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-gray-800 placeholder-gray-500"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-5 rounded-xl hover:shadow-2xl hover:shadow-sky-500/50 transition-all transform hover:scale-105 font-bold text-lg"
            >
              Send Message ✉️
            </button>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 bg-gradient-to-r from-gray-100 to-sky-100 text-gray-700 text-center border-t border-gray-300">
        <p className="text-lg mb-2">© {new Date().getFullYear()} <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent font-bold">Yash Shinde</span> — All Rights Reserved.</p>
        <p className="text-sm text-gray-600">AIML Engineering Student | VSM Institute of Technology</p>
      </footer>
    </div>
  );
}
