"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if(e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-[2px] h-8 bg-[#a3ff12]"></div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm leading-tight font-sans tracking-wide">Varshitha Chavali</span>
            <span className="text-gray-500 text-[10px] tracking-widest font-mono uppercase">Portfolio</span>
          </div>
        </div>
        
        <ul className="hidden md:flex gap-8 text-gray-400 text-xs tracking-[0.2em] font-mono">
          <li><a href="#about" className="hover:text-white transition-colors">ABOUT</a></li>
          <li><a href="#skills" className="hover:text-white transition-colors">SKILLS</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">PROJECTS</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></li>
        </ul>
        
        <div className="flex items-center gap-6">
          <span className="text-yellow-500 text-xl cursor-pointer">🌙</span>
          <a href="#contact" className="border border-[#a3ff12] text-[#a3ff12] px-4 py-2 text-xs font-bold tracking-widest rounded uppercase hover:bg-[#a3ff12]/10 transition-colors">
            Let's Connect
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-24 overflow-hidden max-w-[1400px] mx-auto">
        <div className="flex w-full justify-between items-center h-full">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl z-10 space-y-8 mt-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a3ff12]/30 bg-[#a3ff12]/5">
              <div className="w-2 h-2 rounded-full bg-[#a3ff12] animate-pulse"></div>
              <span className="text-[#a3ff12] text-[10px] font-mono font-bold tracking-widest">OPEN TO INTERNSHIPS</span>
            </div>

            {/* Name */}
            <h1 className="flex flex-col leading-[1.1] font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-white text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tight">Varshitha</span>
              <span className="text-[#a3ff12] text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-bold italic tracking-tight -mt-4 md:-mt-8">Chavali</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg font-sans">
              <span className="text-white font-semibold">Full Stack Developer</span> building products at the intersection of AI, real-time data, and modern web — with a <span className="text-white font-semibold">startup mindset</span> and a <span className="text-white font-semibold">bias for shipping</span>.
            </p>

            {/* Bottom Status */}
            <div className="flex items-center gap-6 pt-12">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1a1a] border border-white/5">
                <span className="text-[#a3ff12] text-sm">👁</span>
                <span className="text-gray-400 text-xs font-mono font-semibold">1,240 VISITORS</span>
              </div>
              <div className="text-[#a3ff12] font-mono text-xs">
                Building <span className="text-gray-500">→</span> "AI-Powered Systems"
              </div>
            </div>
            
            {/* Green Line decoration */}
            <div className="w-48 h-[2px] bg-gradient-to-r from-[#a3ff12] to-transparent mt-4 opacity-50"></div>
          </div>

          {/* Right Image */}
          <div className="absolute bottom-0 right-10 w-[35%] max-w-[500px] z-0 hidden md:block">
            <img 
              src="/profile.jpg" 
              alt="Varshitha Chavali" 
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
            />
            {/* Optional slight dark gradient at bottom to blend into background */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </div>

        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
      <div className="sec-wrap fade-up">
        <div className="sec-header">
          <span className="sec-num">01</span>
          <h2 className="sec-title">About</h2>
          <div className="sec-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a <strong>third-year B.Tech Computer Science student</strong> focused on building real-world applications that combine data, backend systems, and AI.</p>
            <p>I enjoy solving problems that involve transforming raw data into meaningful insights and designing systems that automate decision-making.</p>
            <p>My work focuses on AI-powered applications, dashboards, and real-time systems that deliver practical value.</p>
          </div>
          <div>
            <div className="about-info-row"><span className="info-lbl">Location</span><span className="info-val">India</span></div>
            <div className="about-info-row"><span className="info-lbl">Status</span><span className="info-val status-open">Open to internships</span></div>
            <div className="about-info-row"><span className="info-lbl">Degree</span><span className="info-val">B.Tech CS · 3rd Year</span></div>
            <div className="about-info-row"><span className="info-lbl">Email</span><span className="info-val" style={{fontSize: '12px'}}>varshithachavali07@gmail.com</span></div>
            <div className="about-info-row"><span className="info-lbl">GitHub</span><span className="info-val">varshitha0101</span></div>
          </div>
        </div>
      </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
      <div className="sec-wrap fade-up">
        <div className="sec-header">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Skills</h2>
          <div className="sec-line"></div>
        </div>
        <div className="skills-wrap">
          <div className="skill-block">
            <div className="skill-block-title">Frontend</div>
            <div className="skill-list">
              <span className="skill-item">React</span><span className="skill-item">Next.js</span><span className="skill-item">Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-block-title">Backend</div>
            <div className="skill-list">
              <span className="skill-item">Node.js</span><span className="skill-item">Express.js</span><span className="skill-item">Python</span>
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-block-title">Database</div>
            <div className="skill-list">
              <span className="skill-item">PostgreSQL</span><span className="skill-item">MongoDB</span><span className="skill-item">MySQL</span>
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-block-title">Tools & Platforms</div>
            <div className="skill-list">
              <span className="skill-item">Git & GitHub</span><span className="skill-item">Docker (Basic)</span><span className="skill-item">Postman</span>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
      <div className="sec-wrap fade-up">
        <div className="sec-header">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-line"></div>
        </div>
        <div className="project-list">
          <div className="proj-item">
            <div className="proj-row1">
              <div className="proj-name">SalesPulse AI</div>
              <div className="proj-badges"><span className="proj-badge ac">AI / ML</span><span className="proj-badge">Full Stack</span></div>
            </div>
            <p className="proj-desc">AI-powered system for transforming raw sales data into structured insights and actionable recommendations.</p>
            <ul className="proj-features">
              <li>Designed an AI pipeline to process raw sales data into structured insights</li>
              <li>Built a dashboard to visualize deal scoring and buying signals</li>
              <li>Integrated Salesforce APIs for real-world workflows</li>
            </ul>
            <div className="proj-stack">
              <span className="stack-tag">Next.js</span><span className="stack-tag">Node.js</span><span className="stack-tag">AI Pipeline</span><span className="stack-tag">Salesforce APIs</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://salespulseai.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#a3ff12] text-black text-sm font-bold tracking-widest uppercase rounded hover:bg-[#92e610] transition-colors shadow-[0_0_15px_rgba(163,255,18,0.3)]">
                Live Demo ↗
              </a>
              <a href="https://github.com/varshitha0101/SalesPulseAI" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase rounded hover:border-[#a3ff12] hover:text-[#a3ff12] transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="proj-item">
            <div className="proj-row1">
              <div className="proj-name">Mindful AI</div>
              <div className="proj-badges"><span className="proj-badge ac">NLP</span><span className="proj-badge">React</span></div>
            </div>
            <p className="proj-desc">AI-based system for emotion detection and cognitive distortion analysis.</p>
            <ul className="proj-features">
              <li>Implemented emotion classification using RoBERTa</li>
              <li>Built backend with Flask for inference and response generation</li>
              <li>Combined NLP outputs with CBT-based logic</li>
            </ul>
            <div className="proj-stack">
              <span className="stack-tag">React</span><span className="stack-tag">Flask</span><span className="stack-tag">RoBERTa</span><span className="stack-tag">NLP</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://mindfulai-cbt.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#a3ff12] text-black text-sm font-bold tracking-widest uppercase rounded hover:bg-[#92e610] transition-colors shadow-[0_0_15px_rgba(163,255,18,0.3)]">
                Live Demo ↗
              </a>
              <a href="https://github.com/varshitha0101/MindfulAI" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase rounded hover:border-[#a3ff12] hover:text-[#a3ff12] transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="proj-item">
            <div className="proj-row1">
              <div className="proj-name">ShadowNet</div>
              <div className="proj-badges"><span className="proj-badge ac">Cybersecurity</span><span className="proj-badge">WebSockets</span></div>
            </div>
            <p className="proj-desc">Real-time SOC dashboard for network monitoring and anomaly detection.</p>
            <ul className="proj-features">
              <li>Built full-stack dashboard with WebSocket-based real-time updates</li>
              <li>Developed alert prioritization for anomaly detection</li>
              <li>Integrated backend APIs and ML models</li>
            </ul>
            <div className="proj-stack">
              <span className="stack-tag">Next.js</span><span className="stack-tag">Machine Learning</span><span className="stack-tag">WebSockets</span><span className="stack-tag">APIs</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://shadownets.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#a3ff12] text-black text-sm font-bold tracking-widest uppercase rounded hover:bg-[#92e610] transition-colors shadow-[0_0_15px_rgba(163,255,18,0.3)]">
                Live Demo ↗
              </a>
              <a href="https://github.com/varshitha0101/ShadowNet" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase rounded hover:border-[#a3ff12] hover:text-[#a3ff12] transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* EXPERIENCE & ACHIEVEMENTS */}
      <section id="experience">
      <div className="sec-wrap fade-up">
        <div className="sec-header">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Experience & Achievements</h2>
          <div className="sec-line"></div>
        </div>
        
        <div className="exp-item">
          <div className="exp-dot-col"><div className="exp-dot"></div><div className="exp-line"></div></div>
          <div>
            <div className="exp-title">GLITCH Hackathon 2026</div>
            <div className="exp-meta">Winner · Cybersecurity Track</div>
            <p className="exp-desc">Secured first place in the cybersecurity track, demonstrating strong problem-solving and rapid development skills under pressure.</p>
            <div className="exp-tags">
              <span className="exp-tag">Cybersecurity</span><span className="exp-tag">Hackathon</span><span className="exp-tag">Winner</span>
            </div>
          </div>
        </div>
        
        <div className="exp-item">
          <div className="exp-dot-col"><div className="exp-dot" style={{background: 'var(--muted2)'}}></div><div className="exp-line"></div></div>
          <div>
            <div className="exp-title">Neurax 2.0 & DTSRP Program</div>
            <div className="exp-meta">Finalist & Recognized Project</div>
            <p className="exp-desc">Reached the finals of Neurax 2.0 tackling a complex Salesforce problem statement, and received DTSRP recognition for the Mindful AI project.</p>
            <div className="exp-tags">
              <span className="exp-tag">Salesforce</span><span className="exp-tag">NLP</span><span className="exp-tag">Recognition</span>
            </div>
          </div>
        </div>

        <div className="exp-item">
          <div className="exp-dot-col"><div className="exp-dot" style={{background: 'var(--muted2)'}}></div></div>
          <div>
            <div className="exp-title">Full Stack Developer roles</div>
            <div className="exp-meta">SalesPulse AI · Mindful AI · ShadowNet</div>
            <p className="exp-desc">Continuously acting as Frontend and Full Stack Developer across multiple advanced AI-driven systems and products, delivering real-world value.</p>
          </div>
        </div>

      </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
      <div className="sec-wrap fade-up">
        <div className="sec-header">
          <span className="sec-num">05</span>
          <h2 className="sec-title">Contact</h2>
          <div className="sec-line"></div>
        </div>
        <div className="contact-wrap">
          <div>
            <h3 className="contact-headline">Let's build<br /><span>something</span><br />impactful.</h3>
            <p className="contact-sub">Open to internships, startup collaborations, and interesting problems. Reach out — I reply fast.</p>
            <div className="contact-links">
              <a href="mailto:varshithachavali07@gmail.com" className="contact-link">
                <span className="cl-icon">@</span>
                <div><div className="cl-lbl">Email</div><div className="cl-val">varshithachavali07@gmail.com</div></div>
              </a>
              <a href="https://github.com/varshitha0101" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="cl-icon">GH</span>
                <div><div className="cl-lbl">GitHub</div><div className="cl-val">github.com/varshitha0101</div></div>
              </a>
              <a href="https://www.linkedin.com/in/varshitha-chavali-240307vc" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="cl-icon">IN</span>
                <div><div className="cl-lbl">LinkedIn</div><div className="cl-val">linkedin.com/in/varshitha-chavali-240307vc</div></div>
              </a>
            </div>
          </div>
          <div>
            <div style={{fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '1rem'}}>Currently focused on</div>
            <div className="focus-items">
              <div className="focus-item-s"><div className="fn">01</div>Building production-ready full stack AI applications</div>
              <div className="focus-item-s"><div className="fn">02</div>Translating complex data into real-world insights</div>
              <div className="focus-item-s"><div className="fn">03</div>Developing secure real-time dashboards</div>
              <div className="focus-item-s"><div className="fn">04</div>Contributing to innovative, fast-paced projects</div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <footer className="text-center py-8 text-xs font-mono text-gray-500 border-t border-white/10">
        <span>Designed & built for</span> <span className="text-[#a3ff12]">Varshitha Chavali</span> <span>· {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
