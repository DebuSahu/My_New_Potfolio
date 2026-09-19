import React, { useEffect, useState } from 'react';
import { 
  X, Printer, Download, Mail, Phone, MapPin, 
  Linkedin, Github, CheckCircle2, ShieldCheck, UserCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const { personal, experience, education, certifications } = portfolioData;
  const [includePhoto, setIncludePhoto] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('resume-open');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      document.body.classList.remove('resume-open');
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn resume-modal-overlay">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity no-print"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 max-h-[95vh] flex flex-col resume-modal-container">
        
        {/* Modal Toolbar (hidden on print) */}
        <div className="p-3.5 sm:px-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 no-print border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="font-heading font-semibold text-sm sm:text-base">
                Divyanshu Sahu • ATS-Optimized Resume
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% ATS Friendly (2 Pages)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Toggle Photo for ATS vs Visual */}
            <button
              onClick={() => setIncludePhoto(!includePhoto)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                includePhoto 
                  ? 'bg-primary-600/30 border-primary-500 text-primary-200' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title="ATS systems recommend resumes without photos"
            >
              <span>{includePhoto ? '✓ Photo Included' : 'Photo Omitted (ATS Standard)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Clean Print Tip Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-[11px] sm:text-xs text-amber-800 flex items-center justify-between gap-2 no-print">
          <span>
            💡 <strong>To remove date & website link from PDF:</strong> In print window, click <em>More settings</em> &rarr; <strong>uncheck "Headers and footers"</strong>.
          </span>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans leading-normal bg-white text-slate-900 resume-document">
          
          {/* Header with Photo on Right */}
          <div className="pb-3 mb-3 border-b-2 border-slate-900 resume-section">
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="flex-1 text-left">
                <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase mb-0.5">
                  {personal.name}
                </h1>
                
                <p className="font-semibold text-xs sm:text-sm text-slate-800 mb-2 tracking-wide">
                  Software Engineer | Java Backend Developer | Spring Boot & PostgreSQL Specialist
                </p>

                <div className="text-xs text-slate-700 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Kanpur & New Delhi, India</span>
                  <span>•</span>
                  <span>{personal.phone}</span>
                  <span>•</span>
                  <span>{personal.email}</span>
                  <span>•</span>
                  <a 
                    href={personal.socials.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-900 hover:underline font-medium"
                  >
                    linkedin.com/in/divyanshu-sahu
                  </a>
                  <span>•</span>
                  <a 
                    href={personal.socials.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-900 hover:underline font-medium"
                  >
                    github.com/DebuSahu
                  </a>
                </div>
              </div>

              {includePhoto && (
                <div className="shrink-0">
                  <img
                    src={personal.avatarOriginal || `${import.meta.env.BASE_URL || '/'}profile.png`}
                    alt="Divyanshu Sahu"
                    className="w-20 h-24 sm:w-24 sm:h-28 object-contain rounded-lg border border-slate-300 shadow-sm bg-slate-50"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-3.5 resume-section">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-slate-800 text-xs leading-relaxed text-justify">
              Results-driven Software Engineer and MCA graduate (73% First Class) with industry engineering experience at MapmyIndia and Railworld India. Specialized in enterprise Java (Core & Advanced) and Spring Boot microservices, high-efficiency database administration across PostgreSQL and MySQL, schema normalization, and RESTful API architecture. Proven ability to architect thread-safe, high-concurrency systems, optimize SQL query execution plans, and deliver resilient full-stack applications in agile SDLC sprints.
            </p>
          </div>

          {/* Technical Skills - Single-Column ATS Format */}
          <div className="mb-3.5 resume-section">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5">
              Technical Skills
            </h2>
            <div className="text-xs text-slate-800 space-y-1 leading-snug">
              <div>
                <strong className="text-slate-900">Programming Languages:</strong> Java (Core & Advanced, Collections, Multithreading, Streams), SQL, JavaScript (ES6+), C, C++
              </div>
              <div>
                <strong className="text-slate-900">Frameworks & Backend:</strong> Spring Framework, Spring Boot, Microservices, RESTful APIs, Hibernate / JPA, JDBC
              </div>
              <div>
                <strong className="text-slate-900">Databases & DBA:</strong> PostgreSQL, MySQL, Oracle, Database Administration, B-Tree Indexing, Query Optimization, Schema Design, Connection Pooling
              </div>
              <div>
                <strong className="text-slate-900">Web Technologies:</strong> React.js, HTML5, CSS3, Tailwind CSS, Responsive Design, REST Integrations
              </div>
              <div>
                <strong className="text-slate-900">Tools, Platforms & OS:</strong> Git, GitHub, Postman, Eclipse, NetBeans IDE, VS Code, Apache Tomcat, WampServer, Windows, Agile / Scrum
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-3.5 resume-section">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2">
              Professional Experience
            </h2>
            
            <div className="space-y-2.5">
              {experience.map((job) => (
                <div key={job.id} className="resume-job text-xs">
                  <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                    <div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{job.role}</span>
                      <span className="text-slate-700 font-semibold"> — {job.company}</span>
                    </div>
                    <div className="text-right text-slate-600 font-medium text-[11px]">
                      <span>{job.duration}</span> | <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 italic mb-1 text-[11.5px]">{job.description}</p>
                  
                  <ul className="list-disc list-outside ml-4 text-slate-800 space-y-0.5 text-[11.5px] leading-relaxed">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Academic & Software Projects */}
          <div className="mb-3.5 resume-section">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5">
              Key Academic & Software Projects
            </h2>
            
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-bold text-slate-900">GymNation (Gym Management System):</span>{' '}
                <span className="text-slate-600 font-medium">[Java, NetBeans, MySQL, JDBC, Swing] — </span>
                <span className="text-slate-800">Developed enterprise desktop application automating member registration, subscription renewals, trainer scheduling, and billing workflows with secure transactional database integrity.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Red Drop (Blood Bank Management System):</span>{' '}
                <span className="text-slate-600 font-medium">[HTML5, CSS3, JavaScript, UI/UX] — </span>
                <span className="text-slate-800">Engineered emergency blood requisition dispatch portal with real-time donor inventory tracking connecting verified donors to regional healthcare facilities.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">GoDrive (Rental Cars Management Platform):</span>{' '}
                <span className="text-slate-600 font-medium">[HTML5, CSS3, JavaScript, LocalStorage] — </span>
                <span className="text-slate-800">Created customer reservation portal featuring dynamic tariff computation, vehicle catalog filtering, and digital reservation agreements.</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-3.5 resume-section">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5">
              Education
            </h2>
            
            <div className="space-y-1 text-xs">
              {education.map((edu, i) => (
                <div key={i} className="flex flex-wrap justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span> – {edu.institution}, {edu.location}
                  </div>
                  <div className="text-right text-slate-600 font-medium text-[11px]">
                    <span className="font-bold text-slate-900 mr-2">{edu.score}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5">
              Certifications & Training
            </h2>
            
            <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-0.5">
              {certifications.map((c, i) => (
                <li key={i}>
                  <strong className="text-slate-900">{c.title}</strong> – {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
