'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SideNavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SideNavbar({ isOpen, setIsOpen }: SideNavbarProps) {
  const sideNavRef = useRef<HTMLDivElement>(null);
  const openNavBtnRef = useRef<HTMLDivElement>(null);
  const mobileNavBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideNavRef.current &&
        openNavBtnRef.current &&
        mobileNavBtnRef.current &&
        !sideNavRef.current.contains(event.target as Node) &&
        !openNavBtnRef.current.contains(event.target as Node) &&
        !mobileNavBtnRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, setIsOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div
        id="mobile-menu"
        ref={mobileNavBtnRef}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/images/hamburger.png"
          alt="Menu"
          width={25}
          height={25}
          style={{ filter: 'invert(1)' }}
        />
      </div>
      <div
        id="side-navbar"
        ref={sideNavRef}
        style={{ right: isOpen ? '0px' : '-320px' }}
      >
        <Image
          src="/images/cross.png"
          alt="close"
          id="close-nav"
          onClick={() => setIsOpen(false)}
          width={32}
          height={32}
        />
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="openNav" ref={openNavBtnRef} onClick={() => setIsOpen(true)}>
        <div>
          <Image src="/images/hamburger.png" alt="Menu" width={32} height={32} />
        </div>
      </div>
    </>
  );
}

