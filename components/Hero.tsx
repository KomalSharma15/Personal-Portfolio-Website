
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-glow"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase border border-indigo-500/20 bg-indigo-500/5 rounded-full">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
          Open to Opportunities
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.9] text-white">
          <span className="block opacity-70">Hello, I'm</span>
          <span className="gradient-text">{PORTFOLIO_DATA.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {PORTFOLIO_DATA.tagline} specializing in <span className="text-white font-medium">high-performance mobile ecosystems</span> and cross-platform architecture.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <a 
            href="#projects" 
            className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            Recent Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Let's Talk
          </a>
        </div>

        <div className="mt-20 flex justify-center space-x-10">
          <a href={PORTFOLIO_DATA.socials.gmail} className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
