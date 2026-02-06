
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Curated <span className="text-zinc-500">Portfolio</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Scalable solutions delivered for Android and iOS ecosystems with over 1M+ combined downloads.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_DATA.projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-800 shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                />
                
                {/* Project Badge */}
                {project.isClientProject && (
                  <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full glass text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Client Project
                  </div>
                )}

                {/* Info Overlay */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                   <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                   <p className="text-zinc-400 text-sm mb-6 line-clamp-2 font-light group-hover:text-zinc-300 transition-colors">{project.description}</p>
                   
                   <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/60">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
                
                {/* View Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
