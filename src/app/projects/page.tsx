'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';
import { projects } from '@/data/projects';

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
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card-link"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="project-card"
                style={{
                  background: `url('${project.image}') center center no-repeat`,
                  backgroundSize: 'cover',
                  cursor: 'pointer',
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
            </Link>
          ))}
        </div>
        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </div>
    </>
  );
}

