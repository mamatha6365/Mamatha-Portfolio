import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Play,
  CheckCircle,
  Copy,
  Check,
  BookOpen,
  Cpu,
  Layers,
} from 'lucide-react';
import { codeTopicsData } from '../data/portfolioData';

export const CodingJourney: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(codeTopicsData[0].id);
  const [copied, setCopied] = useState(false);
  const [simulatedRunning, setSimulatedRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);

  const activeTopic =
    codeTopicsData.find((t) => t.id === activeTopicId) || codeTopicsData[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTopic.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setSimulatedRunning(true);
    setConsoleOutput(null);

    setTimeout(() => {
      setSimulatedRunning(false);
      switch (activeTopic.id) {
        case 'oop-inheritance':
          setConsoleOutput(
            `Candidate: Mamatha Kuruva | Role: Aspiring Software Developer\nSpecialization: B.Tech CSE (AI) ('2027)\n[Program exited with code 0 in 48ms]`
          );
          break;
        case 'method-overloading-overriding':
          setConsoleOutput(
            `Sum (2 ints): 30\nSum (3 ints): 60\nDog barks (overridden implementation)\n[Dynamic method dispatch verified - execution completed]`
          );
          break;
        case 'arrays-and-searching':
          setConsoleOutput(
            `Array: [10, 24, 38, 45, 59, 72, 88, 93]\nTarget 59 found at index: 4\nComparisons made: 3 iterations (O(log N))\n[Binary Search test passed]`
          );
          break;
        case 'strings-and-loops':
          setConsoleOutput(
            `Testing: "Radar"\nTwo pointers: left(0)='r' vs right(4)='r' -> matched\nTwo pointers: left(1)='a' vs right(3)='a' -> matched\nIs 'Radar' a palindrome? true\n[Two-pointer logic validated]`
          );
          break;
        default:
          setConsoleOutput(`[Execution finished with code 0]`);
      }
    }, 450);
  };

  const topicsList = [
    'Arrays',
    'Strings',
    'Loops',
    'Methods',
    'OOP',
    'Inheritance',
    'Method Overloading',
    'Method Overriding',
    'Searching',
    'Basic Problem Solving',
    'Logical Reasoning',
  ];

  return (
    <section id="coding-journey" className="py-20 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            06 / Algorithmic & OOP Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Coding Journey
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Actively strengthening programming and problem-solving fundamentals through rigorous Java practice, object-oriented concepts, and clean algorithmic thinking.
          </p>
        </div>

        {/* Core Topics Covered Tag Grid */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Core Java & Problem-Solving Topics Actively Practiced</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {topicsList.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Code Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Topic Selectors */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Select Concept Walkthrough
            </h3>
            {codeTopicsData.map((topic) => {
              const isActive = activeTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTopicId(topic.id);
                    setConsoleOutput(null);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-indigo-500 shadow-md text-white'
                      : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-mono text-indigo-400 mb-1">
                    {topic.category}
                  </div>
                  <div className="text-sm font-bold tracking-tight text-slate-200">
                    {topic.title}
                  </div>
                </button>
              );
            })}

            {/* Note on Authenticity */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-1">
                Authentic Practice Over Inflated Stats
              </span>
              No fabricated rank scores or fake contribution charts. Every concept is understood through manual implementation, debugging, and line-by-line tracing.
            </div>
          </div>

          {/* Interactive IDE / Code Viewer */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-950 shadow-xl overflow-hidden">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-semibold text-slate-200">
                  {activeTopic.title}.java
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Copy Java code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleRunCode}
                  disabled={simulatedRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors cursor-pointer"
                  title="Simulate JVM Execution"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{simulatedRunning ? 'Compiling...' : 'Run Simulation'}</span>
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-slate-950">
              <pre className="whitespace-pre">
                <code>{activeTopic.codeSnippet}</code>
              </pre>
            </div>

            {/* Concept Explanation Box */}
            <div className="p-5 bg-slate-900/50 border-t border-slate-800 space-y-3">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                  Conceptual Mechanics
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeTopic.explanation}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Key Takeaways:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeTopic.keyTakeaways.map((point, kIdx) => (
                    <div
                      key={kIdx}
                      className="flex items-start gap-1.5 text-xs text-slate-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Console Output */}
            {consoleOutput && (
              <div className="p-4 bg-slate-950 border-t border-slate-800 font-mono text-xs text-emerald-400 animate-in fade-in duration-150">
                <div className="text-[11px] text-slate-500 mb-1 flex items-center justify-between">
                  <span>TERMINAL OUTPUT (Standard Out)</span>
                  <button
                    onClick={() => setConsoleOutput(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                </div>
                <pre className="whitespace-pre-wrap">{consoleOutput}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
