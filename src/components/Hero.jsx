import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Download, Github, Linkedin, Mail, 
  Sparkles, Database, CheckCircle2, ChevronDown 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;
  const canvasRef = useRef(null);

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Software Engineer @ MapmyIndia",
    "Java Backend & Spring Boot Specialist",
    "Database Administrator (PostgreSQL & MySQL)",
    "MCA Graduate | Jagran Institute of Management",
    "Full-Stack Web & REST API Architect"
  ];

  // Particle Canvas Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 13000), 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.45)';
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.32 * (1 - mdist / 140)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Interactive Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-60 dark:opacity-75"
      />

      {/* Radiant ambient glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-primary-600/20 via-indigo-600/20 to-cyan-400/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 dark:bg-primary-950/40 border border-primary-500/30 text-primary-400 text-xs sm:text-sm font-mono tracking-wide mb-6 shadow-inner animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Software Engineer @ MapmyIndia • Based in New Delhi</span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white mb-5">
          Hello, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-indigo-500 to-cyan-400 dark:from-primary-400 dark:via-indigo-300 dark:to-cyan-300">
            Divyanshu Sahu
          </span>
        </h1>

        {/* Typewriter Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-mono text-lg sm:text-2xl text-slate-700 dark:text-slate-300">
            <span className="text-primary-500 dark:text-primary-400">&gt; </span>
            <span>{displayedText}</span>
            <span className="inline-block w-2.5 h-5 ml-1 bg-primary-500 dark:bg-primary-400 animate-pulse align-middle"></span>
          </p>
        </div>

        {/* Summary Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-9 leading-relaxed">
          MCA graduate (73% First Class) with industry engineering experience at <span className="text-slate-900 dark:text-white font-semibold">MapmyIndia</span> and <span className="text-slate-900 dark:text-white font-semibold">Railworld India</span>. Specialized in resilient <span className="text-primary-600 dark:text-primary-400 font-semibold">Java backend microservices</span>, high-performance <span className="text-cyan-600 dark:text-cyan-300 font-semibold">relational databases (PostgreSQL/MySQL)</span>, and seamless web experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-500 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-sm sm:text-base border border-slate-300 dark:border-slate-700/70 hover:border-primary-500/60 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm sm:text-base border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-300 dark:border-slate-700/40 hover:border-primary-500/40 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-300 dark:border-slate-700/40 hover:border-primary-500/40 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.email}
            className="p-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-300 dark:border-slate-700/40 hover:border-primary-500/40 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 text-emerald-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-400 border border-emerald-300 dark:border-slate-700/40 transition-all duration-300 hover:scale-105 shadow-sm font-mono text-xs flex items-center gap-1.5"
            aria-label="WhatsApp Connect"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            WhatsApp Direct
          </a>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {personal.stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 sm:p-5 rounded-2xl text-center border border-slate-200 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500 dark:from-primary-400 dark:to-cyan-300 mb-1 group-hover:scale-105 transition-transform">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
            aria-label="Scroll to About Section"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
