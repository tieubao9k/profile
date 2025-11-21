import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';
import Terminal from './components/Terminal';
import AnimateOnScroll from './components/AnimateOnScroll';
import MusicPlayer from './components/MusicPlayer';

const FloatingSymbol = ({ symbol, delay, left }: { symbol: string, delay: string, left: string }) => (
  <div 
    className="fixed text-xl md:text-3xl font-mono text-white/10 pointer-events-none animate-float z-0 select-none"
    style={{ 
      animationDelay: delay, 
      left: left,
      bottom: '-50px'
    }}
  >
    {symbol}
  </div>
);

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#000000]">
      {/* Global Styles for custom animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 20s linear infinite;
        }
      `}</style>

      {/* Background Grid/Gradient Layer - Dark Only */}
      <div 
        className="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#000000] to-black"
        style={{ 
          transform: `translateY(-${scrollY * 0.1}px)` 
        }}
      />
      
      {/* Abstract Tech Globs */}
      <div 
        className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-screen"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-900/20 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-screen"
        style={{ transform: `translateY(-${scrollY * 0.02}px)` }}
      />

      {/* Floating Tech Symbols */}
      <FloatingSymbol symbol="{ }" delay="0s" left="10%" />
      <FloatingSymbol symbol="</>" delay="3s" left="25%" />
      <FloatingSymbol symbol="&&" delay="7s" left="80%" />
      <FloatingSymbol symbol="git" delay="10s" left="5%" />
      <FloatingSymbol symbol="#" delay="13s" left="90%" />
      <FloatingSymbol symbol="npm" delay="16s" left="50%" />

      <Navbar />
      <main className="max-w-2xl mx-auto px-5 pt-24 pb-12 sm:px-8 relative z-0">
        <Hero />
        <div className="space-y-20">
          <AnimateOnScroll animation="fadeUp">
            <Skills />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={100}>
            <Experience />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={200}>
            <Projects />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animation="scale" delay={100}>
          <Terminal />
        </AnimateOnScroll>
      </main>
      <Footer />
      <AiChatbot />
      <MusicPlayer />
    </div>
  );
};

export default App;