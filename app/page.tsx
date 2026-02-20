"use client"
import react, { useState } from 'react';
import {Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Cpu, FileText} from 'lucide-react';
import { DiPython, DiReact } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiOpencv, SiPandas, SiTailwindcss, SiGithub } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Zero Interface Gesture AIR Tic-Tac-Toe",
    description: "A touchless gaming experience using computer science vison, Built with python libraries, Html, Javascript, CSS to tracks finger movements via webcam to play Tic-Tac-Toe with 95% accuracy on browser.",
    tech: ["Python", "OpenCV", "Html", "CSS", "Javascript"],
    link: "https://github.com/pe-gif/AIR-TIC-TAC-TOE",
  },
  {
    id: 2,
    title: "AI-Powered Code Review Bot",
    description: "A GitHub bot that uses OpenAI's GPT-4 to automatically review pull requests, providing feedback on code quality, style, and potential bugs. Built with Python, GitHub API, and OpenAI API.",
    tech: ["Python", "GitHub API", "OpenAI API"],
    link: ""
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    tech: ["Next.js", "Tailwind CSS"],
    link: ""
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "A interactive dashboard for visualizing complex datasets using React and D3.js.",
    tech: ["React", "D3.js"],
    link: ""
  },
  {
    id: 5,
    title: "Machine Learning Model Deployment",
    description: "A streamlined process for deploying machine learning models into production environments, ensuring scalability and performance.",
    tech: ["Python", "Docker", "Kubernetes"],
    link: ""
  },
  {
    id: 6,
    title: "Automated Testing Framework",
    description: "A comprehensive testing framework that integrates with CI/CD pipelines to automate unit, integration, and end-to-end testing.",
    tech: ["Python", "Selenium", "Jenkins"],
    link: ""
  }
]

export default function App() {
  return(
    <div className="min-h-screen bg-slate-100 text-slate-50 font-Helvetica selection:bg-blue-500/30">
      
      <nav className="fixed w-full bg-blue-300 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="w-full mx-auto px-6 py-4 flex">
          <div className="ml-auto flex gap-4">
            <a href="#projects" className="text-sm hover:text-slate-700 transition-colors">Projects</a>
            <a href="#resume" className="text-sm hover:text-slate-700 transition-colors">Resume</a>
            <a href="#skills" className="text-sm hover:text-slate-700 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

       <main className="w-full mx-auto pt-32 pb-20">
        <section className="py-20 px-25 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="md:text-8xl font-extrabold tracking-tight text-slate-700 mb-6">
                Peter Nguyen <br className="hidden md:block"/>
              </h1>
              <p className="text-lg md:text-xl py-10 text-slate-400 max-w-5xl leading-relaxed">
                I'm Peter, a Software Engineer specializing in Python automation, AI integrations, and modern web development. I turn heavy manual processes into fast, scalable code.
              </p>
              <div className=" flex flex-col sm:flex-row gap-4 ">
                <button
                  className="px-6 py-3 bg-blue-300 hover:bg-slate-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 border border-slate-700">
                  <Mail size={16} />
                </button>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-300 hover:bg-slate-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 border border-slate-700">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-300 hover:bg-slate-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 border border-slate-700">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center w-full">
              <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden border-4 border-slate-200">
                <img 
                  src="/me.jpg" 
                  alt="Peter Nguyen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </section>

        <section id="projects" className="w-full py-20 bg-slate-700 border-t border-slate-800/50">
          <h2 className="text-3xl px-25 font-bold text-white mb-10 flex items-center gap-2">
            <Code2 className="text-blue-300" /> Featured Work
          </h2>

          <p className="text-slate-500 text-sm mb-10 italic px-25">
            * Note: These projects are currently placeholders while I build out my full portfolio.
          </p>

          <div className="grid px-25 grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <div key={project.id} className="group bg-slate-100 border border-slate-800 hover:border-blue-300 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-700 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="py-20 border-t border-slate-800/50">
          <h2 className="text-3xl px-25 font-bold text-slate-700 mb-10 flex items-center gap-2">
            <FileText className="text-slate-700" /> Resume
          </h2>

          <div className="flex-1 flex justify-center w-full">
                <object data="blank.pdf" type="application/pdf" width="100%" height="600px"></object>
            </div>

        </section>

        <section id="skills" className="py-20 bg-slate-700 border-t border-slate-800/50">
          <h2 className="text-3xl px-25 font-bold text-white mb-10 flex items-center gap-2">
            <Cpu className="text-blue-300" /> Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-2 px-25 md:grid-cols-4 gap-4">
            {[{ name: 'Python', Icon: DiPython, color: 'text-blue-400' },
              { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600' },
              { name: 'React', Icon: DiReact, color: 'text-cyan-400' },
              { name: 'Next.js', Icon: SiNextdotjs, color: 'text-white' },
              { name: 'OpenCV', Icon: SiOpencv, color: 'text-green-500' },
              { name: 'Pandas', Icon: SiPandas, color: 'text-indigo-400' },
              { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-teal-400' },
              { name: 'Git/GitHub', Icon: SiGithub, color: 'text-slate-300' }].map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 p-4 bg-white border border-slate-800 rounded-lg">
                <skill.Icon size={20} className="text-slate-700" />
                <span className="font-medium text-slate-700 font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        

      </main>

    </div>)
}