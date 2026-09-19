import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, FileText, 
  Home, User, Code, Briefcase, FolderGit2, Mail, Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  // Scrollspy & scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Detect active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-primary-500 via-indigo-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-[#0B0F19] rounded-[10px] flex items-center justify-center transition-colors">
                <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-400 text-lg">
                  DS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                Divyanshu Sahu
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 relative ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 font-semibold bg-primary-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-primary-500' : 'text-slate-400'}`} />
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Resume Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/60 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-sm hover:scale-102 active:scale-98"
            >
              <FileText className="w-4 h-4 text-primary-500" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/50 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/50"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/50 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-slate-200 dark:border-slate-800/60 px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-500' : 'text-slate-400'}`} />
                {link.name}
              </a>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-medium shadow-md shadow-primary-500/20"
            >
              <FileText className="w-5 h-5" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
