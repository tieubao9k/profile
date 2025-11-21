import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react';
import { PROFILE, PROJECTS } from '../constants';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    "Welcome to SatoruHub Terminal v1.0.0",
    "Type 'help' to see available commands.",
    "-------------------------------------"
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newOutput = [...output, `root@satoru:~# ${input}`];

    switch (cmd) {
      case 'help':
        newOutput.push(
          "Available commands:",
          "  about     - Who is Satoru?",
          "  projects  - List featured projects",
          "  skills    - View tech stack",
          "  contact   - Get contact info",
          "  social    - Social media links",
          "  clear     - Clear terminal",
          "  date      - Show current time"
        );
        break;
      case 'about':
        newOutput.push(`> ${PROFILE.about}`);
        break;
      case 'projects':
        newOutput.push("Fetching projects...");
        PROJECTS.forEach(p => {
          newOutput.push(`* ${p.title}: ${p.description}`);
        });
        break;
      case 'skills':
        newOutput.push(
          "CORE:",
          "[JavaScript, TypeScript, Node.js, Python, PHP]",
          "FRAMEWORKS:",
          "[React, Express, Tailwind, Laravel]",
          "DATABASE:",
          "[MongoDB, MySQL, Redis]"
        );
        break;
      case 'contact':
        newOutput.push(`Email: ${PROFILE.email}`, `Zalo: ${PROFILE.zalo}`);
        break;
      case 'social':
        newOutput.push(
            `Github: ${PROFILE.github}`,
            `Facebook: ${PROFILE.messenger}`
        );
        break;
      case 'clear':
        setOutput([]);
        setInput('');
        return;
      case 'date':
        newOutput.push(new Date().toString());
        break;
      case 'sudo':
      case 'sudo rm -rf /':
        newOutput.push("Permission denied. Nice try! 😉");
        break;
      case 'porn':
      case 'pornhub':
      case 'xxx':
        newOutput.push("BONK! Go to horny jail. 🐕🔨");
        break;
      case '':
        break;
      default:
        newOutput.push(`Command not found: ${cmd}. Type 'help' for info.`);
    }

    setOutput(newOutput);
    setInput('');
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-20 mb-10 px-2" id="terminal">
      <div className="bg-[#0d0d0d] rounded-[6px] overflow-hidden border border-[#333] shadow-2xl font-mono text-sm sm:text-base">
        {/* Terminal Header */}
        <div className="bg-[#1f1f1f] px-4 py-2 flex items-center justify-between border-b border-[#333]">
          <div className="flex items-center gap-2">
             <TerminalIcon className="w-4 h-4 text-primary-500" />
             <span className="text-slate-400 text-xs font-bold">satoru@server: ~</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-600"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-600"></div>
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-600"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-4 h-64 sm:h-80 overflow-y-auto text-slate-300 font-medium cursor-text"
          onClick={focusInput}
        >
          {output.map((line, i) => (
            <div key={i} className="mb-1 break-words">
              {line.startsWith('root@') ? (
                 <span className="text-primary-500">{line}</span>
              ) : line.startsWith('>') ? (
                <span className="text-green-400">{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex items-center mt-2">
            <span className="text-primary-500 mr-2">root@satoru:~#</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white border-none p-0 focus:ring-0"
              autoFocus
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
};

export default Terminal;