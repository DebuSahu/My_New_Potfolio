import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, Calendar, MapPin, 
  ChevronRight, Award, CheckCircle2, Sparkles, Building2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education, certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Track record of software engineering delivery, academic excellence, and continuous professional growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 shadow-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'experience' ? (
          /* WORK EXPERIENCE TIMELINE */
          <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 sm:ml-32 space-y-10">
            {experience.map((item, idx) => (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 group-hover:bg-primary-500 group-hover:scale-125 transition-all shadow-md shadow-primary-500/30" />

                {/* Date marker for desktop on left */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                  <span className="font-mono text-xs text-primary-600 dark:text-primary-400 font-semibold block">
                    {item.duration.split(' - ')[0]}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {item.duration.split(' - ')[1] || 'Present'}
                  </span>
                </div>

                {/* Card */}
                <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-0.5 group-hover:shadow-xl group-hover:shadow-primary-950/10 dark:group-hover:shadow-primary-950/20">
                  
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary-500/10 text-primary-700 dark:text-primary-400 border border-primary-500/20">
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium mt-1">
                        <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="sm:hidden flex items-center gap-1.5 text-xs font-mono text-primary-600 dark:text-primary-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <ChevronRight className="w-4 h-4 text-primary-500 dark:text-primary-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* EDUCATION & CERTIFICATIONS */
          <div className="space-y-12">
            
            {/* Education Cards */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <span>Academic Degrees</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-bold">
                          {edu.score}
                        </span>
                        <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-2">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 text-right shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="space-y-1.5 border-t border-slate-200 dark:border-slate-800/60 pt-3">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span>Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20">
                        {cert.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{cert.date}</span>
                    </div>
                    
                    <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-400 mb-2 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

