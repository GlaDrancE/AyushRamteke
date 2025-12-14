'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';

export default function ProjectDetailsPage() {
  const [showProfile, setShowProfile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

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

  const projectImages = [
    '/images/projects-images/ecom1.png',
    '/images/projects-images/ecom2.png',
    '/images/projects-images/ecom3.png',
    '/images/projects-images/ecom4.png',
  ];

  const testimonials = [
    {
      name: 'diegort99',
      comment:
        "Friendly and attentive seller and cheap and quality service, I sent him some photos of how I wanted my website to look and he gave me some templates that were exactly what I asked for. He placed the order on time and in great detail.",
    },
    {
      name: 'diegort99',
      comment:
        "Friendly and attentive seller and cheap and quality service, I sent him some photos of how I wanted my website to look and he gave me some templates that were exactly what I asked for. He placed the order on time and in great detail.",
    },
    {
      name: 'diegort99',
      comment:
        "Friendly and attentive seller and cheap and quality service, I sent him some photos of how I wanted my website to look and he gave me some templates that were exactly what I asked for. He placed the order on time and in great detail.",
    },
    {
      name: 'diegort99',
      comment:
        "Friendly and attentive seller and cheap and quality service, I sent him some photos of how I wanted my website to look and he gave me some templates that were exactly what I asked for. He placed the order on time and in great detail.",
    },
  ];

  const technologies = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 80 },
    { name: 'MongoDB', percentage: 80 },
  ];

  return (
    <>
      <ProfileBlock showProfile={showProfile} setShowProfile={setShowProfile} />
      <SideNavbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <div className="body-container">
        <div className="project-images">
          <h3 className="project-headings">Project Tiles</h3>
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
                  alt={`Project ${index + 1}`}
                  width={800}
                  height={600}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="project-desc-section">
          <h3 className="project-headings">Project Details</h3>
          <div className="project-description">
            <div className="project-details">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatibus pariatur! Ipsum laborum
                tempora temporibus aperiam natus atque, libero sed porro itaque eos nisi, debitis maiores vero dolor
                eius tempore voluptas officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                tenetur perferendis ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit placeat ipsum,
                cumque expedita explicabo facere. Eaque doloribus vero voluptatum voluptate quia ipsum amet doloremque
                iure, eligendi commodi consequuntur id error placeat quibusdam, officia exercitationem? Voluptas maxime
                possimus tempore quasi enim.
              </div>
            </div>
            <div className="order-details">
              <div className="inner-order-details">
                {technologies.map((tech, index) => (
                  <div key={index} className="name-percentage">
                    <p>{tech.name}</p>
                    <p>{tech.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-section section-heading">
          <h2>Client Reviews</h2>
          <div className="testimonials-block">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="testimonialsSwiper"
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
      </div>
    </>
  );
}


