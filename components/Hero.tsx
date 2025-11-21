import React, { useState, useEffect, useRef } from 'react';
import { PROFILE, PROJECTS } from '../constants';
import { Github, MessageCircle, Globe, Mail, Phone, Zap, Code, FolderGit2, Coffee } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = [
    "Code Dạo (Satoru) ✨",
    "Fullstack Developer 💻",
    "Bug Hunter 🐛",
    "Night Owl 🦉",
    "Tech Enthusiast 🚀"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Stats counter
  const [stats, setStats] = useState({ projects: 0, experience: 0, coffees: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetStats = { projects: PROJECTS.length, experience: 2, coffees: 999 };

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roles, currentRoleIndex, typingSpeed]);

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setStats({
              projects: Math.round(targetStats.projects * progress),
              experience: Math.round(targetStats.experience * progress),
              coffees: Math.round(targetStats.coffees * progress),
            });
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="flex flex-col items-center text-center mb-16 mt-8 relative">
      {/* Decorative sparkle at top right */}
      <div className="absolute top-0 right-10 animate-pulse text-primary-500 hidden sm:block">
        <Zap className="w-6 h-6" />
      </div>

      <div className="relative mb-6 group">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500 to-orange-700 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
        
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-primary-500 shadow-xl z-10 bg-slate-200 dark:bg-[#1b1b1b]">
          <img 
            src="https://files.catbox.moe/4kdkqt.png" 
            alt={PROFILE.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Online Status - Orange to match theme */}
        <div className="absolute bottom-2 right-2 w-8 h-8 bg-white dark:bg-[#000000] rounded-full flex items-center justify-center shadow-md z-20 border-2 border-slate-100 dark:border-primary-500">
          <span className="text-lg relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          </span>
        </div>

        {/* Speech Bubble - Fixed positioning */}
        <div className="absolute left-[100%] top-8 ml-5 bg-white dark:bg-[#1b1b1b] px-4 py-2 rounded-2xl rounded-tl-none shadow-md border border-slate-200 dark:border-[#272727] hidden sm:block animate-fade-in-up transform rotate-3 hover:rotate-0 transition-transform origin-top-left z-20 w-max">
          <p className="text-xs font-bold text-slate-600 dark:text-primary-500 whitespace-nowrap">Code dạo thui à! 💻</p>
        </div>
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight font-sans relative inline-block">
        {PROFILE.name} 
      </h1>
      
      <div className="flex items-center gap-2 mb-4 mt-2 h-8">
        <span className="h-px w-8 bg-slate-300 dark:bg-[#272727]"></span>
        <p className="text-primary-600 dark:text-primary-500 font-bold text-sm sm:text-lg font-sans uppercase tracking-widest whitespace-nowrap">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <span className="h-px w-8 bg-slate-300 dark:bg-[#272727]"></span>
      </div>
      
      <div className="bg-white/60 dark:bg-[#1b1b1b]/80 backdrop-blur-sm p-4 rounded-[4px] border border-slate-200 dark:border-[#272727] shadow-sm max-w-lg mb-8 relative group hover:-translate-y-1 transition-transform duration-300">
        <div className="absolute -top-3 -left-2 bg-primary-500 text-black p-1 rounded-[4px] shadow-sm transform -rotate-3 group-hover:rotate-0 transition-transform">
           <span className="font-bold text-xs px-1">BIO</span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
          {PROFILE.about}
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 flex-wrap px-4 mb-8">
        {[
          { icon: Github, href: PROFILE.github, label: "Github" },
          { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
          { icon: Phone, href: PROFILE.zalo, label: "Zalo" },
          { icon: MessageCircle, href: PROFILE.messenger, label: "Messenger" },
          { icon: Globe, href: PROFILE.website, label: "Website" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="p-3 text-slate-500 dark:text-slate-400 bg-white dark:bg-[#1b1b1b] shadow-sm hover:shadow-lg hover:-translate-y-1 rounded-[4px] transition-all border border-slate-200 dark:border-[#272727] hover:bg-primary-500 hover:text-black dark:hover:bg-primary-500 dark:hover:text-black group"
            title={item.label}
          >
            <item.icon className="w-5 h-5 transition-transform" />
          </a>
        ))}
      </div>

      {/* Stats Counter */}
      <div ref={statsRef} className="grid grid-cols-3 gap-4 w-full max-w-md">
        {[
          { icon: FolderGit2, value: stats.projects, label: "Projects" },
          { icon: Code, value: stats.experience, label: "Năm KN" },
          { icon: Coffee, value: stats.coffees, label: "Coffees" },
        ].map((stat, index) => (
          <div key={index} className="bg-white/60 dark:bg-[#1b1b1b]/80 backdrop-blur-sm p-4 rounded-[4px] border border-slate-200 dark:border-[#272727] hover:-translate-y-1 transition-transform">
            <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;