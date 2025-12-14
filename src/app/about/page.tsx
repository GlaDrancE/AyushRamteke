'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';

export default function AboutPage() {
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

  const education = [
    {
      degree: 'B-Tech in Computer Science',
      institution: 'Government College Engineering Amravati',
      status: 'Pursuing | June \'27',
      grade: null,
    },
    {
      degree: 'Diploma in Computer',
      institution: 'Government Polytechnic Sakoli',
      status: 'June \'24',
      grade: '89.37%',
    },
    {
      degree: 'SSC (10th)',
      institution: 'Blue Diamond English High School, Nagpur',
      status: '2021',
      grade: '80.00%',
    },
  ];

  const workExperience = [
    {
      title: 'Full Stack Web Developer',
      company: 'Fiverr',
      period: 'July 2022 – Present',
      description: [
        'Designed and developed websites using HTML, CSS, JavaScript, and other technologies.',
        'Communicated with clients for requirements and updates.',
        'Delivered projects on time while maintaining quality.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Entugo Pvt. Ltd.',
      period: 'Jan 2024 - Present',
      description: [
        'Lead developer responsible for creating and managing the entire application with 5 portals.',
        'Managing the whole tech stack and maintaining development teams.',
        'Built scalable applications using TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and other modern technologies.',
        'Architected and implemented complex features across multiple portals ensuring seamless integration.',
      ],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Newwton Pvt. Ltd.',
      period: 'April 2023 - Dec 2024',
      description: [
        'Developed MERN applications with Figma, ThreeJS, GSAP, and Tailwind CSS.',
        'Integrated open-source projects into applications.',
        'Created POC projects for production understanding.',
      ],
    },
  ];

  const contactLinks = [
    { label: 'Email', value: 'ayushr1606@gmail.com', href: 'mailto:ayushr1606@gmail.com', icon: 'fa-envelope' },
    { label: 'WhatsApp', value: '+91 9049606217', href: 'https://wa.me/919049606217', icon: 'fa-whatsapp' },
    { label: 'Phone', value: '+91 9359339507', href: 'tel:+919359339507', icon: 'fa-phone' },
    { label: 'Telegram', value: '@GlaDrancE', href: 'https://t.me/GlaDrancE', icon: 'fa-telegram' },
    { label: 'Instagram', value: '/Glad__Code', href: 'https://instagram.com/Glad__Code', icon: 'fa-instagram' },
    { label: 'LinkedIn', value: '/ayush-ramteke', href: 'https://linkedin.com/in/ayush-ramteke', icon: 'fa-linkedin' },
    { label: 'GitHub', value: '/GlaDrancE', href: 'https://github.com/GlaDrancE', icon: 'fa-github' },
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
        <div className="about-page-container">
          {/* About Me Section */}
          <section className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I&apos;m a passionate Full Stack Web Developer with expertise in modern web technologies.
                  I specialize in creating responsive, user-friendly websites and web applications using HTML,
                  CSS, JavaScript, React, Node.js, and various other cutting-edge technologies.
                </p>
                <p>
                  With experience working on platforms like Fiverr and collaborating with companies like
                  Newwton Pvt. Ltd. and Entugo Pvt. Ltd., I&apos;ve developed a strong foundation in both
                  frontend and backend development. I&apos;m currently pursuing my B-Tech in Computer Science
                  while actively working on real-world projects.
                </p>
                <p>
                  I believe in providing clients with the best experience possible, which is why I offer
                  a free trial before starting any project. Whether you&apos;re looking to create a simple
                  website or a complex, dynamic application, I have the technical know-how and creative
                  vision to bring your ideas to life.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Links Section */}
          <section className="about-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-links-grid">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-link-card"
                >
                  <div className="contact-icon">
                    <i className={`fa-brands ${contact.icon}`}></i>
                  </div>
                  <div className="contact-info">
                    <p className="contact-label">{contact.label}</p>
                    <p className="contact-value">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Education & Experience Side by Side */}
          <section className="about-section">
            <div className="education-experience-container">
              {/* Education Section */}
              <div className="education-column">
                <h2 className="section-title">Education</h2>
                <div className="education-timeline">
                  {education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <div className="education-marker"></div>
                      <div className="education-content">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <p className="education-institution">{edu.institution}</p>
                        <div className="education-details">
                          {edu.grade && <span className="education-grade">{edu.grade}</span>}
                          <span className="education-status">{edu.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="experience-column">
                <h2 className="section-title">Work Experience</h2>
                <div className="experience-timeline">
                  {workExperience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <div className="experience-marker"></div>
                      <div className="experience-content">
                        <h3 className="experience-title">{exp.title}</h3>
                        <p className="experience-company">{exp.company}</p>
                        <p className="experience-period">{exp.period}</p>
                        {exp.description.length > 0 && (
                          <ul className="experience-description">
                            {exp.description.map((desc, descIndex) => (
                              <li key={descIndex}>{desc}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="about-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-links">
              <Link href="/projects" className="project-link-card">
                <div className="project-link-icon">
                  <i className="fa-solid fa-folder-open"></i>
                </div>
                <div className="project-link-info">
                  <h3>View All Projects</h3>
                  <p>Explore my portfolio of web development projects</p>
                </div>
                <i className="fa-solid fa-arrow-right project-link-arrow"></i>
              </Link>
            </div>
          </section>
        </div>
        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </main>
    </>
  );
}

