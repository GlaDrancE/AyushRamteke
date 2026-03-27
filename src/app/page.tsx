'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';
import { projects } from '@/data/projects';

export default function Home() {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [bodyLeft, setBodyLeft] = useState('320px');
  const [bodyWidth, setBodyWidth] = useState('calc(100% - 320px - 100px)');
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [draftInput, setDraftInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Portfolio terminal initialized.',
    'Type `help` to see available commands.',
  ]);

  useEffect(() => {
    const updateBodyPosition = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth > 1200) {
          setBodyLeft(isNavOpen ? '100px' : '320px');
          setBodyWidth(isNavOpen ? 'calc(100% - 100px)' : 'calc(100% - 320px - 100px)');
        } else {
          setBodyLeft(isNavOpen ? '-220px' : '0px');
          setBodyWidth('calc(100% - 100px)');
        }
      }
    };

    updateBodyPosition();
    window.addEventListener('resize', updateBodyPosition);
    return () => window.removeEventListener('resize', updateBodyPosition);
  }, [isNavOpen]);

  // Filter to show only first 10 projects on home page
  const displayedProjects = projects.slice(0, 10);

  const testimonials = [
    {
      name: 'diegort99',
      comment:
        "Friendly and attentive seller and cheap and quality service, I sent him some photos of how I wanted my website to look and he gave me some templates that were exactly what I asked for. He placed the order on time and in great detail.",
    },
    {
      name: 'nawafali2',
      comment:
        "Amazing job.",
    },
    {
      name: 'andrewrom',
      comment:
        "Thanks, great work as always",
    },
    {
      name: 'cemcol',
      comment:
        "Good experience",
    },
    {
      name: 'web_dev46138',
      comment:
        "tnx :) .......",
    },
    {
      name: 'andrewrom',
      comment:
        "Great developer. I really like working with him. I hope for continued cooperation.",
    },
  ];

  const runTerminalCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    const projectDeepDives: Record<string, string[]> = {
      medilink: [
        'Problem: Medical records and prescriptions were fragmented across clinics.',
        'Solution: Built a healthcare platform with digital prescriptions, records, and secure auth.',
        'Impact: Faster doctor-patient workflows and real-time record access across devices.',
      ],
      entugo: [
        'Problem: A multi-portal business needed one scalable platform with clear ownership boundaries.',
        'Solution: Led architecture and delivery for 5 portals using TypeScript, Node.js, Docker, Prisma, PostgreSQL.',
        'Impact: Unified operations and reduced delivery friction across product teams.',
      ],
      newwton: [
        'Problem: Needed a premium web experience without sacrificing responsiveness.',
        'Solution: Built a modern web app with MERN + Three.js + GSAP + optimized UI flows.',
        'Impact: High-engagement UX with smooth interaction on production builds.',
      ],
    };
    const commandList = [
      'help',
      'whoami',
      'about',
      'projects',
      'project <name>',
      'experience',
      'skills',
      'stack',
      'github',
      'linkedin',
      'opensource',
      'achievements',
      'contact',
      'hire',
      'clear',
      'resume',
    ];

    if (!command) {
      setTerminalHistory((prev) => [...prev, '$']);
      setHistoryIndex(-1);
      return;
    }

    setCommandHistory((prev) => [...prev, rawCommand]);
    setHistoryIndex(-1);
    setDraftInput('');

    const append = (line: string) => setTerminalHistory((prev) => [...prev, `$ ${rawCommand}`, line]);
    const appendLines = (lines: string[]) =>
      setTerminalHistory((prev) => [...prev, `$ ${rawCommand}`, ...lines]);

    if (command.startsWith('project ')) {
      const projectName = command.replace('project ', '').trim();
      const deepDive = projectDeepDives[projectName];
      if (!deepDive) {
        append(`No deep dive found for "${projectName}". Try: project medilink | project entugo | project newwton`);
        return;
      }
      appendLines(deepDive);
      return;
    }

    switch (command) {
      case 'help':
        append(`Available: ${commandList.join(', ')}`);
        break;
      case 'whoami':
        append('Ayush Ramteke - Full-stack engineer building production SaaS and scalable backend systems.');
        break;
      case 'about':
        append(
          'I design and ship production-grade systems end-to-end. Current focus: backend-heavy SaaS, auth/payment workflows, and reliable cloud deployments.'
        );
        break;
      case 'projects':
        appendLines([
          'MediLink [SaaS, Healthcare, Full-stack]',
          'Entugo [SaaS, Multi-portal, Architecture]',
          'Tugo Eats Customer Portal [Product, Customer Experience]',
          'Newwton [MERN, Three.js, Animation]',
          'Use "project <name>" for a deep dive.',
        ]);
        break;
      case 'experience':
        append(
          'Built and shipped multiple SaaS products, designed APIs/microservices, handled auth/payments, and led delivery across frontend + backend + infra.'
        );
        break;
      case 'skills':
        appendLines([
          'Backend: Node.js, TypeScript, Express, Prisma, PostgreSQL',
          'Infra/DevOps: Docker, CI/CD, AWS basics, monitoring',
          'Frontend: React, Next.js, Tailwind, state management',
          'Architecture: API design, auth, background jobs, scaling patterns',
        ]);
        break;
      case 'stack':
        append('Production stack: TypeScript + Node.js + Express + Prisma + PostgreSQL + Next.js + Docker.');
        break;
      case 'github':
        append('GitHub: https://github.com/GlaDrancE');
        break;
      case 'linkedin':
        append('LinkedIn: https://www.linkedin.com/in/ayush-ramteke');
        break;
      case 'opensource':
        append('Open-source: Primarily product-focused work; selective public repos and reusable templates on GitHub.');
        break;
      case 'achievements':
        append('Achievements: Built and maintained real-world multi-portal SaaS systems used by active businesses.');
        break;
      case 'contact':
        appendLines([
          'Email: ayushramtekeofficial@gmail.com',
          'LinkedIn: https://www.linkedin.com/in/ayush-ramteke-408955251',
          'Or run: open /contact',
        ]);
        break;
      case 'hire':
        append(
          'Hire me if you need someone who can own architecture-to-production delivery, not just isolated tasks.'
        );
        break;
      case 'resume':
        append('Opening resume in a new tab...');
        window.open('/Gldsy.pdf', '_blank', 'noopener,noreferrer');
        break;
      case 'open /contact':
        append('Redirecting to contact page...');
        router.push('/contact');
        break;
      case 'open /projects':
        append('Redirecting to projects page...');
        router.push('/projects');
        break;
      case 'clear':
        setTerminalHistory([]);
        break;
      default:
        append(`Command not found: ${rawCommand}. Type help.`);
    }
  };

  return (
    <>
      <ProfileBlock showProfile={showProfile} setShowProfile={setShowProfile} />
      <SideNavbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <main
        className="body-container"
        style={{
          width: bodyWidth,
          left: bodyLeft,
        }}
      >
        <div className="welcome-container">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red"></span>
              <span className="terminal-dot terminal-dot-yellow"></span>
              <span className="terminal-dot terminal-dot-green"></span>
              <p>portfolio@ayush:~</p>
            </div>
            <div className="terminal-body">
              {terminalHistory.map((line, index) => (
                <p key={`${line}-${index}`} className={line.startsWith('$') ? 'terminal-line-command' : 'terminal-line-output'}>
                  {line}
                </p>
              ))}
              <form
                className="terminal-input-line"
                onSubmit={(e) => {
                  e.preventDefault();
                  runTerminalCommand(terminalInput);
                  setTerminalInput('');
                }}
              >
                <span className="terminal-prompt">$</span>
                <input
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      if (commandHistory.length === 0) return;

                      if (historyIndex === -1) {
                        setDraftInput(terminalInput);
                        const latestIndex = commandHistory.length - 1;
                        setHistoryIndex(latestIndex);
                        setTerminalInput(commandHistory[latestIndex]);
                        return;
                      }

                      if (historyIndex > 0) {
                        const nextIndex = historyIndex - 1;
                        setHistoryIndex(nextIndex);
                        setTerminalInput(commandHistory[nextIndex]);
                      }
                    }

                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      if (commandHistory.length === 0 || historyIndex === -1) return;

                      if (historyIndex < commandHistory.length - 1) {
                        const nextIndex = historyIndex + 1;
                        setHistoryIndex(nextIndex);
                        setTerminalInput(commandHistory[nextIndex]);
                        return;
                      }

                      setHistoryIndex(-1);
                      setTerminalInput(draftInput);
                    }
                  }}
                  className="terminal-input"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="type a command..."
                />
              </form>
            </div>
          </div>
        </div>
        <div className="whoamI-section section-heading">
          <h4 className="text-uppercase">Who Am I?</h4>
          <p>
            I design and ship production-grade systems, not demos — backend-heavy, scalable, and business-aware. Strong in Node.js, TypeScript, React, microservices, databases, cloud, and CI/CD. I’ve built and run real SaaS products end-to-end, handling the parts most developers avoid: architecture, auth, payments, infra, and failure cases. If it needs to work in the real world, I’m your guy.
          </p>
        </div>
        <div className="service-section section-heading">
          <h4>Services:</h4>
          <div className="services-blocks">
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-cloud"></i>
              </div>
              <h3>End-to-End SaaS Development</h3>
              <p>From idea to production: architecture, backend, frontend, deployment, and maintenance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-server"></i>
              </div>
              <h3>Backend & System Architecture</h3>
              <p>Scalable APIs, microservices, API gateways, auth systems, background jobs, queues, and rate-limiting.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Full-Stack Web Applications</h3>
              <p>High-performance apps using Node.js, TypeScript, React, Next.js, with clean, maintainable code.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Authentication & Authorization</h3>
              <p>JWT, OAuth (Google), role-based access, session handling, security hardening.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-credit-card"></i>
              </div>
              <h3>Payment & Subscription Integration</h3>
              <p>Stripe-based payments, webhooks, subscriptions, refunds, and edge-case handling.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-database"></i>
              </div>
              <h3>Database Design & Migrations</h3>
              <p>PostgreSQL + Prisma, schema design, safe migrations, performance tuning, data integrity.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Cloud Deployment & DevOps</h3>
              <p>Dockerized services, CI/CD pipelines, AWS deployments, environment management, monitoring.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-bell"></i>
              </div>
              <h3>Notification & Messaging Systems</h3>
              <p>Email (SendGrid/Mailgun), OTP flows, async processing, retry logic, delivery reliability.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <h3>System Audit & Cleanup</h3>
              <p>Fix broken architectures, clean up messy codebases, stabilize production systems.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Technical Consulting</h3>
              <p>Architecture decisions, tech stack selection, cost optimization, scalability & risk analysis.</p>
            </div>
          </div>
        </div>
        <div className="projects-section section-heading">
          <h4>Projects:</h4>
          <div className="projects-blocks">
            {displayedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="projects-card-link"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="projects-card"
                  style={{
                    background: `url('${project.image}') center center no-repeat`,
                    backgroundSize: 'cover',
                    cursor: 'pointer',
                  }}
                >
                  {(project.github || project.website) && (
                    <div className="project-links-overlay">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-overlay"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-overlay"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-globe"></i>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="testimonials-section section-heading">
          <h4>Testimonials:</h4>
          <div className="testimonials-block">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="comment-content">
                    <div className="name-ratings">
                      <div className="customer-name">{testimonial.name}</div>
                      <div className="ratings">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <p className="comment">{testimonial.comment}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </main>
    </>
  );
}
