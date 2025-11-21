import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${scrolled ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#272727] shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Iconic Logo Style */}
        <a href="#" className="flex items-center gap-1 group cursor-pointer select-none">
          <span className="font-bold text-2xl tracking-tighter text-white group-hover:text-white transition-colors">
            Satoru
          </span>
          <span className="bg-primary-500 text-black font-bold text-2xl tracking-tighter px-2 py-0.5 rounded-[4px] transition-transform group-hover:scale-105">
            Hub
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-300 hover:text-black hover:bg-primary-500 px-3 py-1.5 rounded-[4px] transition-all cursor-pointer uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;