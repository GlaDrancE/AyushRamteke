'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';

export default function Home() {
  const [showProfile, setShowProfile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [bodyLeft, setBodyLeft] = useState('320px');
  const [bodyWidth, setBodyWidth] = useState('calc(100% - 320px - 100px)');

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

  const projects = [
    {
      name: 'MediLink',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765614392/Gemini_Generated_Image_caoxw9caoxw9caox_jhxhmg.png',
      github: 'https://github.com/GlaDrancE/Medilink',
      website: 'https://mediglad.vercel.app/',
    },
    {
      name: 'Entugo',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765685970/Gemini_Generated_Image_2xd74j2xd74j2xd7_rewde5.png',
      github: null,
      website: "https://entugo.com",
    },
    {
      name: 'Newwton',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686072/Screenshot_2025-12-14_095052_zxolzm.png',
      github: null,
      website: "https://newwton.com",
    },
    {
      name: 'Ritzy',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686072/Screenshot_2025-12-14_094958_cmoqla.png',
      github: null,
      website: "https://ritzydemo.netlify.app/",
    },
    {
      name: 'Helping Notes',
      image: '/images/projects/helpingnotes.png',
      github: "https://github.com/GlaDrancE/helpingNotes",
      website: "https://helpingnotes.netlify.app/",
    },
    {
      name: 'Pixls',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686393/Screenshot_2025-12-14_095512_bdebcn.png',
      github: "https://github.com/GlaDrancE/Pixls",
      website: "https://pixlss.netlify.app/",
    },
    {
      name: 'Clickmates',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686882/Screenshot_2025-12-14_100123_bw1c6s.png',
      github: "https://github.com/GlaDrancE/Pixls",
      website: "https://github.com/GlaDrancE/photographer-template",
    },
    {
      name: 'anime-website',
      image: '/images/projects/anime-website.png',
      github: null,
      website: null,
    },
    {
      name: 'Ecommerce Website',
      image: '/images/projects/ecom.png',
      github: null,
      website: "https://fluffy-nasturtium-ef31e1.netlify.app/",
    },
    {
      name: 'Playfull Words',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686824/Screenshot_2025-12-14_100325_bkdahi.png',
      github: null,
      website: "https://tourmaline-fox-9558c9.netlify.app/",
    },
  ];

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
          <h1 className="text-uppercase">READY TO BOOK AN ORDER</h1>
          <h3>
            <span></span>
            <span> Let&apos;s work together!</span>
          </h3>
          <Link href="/contact">Contact Me</Link>
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="projects-card"
                style={{
                  background: `url('${project.image}') center center no-repeat`,
                  backgroundSize: 'cover',
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
