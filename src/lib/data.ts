export const profile = {
  name: "Daksh Kweera",
  role: "SWE — AI/ML & Full-Stack",
  tagline: "Building scalable full-stack and AI-powered systems.",
  location: "Haldwani, Uttarakhand",
  email: "kweera2005@gmail.com",
  phone: "+91-8445600807",
  linkedin: "https://www.linkedin.com/in/daksh-kweera-2008aa289/",
  github: "https://github.com/Dakshkweera",
  summary:
    "B.Tech CSE (AI/ML) student at BIT Mesra building scalable full-stack and AI-powered systems — multi-agent LLM pipelines, RAG architectures, and analytics platforms. Proficient in OOP, REST APIs, and CS fundamentals (OS, DBMS, CN, LLD). Smart India Hackathon 2025 Winner (Top 0.1%); 1000+ DSA problems solved.",
};

export const stats = [
  { label: "CGPA", value: "8.57" },
  { label: "DSA problems solved", value: "1000+" },
  { label: "SIH 2025 rank", value: "Top 0.1%" },
  { label: "LeetCode rating", value: "1842" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "AI/ML & LLMs",
    items: ["LLM APIs (OpenAI/Gemini)", "RAG Pipelines", "Multi-Agent Systems", "DuckDB"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Vercel", "Docker"],
  },
  {
    category: "Coursework",
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks", "System Design (LLD)"],
  },
];

export const education = {
  school: "Birla Institute of Technology Mesra",
  degree: "B.Tech in CSE (AI/ML)",
  duration: "Sep 2023 – May 2027",
  location: "Ranchi, Jharkhand",
  details: "CGPA: 8.57 | Class XII: 95.5% | Class X: 93%",
};

export const experience = [
  {
    role: "Software Development Engineer Intern",
    org: "P2P Connect (Remote)",
    duration: "Jun 2024 – Jul 2024",
    link: "https://drive.google.com/file/d/1zPK4m7S0Va_yahiuLOpNoC6F876bHg3v/view?usp=sharing",
    linkLabel: "Internship Letter",
    bullets: [
      "Boosted AI-driven matchmaking alignment accuracy by 28% by redesigning core matching logic and evaluation criteria.",
      "Cut chatbot response error rate by 18% through systematic interaction analysis and targeted rule-based adjustments.",
      "Surfaced 50+ functional and UI bugs via structured QA testing, directly improving platform stability and user experience.",
    ],
  },
];

export const projects = [
  {
    title: "DataTalk",
    subtitle: "Multi-Agent Data Analytics",
    tech: ["ReactJS", "TypeScript", "Express.js", "DuckDB", "LLM APIs"],
    demo: "https://natwest-hackathon-beta.vercel.app/",
    github: "https://github.com/Dakshkweera/Natwest-Hackathon",
    bullets: [
      "Delivered natural-language querying over 100K+ row datasets in under 15 seconds, eliminating manual SQL/Python scripting entirely for non-technical users.",
      "Engineered automatic query routing across SQL, Python, and search agents on a TypeScript + Express backend; LLMs access schema metadata only — all execution runs locally via DuckDB for full data security.",
      "Built a sandboxed Python execution environment with strict resource controls for statistical analysis and chart generation, plus an interactive preprocessing pipeline with multi-table support.",
    ],
  },
  {
    title: "Dhanalysis",
    subtitle: "Portfolio Analytics Platform",
    tech: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    demo: "https://dhanalysis.vercel.app/",
    github: "https://github.com/Dakshkweera",
    bullets: [
      "Automated XIRR, CAGR, drawdown, and risk metric computation across 20+ stocks, replacing hours of manual Excel work with instant, reliable results.",
      "Integrated NIFTY 50 benchmarking with rate-limited Yahoo Finance ingestion, cron-based automated reporting, and a portfolio-aware AI insight layer for contextual analysis.",
      "Implemented Firebase Auth with JWT session management supporting full multi-user portfolio isolation and scalable architecture.",
    ],
  },
  {
    title: "CodeLearner",
    subtitle: "Code Navigation Platform",
    tech: ["ReactJS", "Node.js", "Express.js", "PostgreSQL", "TypeScript"],
    demo: "https://code-learner-theta.vercel.app/",
    github: "https://github.com/Dakshkweera/codelearner",
    bullets: [
      "Reduced codebase onboarding time by ~65% via GitHub repo ingestion and React Flow dependency graphs — replacing manual code reading.",
      "Built a RAG-based AI assistant (Perplexity API) for context-aware code Q&A grounded in the ingested repository, supporting 100+ files per session.",
      "Engineered a Tree-sitter AST parser with function-level chunking; applied JWT auth, rate-limited APIs, and PostgreSQL-backed session persistence with OOP design principles.",
    ],
  },
];

export const achievements = [
  { title: "Smart India Hackathon 2025 Winner", detail: "Top 0.1% among 100,000+ teams nationwide." },
  { title: "UIDAI Data Hackathon 2026 National Finalist", detail: "Top 0.5% nationwide." },
  { title: "Code For Purpose 2026 National Finalist", detail: "Top 0.5% among 5,000+ teams." },
  {
    title: "Competitive programming",
    detail: "Codeforces: 1447 (Specialist) | LeetCode: 1842 (Top ~6%) | 1000+ DSA problems solved across Codeforces, LeetCode, and GeeksforGeeks.",
  },
];
