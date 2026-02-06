
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical <span className="text-zinc-500">Mastery</span></h2>
            <p className="text-zinc-400 text-lg">A deep dive into the technologies and methodologies I use to build world-class mobile products.</p>
          </div>
          <div className="h-px flex-1 bg-zinc-800 mb-4 mx-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <div key={skillGroup.category} className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-black text-indigo-500 tracking-tighter w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">0{idx + 1}</span>
                <h3 className="font-bold text-white uppercase text-sm tracking-widest">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-medium text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-violet-800 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 -mr-20 -mt-20 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-md">
                    <span className="text-xs font-black tracking-widest uppercase opacity-60 mb-2 block">Academic Base</span>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Education & Honors</h3>
                    <p className="opacity-80">Solid mathematical foundation combined with modern computing practices.</p>
                </div>
                <div className="w-full md:w-auto space-y-4">
                    {PORTFOLIO_DATA.education.map((edu, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 min-w-[320px]">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-lg">{edu.degree}</h4>
                                <span className="text-xs font-bold py-1 px-2 bg-white/20 rounded-lg">{edu.year}</span>
                            </div>
                            <p className="text-white/70 text-sm font-medium">{edu.institution}</p>
                            {edu.grade && <div className="mt-4 inline-block text-xs font-bold py-1 px-3 bg-indigo-400 rounded-full">CGPA: {edu.grade}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
