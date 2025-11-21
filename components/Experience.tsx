import React from 'react';
import { EXPERIENCE } from '../constants';
import { Rocket } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2 pl-2">
        <Rocket className="w-5 h-5 text-primary-500" /> Kinh nghiệm
      </h3>
      
      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <div key={job.id} className="group bg-white dark:bg-[#1b1b1b] rounded-[4px] p-6 shadow-sm border border-slate-200 dark:border-[#272727] hover:border-primary-500/50 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary-500 transition-colors">
                {job.company}
              </h4>
              <span className="text-xs font-bold bg-primary-500 text-black border border-primary-600 px-2 py-0.5 rounded-[4px] mt-2 sm:mt-0 inline-block w-fit">
                {job.period}
              </span>
            </div>
            
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-semibold uppercase tracking-wide">{job.role}</div>
            
            <ul className="space-y-2">
              {job.description.map((desc, i) => (
                <li key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;