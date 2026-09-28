import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2, Code2 } from 'lucide-react';
import { internshipsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            05 / Professional Exposure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Hands-on internships focused on practical web engineering, responsive user interfaces, and modular application development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internshipsData.map((internship, index) => (
            <div
              key={internship.company}
              className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-6 sm:p-7 hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{internship.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {internship.role}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium shrink-0">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    <span>{internship.duration}</span>
                  </span>
                </div>

                {/* Description bullet points */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Practical Scope & Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {internship.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Associated Projects if any */}
                {internship.projectsAssociated && (
                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-mono text-slate-400 block mb-2">
                      Projects Developed During Internship:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {internship.projectsAssociated.map((proj) => (
                        <span
                          key={proj}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-indigo-300 border border-indigo-500/20"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Skills applied */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {internship.skillsApplied.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-slate-400 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
