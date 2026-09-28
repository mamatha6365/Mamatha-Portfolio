import React from 'react';
import { Layout, Server, Database, Layers, ArrowUpRight } from 'lucide-react';
import { whatICanBuildData } from '../data/portfolioData';

export const WhatICanBuild: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'database':
        return <Database className="w-6 h-6 text-amber-400" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="what-i-build" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            07 / Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Can Build
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Core deliverables and development layers I actively construct for modern software environments.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatICanBuildData.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-6 hover:bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
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
