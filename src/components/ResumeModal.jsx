import React, { useEffect } from 'react';
import { 
  X, Printer, Download, Mail, Phone, MapPin, 
  Linkedin, Github, Briefcase, GraduationCap, Award, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const { personal, experience, education, certifications, skills } = portfolioData;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn resume-modal-overlay">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity no-print"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col resume-modal-container">
        
        {/* Modal Toolbar (hidden on print) */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between no-print border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="font-heading font-semibold text-sm sm:text-base">
              Divyanshu Sahu • Verified Resume
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
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

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed space-y-6 bg-white selection:bg-primary-200 resume-document">
          
          {/* Header with Photo */}
          <div className="resume-section border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
                  {personal.name}
                </h1>
                <p className="text-primary-700 font-semibold text-base sm:text-lg mt-1">
                  Software Developer || MCA Graduate || Java & Spring Boot Specialist || PostgreSQL & MySQL DBA
                </p>
              </div>
              {(personal.avatarOriginal || personal.avatar) && (
                <img
                  src={personal.avatarOriginal || personal.avatar}
                  alt="Divyanshu Sahu"
                  className="w-20 h-24 sm:w-24 sm:h-28 object-contain shrink-0 rounded-lg shadow-sm"
                />
              )}
            </div>

            {/* Contact Info Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-800" />
                <span>Kanpur, (U.P.)-208004 & New Delhi, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-800" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-800" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-slate-800" />
                <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="text-primary-600 hover:underline">
                  linkedin.com/in/divyanshu-sahu
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <a href={personal.socials.github} target="_blank" rel="noreferrer" className="text-primary-600 hover:underline">
                  github.com/DebuSahu
                </a>
              </div>
            </div>
          </div>

          {/* Career Summary */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Career Summary
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Diligent and motivated Software Engineer and MCA graduate (73% First Class) with practical industry experience at MapmyIndia and Railworld India. Specialized in backend enterprise development in Java and Spring Boot, high-efficiency database administration across PostgreSQL, MySQL, and Oracle, and reactive web technologies. Proven problem-solving ability in high-concurrency and agile SDLC environments.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700">
              <div><strong className="text-slate-900">Programming Languages:</strong> Java (Core & Advanced), C, C++, JavaScript (ES6+), SQL</div>
              <div><strong className="text-slate-900">Frameworks & Backend:</strong> Spring Framework, Spring Boot, RESTful APIs, Microservices, Hibernate/JPA</div>
              <div><strong className="text-slate-900">Databases & DBA:</strong> PostgreSQL, MySQL, Oracle, Database Administration, Indexing & Tuning</div>
              <div><strong className="text-slate-900">Web Technologies:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Responsive Design</div>
              <div><strong className="text-slate-900">IDEs & Server Tools:</strong> VS Code, Eclipse, NetBeans IDE, Apache Tomcat, WampServer, Postman</div>
              <div><strong className="text-slate-900">Version Control & OS:</strong> Git, GitHub, Windows Operating Systems, Agile / Scrum</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-3.5">
              {experience.map((job) => (
                <div key={job.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {job.role} — <span className="text-primary-700 font-semibold">{job.company}</span>
                    </span>
                    <span className="text-slate-500 font-mono text-xs">{job.duration} | {job.location}</span>
                  </div>
                  <p className="text-slate-600 mt-1">{job.description}</p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 mt-1.5 ml-2">
                    {job.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Key Academic & Software Projects
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900">GymNation (Gym Management System):</strong>
                <span className="text-slate-600"> [Java, NetBeans IDE, MySQL, JDBC, Swing] — </span>
                <span className="text-slate-700">Full-featured management desktop platform to automate gym administrative tasks, member subscription lifecycles, trainer schedules, and billing workflows.</span>
              </div>
              <div>
                <strong className="text-slate-900">Red Drop (Blood Bank Management System):</strong>
                <span className="text-slate-600"> [HTML5, CSS3, JavaScript, Figma] — </span>
                <span className="text-slate-700">Modern digital blood donation inventory tracker and emergency requisition dispatch system connecting donors with hospital blood banks.</span>
              </div>
              <div>
                <strong className="text-slate-900">GoDrive (Rental Cars Management System):</strong>
                <span className="text-slate-600"> [HTML5, CSS3, JavaScript, LocalStorage] — </span>
                <span className="text-slate-700">Interactive platform streamlining vehicle fleet reservations, automated tariff calculations, and customer rental agreements.</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-slate-900">{edu.degree}</strong> – {edu.institution}, {edu.location}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-primary-700 mr-2">{edu.score}</span>
                    <span className="text-slate-500 font-mono text-xs">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Certifications & Training
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1">
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

