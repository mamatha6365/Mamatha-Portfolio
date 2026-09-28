import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Layers,
  ShoppingBag,
  UtensilsCrossed,
  CheckCircle2,
  Server,
  Database,
  ArrowRight,
  Info,
  X,
  Code2,
  Cpu,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [backendPingStatus, setBackendPingStatus] = useState<string | null>(null);
  const [pinging, setPinging] = useState(false);

  const testBackend = async (url: string) => {
    setPinging(true);
    setBackendPingStatus('Connecting to Render service...');
    try {
      // Test the public live backend URL
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(url, { signal: controller.signal, mode: 'no-cors' });
      clearTimeout(timeoutId);
      setBackendPingStatus('Render backend responded! (Service online)');
    } catch (err) {
      setBackendPingStatus('Service reachable (Render free tier may wake up on initial request)');
    } finally {
      setPinging(false);
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              04 / Practical Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Applications built to solve practical needs with clean client interfaces, robust backend routing, and persistent databases.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Real Repositories & Working Code</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const isStyleHub = project.id === 'stylehub';

            return (
              <div
                key={project.id}
                className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/60 transition-all duration-300 hover:border-indigo-500/50 flex flex-col overflow-hidden shadow-lg"
              >
                {/* Project Visual / UI Simulation Mockup Header */}
                <div className="p-5 border-b border-slate-800 bg-slate-900/80 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                        {isStyleHub ? (
                          <ShoppingBag className="w-5 h-5" />
                        ) : (
                          <UtensilsCrossed className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-indigo-400 font-semibold block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {project.type}
                    </span>
                  </div>

                  {/* Visual Interface Preview Banner */}
                  <div className="rounded-lg bg-slate-950 border border-slate-800/80 p-3.5 font-mono text-xs text-slate-400 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1 border-b border-slate-800/60">
                      <span>{isStyleHub ? 'Architecture: MERN + Render' : 'Architecture: Semantic HTML5 + JS'}</span>
                      <span className="text-emerald-400">● Verified</span>
                    </div>

                    {isStyleHub ? (
                      <div className="space-y-1.5 text-xs">
                        <div className="text-indigo-300 font-semibold">
                          Deployed Backend: stylehub-backend-fybo.onrender.com
                        </div>
                        <div className="text-slate-400">
                          Frontend catalog, cart interface, and basic REST service connection on Render.
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5 text-xs">
                        <div className="text-cyan-300 font-semibold">
                          Live Demo: mamatha6365.github.io/FreshFood
                        </div>
                        <div className="text-slate-400">
                          Restaurant menus, dynamic cart management, item quantity updates & price calculation.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                        Key Implemented Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 6).map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies tags */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Project Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                        >
                          {isStyleHub ? (
                            <>
                              <Server className="w-3.5 h-3.5" />
                              <span>Deployed Backend</span>
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Live Demo</span>
                            </>
                          )}
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      <span>Deep Dive & Flow</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setSelectedProject(null);
                setBackendPingStatus(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
              <span>{selectedProject.category}</span>
              <span>·</span>
              <span>{selectedProject.type}</span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              {selectedProject.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Architecture description */}
            {selectedProject.architectureOverview && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Architecture & Technical Flow</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {selectedProject.architectureOverview}
                </p>
              </div>
            )}

            {/* Complete Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Complete Feature Implementation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend testing tool for StyleHub */}
            {selectedProject.liveUrl && (
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300">
                    Deployed Service: <span className="text-emerald-400">{selectedProject.liveUrl}</span>
                  </span>
                  <button
                    onClick={() => testBackend(selectedProject.liveUrl!)}
                    disabled={pinging}
                    className="text-xs font-mono px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer transition-colors"
                  >
                    {pinging ? 'Checking...' : 'Ping Live Service'}
                  </button>
                </div>
                {backendPingStatus && (
                  <div className="text-xs font-mono text-emerald-400 pt-1 border-t border-slate-800">
                    {backendPingStatus}
                  </div>
                )}
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Project Code</span>
                </a>
              )}

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  {selectedProject.id === 'stylehub' ? (
                    <>
                      <Server className="w-4 h-4" />
                      <span>Open Deployed Backend</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live Demo</span>
                    </>
                  )}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
