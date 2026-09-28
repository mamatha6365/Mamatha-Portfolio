import React from 'react';
import { GraduationCap, Award, Calendar, School, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            02 / Academic Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Consistent academic trajectory with strong mathematical and computer science foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-10">
          {educationData.map((item, index) => {
            const isLatest = index === 0;
            return (
              <div key={item.degree} className="relative pl-6 md:pl-10 group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    isLatest
                      ? 'bg-indigo-600 border-indigo-400 ring-4 ring-indigo-500/20'
                      : 'bg-slate-900 border-slate-700 group-hover:border-indigo-400'
                  }`}
                />

                {/* Card Container */}
                <div className="rounded-xl border border-slate-800/90 bg-slate-900/40 hover:bg-slate-900/70 p-6 transition-all hover:border-slate-700 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-800/70">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                        <School className="w-3.5 h-3.5" />
                        <span>{item.institution}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-1">
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-sm">
                        <Award className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.score}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="text-xs text-slate-400 font-mono">
                      Category: <span className="text-slate-300">{item.scoreType}</span>
                    </div>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-2">
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
