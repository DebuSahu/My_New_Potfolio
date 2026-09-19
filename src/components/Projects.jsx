import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, ArrowRight, 
  Sparkles, Layers, CheckCircle2, TrendingUp, Info 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Java & Backend' },
    { id: 'frontend', label: 'Web & Full-Stack' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-950/40 border-y border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Academic & Enterprise Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world systems engineered to solve operational bottlenecks across fitness, healthcare logistics, vehicle rentals, and high-throughput databases.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg shadow-primary-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden group shadow-xl"
            >
              {/* Card Banner */}
              <div className={`p-6 sm:p-7 bg-gradient-to-r ${project.imageGradient} text-white relative`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/25 backdrop-blur-md uppercase tracking-wider font-semibold">
                    {project.category === 'backend' ? 'Java / Backend' : 'Web / Frontend'}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/25 hover:bg-black/40 text-white transition-colors"
                      aria-label="View on GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:scale-101 transition-transform">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 mt-1 font-medium">
                  {project.subtitle}
                </p>

                {/* Key Impact Counter */}
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                  <span className="text-white/80 font-mono">Key Result:</span>
                  <span className="font-bold text-white font-mono bg-white/15 px-2.5 py-0.5 rounded-full">
                    {project.metrics[0].value} {project.metrics[0].label}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-slate-800/80 border border-cyan-200 dark:border-slate-700/60 text-xs font-mono text-cyan-800 dark:text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Trigger */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  >
                    <span>View Architecture & Specs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 transition-colors"
                    title="Quick Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

