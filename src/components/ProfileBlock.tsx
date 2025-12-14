'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileBlockProps {
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
}

export default function ProfileBlock({ showProfile, setShowProfile }: ProfileBlockProps) {
  const profileBlockRef = useRef<HTMLDivElement>(null);
  const mobileProfileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileBlockRef.current &&
        mobileProfileRef.current &&
        !profileBlockRef.current.contains(event.target as Node) &&
        !mobileProfileRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setShowProfile]);

  useEffect(() => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
      const element = bar as HTMLElement;
      const dataValue = element.getAttribute('data-percentage');
      if (dataValue) {
        element.style.setProperty('--skillLevel', dataValue + '%');
      }
    });
  }, []);

  const skills = [


    // Modern Frontend Frameworks (Highly Demanded)
    { name: 'React', percentage: 80 },
    { name: 'Next.js', percentage: 75 },
    { name: 'Tailwind CSS', percentage: 75 },

    // Backend Technologies (Critical for Full Stack)
    { name: 'Node.js', percentage: 80 },
    { name: 'Express.js', percentage: 75 },

    // Databases (Essential for Backend)
    { name: 'PostgreSQL', percentage: 75 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'MySQL', percentage: 70 },
    { name: 'Redis', percentage: 65 },

    // Cloud & DevOps (High Demand)
    { name: 'AWS', percentage: 70 },
    { name: 'Docker', percentage: 75 },
    { name: 'Git', percentage: 85 },
    { name: 'Linux', percentage: 70 },

    // Core Web Technologies (Most Essential)
    { name: 'JavaScript', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'HTML5', percentage: 85 },
    { name: 'CSS3', percentage: 80 },
    // Additional Valuable Skills
    { name: 'Python', percentage: 65 },
    { name: 'Firebase', percentage: 70 },
    { name: 'Figma', percentage: 75 },
    { name: 'Bootstrap', percentage: 80 },

    // Supporting Technologies
    { name: 'Webpack', percentage: 65 },
    { name: 'Nginx', percentage: 60 },
    { name: 'npm', percentage: 80 },
    { name: 'Vue.js', percentage: 60 },
    { name: 'C++', percentage: 65 },
    { name: 'C', percentage: 70 },
    { name: 'Babel', percentage: 60 },
    { name: 'PHP', percentage: 55 },
    { name: 'Google Cloud', percentage: 60 },
  ];

  return (
    <>
      <div
        id="mobile-profile"
        ref={mobileProfileRef}
        onClick={() => setShowProfile(!showProfile)}
      >
        <Image src="/images/proflie.png" alt="Profile" width={32} height={32} />
      </div>
      {showProfile && (
        <div
          className="profile-backdrop"
          onClick={() => setShowProfile(false)}
        />
      )}
      <aside
        className={`profile-block ${showProfile ? 'showProfileBlock' : ''}`}
        ref={profileBlockRef}
      >
        <div className="profile-section">
          <div className="profile-img">
            <Image src="/images/profile.jpg" alt="Profile" width={120} height={120} />
          </div>
          <div className="profile-name">Ayush Ramteke</div>
          <div className="profile-bio">Full stack web developer and Programmer</div>
          <Image
            src="/images/cross.png"
            onClick={() => setShowProfile(false)}
            alt="Close"
            width={20}
            height={20}
            className="close_profile"
            style={{
              position: 'absolute',
              top: 0,
              right: '1rem',
              filter: 'invert(1)',
              cursor: 'pointer',
            }}
          />
        </div>
        <div className="profile-details">
          <div className="profile-info-grid">
            {/* Location */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="profile-info-content">
                <p>Nagpur, India</p>
              </div>
            </div>

            {/* Current Role */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="profile-info-content">
                <p className="profile-info-primary">Full Stack Developer</p>
                <p className="profile-info-secondary">@ Entugo Pvt. Ltd.</p>
              </div>
            </div>

            {/* Experience & Availability */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="profile-info-content">
                <p>3+ Years <span className="profile-info-separator">•</span> Available for Freelance</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div className="profile-info-content">
                <div className="profile-specialization-tags">
                  <span className="specialization-tag">Full Stack</span>
                  <span className="specialization-tag">Web Apps</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="profile-info-content">
                <p>B-Tech CSE </p>
              </div>
            </div>

            {/* Email */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="profile-info-content">
                <a href="mailto:ayushr1606@gmail.com" className="profile-info-link">ayushr1606@gmail.com</a>
              </div>
            </div>

            {/* Portfolio Highlights */}
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <i className="fa-solid fa-folder-open"></i>
              </div>
              <div className="profile-info-content">
                <p><span className="profile-info-highlight">15+ Projects</span> <span className="profile-info-separator">|</span> <span className="profile-info-highlight">20+ Clients</span></p>
              </div>
            </div>
          </div>
          <hr />
          {/* <div className="profile-languages">
            <div className="lang">
              <div className="pie animate" style={{ '--p': 80, '--c': '#FFC700' } as React.CSSProperties}>
                80%
              </div>
              <p className="lang-name">Hindi</p>
            </div>
            <div className="lang">
              <div className="pie animate" style={{ '--p': 60, '--c': '#FFC700' } as React.CSSProperties}>
                60%
              </div>
              <p className="lang-name">English</p>
            </div>
            <div className="lang">
              <div className="pie animate" style={{ '--p': 70, '--c': '#FFC700' } as React.CSSProperties}>
                70%
              </div>
              <p className="lang-name">Marathi</p>
            </div>
          </div> */}
          <hr />
          <div className="profile-skills">
            <h2>Skills:</h2>
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <div key={index} className="my-skills">
                  <div className="name-percentage">
                    <p>{skill.name}</p>
                    <p>{skill.percentage}%</p>
                  </div>
                  <div className="skill-bar bar" data-percentage={skill.percentage}></div>
                </div>
              ))}
            </div>
          </div>
          <Link href="#" className="d-block text-center text-secondary tr">
            <p>Download CV</p>
          </Link>
        </div>
        <div className="profile-social-media">
          <ul>
            <a href="https://www.linkedin.com/in/ayush-ramteke/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://x.com/GladCode11011" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://discord.com/users/gladcode" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="https://www.instagram.com/glad__code/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@gladcode8451" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="mailto:ayush.ramteke1606@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-google"></i>
            </a>
          </ul>
        </div>
      </aside>
    </>
  );
}

