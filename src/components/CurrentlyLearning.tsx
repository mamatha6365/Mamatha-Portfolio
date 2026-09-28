import React from 'react';
import { Sparkles, TrendingUp, Compass, ArrowRight } from 'lucide-react';
import { currentlyLearningData } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="currently-learning" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            08 / Continuous Growth & Readiness
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Currently Learning & Improving
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Software engineering is an ongoing pursuit. Here are the core areas I am actively leveling up each week through code practice, tutorials, and practical projects.
          </p>
        </div>

        {/* Growth Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyLearningData.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-slate-900/50 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
                  <span>{item.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {item.topic}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Active Track</span>
                <span className="text-emerald-400 font-medium">Daily Cadence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
