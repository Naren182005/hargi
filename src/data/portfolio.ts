export type ProjectType = "ai" | "code" | "video";

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  accentColor: string;
  featured: boolean;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  aspectRatio?: string;
}

export interface SkillCategory {
  title: string;
  type: "ai" | "code" | "automation";
  subtitle: string;
  skills: { name: string; level: number; note: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface AchievementItem {
  title: string;
  award: string;
  year: string;
  detail: string;
}

export interface InternationalProjectItem {
  id: string;
  title: string;
  program: string;
  location: string;
  period: string;
  image: string;
  badge: string;
  story: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  hero: {
    name: "NAREN KG",
    shortName: "NAREN KG",
    title: "AI / ML Developer & Automation Engineer",
    tagline: "AGENTIC AI | DEEP LEARNING | AUTOMATION",
    subtagline: "Autonomous Intelligence. Scalable Systems. Limitless Innovation.",
    status: "Available for AI Engineering & Automation Roles",
    timecode: "AI::PROD::05_AGENTS",
    aiSkills: [
      { name: "PyTorch", tag: "DL", color: "#ee4c2c" },
      { name: "TensorFlow", tag: "ML", color: "#ff6f00" },
      { name: "LangChain", tag: "Agents", color: "#00e5ff" },
      { name: "LangGraph", tag: "State", color: "#00f59b" },
      { name: "Computer Vision", tag: "OpenCV", color: "#ffd21e" },
    ],
    codeSkills: [
      { name: "Python", tag: "Core", color: "#3776ab" },
      { name: "FastAPI", tag: "APIs", color: "#059669" },
      { name: "Angular", tag: "Frontend", color: "#dd0031" },
      { name: "PostgreSQL", tag: "Database", color: "#336791" },
      { name: "Chroma DB", tag: "RAG Vector", color: "#8b5cf6" },
      { name: "n8n", tag: "Automation", color: "#ea580c" },
    ],
    narrative: [
      {
        progress: [0, 0.22],
        heading: "NAREN KG",
        subheading: "AI / ML Developer & Automation Engineer",
        details: "Specializing in Deep Learning, Agentic AI, Computer Vision, and autonomous enterprise automation workflows.",
        align: "center" as const,
      },
      {
        progress: [0.25, 0.48],
        heading: "INTELLIGENCE AT PRODUCTION SCALE.",
        subheading: "Deep Learning • Agentic AI • Computer Vision",
        details: "Designing and deploying multi-agent architectures, real-time gaze & lip-sync proctoring, and intelligent RAG pipelines.",
        align: "left" as const,
      },
      {
        progress: [0.52, 0.75],
        heading: "SCALABLE AUTOMATION & FULL-STACK.",
        subheading: "Python • FastAPI • Angular • PostgreSQL • n8n",
        details: "Architecting high-throughput REST APIs, multi-database schemas, autonomous workflow engines, and sleek interfaces.",
        align: "right" as const,
      },
      {
        progress: [0.80, 0.98],
        heading: "AUTONOMOUS SYSTEMS. REAL RESULTS.",
        subheading: "AI / ML Developer & Automation Engineer",
        details: "Ready to engineer your next-generation AI models or scale autonomous workflow pipelines.",
        align: "center" as const,
      },
    ],
  },
  stats: [
    { label: "Production AI Agents", value: "5+", detail: "Engineered & Deployed" },
    { label: "Academic Excellence", value: "8.57", detail: "CGPA in B.E. AI & ML" },
    { label: "Hackathon Victories", value: "7+", detail: "1st Place & ₹10L Seed Fund" },
    { label: "Global Experience", value: "GLOW '25", detail: "International Academic Exchange" },
  ],
  projects: [
    {
      id: "ai-proctoring-system",
      type: "ai" as ProjectType,
      title: "AI PROCTORING SYSTEM",
      category: "Computer Vision & Real-Time ML Behavioral Monitoring",
      year: "2026",
      client: "Payoda Technologies / R&D",
      description: "AI-powered proctoring system detecting mobile phone usage, multiple or no-person presence using trained ML models, and integrating gaze direction tracking with lip-sync verification.",
      longDescription: "Developed an AI-powered proctoring system that detects mobile phone usage, multiple or no-person presence using trained ML models, and integrates gaze direction tracking with lip-sync verification to ensure candidate authenticity during assessments.",
      metrics: ["Real-Time Gaze & Lip-Sync", "Multi-Person & Device Detection", "<25ms Inference Latency"],
      tags: ["Python", "PyTorch", "TensorFlow", "OpenCV", "MediaPipe", "FastAPI"],
      accentColor: "#ff4d00",
      featured: true,
      githubUrl: "https://github.com/Naren182005",
    },
    {
      id: "saferide-rewards",
      type: "ai" as ProjectType,
      title: "SAFE RIDE REWARDS",
      category: "AI Road Safety & Geofenced Detection",
      year: "2025",
      client: "Road Safety Initiative",
      description: "AI-powered road safety application that allows citizens to report helmetless riders using GPS-tagged photos. Integrated AI-based verification redeemable at petrol stations.",
      longDescription: "“SafeRide Rewards,” an AI-powered road safety application that allows citizens to report helmetless riders using GPS-tagged photos. Integrated AI-based verification redeemable at petrol stations.",
      metrics: ["AI Helmet Detection", "GPS Geotag Verification", "Automated Reward System"],
      tags: ["Python", "YOLO", "Computer Vision", "FastAPI", "PostgreSQL", "Geofencing"],
      accentColor: "#00e5ff",
      featured: true,
      githubUrl: "https://github.com/Naren182005",
    },
    {
      id: "glow-24",
      type: "code" as ProjectType,
      title: "GLOW 24",
      category: "Dynamic E-Commerce & Management Platform",
      year: "2024",
      client: "Glow 24 Product Line",
      description: "Dynamic e-commerce website for a hair and skincare product line, incorporating user-friendly navigation dashboard to enhance both customer experience and business operations.",
      longDescription: "Developed a dynamic e-commerce website for a hair and skincare product line, incorporating user-friendly navigation dashboard to enhance both customer experience and business operations.",
      metrics: ["Dynamic Admin Dashboard", "Multi-Database Architecture", "Sub-second Page Loads"],
      tags: ["Angular", "PostgreSQL", "MongoDB", "Node.js", "RESTful API", "HTML/CSS"],
      accentColor: "#ff8c00",
      featured: true,
      githubUrl: "https://github.com/Naren182005",
      liveUrl: "https://glow202425.vercel.app/",
    },
  ] as Project[],
  visionDemo: {
    title: "AI COMPUTER VISION & INFERENCE SCANNER",
    subtitle: "Real-Time Neural Detection & Facial Landmark Mesh",
    description: "Drag the slider to compare raw camera input against real-time AI neural inference: multi-person bounding boxes, device localization, 3D facial landmark mesh, and gaze vector tracking.",
    beforeLabel: "RAW Camera Input",
    afterLabel: "AI Neural Perception Layer",
  },
  internationalProjects: [
    {
      id: "glow-2025-global-learning",
      title: "GLOW 2025 — Global Learning Week",
      program: "International Academic Exchange & Engineering Summit",
      location: "Telkom University, Indonesia",
      period: "July 2025",
      image: "/international/glow_2025_global_learning_week.jpg",
      badge: "International Delegation 🌍",
      story: "Selected to represent Sri Eshwar College of Engineering at the international GLOW 2025 (Global Learning Week) hosted at Telkom University. Collaborated with distinguished international faculty, professors, and multicultural student researchers on cutting-edge engineering paradigms and global technology exchange.",
      tags: ["Global Learning Week", "Telkom University", "Academic Exchange", "International Research"],
    },
    {
      id: "faculty-mentorship",
      title: "Global Academic Mentorship & Faculty Collaboration",
      program: "Distinguished Professor Mentorship Sessions",
      location: "International Summit",
      period: "July 2025",
      image: "/international/international_professor.png",
      badge: "Faculty Research 👨‍🏫",
      story: "Engaged in one-on-one technical discussions, algorithmic research reviews, and international engineering mentorship with leading global professors and visiting chairs, exploring future applications of AI, data engineering, and automation.",
      tags: ["Faculty Mentorship", "AI Research", "International Academia"],
    },
    {
      id: "international-coding-sprint",
      title: "Intensive International Tech & Coding Sprints",
      program: "Hands-on Technical Workshops & System Prototyping",
      location: "Global Lab Hub",
      period: "July 2025",
      image: "/international/international_coding_session.png",
      badge: "Hands-on Engineering 💻",
      story: "Participated in rigorous technical sprints, architecture design sessions, and live coding workshops abroad. Engineered AI solutions while collaborating with global peers in fast-paced international lab environments.",
      tags: ["MacBook Pro Sprints", "AI Prototyping", "Full-Stack Dev"],
    },
    {
      id: "student-cohort-networking",
      title: "Multicultural Student Cohort & Innovation Synergy",
      program: "Cross-Border Peer Collaboration",
      location: "Telkom University Campus",
      period: "July 2025",
      image: "/international/international_student_cohort.jpg",
      badge: "Cross-Border Synergy 🤝",
      story: "Bonded with international engineering students and peer delegates from across the globe. Built lifelong cross-border collaborative networks, working together on multidisciplinary challenges and exchanging cultural insights.",
      tags: ["Global Networking", "Teamwork", "Peer Collaboration"],
    },
    {
      id: "cross-border-travel",
      title: "Global Immersion Journey",
      program: "International Travel & Academic Expedition",
      location: "International Departure & Air Transit",
      period: "July 2025",
      image: "/international/international_travel_passport.png",
      badge: "Global Expedition ✈️",
      story: "Representing India on the global stage: from boarding terminals to international auditoriums, expanding global perspectives and showcasing engineering talents across borders.",
      tags: ["Republic of India", "Global Explorer", "Academic Travel"],
    },
  ] as InternationalProjectItem[],
  capabilities: [
    {
      title: "AI, ML & Deep Learning",
      type: "ai" as const,
      subtitle: "Neural architectures, computer vision, and foundation models",
      skills: [
        { name: "Deep Learning & Neural Networks (PyTorch / TensorFlow)", level: 96, note: "CNNs, Vision Transformers, transfer learning & loss tuning" },
        { name: "Computer Vision & Detection (OpenCV / MediaPipe / YOLO)", level: 95, note: "Real-time landmark mesh, gaze tracking & object detection" },
        { name: "Agentic AI & LLM Systems (LangChain / LangGraph)", level: 94, note: "State machines, tool-calling agents & multi-agent swarms" },
        { name: "RAG Pipelines & Vector Stores (Chroma DB)", level: 92, note: "Semantic search, chunking strategies & embedding indexing" },
        { name: "NLP & Heuristic Classification (Scikit-learn / Hugging Face)", level: 90, note: "Text tokenization, sentiment, spam filters & fine-tuning" },
      ],
    },
    {
      title: "Full-Stack & Systems Engineering",
      type: "code" as const,
      subtitle: "Robust backend APIs, modern web apps, and database modeling",
      skills: [
        { name: "Python & FastAPI High-Performance APIs", level: 98, note: "Async routes, Pydantic validation & inference endpoints" },
        { name: "Database Engineering (PostgreSQL / MongoDB / MySQL)", level: 92, note: "Relational schemas, NoSQL document stores & indexing" },
        { name: "Frontend Development (Angular / HTML5 / CSS3 / Tailwind)", level: 88, note: "Reactive components, dashboards & interactive UI" },
        { name: "Data Structures & Algorithms (C / C++ / Java)", level: 90, note: "Algorithmic optimization, time complexity & memory hygiene" },
        { name: "Database Management (DBeaver / pgAdmin / Chroma DB)", level: 93, note: "Query optimization, connection pooling & schema migrations" },
      ],
    },
    {
      title: "Automation & Autonomous Tools",
      type: "automation" as const,
      subtitle: "Enterprise workflow automations, agent deployments, and developer tooling",
      skills: [
        { name: "Workflow Automation (n8n / Webhooks / Scheduled Triggers)", level: 95, note: "End-to-end data pipelines & autonomous process sync" },
        { name: "Cloud & Deployment (AWS / Firebase / Cloud Platforms)", level: 92, note: "Model serving, microservices & cloud environments" },
        { name: "Modern AI Tooling (Google AI Studio / Trae / Windsurf / Copilot)", level: 96, note: "Accelerated development, prompt engineering & prototyping" },
        { name: "Developer DevOps (Git / Postman / Jupyter / Colab / Jira)", level: 94, note: "Version control, API testing, interactive experimentation & agile" },
      ],
    },
  ] as SkillCategory[],
  terminalCommands: [
    { cmd: "whoami", output: "NAREN KG — AI / ML Developer & Automation Engineer.\nSpecializing in Deep Learning, Agentic AI, and Scalable Automations." },
    { cmd: "skills", output: "AI / ML: PyTorch, TensorFlow, Keras, Scikit-learn, LangChain, LangGraph, RAG, Chroma DB, OpenCV, MediaPipe\nLanguages & Web: Python, Java (Basics), C/C++, FastAPI, Angular, PostgreSQL, MongoDB, MySQL, HTML/CSS\nAutomation & Tools: n8n, Google AI Studio, Trae.ai, Windsurf, Git, VS Code, Postman, Docker, Jira" },
    { cmd: "projects", output: "1. AI Proctoring System (Gaze Tracking, Lip-Sync, Multi-Person & Mobile Detection)\n2. Safe Ride Rewards (AI Helmetless Rider Detection with GPS Verification)\n3. Glow 24 (Live at https://glow202425.vercel.app/)\n4. International Project: GLOW 2025 at Telkom University" },
    { cmd: "education", output: "• B.E. in Artificial Intelligence & Machine Learning (Expected 2027)\n  Sri Eshwar College of Engineering | CGPA: 8.57/10 | Tamil Nadu, India\n• Bharatiya Vidhya Bhavan School (Matric, 2021-2023) | Percentage: 72.1%" },
    { cmd: "experience", output: "• Machine Learning Engineer - Intern (Feb 2026 – Present)\n  Payoda Technologies, Coimbatore, Tamil Nadu\n  Developed and trained ML models for real-time detection of mobile phones, multiple-person presence, and no-person scenarios, integrated with gaze tracking and lip-sync analysis for enhanced behavioral monitoring." },
    { cmd: "achievements", output: "🥇 1st Place: Hack IT On (300+ participants, 2025)\n🥇 1st Place: FESTRONIX (Top 50 teams, 2025)\n🥇 1st Place: NEURA NEXA [Hack Attack] (Hackathon, 2025)\n🥇 1st Place: FRESHATHON (Project Expo, 2023)\n🏆 5th Position: KADALKALAM (TN CARD, 2025)\n🌍 AI Credit Course (International Course Program, 2025)" },
    { cmd: "certifications", output: "• Machine Learning Specialization — DeepLearning.AI (2024)\n• Introduction to Cloud Computing — NPTEL (2024)\n• AWS Skill Builder: Cloud Practitioner — AWS (2024)\n• Mastering Data Structures & Algorithms using C & C++ — Udemy (2023)\n• Learn JAVA Programming: Beginner to Master — SKILLRACK (2023)" },
    { cmd: "contact", output: "Email: naren1872005@zohomail.in | Phone: +91 9597400881\nLinkedIn: https://www.linkedin.com/in/naren-kg-356a012a0\nGitHub: https://github.com/Naren182005 | Location: Tamil Nadu, India" },
    { cmd: "status", output: "Actively available for AI/ML Engineering, Deep Learning, and Agentic Automation roles." },
  ],
  experience: [
    {
      period: "Feb 2026 — Present",
      role: "Machine Learning Engineer - Intern",
      studio: "Payoda Technologies — Coimbatore, Tamil Nadu",
      description: "Developed and trained ML models for real-time detection of mobile phones, multiple-person presence, and no-person scenarios. Integrated gaze tracking algorithms and lip-sync analysis for enhanced assessment behavioral monitoring.",
    },
    {
      period: "2024 — 2026",
      role: "AI Agent Architect & Open-Source Researcher",
      studio: "Independent R&D & Applied AI Systems",
      description: "Designed, developed, and deployed production-ready AI agents and Computer Vision systems. Implemented RAG architectures using LangChain, LangGraph, and Chroma DB vector databases.",
    },
    {
      period: "2023 — 2025",
      role: "Hackathon Competitor & Project Lead",
      studio: "Sri Eshwar College of Engineering & National Hackathons",
      description: "Secured multiple 1st place victories across Hack IT On (300+ participants), FESTRONIX (Top 50 teams), NEURA NEXA Hack Attack, and FRESHATHON project expo.",
    },
  ],
  education: [
    {
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      institution: "Sri Eshwar College of Engineering",
      period: "2023 — Expected 2027",
      score: "CGPA: 8.57 / 10",
      location: "Tamil Nadu, India",
    },
    {
      degree: "Higher Secondary (Matriculation)",
      institution: "Bharatiya Vidhya Bhavan School",
      period: "2021 — 2023",
      score: "Percentage: 72.1%",
      location: "Tamil Nadu, India",
    },
  ] as EducationItem[],
  certifications: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2024",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "NPTEL",
      year: "2024",
    },
    {
      title: "AWS Skill Builder: Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
    },
    {
      title: "Mastering Data Structures and Algorithms using C & C++",
      issuer: "Udemy",
      year: "2023",
    },
    {
      title: "Learn JAVA Programming – Beginner to Master",
      issuer: "SKILLRACK",
      year: "2023",
    },
  ] as CertificationItem[],
  achievements: [
    {
      title: "Hack IT On",
      award: "Secured 1st Place (among 300+ participants)",
      year: "2025",
      detail: "Developed innovative AI/ML solution under competitive time constraints.",
    },
    {
      title: "FESTRONIX",
      award: "Secured 1st Place (among Top 50 teams)",
      year: "2025",
      detail: "Recognized for high-impact technical architecture and flawless execution.",
    },
    {
      title: "NEURA NEXA [Hack Attack]",
      award: "Secured 1st Place in Hackathon",
      year: "2025",
      detail: "Built cutting-edge intelligent automation prototype.",
    },
    {
      title: "FRESHATHON",
      award: "Secured 1st Place in Project Expo",
      year: "2023",
      detail: "Awarded top honor for engineering excellence and demonstration.",
    },
    {
      title: "KADALKALAM",
      award: "Secured 5th Position with TN CARD",
      year: "2025",
      detail: "State-level recognition in high-stakes technological challenge.",
    },
    {
      title: "AI Credit Course",
      award: "International Course Program Participation",
      year: "2025",
      detail: "Selected for intensive international advanced AI curriculum.",
    },
  ] as AchievementItem[],
  socials: [
    { name: "LinkedIn", handle: "linkedin.com/in/naren-kg-356a012a0", url: "https://www.linkedin.com/in/naren-kg-356a012a0" },
    { name: "GitHub", handle: "github.com/Naren182005", url: "https://github.com/Naren182005" },
    { name: "Email", handle: "naren1872005@zohomail.in", url: "mailto:naren1872005@zohomail.in" },
  ],
  contact: {
    name: "NAREN KG",
    email: "naren1872005@zohomail.in",
    phone: "+91 9597400881",
    location: "Tamil Nadu, India",
    status: "Open for Opportunities & Collaborations",
  },
};
