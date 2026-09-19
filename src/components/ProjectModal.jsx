import React, { useEffect } from 'react';
import { 
  X, Github, ExternalLink, CheckCircle2, 
  Layers, ShieldAlert, Cpu, ArrowRight, Sparkles 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden z-10 my-8 bg-white dark:bg-slate-900/95 max-h-[90vh] flex flex-col">
        
        {/* Header with Project Gradient */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.imageGradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.subtitle}</span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            {project.title}
          </h3>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-white/20">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-black text-lg sm:text-2xl text-white">{m.value}</div>
                <div className="text-[11px] sm:text-xs text-white/80 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
          
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-slate-800/60 border border-amber-500/20 dark:border-slate-700/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold mb-1.5 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>The Challenge</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-slate-800/60 border border-emerald-500/20 dark:border-slate-700/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span>Core Architectural Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-500 dark:text-primary-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-cyan-50 dark:bg-slate-800 border border-cyan-200 dark:border-slate-700 text-xs font-mono text-cyan-800 dark:text-cyan-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Designed & Implemented by Divyanshu Sahu
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-primary-500/20"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

