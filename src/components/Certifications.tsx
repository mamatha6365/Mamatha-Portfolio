import React from 'react';
import { Award, Trophy, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            09 / Credentials & Participation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Recognized participation and coursework reflecting dedication to technical skill acquisition.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((item, idx) => {
            const isHackathon = item.organization.includes('Hackathon') || item.title.includes('Hackathon');

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-7 hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      {isHackathon ? (
                        <Trophy className="w-6 h-6 text-amber-400" />
                      ) : (
                        <ShieldCheck className="w-6 h-6 text-indigo-400" />
                      )}
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {item.type}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-indigo-400 mb-1">
                    {item.organization}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Student Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
