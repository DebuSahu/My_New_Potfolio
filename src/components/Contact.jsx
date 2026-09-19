import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Copy, Check, 
  Linkedin, Github, MessageSquare, Sparkles, CheckCircle2, AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activationNeeded, setActivationNeeded] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGmailCompose = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Divyanshu,\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message || ''}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Divyanshu,\nMy name is ${formData.name || 'a visitor'} (${formData.email || 'no email'}).\n\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message || ''}`
    );
    window.open(`https://wa.me/919651541669?text=${text}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setError(null);
    setActivationNeeded(false);

    try {
      // Connect to email dispatch service
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

      let response;
      if (web3FormsKey) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Inquiry from ${formData.name}`,
            message: formData.message,
            from_name: formData.name
          })
        });
      } else {
        // Zero-setup FormSubmit API directly delivering to debusahu121@gmail.com
        response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Inquiry from ${formData.name}`,
            message: formData.message,
            _replyto: formData.email,
            _template: "table",
            _captcha: "false"
          })
        });
      }

      const result = await response.json();

      // Check if FormSubmit requires initial one-time email activation
      if (result.message && result.message.toLowerCase().includes('activation')) {
        setActivationNeeded(true);
        return;
      }

      if (response.ok && (result.success === "true" || result.success === true || response.status === 200)) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || "Failed to dispatch message.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Unable to dispatch automatically. You can click below to send directly from your mail client:");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Radiant glow backdrop */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Reach</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project in mind, an opportunity to discuss, or just want to talk backend systems & databases? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Direct Email</div>
                    <a 
                      href={personal.socials.email}
                      className="font-medium text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm sm:text-base break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-primary-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Call / Mobile</div>
                    <a 
                      href={`tel:${personal.rawPhone}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm sm:text-base font-mono"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Locations</div>
                  <div className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                    Current: {personal.locations.current}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Home: {personal.locations.permanent}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Messaging Channels */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect Directly Online
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 hover:bg-[#0077b5] dark:bg-slate-800/80 dark:hover:bg-[#0077b5] text-slate-700 hover:text-white dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 dark:bg-emerald-950/40 dark:hover:bg-emerald-600 text-emerald-800 hover:text-white dark:text-emerald-300 dark:hover:text-white border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                    Fill out the form below and I'll get back to you promptly.
                  </p>
                </div>
                <MessageSquare className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    Message Sent Directly to Inbox!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{formData.name || 'Friend'}</span>! Your message was delivered to <span className="text-slate-900 dark:text-white font-mono font-medium">{personal.email}</span>. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : activationNeeded ? (
                <div className="p-7 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    One-Time Activation Email Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    FormSubmit requires a quick one-time confirmation before routing messages. An email titled <strong>"FormSubmit: Please activate your form"</strong> has been sent to <span className="font-mono font-bold text-slate-900 dark:text-white">{personal.email}</span>.
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-amber-500/20 text-xs text-left max-w-md mx-auto space-y-1.5">
                    <p className="font-semibold text-amber-700 dark:text-amber-400">Quick 10-Second Step:</p>
                    <ol className="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs">
                      <li>Open Gmail for <strong>{personal.email}</strong></li>
                      <li>Check <strong>Inbox</strong> (or <strong>Spam / Updates</strong> folder)</li>
                      <li>Click the green <strong>"Activate Form"</strong> button</li>
                    </ol>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md"
                    >
                      Open Gmail
                    </a>
                    <button
                      onClick={() => setActivationNeeded(false)}
                      className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors"
                    >
                      Back to Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-200 space-y-2.5">
                      <div className="flex items-center gap-2 font-medium">
                        <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                        <span>{error}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors text-xs"
                        >
                          Compose in Gmail
                        </a>
                        <a
                          href={`https://wa.me/919651541669?text=${encodeURIComponent(`Hi Divyanshu, my name is ${formData.name} (${formData.email}).\n\n${formData.message}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors text-xs"
                        >
                          Send via WhatsApp
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, role, or how we can work together..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-500 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Delivering Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Direct Instant Channels Strip */}
                  <div className="pt-2">
                    <div className="flex items-center gap-3 my-2">
                      <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">or instant direct dispatch</span>
                      <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleGmailCompose}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all shadow-sm group"
                        title="Open message in Gmail compose window"
                      >
                        <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                        <span>Open in Gmail</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-800 hover:text-emerald-950 dark:text-emerald-300 dark:hover:text-white border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold transition-all shadow-sm group"
                        title="Open message in WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Or directly mail me at <a href={personal.socials.email} className="text-primary-600 dark:text-primary-400 underline">{personal.email}</a>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

