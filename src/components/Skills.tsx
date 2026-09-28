import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming':
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Frontend':
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Database':
      case 'Database Management':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Tools':
      case 'Development Tools & VCS':
        return <GitBranch className="w-5 h-5 text-violet-400" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getSkillContext = (skill: string) => {
    switch (skill) {
      case 'Java':
        return 'Core language for OOP, inheritance, overloading/overriding, searching & arrays';
      case 'React':
        return 'Component-driven UI, state management, props, and modular component design';
      case 'JavaScript':
        return 'DOM manipulation, async/await, ES6+, event-driven client logic';
      case 'HTML':
        return 'Semantic page structuring, accessibility, SEO best practices';
      case 'CSS':
        return 'Responsive layouts with Flexbox, CSS Grid, and custom stylesheets';
      case 'MySQL':
        return 'Relational database fundamentals, SQL queries, table relations';
      case 'Git':
        return 'Branching, staging, committing, and collaborative version tracking';
      case 'GitHub':
        return 'Remote repository hosting, PRs, version history, and project deployment';
      case 'VS Code':
        return 'Primary code editor, extensions, integrated debugging, and terminal';
      default:
        return 'Practical application in academic and personal projects';
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            03 / Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Established core competencies grounded in coursework, daily programming practice, and hands-on projects.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <span>●</span>
            <span>
              Core Skills separated from In-Progress topics. (Node.js, REST APIs, and MongoDB are in <strong>Currently Learning</strong> below).
            </span>
          </div>
        </div>

        {/* Categories Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const isHovered = selectedCategory === category.name;
            return (
              <div
                key={category.name}
                onMouseEnter={() => setSelectedCategory(category.name)}
                onMouseLeave={() => setSelectedCategory(null)}
                className={`rounded-xl border p-6 transition-all duration-200 ${
                  isHovered
                    ? 'border-indigo-500/60 bg-slate-900/80 shadow-lg shadow-indigo-500/5'
                    : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skill List items with context notes */}
                <div className="mt-4 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/60 hover:border-indigo-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200 font-mono">
                          {skill}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">Verified in projects</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400 leading-snug">
                        {getSkillContext(skill)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
