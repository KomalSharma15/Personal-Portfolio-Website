
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-32 px-6 max-w-4xl mx-auto text-center border-y border-zinc-900">
            <span className="text-xs font-black tracking-widest uppercase text-indigo-500 mb-6 block">Professional Summary</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
              Crafting fluid interfaces for <br/> <span className="text-zinc-500">tomorrow's mobile experiences.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                "Results-driven Mobile Application Developer with 2.5+ years of experience. Expert in Flutter and Firebase, passionate about solving complex technical challenges while maintaining human-centric design."
            </p>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter text-white">KS<span className="text-indigo-500">.</span></div>
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Komal Sharma. Handcrafted with Precision.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm font-bold">Home</a>
          </div>
        </div>
      </footer>

      {/* Interactive AI Chat Layer */}
      {/* <AIAssistant /> */}
    </div>
  );
};

export default App;
