'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideNavbar from '@/components/SideNavbar';

export default function BlogsPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const blogs = [
    {
      title: 'ADT (Abstract datatypes) and Arrays: Data structures and Algorithms',
      author: 'GLADCODE',
      date: 'August 17, 2022',
      image: '/images/blog1.jpg',
      excerpt:
        "We've come so far I hope you tried to solve the previous questions I have given to you. Now it's time to move further. In this tutorial, we will learn about what is ADT and the concept of ARRAYs ADT. ADT - Abstract Datatypes. what is ADT or Abstract Datatype? In simple words, Abstract datatype is the mathematical model of data structures that specifies the type of data stores, and the operations supported on them....",
    },
  ];

  return (
    <>
      <SideNavbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <div className="body-container blog-body-container">
        <header id="channel-logo">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </header>
        <section id="blogs-list">
          {blogs.map((blog, index) => (
            <div key={index} className="card mb-3 blog-card" style={{ maxWidth: '100%' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{blog.title}</h3>
                    <p className="author">
                      BY - <Link href="#">{blog.author}</Link>
                    </p>
                    <p className="publish-date">{blog.date}</p>
                    <p className="card-text">{blog.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </div>
    </>
  );
}


