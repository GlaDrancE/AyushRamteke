# Portfolio Website - Next.js Version

This is a modern Next.js version of the portfolio website, converted from the original HTML/CSS implementation.

## Features

- **Home Page**: Welcome section, about, services, projects showcase, and testimonials
- **Projects Page**: Grid view of all projects
- **Project Details**: Detailed view with image carousel and client reviews
- **Blogs Page**: List of blog posts
- **Blog Content**: Individual blog post view with recommendations
- **Contact Page**: Contact form and contact details
- **Responsive Design**: Fully responsive with mobile navigation
- **Profile Sidebar**: Skills, languages, and social media links
- **Swiper Integration**: For testimonials and project image carousels

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Swiper.js** - For carousels
- **Font Awesome** - For icons

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── projects/
│   │   │   ├── page.tsx      # Projects list
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Project details
│   │   ├── blogs/
│   │   │   ├── page.tsx      # Blogs list
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Blog content
│   │   └── contact/
│   │       └── page.tsx      # Contact page
│   └── components/
│       ├── ProfileBlock.tsx   # Profile sidebar component
│       └── SideNavbar.tsx    # Side navigation component
├── public/
│   └── images/               # All images and assets
└── package.json
```

## Key Components

### ProfileBlock
- Displays profile information, skills, languages, and social media links
- Responsive with mobile toggle

### SideNavbar
- Side navigation menu
- Mobile-friendly hamburger menu

## Pages

### Home (`/`)
- Welcome section
- About section
- Services showcase
- Projects grid
- Testimonials carousel

### Projects (`/projects`)
- Grid view of all projects
- Hover effects with project descriptions

### Project Details (`/projects/[slug]`)
- Image carousel using Swiper
- Project description
- Technologies used
- Client reviews

### Blogs (`/blogs`)
- List of blog posts
- Blog cards with images and excerpts

### Blog Content (`/blogs/[slug]`)
- Full blog content
- Author information
- Recommended blogs

### Contact (`/contact`)
- Contact information cards
- Contact form

## Styling

The project uses a combination of:
- Global CSS with CSS variables for theming
- Tailwind CSS for utility classes
- Custom CSS classes matching the original design

## Notes

- All images are stored in `/public/images/`
- The design maintains the same dark theme (#272727) and yellow accent (#FFC700)
- All functionality from the original HTML/CSS version has been preserved
- The project is fully responsive and works on all screen sizes

## Original Design

This Next.js version maintains the exact same design, layout, and functionality as the original HTML/CSS portfolio website.
