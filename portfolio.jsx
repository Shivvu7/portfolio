import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center bg-gray-800">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        <p className="text-lg mt-2">I'm a passionate developer building amazing web experiences.</p>
      </header>

      {/* About Section */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Hi! I'm a software developer with expertise in frontend and backend development.
          I love solving problems and building scalable applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Chatbot Application</h3>
            <p>Developed an AI-powered chatbot for automated responses.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Smart Garbage Bin</h3>
            <p>IoT-based project for automated waste management.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          <span className="bg-blue-600 p-2 rounded">React</span>
          <span className="bg-blue-600 p-2 rounded">JavaScript</span>
          <span className="bg-blue-600 p-2 rounded">Python</span>
          <span className="bg-blue-600 p-2 rounded">Machine Learning</span>
          <span className="bg-blue-600 p-2 rounded">Cloud Computing</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">Email: <a href="mailto:sivasaisariki@gmail.com" className="text-blue-400">sivasaisariki@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-900">
        <p>&copy; 2025 Sivasai Sariki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
