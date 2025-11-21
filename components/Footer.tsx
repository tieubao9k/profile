import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium text-sm">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-xs font-semibold text-slate-400 dark:text-slate-500">
          <p>Built with React & Tailwind</p>
          <span>•</span>
          <p>Designed by Satoru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;