import React, { useState } from 'react';
import { 
  Code2, Database, Server, Layout, Terminal, 
  Cpu, Sparkles, CheckCircle, ShieldCheck, Flame, Wrench
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills.list
    : skills.list.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/40 border-y border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Technical Stack & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A battle-tested repertoire spanning backend engineering, relational database administration, and reactive modern frontends.
          </p>
        </div>

        {/* DBA Spotlight Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-primary-500/30 bg-gradient-to-r from-primary-50/80 via-white/90 to-indigo-50/80 dark:from-primary-950/30 dark:via-slate-900/60 dark:to-indigo-950/30 mb-12 shadow-xl shadow-primary-950/5 dark:shadow-primary-950/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-primary-600 to-indigo-600 text-white shadow-lg shrink-0">
                <Database className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary-500/15 text-primary-700 dark:text-primary-300 font-semibold uppercase tracking-wider">
                    Core Specialization
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">• High Concurrency & Normalization</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  Database Administration (DBA) & Architecture
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                  Extensive expertise in PostgreSQL, MySQL, and Oracle: table partition strategies, B-tree indexes, execution query plan analysis (`EXPLAIN ANALYZE`), transaction acid guarantees, and connection pooling.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <span className="px-3 py-1 rounded-lg bg-cyan-50 dark:bg-slate-800/80 border border-cyan-200 dark:border-slate-700/60 text-xs font-mono text-cyan-800 dark:text-cyan-300">
                PostgreSQL
              </span>
              <span className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-slate-800/80 border border-primary-200 dark:border-slate-700/60 text-xs font-mono text-primary-800 dark:text-primary-300">
                MySQL
              </span>
              <span className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-slate-800/80 border border-indigo-200 dark:border-slate-700/60 text-xs font-mono text-indigo-800 dark:text-indigo-300">
                Oracle SQL
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700/60 text-xs font-mono text-emerald-800 dark:text-emerald-300">
                DBA Tuning
              </span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg shadow-primary-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500 dark:bg-primary-400 group-hover:scale-125 transition-transform" />
                  <span className="font-heading font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-base">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                  {skill.badge}
                </span>
              </div>

              {/* Progress meter */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technical Badges */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mr-2">Environment & Tools:</span>
          {["VS Code", "Eclipse IDE", "NetBeans", "WampServer", "Apache Tomcat", "Postman", "Git / GitHub", "Windows OS", "Agile / Scrum"].map((tool, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:border-primary-500/40 hover:text-primary-600 dark:hover:text-white shadow-sm transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

