import React from 'react';
import {
  User,
  GraduationCap,
  Calendar,
  Code,
  Layers,
  Database,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            01 / Background & Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A developer who builds, learns, and is ready to grow in software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/40 dark:bg-slate-900/60 border border-slate-800/80 leading-relaxed text-slate-300 space-y-4">
              <p className="text-base sm:text-lg text-slate-200 font-medium">
                I am a final-year B.Tech student specializing in Computer Science and Engineering (Artificial Intelligence).
              </p>
              <p className="text-slate-400">
                My interest in software development grew through hands-on project work, where I learned how frontend interfaces, backend services, databases, and APIs work together to create complete applications.
              </p>
              <p className="text-slate-400">
                I enjoy solving programming problems, learning new technologies, and building practical web applications. Currently, I am strengthening my Java, React, backend, database, and problem-solving skills while preparing for software development opportunities.
              </p>
            </div>

            {/* Core Values / Working Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/60">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>Real Code over Fluff</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Belief in writing clean, readable code and understanding the underlying mechanics before adopting high-level abstractions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/60">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Consistent Learning</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Actively practicing Java OOP, algorithm patterns, and full-stack web architectures for technical interviews.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Developer Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  MK
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Developer Snapshot</h3>
                  <p className="text-xs font-mono text-indigo-400">candidate_spec.json</p>
                </div>
              </div>

              <div className="divide-y divide-slate-800/60 text-sm">
                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 flex items-center gap-2 text-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-500" /> Currently
                  </span>
                  <span className="text-slate-200 font-medium text-right text-xs">
                    Final-year B.Tech CSE (AI) Student
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 flex items-center gap-2 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> Expected Graduation
                  </span>
                  <span className="text-slate-200 font-medium text-right text-xs">
                    2027
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 flex items-center gap-2 text-xs">
                    <Layers className="w-3.5 h-3.5 text-slate-500" /> Primary Focus
                  </span>
                  <span className="text-slate-200 font-medium text-right text-xs">
                    Software Development & Full-Stack
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 flex items-center gap-2 text-xs">
                    <Code className="w-3.5 h-3.5 text-slate-500" /> Languages
                  </span>
                  <span className="text-indigo-300 font-mono text-right text-xs">
                    Java
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 flex items-center gap-2 text-xs">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" /> Frontend
                  </span>
                  <span className="text-indigo-300 font-mono text-right text-xs">
                    HTML, CSS, JavaScript, React
                  </span>
                </div>

                <div className="py-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 flex items-center gap-2 text-xs">
                    <Database className="w-3.5 h-3.5 text-slate-500" /> Database
                  </span>
                  <span className="text-indigo-300 font-mono text-right text-xs">
                    MySQL
                  </span>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Availability</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Internships & Placements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
