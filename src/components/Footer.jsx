import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Bio note */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 p-[1.5px]">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500 dark:from-primary-400 dark:to-cyan-300 text-sm">
                  DS
                </span>
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-slate-900 dark:text-white text-base">
                Divyanshu Sahu
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                Software Engineer • MapmyIndia
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.email}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary-600/15 dark:bg-primary-600/20 hover:bg-primary-600 text-primary-600 dark:text-primary-400 hover:text-white transition-all ml-2"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Divyanshu Sahu. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with React 18, Tailwind CSS & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

