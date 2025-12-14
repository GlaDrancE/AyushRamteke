'use client';

import { useState, useEffect } from 'react';
import ProfileBlock from '@/components/ProfileBlock';
import SideNavbar from '@/components/SideNavbar';

export default function ContactPage() {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <div className="inner-body-container">
          <div className="contact-details">
            <div className="location contact-details-blocks">
              <div>
                <p>Country:</p>
                <p>India</p>
              </div>
              <div>
                <p>City:</p>
                <p>Nagpur</p>
              </div>
              <div>
                <p>Street:</p>
                <p>KT Nagar, Katol Road</p>
              </div>
            </div>
            <div className="phone contact-details-blocks">
              <div>
                <p>Email:</p>
                <p>ayushr1606@gmail.com</p>
              </div>
              <div>
                <p>Whatsapp:</p>
                <p>+91 9049606217</p>
              </div>
              <div>
                <p>Phone:</p>
                <p>+91 9359339507</p>
              </div>
            </div>
            <div className="social-media contact-details-blocks">
              <div>
                <p>Telegram:</p>
                <p>@GlaDrancE</p>
              </div>
              <div>
                <p>Instagram:</p>
                <p>/Glad__Code</p>
              </div>
              <div>
                <p>LinkedIn:</p>
                <p>/ayush-ramteke</p>
              </div>
              <div>
                <p>GitHub:</p>
                <p>/GlaDrancE</p>
              </div>
            </div>
          </div>
          <form action="#" id="contact-form" onSubmit={handleSubmit}>
            <h1>Get In Touch</h1>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    </>
  );
}

