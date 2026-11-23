// Single source of truth for portfolio content.
// Only list things that are true and verifiable. If a link does not exist, leave it out
// (components render link buttons only when a URL is present).

export const profile = {
  name: "Ayan Pathan",
  role: "Full Stack Developer",
  location: "Mumbai, India",
  email: "pathanayan9457@gmail.com",
  github: "https://github.com/AyanPathan47",
  linkedin: "https://www.linkedin.com/in/ayannpathan/",
  resume: "/Ayan_Pathan_Resume_Nov2026.pdf",
}

// ---------- About ----------

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer based in Mumbai. I started professionally in January 2024 as a developer intern at Techno Serve Software Solutions, then worked there as a Junior Full Stack Developer, building and maintaining 10+ client websites, donation portals and e-commerce applications with React, Next.js, Astro.js and WordPress, including WordPress-to-React/Astro migrations and Stripe integration.",
    "Since November 2025 I've been a Full Stack Developer at Rentkar, a product-based rental platform. I work across customer and admin applications, backend APIs, MongoDB queries, third-party integrations and production releases, directly with the founders and the wider team.",
    "Outside work I build mobile products with React Native and Expo, such as AI Memroix and Zupet, and I'm pursuing an M.Sc. in Computer Science. I'm increasingly drawn to backend engineering and cloud infrastructure, and I like solving practical problems: tracing a production bug to its cause, or cutting down repeated calls to a rate-limited API.",
  ],
  focus: [
    {
      title: "Frontend & Mobile",
      text: "Responsive UIs, admin dashboards and reusable components in React, Next.js and React Native (Expo).",
      icon: "Code2",
    },
    {
      title: "Backend & Data",
      text: "REST APIs, authentication and role-based access, MongoDB aggregations and query optimisation.",
      icon: "Database",
    },
    {
      title: "Integrations",
      text: "Payments, invoicing, SMS, WhatsApp, email, file storage and analytics APIs.",
      icon: "Plug",
    },
    {
      title: "Deployment",
      text: "AWS EC2, Docker, Nginx, SSL and domain configuration, plus production debugging.",
      icon: "Cloud",
    },
  ],
}

// ---------- Skills (tiered by depth) ----------

export const skillTiers = [
  {
    title: "Core",
    accent: "blue",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    title: "Production & project experience",
    accent: "green",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "AWS EC2 / S3",
      "Nginx",
      "Socket.IO",
      "JWT & OAuth",
      "Cloudinary",
      "Firebase Cloud Messaging",
      "Stripe",
      "Zoho Books API",
      "Fast2SMS",
      "Nodemailer",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Additional exposure",
    accent: "orange",
    items: [
      "Astro.js",
      "Payload CMS",
      "WordPress",
      "NativeWind",
      "Clerk",
      "Google Gemini API",
      "LangChain",
      "LangGraph",
      "RAG",
      "Python / Flask",
    ],
  },
]

// ---------- Projects ----------
// `links`: [{ label, href, type: "live" | "github" }]. Leave empty when nothing public exists.
// `image`: optional path in /public/images, rendered in the card preview when provided.
// `preview`: key of the temporary illustrated placeholder (see ProjectPreview.jsx), used only when `image` is empty.

export const projects = [
  {
    title: "AI Memroix",
    category: "Mobile app · Personal project",
    status: "Completed",
    period: "",
    description:
      "An AI-powered personal memory app. Capture text, images or voice notes and get AI summaries, a timeline and automated daily recaps.",
    features: [
      "Voice transcription and image descriptions",
      "Contextual retrieval of related memories",
      "Google sign-in and biometric app lock",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB", "Gemini", "Clerk"],
    color: "purple",
    preview: "memroix",
    image: "",
    links: [],
    note: "Private repository",
  },
  {
    title: "Zupet",
    category: "Mobile app · Personal project",
    status: "Completed",
    period: "",
    description:
      "A cross-platform pet adoption app with Admin, Giver and Adopter roles and real-time chat. Built independently, end to end.",
    features: [
      "JWT auth with role-based access",
      "Real-time chat and request tracking",
      "Push notifications and map-based locations",
    ],
    tags: ["React Native", "NativeWind", "Node.js", "Express", "MongoDB", "Socket.IO", "Mapbox", "FCM"],
    color: "blue",
    preview: "zupet",
    image: "",
    links: [],
    note: "",
  },
  {
    title: "Inventory Management",
    category: "Mobile app · Personal project",
    status: "Jul – Aug 2025",
    period: "Jul – Aug 2025",
    description:
      "A mobile inventory tracker with Google sign-in. Each user manages their own products, synced to MongoDB through a deployed backend.",
    features: [
      "Google authentication, per-user accounts",
      "Add, edit and delete products",
      "Inventory synced to MongoDB",
    ],
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Google Auth", "Vercel"],
    color: "green",
    preview: "inventory",
    image: "",
    links: [],
    note: "",
  },
  {
    title: "NLP Notes Summarizer",
    category: "Academic project",
    status: "Academic",
    period: "",
    description:
      "A web application that summarizes notes and text using NLP techniques based on TF-IDF.",
    features: [],
    tags: ["Python", "Flask", "TF-IDF", "NLP"],
    color: "orange",
    preview: "nlp",
    image: "",
    links: [],
    note: "",
  },
  {
    title: "Phishing URL Robustness",
    category: "Research · M.Sc. Computer Science",
    status: "Research",
    period: "",
    description:
      "Tests how lightweight phishing-URL classifiers hold up against unseen URL manipulations, and whether training-time augmentation restores recall.",
    features: [],
    tags: ["Machine Learning", "Cybersecurity", "scikit-learn", "Python"],
    color: "cyan",
    preview: "phishing",
    image: "",
    links: [],
    note: "",
  },
]

// ---------- Production engineering (Rentkar) ----------
// High-level descriptions only: no proprietary code, data or screenshots.

export const productionCase = {
  title: "Making a rate-limited analytics API usable",
  tag: "Featured case study",
  problem:
    "The Microsoft Clarity Export API allows only 10 requests per day and returns only the last three days of data. An admin dashboard that hit it on every page load would exhaust the quota almost immediately.",
  approach:
    "I put a Redis cache in front of the Clarity calls with a four-hour expiry. Repeated dashboard loads are served from the cache, and the external API is only called again once the cached data has expired.",
  outcome:
    "Far fewer external requests, and a dashboard that stays within the daily limit while still showing reasonably fresh data.",
  stack: ["Node.js", "Express", "Redis", "Microsoft Clarity Export API"],
}

export const productionWork = [
  {
    title: "Delivery-slot management",
    text: "City-specific delivery slots and time windows with holidays, partial-day closures, availability rules and an admin configuration screen.",
    icon: "CalendarClock",
  },
  {
    title: "Orders, referrals & rewards",
    text: "Order approvals, lifecycle automation and delivery-related admin workflows, plus referral management and reward rules handled in backend processing.",
    icon: "Workflow",
  },
  {
    title: "Invoicing with Zoho Books",
    text: "Invoice validation and invoice-related workflows integrated with the Zoho Books API.",
    icon: "Receipt",
  },
  {
    title: "Admin analytics",
    text: "Dashboard statistics, charts, search and advanced filters, powered by MongoDB aggregation pipelines and optimised queries.",
    icon: "BarChart3",
  },
  {
    title: "Auth & integrations",
    text: "JWT authentication, role-based access control and reCAPTCHA validation. Integrations with AWS S3, Fast2SMS, AiSensy (WhatsApp), Nodemailer / ZeptoMail, Cloudinary and payment gateways.",
    icon: "ShieldCheck",
  },
  {
    title: "Infrastructure & releases",
    text: "Production deployments on AWS EC2 with Docker, Nginx, SSL (Certbot) and domain configuration, plus server-side debugging and release support.",
    icon: "Server",
  },
]

// ---------- Experience ----------

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Rentkar",
    location: "Mumbai, IN",
    period: "Nov 2025 - Present",
    type: "Full-time",
    description:
      "Full Stack Developer on Rentkar's product-based rental platform, working across customer-facing and admin applications: React.js, Next.js and React Native (Expo) on the front, Node.js, Express.js and MongoDB on the back. I work directly with the founders and the wider team on features, releases and production issues.",
    achievements: [
      "Delivered admin workflows for delivery-slot configuration, referrals and rewards, approvals, invoice validation and order lifecycle automation",
      "Built secure REST APIs, authentication flows, role-based access control and reCAPTCHA validation for customer and admin apps",
      "Optimised MongoDB aggregations and queries; integrated Zoho Books, AWS S3, Fast2SMS, email services and payment gateways",
      "Supported releases and production infrastructure on AWS EC2 with Docker, SSL and domain configuration",
    ],
    current: true,
  },
  {
    role: "Junior Full Stack Developer",
    company: "Techno Serve Software Solutions",
    location: "Mumbai, IN",
    period: "Jul 2024 - Oct 2025",
    type: "Full-time",
    description:
      "Built and maintained client websites, donation portals and e-commerce applications using React.js, Next.js, Astro.js, Tailwind CSS and WordPress, working with clients and the development team from requirements through deployment.",
    achievements: [
      "Developed and maintained 10+ client websites, donation portals and e-commerce applications",
      "Migrated WordPress websites to React.js and Astro.js",
      "Built reusable responsive UI components; integrated REST APIs and CMS platforms such as Payload CMS",
      "Integrated Stripe payments and dynamic CMS content; handled performance improvements, bug fixes and deployments",
    ],
    current: false,
  },
  {
    role: "Software Developer Intern",
    company: "Techno Serve Software Solutions",
    location: "Mumbai, IN",
    period: "Jan 2024 - Jun 2024",
    type: "Internship",
    description:
      "Started in the web team converting designs into responsive frontends with React.js, Next.js and Tailwind CSS, while learning production workflows: testing, code reviews, agile ceremonies and deployments.",
    achievements: [
      "Built responsive UI components and integrated REST APIs",
      "Supported CMS implementation, including WordPress",
      "Handled testing, bug fixes and code reviews",
      "Assisted with deployments",
    ],
    current: false,
  },
]

// ---------- Education & certifications ----------

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Guru Nanak Khalsa College",
    location: "Mumbai, IN",
    period: "2025 - 2027",
    gpa: "",
    status: "Pursuing",
    highlights: [
      "Currently in Part II",
      "Coursework spanning machine learning, NLP, data science and cyber security",
      "Research work on phishing URL detection robustness",
    ],
    courses: [
      "Advanced Data Mining & Machine Learning",
      "Natural Language Processing",
      "Web Mining & IoT",
      "Web Data Analytics",
      "Data Science Techniques",
      "Cyber Security & Risk Assessment",
      "Web3",
      "Wireless Networking",
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Mumbai",
    location: "Mumbai, IN",
    period: "2022 - 2025",
    gpa: "9/10",
    status: "completed",
    highlights: [
      "Specialization in Information Technology with a strong focus on software development and databases",
      "Built multiple academic projects applying real-world programming concepts",
      "Semester topper",
    ],
    courses: [
      "Object Oriented Programming",
      "Web Development",
      "Database Management Systems",
      "Computer Networks",
      "Information Security",
      "Software Engineering",
    ],
  },
]

export const certifications = [
  {
    name: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "Dec 2025",
    note: "Designed a simple, scalable hosting architecture",
    icon: "🏆",
  },
]
