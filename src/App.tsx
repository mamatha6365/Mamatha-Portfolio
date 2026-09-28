/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CodingJourney } from './components/CodingJourney';
import { WhatICanBuild } from './components/WhatICanBuild';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiter={() => setIsRecruiterOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero / Intro */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. About Me */}
          <About />

          {/* 3. Education Timeline */}
          <Education />

          {/* 4. Technical Skills */}
          <Skills />

          {/* 5. Featured Projects */}
          <Projects />

          {/* 6. Internship Experience */}
          <Experience />

          {/* 7. My Coding Journey (Interactive Java / OOP / Algorithmic Practice) */}
          <CodingJourney />

          {/* 8. What I Can Build */}
          <WhatICanBuild />

          {/* 9. Currently Learning & Improving */}
          <CurrentlyLearning />

          {/* 10. Certifications & Achievements */}
          <Certifications />

          {/* 11. Resume Section */}
          <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* 12. Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Recruiter Quick Scan Drawer */}
        <RecruiterDrawer
          isOpen={isRecruiterOpen}
          onClose={() => setIsRecruiterOpen(false)}
          onOpenResume={() => {
            setIsRecruiterOpen(false);
            setIsResumeOpen(true);
          }}
        />
      </div>
    </ThemeProvider>
  );
}
