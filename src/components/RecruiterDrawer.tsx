import React from 'react';
import {
  X,
  Briefcase,
  CheckCircle2,
  FileText,
  Mail,
  Github,
  GraduationCap,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { personalInfo, projectsData, internshipsData } from '../data/portfolioData';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-slate-900 border-l border-slate-700 h-full overflow-y-auto p-6 sm:p-7 shadow-2xl flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Recruiter 15-Sec Scan
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  Quick Candidate Assessment
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Candidate Summary */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-lg font-bold text-white">{personalInfo.name}</div>
            <div className="text-xs text-indigo-400 font-mono font-medium">
              Final-year B.Tech CSE (AI) · Class of 2027
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              Solid software engineering foundations with hands-on full-stack development, Java OOP, and REST APIs.
            </p>
          </div>

          {/* Key Facts */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Candidate Highlights
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Academics:</strong> 75% B.Tech CSE (AI), 93% Intermediate, 100% SSC.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Core Skills:</strong> Java, HTML, CSS, JavaScript, React, MySQL, Git.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Currently Learning:</strong> Backend Development, Node.js, REST APIs, MongoDB, DSA.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Experience:</strong> 2 Web Development Internships (Data Alcott Systems, SkillDzire).
                </span>
              </div>
            </div>
          </div>

          {/* Top Projects */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Verified Projects
            </h4>
            <div className="space-y-2">
              {projectsData.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{p.name}</span>
                    <span className="text-[10px] font-mono text-indigo-400">{p.type}</span>
                  </div>
                  <p className="text-slate-400 line-clamp-2 text-[11px]">
                    {p.description}
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Github className="w-3 h-3" /> Project Code
                    </a>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
                      >
                        <ExternalLink className="w-3 h-3" /> {p.id === 'stylehub' ? 'Deployed Backend' : 'Live Demo'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quick Action CTAs */}
        <div className="space-y-2 pt-4 border-t border-slate-800">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Open Standard Resume (ATS)</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Invitation%20for%20Mamatha%20Kuruva`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Schedule Interview / Reach Out</span>
          </a>
        </div>
      </div>
    </div>
  );
};
