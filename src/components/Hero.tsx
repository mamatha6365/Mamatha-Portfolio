import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Code2,
  Terminal,
  Sparkles,
  Layers,
  Database,
  ExternalLink,
  CheckCircle2,
  Copy,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'java' | 'fullstack'>('java');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const javaSnippet = `// Mamatha Kuruva - Software Developer Candidate
public class CandidateProfile {
    public static void main(String[] args) {
        String name = "Mamatha Kuruva";
        String degree = "B.Tech CSE (AI) - 2027";
        String[] coreSkills = {"Java", "React", "JavaScript", "MySQL"};

        boolean readyToBuild = true;
        System.out.println("Status: Prepared for Software Engineering Roles!");
    }
}`;

  const fullstackSnippet = `// StyleHub Full-Stack Architecture
const candidate = {
  name: "Mamatha Kuruva",
  role: "Full-Stack Web Developer",
  focus: ["Responsive UI", "REST Endpoints", "Database Models"],
  projects: ["FreshFood (Client)", "StyleHub (MERN Stack)"],
  isSeekingRole: true
};

export default candidate;`;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-800/40"
    >
      {/* Background ambient grid and glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-600/10 blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 dark:text-indigo-300 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Final-Year B.Tech CSE (AI) · Open to Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Mamatha <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">Kuruva</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                Aspiring Software Developer | B.Tech CSE (AI)
              </p>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Quick scanning highlights for recruiters */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Class of 2027</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Java Programming</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>React & Web Development</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>2 Practical Internships</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/25 hover:translate-y-[-1px] active:translate-y-[0px]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 dark:text-slate-200 bg-slate-800 hover:bg-slate-700/90 border border-slate-700/80 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-700/40 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links & Direct Contacts */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/mamatha6365</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal / Code Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-800 bg-slate-950/80 dark:bg-slate-950/90 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">mamatha@workspace:~</span>
                </div>

                {/* Snippet selector tabs */}
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-md border border-slate-800/80">
                  <button
                    onClick={() => setActiveSnippetTab('java')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeSnippetTab === 'java'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Main.java
                  </button>
                  <button
                    onClick={() => setActiveSnippetTab('fullstack')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeSnippetTab === 'fullstack'
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    stack.config.ts
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-xs leading-relaxed overflow-x-auto text-slate-300">
                <pre className="whitespace-pre">
                  <code>
                    {activeSnippetTab === 'java' ? javaSnippet : fullstackSnippet}
                  </code>
                </pre>
              </div>

              {/* Terminal Execution / Output Bar */}
              <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">●</span>
                  <span>Build: Passed (JDK 21 / Node 20)</span>
                </div>
                <div className="text-slate-500">UTF-8</div>
              </div>
            </div>

            {/* Quick metrics row underneath terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-lg font-bold text-indigo-400">75%</div>
                <div className="text-[11px] text-slate-400 font-medium">B.Tech CSE (AI)</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-lg font-bold text-cyan-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">SSC Score</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-lg font-bold text-emerald-400">2</div>
                <div className="text-[11px] text-slate-400 font-medium">Live Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
