import react, { useState } from 'react';
import {Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Cpu, ChevronRight } from 'lucide-react';

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
    title: "Zero Interface Gesture AIR Tic-Tac-Toe"
    description: "A touchless gaming experience using computer science vison, Built with python libraries, Html, Javascript, CSS to tracks finger movements via webcam to play Tic-Tac-Toe with 95% accuracy on browser."
    tech: ["Python", "OpenCV", "Html", "CSS", "Javascript"]
    link: "#https://github.com/pe-gif/AIR-TIC-TAC-TOE"
  }
]

export default function App() {
  <div className="min-h-screen bg-slate-100 text-slate-950 font-Helvetica selection:bg-blue-500/30">
    
    <nav className="">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">pe-gif<span className="text-emerald-400">.dev</span></span>
          <div className="flex gap-4">
            <a href="#projects" className="text-sm hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="text-sm hover:text-emerald-400 transition-colors">Skills</a>          
          </div>
        </div>
      </nav>
  
  </div>
}
