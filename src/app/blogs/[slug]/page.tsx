'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideNavbar from '@/components/SideNavbar';

export default function BlogContentPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const recommendedBlogs = [
    {
      title: 'Blog Heading',
      date: '20 Nov 2023',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Blog Heading',
      date: '20 Nov 2023',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Blog Heading',
      date: '20 Nov 2023',
      image: '/images/blog1.jpg',
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
        <section className="blog-body">
          <div className="home-link">
            <Link href="/">Home</Link>
            <hr className="border border-light" />
          </div>
          <div className="blog-content-body">
            <header className="blog-header">
              <h1 className="blog-heading">Blog Heading</h1>
              <div className="author-details">
                <div className="author-img">
                  <Image src="/images/logo.png" alt="Author" width={32} height={32} />
                </div>
                By
                <div className="author-name">GladCode</div>
                <div className="publish-date">12 Nov 2023</div>
              </div>
            </header>
            <p className="blog-content">
              We&apos;ve come so far I hope you tried to solve the previous questions I have given to you. Now it&apos;s
              time to move further.
              <br />
              <br />
              In this tutorial, we will learn about what is ADT and the concept of ARRAYs ADT.
              <br />
              <br />
              ADT - Abstract Datatypes.
              <br />
              <br />
              what is ADT or Abstract Datatype?
              <br />
              <br />
              In simple words, Abstract datatype is the mathematical model of data structures that specifies the type
              of data stores, and the operations supported on them.
              <br />
              <br />
              There are some examples of ADTs like - Arrays, Lists, queues, Sets, Stacks, Tables, Trees, Vectors, etc.
              <br />
              <br />
              You might have seen them in your programming career. Arrays and List are very common terms in programming.
              <br />
              <br />
              Now you know what is meant by abstract datatypes. But with abstract datatypes, you can see one more term
              i.e Arrays. What is an array?
              <br />
              <br />
              An array is a type of data structure that stores the data in contiguous memory locations, and every element
              of an array can be accessed using its index number, index number of an array starts with 0 to n.
              <br />
              <br />
              As you can see in the above image. Elements of an array stored in contiguous memory locations, you can also
              see indexes and a total number of elements in the image. After knowing what is array it is important to know
              the limitations of an array. An array is of fixed size, which means the size of an array never changes once
              it is created, even if we desire to change it. To understand this, assume we have an array of storing
              capacity of 5 elements, we already filled our array with 5 elements, now we are trying to push the 6th
              element inside an array, but since the size of an array is fixed, the 6th element never goes into an array.
              <br />
              <br />
              If still want to add extra items to your array then you need to create one bigger array and then copy all
              the elements of an existing array to it.
              <br />
              <br />
              If you&apos;re familiar with any kind of programming language, then you know there are some operations we can
              do with arrays. like- get(element) -&gt; get element from array using its index. set(index, value) -&gt; set
              value at specific index. In some other programming languages, there are more operations like - max() min()
              Search(element) Append(element) Resize() etc... do not confuse it with resize(), Resize means copying all
              elements of an existing array to a bigger array.
              <br />
              <br />
              There are two types of an array - 1) Static array - size cannot be changed. 2) Dynamic array - size can be
              changed.
              <br />
              <br />
              Now you&apos;re thinking how dynamic size can be altered if the size of an array is fixed. This is because a
              Dynamic array allocates memory during runtime using Heap memory. which means a Dynamic array creates a bigger
              and copies all the elements of an existing array to that bigger array during runtime. yes, I know this is
              awesome. But this also has its drawbacks we will discuss further.
              <br />
              <br />
              So that is it for today guys, now it&apos;s time to say goodbye, if you appreciate my work then please let
              your friends know about this course. If you are new to this course kindly check out previous tutorials, which
              will give you lots of new things about DSA. In the next chapter, we will discuss the implementation of an
              array, and how to allocate the array in heap memory, in the next chapter finally we play with code, we will
              code in c programming as I said earlier, you can code in your desire language. See ya in the next tut, take
              care and good bye.
            </p>
            <hr className="border border-light" />
          </div>
          <div className="blog-recommendation-container">
            <h3>You Might Also Like: </h3>
            <div className="blog-recommendation">
              {recommendedBlogs.map((blog, index) => (
                <Link key={index} href="#" className="br-card">
                  <div style={{ width: '300px', height: '200px', marginBottom: '1rem' }}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={300}
                      height={200}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      className="d-block my-4"
                    />
                  </div>
                  <h4>{blog.title}</h4>
                  <div className="publish-date">{blog.date}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <footer>Designed And Develop By: Ayush Ramteke</footer>
      </div>
    </>
  );
}


