// All the site's content lives here, so you can update it without touching the layout.

export const profile = {
  name: "Syed Shaheer Ahmed",
  role: "Full-Stack Developer (MERN)",
  location: "Karachi, Pakistan",
  email: "syedshaheerahmed90@gmail.com",
  github: "https://github.com/devshaheerx",
  linkedin: "https://www.linkedin.com/in/syedshaheerahmeddev/",
  cv: "/Syed_Shaheer_Ahmed_CV.pdf",
};

export type Project = {
  name: string;
  summary: string;
  hardPart: string;
  stack: string[];
  github: string;
  live?: string; // add a live demo link when you have one
  context?: string;
};

export const featured: Project[] = [
  {
    name: "Orbit",
    summary:
      "A Trello-style project management tool where teams create projects, assign tasks, and discuss work in comment threads.",
    hardPart:
      "Keeping every user's board in sync. Socket.io rooms push drag-and-drop moves, comments, typing indicators, and presence live to everyone in a project.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/devshaheerx/CodeAlpha_ProjectManagementTool",
    context: "CodeAlpha internship",
  },
  {
    name: "Ledger",
    summary:
      "An expense tracker with spending breakdowns, income-vs-expense trends, and budget alerts.",
    hardPart:
      "Production-grade sign-in: email OTP, Google and GitHub OAuth, and JWT refresh-token rotation with sessions across multiple devices.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Passport.js"],
    github: "https://github.com/devshaheerx/expense-tracker",
  },
  {
    name: "Pulse",
    summary:
      "A social media platform with profiles, image posts, likes, follows, a personalized feed, and notifications.",
    hardPart:
      "Making every write safe: JWT httpOnly-cookie auth, bcrypt hashing, input validation, and ownership checks on each change.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/devshaheerx/CodeAlpha_SocialMediaPlatform",
    context: "CodeAlpha internship",
  },
  {
    name: "Snip",
    summary:
      "A URL shortener with custom aliases, link expiration, and click analytics.",
    hardPart:
      "Running the Express API as a serverless function on Vercel while keeping redirects fast and analytics accurate.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    github: "https://github.com/devshaheerx/snip-url-shortener",
  },
];

export const more: { name: string; what: string; stack: string; github: string }[] = [
  {
    name: "E-Commerce Store",
    what: "Product pages, cart, orders, and secure login",
    stack: "MERN, JWT",
    github: "https://github.com/devshaheerx/CodeAlpha_EcommerceStore",
  },
  {
    name: "Brand Shop",
    what: "Storefront with persistent cart, live search, and filters",
    stack: "Next.js 16, Clerk",
    github: "https://github.com/devshaheerx/nextjs-ecommerce",
  },
  {
    name: "Kanban Board",
    what: "Multi-board drag-and-drop task manager",
    stack: "React, Redux Toolkit, Recharts",
    github: "https://github.com/devshaheerx/react-redux-kanban-board",
  },
  {
    name: "Habit Tracker",
    what: "Streaks, progress charts, and per-user data",
    stack: "React, Context API, Recharts",
    github: "https://github.com/devshaheerx/react-habit-tracker",
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    org: "CodeAlpha",
    when: "Sep – Oct 2026",
    where: "Remote",
    points: [
      "Built and shipped three full-stack MERN apps: Orbit, Pulse, and an e-commerce store.",
      "Designed secure REST APIs with JWT auth, bcrypt, validation, and role-based access.",
      "Received a Letter of Recommendation.",
    ],
  },
  {
    role: "Front-End Development Intern",
    org: "Cloud Nine Webbers",
    when: "Jun – Jul 2026",
    where: "Karachi",
    points: [
      "Built responsive interfaces and reusable components with React, Next.js, and TypeScript.",
      "Added smooth, performant animations with GSAP.",
    ],
  },
  {
    role: "Web Development Instructor (Intern)",
    org: "Techzone Learning",
    when: "Apr – Jun 2026",
    where: "Karachi",
    points: [
      "Taught HTML, CSS, and JavaScript to beginners through small hands-on projects.",
      "Reviewed each student's code one-on-one and taught them to debug their own work.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "GSAP"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Socket.io"] },
  { group: "Database", items: ["MongoDB", "Mongoose", "Aggregation Pipeline"] },
  { group: "Auth & security", items: ["JWT", "OAuth 2.0", "bcrypt", "Clerk", "Role-based access"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel"] },
  { group: "Also", items: ["Python", "C++", "Arduino", "Raspberry Pi"] },
];

export const awards = [
  "Final semester GPA 4.00 / 4.00",
  "Presenter, 41st All Pakistan IEEEP Students' Seminar 2026",
  "Runner-up with cash prize, Semester Project Exhibition (MAJU)",
  "3rd position in class, First Year Pre-Engineering",
];

export const certifications = [
  "Introduction to Internet of Things, Cisco (2025)",
  "Python Essentials 1 & 2, Cisco and OpenEDG (2023–2024)",
];
