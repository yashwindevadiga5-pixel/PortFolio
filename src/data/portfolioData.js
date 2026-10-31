// ============================================================
// portfolioData.js — Developer Portfolio Data
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "YASHWIN SHIVADAS DEVADIGA",
  firstName: "YASHWIN SHIVADAS DEVADIGA",
  brandName: "YASHWIN SHIVADAS DEVADIGA", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer",
  location: "Bengaluru, India",
  phone: "8431750523",
  emails: {
    primary: "yashwindevadiga5@gmail.com",
    secondary: "",
  },
  summary: "BCA graduate and aspiring Python Full Stack Developer passionate about building web applications using Python, Django and modern frontend technologies.",
  resumeUrl: "/yashwin_newresume.pdf", // PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/yashwindevadiga5-pixel",
  linkedin: "https://www.linkedin.com/in/yashwin-shivadas-devadiga-593541421/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm YASHWIN SHIVADAS DEVADIGA",
  titleHighlight: "Python Full Stack Developer",
  subtitle: "Passionate about building scalable web applications with Python, Django, REST APIs, and modern frontend technologies to deliver impactful digital experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:yashwindevadiga5@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/yashwin_newresume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">YASHWIN SHIVADAS DEVADIGA</span>, an aspiring Python Full Stack Developer based in Bengaluru, India. I develop web applications using Python, Django, REST APIs, databases, and AI-assisted features, sharpening my skills through the placement training program at TAP Academy. I enjoy learning modern technologies, improving my problem-solving skills, and creating practical, user-centric software solutions.`,
  techStack: ["Python", "Django", "JavaScript", "MySQL", "REST APIs"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured approach to developing scalable, maintainable, and user-centric web applications.",
  cards: [
    { number: "01", title: "Research", text: "Analyzing project goals, user requirements, and technical constraints to architect effective solutions." },
    { number: "02", title: "Design", text: "Structuring clean database schemas, RESTful API endpoints, and responsive interface workflows." },
    { number: "03", title: "Develop", text: "Writing robust Python and Django code with seamless frontend integration and efficient queries." },
    { number: "04", title: "Deploy", text: "Testing application endpoints, ensuring stability, and deploying production-ready code with version control." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "Django" }, { name: "Django REST Framework" }, { name: "HTML" }, { name: "CSS" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating actively in team environments, sharing ideas, and supporting peers to achieve project milestones." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex logical challenges into modular algorithms and efficient backend solutions." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritizing tasks and meeting development deadlines with organized planning and focus." },
  { name: "Creativity", icon: "💡", desc: "Crafting intuitive digital solutions and integrating AI-assisted features for enhanced user accessibility." },
];

export const projects = [
  {
    id: "neuro-reader-ai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "neuro_reader_ai",
    description: "Inclusive Digital Library & AI Reading Assistant designed to make reading and digital learning accessible through AI-assisted features.",
    techTags: ["Python", "Django", "REST APIs", "AI"],
    links: {
      github: "https://github.com/yashwindevadiga5-pixel/neuro_reader_ai",
      demo: "",
    },
    isFlagship: true,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/yashwin-shivadas-devadiga-593541421/",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Canara College, Mangalore",
  cgpa: "BCA Graduate",
  graduation: "Canara College, Mangalore",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python Full Stack Developer",
    "Python · Django · REST APIs · MySQL",
    "Building scalable & accessible web solutions",
  ],
  credential: "Bachelor of Computer Applications (BCA)",
  copyright: `© ${new Date().getFullYear()} YASHWIN SHIVADAS DEVADIGA | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
