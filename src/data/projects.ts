import { entugoReadme, medilinkReadme } from './readmes';

export interface Project {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  github: string | null;
  website: string | null;
  readme?: string; // Markdown content from GitHub README
  technologies?: string[];
  projectImages?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'MediLink',
    slug: 'medilink',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765614392/Gemini_Generated_Image_caoxw9caoxw9caox_jhxhmg.png',
    description:
      'A modern healthcare platform that bridges doctors and patients with secure digital prescriptions, seamless document management, and instant access to medical records.',
    github: 'https://github.com/GlaDrancE/Medilink',
    website: 'https://mediglad.vercel.app/',
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Express', 'Prisma', 'Bun', 'Turborepo'],
    readme: medilinkReadme,
  },
  {
    id: '2',
    name: 'Entugo',
    slug: 'entugo',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765685970/Gemini_Generated_Image_2xd74j2xd74j2xd7_rewde5.png',
    description:
      'Entugo is a comprehensive platform built with modern technologies. As the lead developer, I created the entire application with 5 portals, managing the tech stack and maintaining teams. Built with TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and many more cutting-edge technologies.',
    github: null,
    website: 'https://entugo.com',
    technologies: ['TypeScript', 'Node.js', 'Docker', 'Express', 'Prisma', 'PostgreSQL', 'React', 'ShadCN', 'Tailwind CSS', 'Lucide React', 'GSAP'],
    readme: entugoReadme
  },
  {
    id: '3',
    name: 'Tugo Eats Customer Portal',
    slug: 'tugo-eats-customer-portal',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765685970/Gemini_Generated_Image_2xd74j2xd74j2xd7_rewde5.png',
    description:
      'Tugo Eats Customer Portal is a comprehensive platform built with modern technologies. As the lead developer, I created the entire application with 5 portals, managing the tech stack and maintaining teams. Built with TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and many more cutting-edge technologies.',
    github: null,
    website: 'https://customer.entugo.com',
    technologies: ['TypeScript', 'Node.js', 'Docker', 'Express', 'Prisma', 'PostgreSQL'],
  },
  {
    id: '4',
    name: 'Entugo Client Portal',
    slug: 'entugo-client-portal',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765689708/image_qev958.png',
    description:
      'Entugo Client Portal is a comprehensive platform built with modern technologies. As the lead developer, I created the entire application with 5 portals, managing the tech stack and maintaining teams. Built with TypeScript, Node.js, Docker, Express, Prisma, PostgreSQL, and many more cutting-edge technologies.',
    github: null,
    website: 'https://client.entugo.com',
    technologies: ['TypeScript', 'Node.js', 'Docker', 'Express', 'Prisma', 'PostgreSQL'],
  },
  {
    id: '5',
    name: 'Newwton',
    slug: 'newwton',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686072/Screenshot_2025-12-14_095052_zxolzm.png',
    description:
      'Newwton is a modern web application developed with MERN stack, featuring Figma designs, ThreeJS animations, GSAP transitions, and Tailwind CSS for a premium user experience.',
    github: null,
    website: 'https://newwton.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Three.js', 'GSAP', 'Tailwind CSS'],
  },
  {
    id: '6',
    name: 'Ritzy',
    slug: 'ritzy',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686072/Screenshot_2025-12-14_094958_cmoqla.png',
    description:
      'Ritzy is an elegant and modern web platform designed to provide a premium user experience with sleek design and smooth interactions.',
    github: null,
    website: 'https://ritzydemo.netlify.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '7',
    name: 'Helping Notes',
    slug: 'helping-notes',
    image: '/images/projects/helpingnotes.png',
    description:
      'Helping Notes is one of the best websites to share college or school notes to provide the best study content online. This is one of my recent projects and customer satisfaction is still maintained.',
    github: 'https://github.com/GlaDrancE/helpingNotes',
    website: 'https://helpingnotes.netlify.app/',
    technologies: ['React', 'Firebase', 'CSS'],
  },
  {
    id: '8',
    name: 'Pixls',
    slug: 'pixls',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686393/Screenshot_2025-12-14_095512_bdebcn.png',
    description:
      'Pixls is a modern image gallery and portfolio platform designed for photographers and visual artists to showcase their work beautifully.',
    github: 'https://github.com/GlaDrancE/Pixls',
    website: 'https://pixlss.netlify.app/',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: '9',
    name: 'Clickmates',
    slug: 'clickmates',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686882/Screenshot_2025-12-14_100123_bw1c6s.png',
    description:
      'Clickmates is a professional photographer portfolio template designed to showcase photography work with elegance and style.',
    github: 'https://github.com/GlaDrancE/photographer-template',
    website: 'https://github.com/GlaDrancE/photographer-template',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '10',
    name: 'Anime Website',
    slug: 'anime-website',
    image: '/images/projects/anime-website.png',
    description:
      'An anime-themed website featuring modern design and interactive elements for anime enthusiasts.',
    github: null,
    website: null,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '11',
    name: 'Ecommerce Website',
    slug: 'ecommerce-website',
    image: '/images/projects/ecom.png',
    description:
      'A fully functional ecommerce website with modern design, shopping cart functionality, and seamless user experience.',
    github: null,
    website: 'https://fluffy-nasturtium-ef31e1.netlify.app/',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: '12',
    name: 'Playfull Words',
    slug: 'playfull-words',
    image: 'https://res.cloudinary.com/dduj1ln0v/image/upload/v1765686824/Screenshot_2025-12-14_100325_bkdahi.png',
    description:
      'Playfull Words is an interactive word game platform that provides engaging gameplay and challenges for users.',
    github: null,
    website: 'https://tourmaline-fox-9558c9.netlify.app/',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
