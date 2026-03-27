'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';
import { getProjectBySlug } from '@/data/projects';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  const [showProfile, setShowProfile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [bodyLeft, setBodyLeft] = useState('320px');
  const [bodyWidth, setBodyWidth] = useState('calc(100% - 320px - 100px)');
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    if (!project) {
      router.push('/projects');
      return;
    }
  }, [project, router]);

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

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 600) {
          setSlidesPerView(1);
        } else if (window.innerWidth < 800) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(3);
        }
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  if (!project) {
    return null;
  }

  // Use project images if available, otherwise use a default set
  const projectImages = project.projectImages || [project.image];

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
        {/* Back Button */}
        <Link
          href="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--secondary-color)',
            textDecoration: 'none',
            marginBottom: '20px',
            fontFamily: 'var(--primary-font)',
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '10px' }}>
            {project.name}
          </h1>
          <p style={{ color: 'var(--fade-white)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            {project.description}
          </p>
          {(project.github || project.website) && (
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-tag"
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
                >
                  <i className="fa-solid fa-globe"></i>
                  Live Website
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Images Carousel */}
        {projectImages.length > 0 && (
          <div className="project-images" style={{ marginBottom: '40px' }}>
            <h3 className="project-headings">Project Screenshots</h3>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="projectSwiper"
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              {projectImages.map((image, index) => (
                <SwiperSlide key={index} style={{ background: '#2e2f31' }}>
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={800}
                    height={600}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Project Details Section */}
        <div className="project-desc-section">
          <h3 className="project-headings">Project Details</h3>
          <div className="project-description">
            {/* README Content */}
            <div className="project-details" style={{ width: project.technologies ? '70%' : '100%' }}>
              {project.readme ? (
                <div className="markdown-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h1: ({ children }) => (
                        <h1 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '2rem' }}>
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 style={{ color: 'var(--white)', marginBottom: '0.8rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 style={{ color: 'var(--white)', marginBottom: '0.6rem', marginTop: '1.2rem', fontSize: '1.2rem' }}>
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p style={{ color: 'var(--fade-white)', marginBottom: '1rem', lineHeight: '1.6' }}>
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul style={{ color: 'var(--fade-white)', marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol style={{ color: 'var(--fade-white)', marginLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li style={{ marginBottom: '0.5rem' }}>{children}</li>
                      ),
                      code: ({ children, className }) => {
                        const isInline = !className;
                        return isInline ? (
                          <code
                            style={{
                              background: 'rgba(255, 199, 0, 0.2)',
                              padding: '2px 6px',
                              borderRadius: '3px',
                              color: 'var(--secondary-color)',
                              fontSize: '0.9em',
                              fontFamily: 'monospace',
                            }}
                          >
                            {children}
                          </code>
                        ) : (
                          <code
                            style={{
                              display: 'block',
                              background: '#1a1a1a',
                              padding: '1rem',
                              borderRadius: '6px',
                              color: 'var(--fade-white)',
                              fontSize: '0.9em',
                              fontFamily: 'monospace',
                              overflow: 'auto',
                              marginBottom: '1rem',
                              border: '1px solid #333',
                            }}
                          >
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre style={{ marginBottom: '1rem' }}>{children}</pre>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--secondary-color)',
                            textDecoration: 'none',
                          }}
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote
                          style={{
                            borderLeft: '4px solid var(--secondary-color)',
                            paddingLeft: '1rem',
                            marginLeft: '0',
                            marginBottom: '1rem',
                            color: 'var(--fade-white)',
                            fontStyle: 'italic',
                          }}
                        >
                          {children}
                        </blockquote>
                      ),
                      hr: () => (
                        <hr
                          style={{
                            border: 'none',
                            borderTop: '1px solid #444',
                            margin: '2rem 0',
                          }}
                        />
                      ),
                      table: ({ children }) => (
                        <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                          <table
                            style={{
                              width: '100%',
                              borderCollapse: 'collapse',
                              color: 'var(--fade-white)',
                            }}
                          >
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th
                          style={{
                            border: '1px solid #444',
                            padding: '0.5rem',
                            background: '#2a2a2a',
                            color: 'var(--white)',
                            textAlign: 'left',
                          }}
                        >
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td
                          style={{
                            border: '1px solid #444',
                            padding: '0.5rem',
                          }}
                        >
                          {children}
                        </td>
                      ),
                      img: ({ src, alt }) => (
                        <Image
                          src={src as string}
                          alt={alt || ''}
                          width={800}
                          height={600}
                          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                        />
                      ),
                    }}
                  >
                    {project.readme}
                  </ReactMarkdown>
                </div>
              ) : (
                <div style={{ color: 'var(--fade-white)', lineHeight: '1.8' }}>
                  <p>
                    Detailed project documentation and README content will be displayed here.
                    You can add README content to the project data to see it rendered here with proper markdown formatting.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    To add README content, update the project data in <code>src/data/projects.ts</code>
                    and add the markdown content to the <code>readme</code> field.
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="order-details">
                <div className="inner-order-details">
                  <h4
                    style={{
                      color: 'var(--white)',
                      marginBottom: '20px',
                      fontSize: '1.2rem',
                    }}
                  >
                    Technologies Used
                  </h4>
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="name-percentage"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderBottom: index < project.technologies!.length - 1 ? '1px solid #444' : 'none',
                      }}
                    >
                      <p style={{ color: 'var(--fade-white)', margin: 0 }}>{tech}</p>
                      <i
                        className="fa-solid fa-check"
                        style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </div>
    </>
  );
}
