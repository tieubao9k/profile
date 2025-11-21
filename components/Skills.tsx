import React from 'react';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-white/80 dark:bg-[#1b1b1b]/80 backdrop-blur-sm rounded-[4px] p-6 shadow-sm border border-slate-200 dark:border-[#272727] relative overflow-hidden">
       {/* Decorative corner */}
       <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-100 dark:from-[#272727] to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>

      <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
        <Cpu className="w-5 h-5 text-primary-500" /> Tech Stack
      </h3>
      
      <div className="space-y-6">
        {SKILLS.map((skillGroup) => (
          <div key={skillGroup.category}>
            <span className="text-xs font-bold text-primary-500 dark:text-primary-500 uppercase tracking-wider block mb-3 ml-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block"></span>
              {skillGroup.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item.name}
                  className="px-3 py-1.5 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-[#272727] border border-slate-200 dark:border-[#3f3f3f] rounded-[4px] hover:bg-primary-500 hover:text-black hover:border-primary-600 transition-all cursor-default hover:shadow-md flex items-center gap-2"
                >
                  <img src={item.icon} alt={item.name} className="w-4 h-4" />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;