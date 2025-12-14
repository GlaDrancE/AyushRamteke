'use client';

import { useState, useEffect } from 'react';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';

export default function ProjectsPage() {
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
      description:
        'MediLink is a bridge between doctors and clinics that provides a seamless way to store and access medical records anywhere and anytime. This innovative platform improves medical document management by enabling healthcare professionals to securely manage patient records with ease.',
      github: 'https://github.com/GlaDrancE/Medilink',
      website: 'https://mediglad.vercel.app/',
    },
    {
      name: 'Entugo',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765685970/Gemini_Generated_Image_2xd74j2xd74j2xd7_rewde5.png',
      description:
        'Entugo is a comprehensive platform built with modern technologies. As the lead developer, I created the entire application with 5 portals, managing the tech stack and maintaining teams. Built with TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and many more cutting-edge technologies.',
      github: null,
      website: 'https://entugo.com',
    },
    {
      name: 'Tugo Eats Customer Portal',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765685970/Gemini_Generated_Image_2xd74j2xd74j2xd7_rewde5.png',
      description:
        'Tugo Eats Customer Portal is a comprehensive platform built with modern technologies. As the lead developer, I created the entire application with 5 portals, managing the tech stack and maintaining teams. Built with TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and many more cutting-edge technologies.',
      github: null,
      website: 'https://customer.entugo.com',
    },
    {
      name: 'Entugo Client Portal',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765689708/image_qev958.png',
      description:
        'Entugo Client Portal is a comprehensive platform built with modern technologies. As the lead developer, I created the entire application with 5 portals, managing the tech stack and maintaining teams. Built with TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and many more cutting-edge technologies.',
      github: null,
      website: 'https://client.entugo.com',
    },

    {
      name: 'Newwton',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686072/Screenshot_2025-12-14_095052_zxolzm.png',
      description:
        'Newwton is a modern web application developed with MERN stack, featuring Figma designs, ThreeJS animations, GSAP transitions, and Tailwind CSS for a premium user experience.',
      github: null,
      website: 'https://newwton.com',
    },
    {
      name: 'Ritzy',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686072/Screenshot_2025-12-14_094958_cmoqla.png',
      description:
        'Ritzy is an elegant and modern web platform designed to provide a premium user experience with sleek design and smooth interactions.',
      github: null,
      website: 'https://ritzydemo.netlify.app/',
    },
    {
      name: 'Helping Notes',
      image: '/images/projects/helpingnotes.png',
      description:
        'Helping Notes is one of the best websites to share college or school notes to provide the best study content online. This is one of my recent projects and customer satisfaction is still maintained.',
      github: 'https://github.com/GlaDrancE/helpingNotes',
      website: 'https://helpingnotes.netlify.app/',
    },
    {
      name: 'Pixls',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686393/Screenshot_2025-12-14_095512_bdebcn.png',
      description:
        'Pixls is a modern image gallery and portfolio platform designed for photographers and visual artists to showcase their work beautifully.',
      github: 'https://github.com/GlaDrancE/Pixls',
      website: 'https://pixlss.netlify.app/',
    },
    {
      name: 'Clickmates',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686882/Screenshot_2025-12-14_100123_bw1c6s.png',
      description:
        'Clickmates is a professional photographer portfolio template designed to showcase photography work with elegance and style.',
      github: 'https://github.com/GlaDrancE/photographer-template',
      website: 'https://github.com/GlaDrancE/photographer-template',
    },
    {
      name: 'Anime Website',
      image: '/images/projects/anime-website.png',
      description:
        'An anime-themed website featuring modern design and interactive elements for anime enthusiasts.',
      github: null,
      website: null,
    },
    {
      name: 'Ecommerce Website',
      image: '/images/projects/ecom.png',
      description:
        'A fully functional ecommerce website with modern design, shopping cart functionality, and seamless user experience.',
      github: null,
      website: 'https://fluffy-nasturtium-ef31e1.netlify.app/',
    },
    {
      name: 'Playfull Words',
      image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686824/Screenshot_2025-12-14_100325_bkdahi.png',
      description:
        'Playfull Words is an interactive word game platform that provides engaging gameplay and challenges for users.',
      github: null,
      website: 'https://tourmaline-fox-9558c9.netlify.app/',
    },
  ];

  return (
    <>
      <ProfileBlock showProfile={showProfile} setShowProfile={setShowProfile} />
      <SideNavbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <div
        className="body-container"
        style={{
          width: bodyWidth,
          left: bodyLeft,
          padding: '1rem',
        }}
      >
        <div className="project-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                background: `url('${project.image}') center center no-repeat`,
                backgroundSize: 'cover',
              }}
            >
              <div className="project-desc">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {(project.github || project.website) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-tag"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-brands fa-github"></i>
                        GitHub
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-tag"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-globe"></i>
                        Website
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </div>
    </>
  );
}

