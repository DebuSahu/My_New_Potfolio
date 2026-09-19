import React, { useState } from 'react';
import { 
  Server, Database, Code, Award, CheckCircle2, 
  MapPin, Mail, Phone, Calendar, Copy, Check, Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const pillars = [
    {
      title: "Enterprise Java & Backend",
      icon: Server,
      color: "from-blue-500 to-indigo-500",
      description: "Developing robust, thread-safe microservices and REST APIs with Java 17+, Spring Boot, and Hibernate JPA."
    },
    {
      title: "Database Administration (DBA)",
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      description: "Hands-on DBA with PostgreSQL, MySQL, and Oracle. Skilled in B-Tree indexing, execution plan tuning, and schema normalization."
    },
    {
      title: "Modern Reactive Web",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      description: "Building responsive, mobile-first interfaces with React, JavaScript (ES6+), HTML5, and Tailwind CSS."
    },
    {
      title: "Agile Problem Solving",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
      description: "MCA First Class (73%) from Jagran Institute of Management with a disciplined approach to SDLC, test coverage, and teamwork."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Know Me Better</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Engineering High-Reliability Systems & Scalable Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Passionate about backend architectures, data management precision, and interactive user interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Personal Story & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
              
              {/* Profile Identity Card with Clean Photo */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-slate-200 dark:border-slate-800/80">
                <div className="relative shrink-0">
                  <img
                    src={personal.avatarOriginal || `${import.meta.env.BASE_URL || '/'}profile.png`}
                    alt="Divyanshu Sahu"
                    className="w-20 h-24 sm:w-24 sm:h-28 object-contain drop-shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Active"></span>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Divyanshu Sahu</h3>
                    <CheckCircle2 className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-mono text-xs sm:text-sm font-medium mt-0.5">
                    Software Engineer @ MapmyIndia
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                    MCA (73% First Class) • Jagran Institute of Management, Kanpur
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                      ☕ Java & Spring Boot
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-cyan-50 dark:bg-slate-800/80 border border-cyan-200 dark:border-slate-700/60 text-[11px] font-mono text-cyan-700 dark:text-cyan-300">
                      🗄️ PostgreSQL DBA
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700/60 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
                      📍 New Delhi / Kanpur
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <span>Who I Am</span>
                <span className="w-8 h-[2px] bg-primary-500 dark:bg-primary-400 inline-block"></span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                I am <span className="text-slate-900 dark:text-white font-semibold">Divyanshu Sahu</span>, an IT professional currently serving as a <span className="text-primary-600 dark:text-primary-400 font-medium">Software Engineer at MapmyIndia</span> in New Delhi. With a solid academic foundation in Computer Applications (<span className="text-cyan-700 dark:text-cyan-300 font-medium">MCA - 73%</span> from Jagran Institute of Management, Kanpur), I thrive on turning complex business requirements into elegant, high-throughput software architectures.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                My career encompasses software development and database engineering across <span className="text-slate-900 dark:text-white font-semibold">MapmyIndia</span>, <span className="text-slate-900 dark:text-white font-semibold">Railworld India</span>, and key tech internships at YHills, CodSoft, and OctaNet. Whether designing backend RESTful services in Spring Boot, tuning SQL queries for PostgreSQL, or implementing reactive component trees in React, I build with performance, security, and scalability as first-class citizens.
              </p>

              {/* Strengths bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Quick Learner & Autonomous Problem Solver</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Strong Interpersonal & Agile Fluency</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Clean Code & Design Patterns</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Database Normalization & DBA Insight</span>
                </div>
              </div>

              {/* Quick Info Bar with Copy Triggers */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-primary-500 dark:text-primary-400 shrink-0" />
                  <span>New Delhi / Kanpur, India</span>
                </div>
                
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700/50 hover:border-primary-500/40 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all"
                  title="Click to copy email"
                >
                  <Mail className="w-4 h-4 text-primary-500 dark:text-primary-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm">{personal.email}</span>
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>

                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700/50 hover:border-primary-500/40 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all"
                  title="Click to copy phone"
                >
                  <Phone className="w-4 h-4 text-primary-500 dark:text-primary-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm">{personal.phone}</span>
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Architectural Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

