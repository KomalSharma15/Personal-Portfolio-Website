
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-center tracking-tight">Career <span className="text-zinc-500">Timeline</span></h2>
        
        <div className="space-y-16">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div key={exp.id} className="relative group grid md:grid-cols-[200px_1fr] gap-8">
              <div className="text-zinc-500 font-bold text-sm tracking-widest uppercase pt-2">
                {exp.period}
              </div>
              
              <div className="relative pl-8 border-l border-zinc-800 group-last:border-transparent pb-4">
                <div className="absolute top-2 -left-[4.5px] w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors duration-300"></div>
                
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-zinc-400 mb-6">{exp.company}</p>
                
                <ul className="space-y-3">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex gap-4 items-start text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      <span className="w-1.5 h-px bg-zinc-700 mt-2.5 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
