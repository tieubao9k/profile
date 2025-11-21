import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Folder, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2 pl-2">
        <Code2 className="w-5 h-5 text-primary-500" /> Dự án tiêu biểu (Github)
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.link || project.github} 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col h-full p-5 rounded-[4px] bg-white dark:bg-[#1b1b1b] border border-slate-200 dark:border-[#272727] hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all relative overflow-hidden"
          >
            {/* Top decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Folder className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-primary-500 transition-colors" />
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h4>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-500 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-[#272727] text-slate-600 dark:text-slate-300 rounded-[3px] border border-slate-200 dark:border-[#3f3f3f] group-hover:border-primary-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.stars && (
              <div className="absolute bottom-5 right-5 text-xs text-slate-400 dark:text-slate-600 font-mono opacity-50">
                 ★ {project.stars}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;