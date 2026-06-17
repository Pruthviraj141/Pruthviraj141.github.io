import { Project, SkillGroup, Experience, Achievement, NavLink, SocialLink } from "./types";

export const candidate = {
  name: "Pruthviraj Gavhane",
  roleTarget: "AI / Full-Stack / Blockchain Developer",
  location: "India",
  email: "pruthviraj.22420262@gmail.com",
  github: "https://github.com/Pruthviraj141",
  linkedin: "https://www.linkedin.com/in/pruthviraj-gavhane/",
  x: "https://x.com/Pruthvi__141",
  leetcode: "https://leetcode.com/u/pruthvigavhane/",
  college: "Vishwakarma Institute of Information Technology",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  graduationYear: "Present",
  tagline: "Building intelligent systems with AI, web, and blockchain.",
  bio: "I build smart products at the intersection of AI, full-stack development, and blockchain. I enjoy turning real problems into practical systems with clean UI, strong backend logic, and modern AI workflows."
};

export const navLinks: NavLink[] = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: candidate.github, iconName: "Code2" },
  { platform: "LinkedIn", url: candidate.linkedin, iconName: "Briefcase" },
  { platform: "X", url: candidate.x, iconName: "Hash" },
  { platform: "Email", url: `mailto:${candidate.email}`, iconName: "Mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [{ name: "Python" }, { name: "Java" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "C#" }, { name: "Solidity" }]
  },
  {
    category: "AI & ML",
    skills: [{ name: "Machine Learning" }, { name: "Deep Learning" }, { name: "NLP" }, { name: "Computer Vision" }, { name: "CNNs" }, { name: "Model Fine-tuning" }]
  },
  {
    category: "Generative AI",
    skills: [{ name: "LLMs" }, { name: "LangChain" }, { name: "HuggingFace" }, { name: "Prompt Engineering" }, { name: "RAG" }, { name: "Vector Databases" }]
  },
  {
    category: "Web Development",
    skills: [{ name: "Next.js" }, { name: "React" }, { name: "Node.js" }, { name: "FastAPI" }, { name: "REST APIs" }, { name: "Firebase" }, { name: "Tailwind CSS" }]
  },
  {
    category: "Cloud & Deploy",
    skills: [{ name: "AWS" }, { name: "Microsoft Azure" }, { name: "Docker" }, { name: "Scalable Architecture" }]
  },
  {
    category: "Tools & DBs",
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "OpenCV" }, { name: "ChromaDB" }, { name: "FAISS" }]
  }
];

export const projects: Project[] = [
  {
    id: "face-recognition",
    title: "Deep Learning Face Recognition Attendance System",
    description: "A real-time attendance system using deep learning–based face recognition.",
    impact: "Provides temporal stability tracker to reduce flicker and false positives.",
    bullets: [
      "MTCNN for face detection and FaceNet (InceptionResnetV1) for facial embeddings",
      "FastAPI backend for real-time inference with Docker containerization",
      "Firebase Firestore for records and Microsoft Azure deployment"
    ],
    stack: ["PyTorch", "MTCNN", "FaceNet", "FastAPI", "Firebase", "Docker", "Azure"],
    githubUrl: "https://github.com/Pruthviraj141/TrackMyClass",
    featured: true
  },
  {
    id: "collab-editor",
    title: "Collaborative Editor / WriterFlow",
    description: "A real-time collaborative writing and diagramming platform with AI-assisted workflows.",
    bullets: [
      "Live collaboration and real-time syncing for team writing",
      "Modern editor-style experience with AI-assisted workflows"
    ],
    stack: ["TypeScript", "React", "Node.js", "WebSockets"],
    githubUrl: "https://github.com/Pruthviraj141/Collaborative-Editor",
    featured: true
  },
  {
    id: "ai-medical",
    title: "AI-Powered Medical Diagnostic Assistant",
    description: "An AI medical assistant that analyzes symptoms and gives preliminary medical insights.",
    bullets: [
      "Retrieval-Augmented Generation (RAG) with FAISS vector search",
      "FastAPI backend for session-based conversations with context-aware follow-ups",
      "Location-based hospital and ambulance recommendations"
    ],
    stack: ["Python", "FastAPI", "FAISS", "Sentence-Transformers", "RAG", "LLMs", "Node.js"],
    githubUrl: "https://github.com/Pruthviraj141",
    featured: true
  },
  {
    id: "easyshopi",
    title: "EasyShopi — WhatsApp E-Commerce",
    description: "A lightweight e-commerce platform that helps WhatsApp businesses digitize local selling.",
    bullets: [
      "Product catalog with one-click WhatsApp redirection and pre-filled details",
      "Firebase-backed product management with responsive UI"
    ],
    stack: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pruthviraj141/EasyShopi",
    featured: false
  },
  {
    id: "fruitslice",
    title: "Python-FruitSlice",
    description: "A fun Fruit Ninja-style game built with Pygame featuring mouse drag slicing gameplay.",
    stack: ["Python", "Pygame"],
    githubUrl: "https://github.com/Pruthviraj141/Python-FruitSlice",
    featured: false
  },
  {
    id: "unity-snake",
    title: "Unity 2D Snake Game",
    description: "A classic Snake game built in Unity 2D with smooth snake movement and collision handling.",
    stack: ["C#", "Unity"],
    githubUrl: "https://github.com/Pruthviraj141/Unity-2D-Snake-Game",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "intern-blockseblock",
    title: "AI & dApp Development Intern",
    organization: "BlockseBlock",
    dateRange: "Aug 2025 – Sep 2025",
    bullets: [
      "Worked on AI, LLMs, and decentralized application (dApp) development.",
      "Integrated AI models with blockchain-based systems.",
      "Deployed AI and web applications on cloud platforms using scalable architectures."
    ]
  },
  {
    id: "edu-viit",
    title: "B.Tech in Artificial Intelligence & Data Science",
    organization: "Vishwakarma Institute of Information Technology (VIIT), Pune",
    dateRange: "2024 – Present",
    bullets: [
      "SCGPA: 9.37",
      "Participated in national-level hackathons: PICT TechFiesta, A.G. Techathon, VIIT Hackathon.",
      "Winner — SIT Hackathon 2026 (Healthcare Domain)."
    ]
  },
  {
    id: "edu-vvp",
    title: "Diploma in Computer Engineering",
    organization: "VVP Polytechnic, Solapur",
    dateRange: "2021 – 2024",
    bullets: [
      "Percentage: 91.94%",
      "Strong academic performance with solid foundation in programming and databases."
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    category: "Hackathon",
    title: "Winner — SIT Hackathon 2026",
    description: "Won in the Healthcare Domain for building an AI-based healthcare solution.",
    iconName: "Trophy"
  },
  {
    id: "ach-2",
    category: "Hackathon",
    title: "National Hackathons",
    description: "Participated in PICT TechFiesta, A.G. Techathon, and VIIT Hackathon.",
    iconName: "Code"
  },
  {
    id: "ach-3",
    category: "Academic",
    title: "Diploma Excellence",
    description: "Graduated with an outstanding 91.94% from VVP Polytechnic.",
    iconName: "GraduationCap"
  },
  {
    id: "ach-4",
    category: "Academic",
    title: "Degree Excellence",
    description: "Maintaining a strong SCGPA of 9.37 in B.Tech AI & DS at VIIT.",
    iconName: "BookOpen"
  },
  {
    id: "ach-5",
    category: "Technical",
    title: "Certifications",
    description: "Completed certifications in Machine Learning, Deep Learning, and Data Analysis.",
    iconName: "Award"
  }
];
