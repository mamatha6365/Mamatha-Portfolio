import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink,
} from 'lucide-react';
import { personalInfo, educationData, internshipsData, projectsData, skillCategories, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
MAMATHA KURUVA
B.Tech CSE (AI) Student | Aspiring Software Developer
Email: ${personalInfo.email}
GitHub: ${personalInfo.github}
Location: ${personalInfo.location}

OBJECTIVE
${personalInfo.shortIntro}

EDUCATION
1. B.Tech in Computer Science & Engineering (Artificial Intelligence)
   St. Johns College of Engineering and Science | 2023 - 2027
   Score: 75%

2. Intermediate (MPC)
   Narayana Junior College | 2021 - 2023
   Score: 93%

3. Secondary School Certificate (SSC)
   Sri Chaitanya School | 2020 - 2021
   Score: 100% (10/10 GPA)

TECHNICAL SKILLS
- Programming: Java
- Frontend: HTML, CSS, JavaScript, React
- Database: MySQL
- Tools: Git, GitHub, VS Code

CURRENTLY LEARNING / IMPROVING
- Backend Development, Node.js, REST APIs, MongoDB, Data Structures and Algorithms

INTERNSHIP EXPERIENCE
1. Data Alcott Systems - Web Development Intern (1 Month)
   - Practical web development, responsive design, and frontend implementation.
   - Projects: FreshFood, StyleHub.

2. SkillDzire - Web Development Intern (2 Months)
   - Frontend development, responsive layouts, web technologies, and practical project assignments.

FEATURED PROJECTS
1. StyleHub (Full-Stack Fashion Application)
   - Technologies: React, Node.js, Express.js, MongoDB, REST APIs, HTML, CSS, JavaScript
   - Product browsing, cart management, user authentication interface, orders, backend REST service.
   - GitHub: ${projectsData[0].githubUrl}
   - Deployed Backend: ${projectsData[0].liveUrl}

2. FreshFood (Food Ordering Web Application)
   - Technologies: HTML, CSS, JavaScript
   - Restaurant browsing, interactive menu, dynamic cart management, and price calculation.
   - GitHub: ${projectsData[1].githubUrl}
   - Live Demo: ${projectsData[1].liveUrl}

CERTIFICATIONS & ACHIEVEMENTS
- Quantum Wiser: Certificate of Web & Technology Training
- Smart India Hackathon: Participant
`.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Controls (Not printed) */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-300">
              Resume Preview · Standard ATS Software Engineering Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy plain text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors ml-2 cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="printable-resume overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-200 text-xs sm:text-sm font-sans space-y-6">
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-700/80 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              Mamatha Kuruva
            </h1>
            <p className="text-xs sm:text-sm text-indigo-400 font-mono font-medium">
              B.Tech CSE (AI) Student · Aspiring Software Developer · Full-Stack Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono pt-1">
              <span>{personalInfo.email}</span>
              <span>·</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-300 hover:underline"
              >
                github.com/mamatha6365
              </a>
              <span>·</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-300">
              {personalInfo.shortIntro}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                  <div>
                    <div className="font-bold text-white">{edu.degree}</div>
                    <div className="text-slate-400">{edu.institution}</div>
                  </div>
                  <div className="sm:text-right font-mono text-[11px]">
                    <div className="text-indigo-300 font-semibold">{edu.score} ({edu.scoreType})</div>
                    <div className="text-slate-500">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-semibold text-white">Programming: </span>
                <span className="text-slate-300 font-mono">Java</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend: </span>
                <span className="text-slate-300 font-mono">HTML, CSS, JavaScript, React</span>
              </div>
              <div>
                <span className="font-semibold text-white">Database: </span>
                <span className="text-slate-300 font-mono">MySQL</span>
              </div>
              <div>
                <span className="font-semibold text-white">Tools: </span>
                <span className="text-slate-300 font-mono">Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Currently Learning / Improving */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 border-b border-slate-800">
              Currently Learning / Improving
            </h2>
            <p className="text-xs text-slate-300 font-mono">
              Backend Development, Node.js, REST APIs, MongoDB, Data Structures and Algorithms
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white">
                    <span>
                      {project.name} – {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-indigo-300 font-normal">
                      [{project.technologies.slice(0, 5).join(', ')}]
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-slate-400 pt-0.5">
                    <span>Code: {project.githubUrl}</span>
                    {project.liveUrl && (
                      <span>
                        {project.id === 'stylehub' ? 'Deployed Backend' : 'Live Demo'}: {project.liveUrl}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800">
              Internship Experience
            </h2>
            <div className="space-y-3">
              {internshipsData.map((item) => (
                <div key={item.company} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white">
                      {item.role} · {item.company}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Duration: {item.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-xs">
                    {item.description.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800">
              Certifications & Hackathons
            </h2>
            <div className="space-y-1.5 text-xs">
              {certificationsData.map((cert, cIdx) => (
                <div key={cIdx} className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold text-white">{cert.title}</span> –{' '}
                    <span className="text-slate-400">{cert.organization}</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400">{cert.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
