export const profile = {
  name: "Daksh Kweera",
  role: "SWE — AI/ML & Full-Stack",
  location: "Haldwani, Uttarakhand",
  email: "smartwork2327@gmail.com",
  linkedin: "https://www.linkedin.com/in/daksh-kweera-2008aa289/",
  github: "https://github.com/Dakshkweera",
  medium: "https://medium.com/@smartwork2327",
};

export const whoIAm = {
  eyebrow: "The Shinobi",
  lead: "I build full-stack systems and AI-powered applications.",
  body: "Multi-agent LLM systems, RAG architectures, and analytics platforms — with problem solving as the thread running through all of it.",
  credentials: "B.Tech CSE (AI/ML) • BIT Mesra",
};

export const journey = [
  { stage: "Computer science foundations", detail: "OOP, OS, DBMS, computer networks, system design." },
  { stage: "Data structures and algorithms", detail: "The base layer for everything that followed." },
  { stage: "Competitive problem solving", detail: "Codeforces, LeetCode, GeeksforGeeks — 1000+ problems." },
  { stage: "Building full-stack applications", detail: "React, Node.js, Express, FastAPI." },
  { stage: "Backend systems, APIs, and databases", detail: "MongoDB, MySQL, PostgreSQL, REST APIs." },
  { stage: "Exploring AI-powered systems", detail: "LLM APIs — OpenAI, Gemini." },
  { stage: "RAG and multi-agent LLM architectures", detail: "DataTalk, CodeLearner." },
  { stage: "Applying it at scale", detail: "National hackathons — SIH, UIDAI, Code For Purpose." },
];

export const projects = [
  {
    title: "DataTalk",
    subtitle: "Multi-Agent Data Analytics",
    why: "Non-technical users routinely need to analyze large datasets but can't write SQL or Python.",
    problem: "Querying 100,000+ row datasets in natural language, without exposing raw data to an LLM.",
    built:
      "A system that automatically routes natural-language requests across SQL, Python, and search agents on a TypeScript + Express backend. LLMs only ever see schema metadata — never raw dataset contents — while all execution runs locally through DuckDB.",
    challenge:
      "Keeping data fully local and secure while still letting an LLM reason about it accurately enough to route and generate correct queries.",
    decision:
      "Built a sandboxed Python execution environment with strict resource controls for statistical analysis and chart generation, rather than giving the LLM direct execution access.",
    result: "Natural-language querying over 100K+ row datasets in under 15 seconds, no manual scripting required.",
    tech: ["ReactJS", "TypeScript", "Express.js", "DuckDB", "LLM APIs"],
    demo: "https://natwest-hackathon-beta.vercel.app/",
    github: "https://github.com/Dakshkweera/Natwest-Hackathon",
  },
  {
    title: "Dhanalysis",
    subtitle: "Portfolio Analytics Platform",
    why: "Manual Excel-based portfolio analysis doesn't scale past a handful of stocks and takes hours to redo.",
    problem: "Computing XIRR, CAGR, drawdown, and risk metrics reliably across a real multi-stock portfolio.",
    built:
      "A platform automating XIRR, CAGR, drawdown, and risk metric computation across 20+ stocks, with NIFTY 50 benchmarking, rate-limited market data ingestion, and scheduled automated reporting.",
    challenge: "Keeping financial calculations accurate while ingesting rate-limited external market data reliably.",
    decision:
      "Added a portfolio-aware AI insight layer on top of the raw metrics, plus Firebase Auth with JWT session management for proper multi-user portfolio isolation.",
    result: "Hours of manual Excel work replaced with instant, reliable analytics.",
    tech: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    demo: "https://dhanalysis.vercel.app/",
    github: "https://github.com/Dakshkweera",
  },
  {
    title: "CodeLearner",
    subtitle: "Code Navigation Platform",
    why: "Understanding an unfamiliar codebase by reading files one at a time is slow and error-prone.",
    problem: "Making a large, unfamiliar GitHub repository navigable and queryable quickly.",
    built:
      "A platform that ingests GitHub repositories, builds dependency graphs with React Flow, and runs a RAG-based AI assistant (Perplexity API) for context-aware Q&A grounded in the actual repository — supporting 100+ files per session.",
    challenge: "Chunking code in a way that preserves enough context for the RAG assistant to answer accurately.",
    decision:
      "Used a Tree-sitter AST parser with function-level chunking instead of naive line-based splitting, backed by JWT auth, rate-limited APIs, and PostgreSQL-backed session persistence.",
    result: "~65% reduction in codebase onboarding time.",
    tech: ["ReactJS", "Node.js", "Express.js", "PostgreSQL", "TypeScript"],
    demo: "https://code-learner-theta.vercel.app/",
    github: "https://github.com/Dakshkweera/codelearner",
  },
];

export const competitive = {
  codeforces: { rank: "Specialist", rating: 1447 },
  leetcode: { rank: "Knight", rating: 1875 },
  problemsSolved: "1000+",
  platforms: "Codeforces, LeetCode, and GeeksforGeeks",
};

export const battleRecords = [
  {
    event: "Smart India Hackathon 2025",
    result: "Winner",
    scale: "Top 0.1% among 100,000+ teams nationwide",
    context: "",
    contribution: "",
  },
  {
    event: "UIDAI Data Hackathon 2026",
    result: "National Finalist",
    scale: "Top 0.5% nationwide",
    context: "",
    contribution: "",
  },
  {
    event: "Code For Purpose 2026",
    result: "National Finalist",
    scale: "Top 0.5% among 5,000+ teams",
    context: "",
    contribution: "",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Full-Stack Development",
    items: ["React", "Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    category: "AI & LLM Systems",
    items: ["LLM APIs", "OpenAI APIs", "Gemini APIs", "RAG Pipelines", "Multi-Agent Systems", "DuckDB"],
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
    category: "Computer Science",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "System Design (LLD)",
    ],
  },
];

export const education = {
  school: "Birla Institute of Technology Mesra",
  degree: "B.Tech in CSE (AI/ML)",
  duration: "Sep 2023 – May 2027",
  location: "Ranchi, Jharkhand",
};

export const experience = [
  {
    role: "Software Development Engineer Intern",
    org: "P2P Connect (Remote)",
    duration: "Jun 2024 – Jul 2024",
    link: "https://drive.google.com/file/d/1zPK4m7S0Va_yahiuLOpNoC6F876bHg3v/view?usp=sharing",
    linkLabel: "Internship Letter",
    focus: "AI-driven matchmaking logic, chatbot interaction analysis, rule-based improvements, structured QA.",
    metrics: [
      { value: "28%", label: "Matchmaking accuracy improvement" },
      { value: "18%", label: "Chatbot error rate reduction" },
      { value: "50+", label: "Bugs surfaced via structured QA" },
    ],
  },
];

// Add real Medium articles here as they're published.
export const blogs: {
  title: string;
  topic: string;
  premise: string;
  readTime: string;
  date: string;
  url: string;
}[] = [];

// Replace each placeholder with a real example from an actual project.
export const howIThink = [
  {
    title: "Understanding unfamiliar problems",
    placeholder: "How I break down a problem I haven't seen before — add a real example.",
  },
  {
    title: "Breaking down complex systems",
    placeholder: "How I decompose a large system into smaller, testable pieces — add a real example.",
  },
  {
    title: "Debugging",
    placeholder: "My actual debugging process when something breaks — add a real example.",
  },
  {
    title: "Choosing technical approaches",
    placeholder: "How I decide between competing technical approaches — add a real example, e.g. from DataTalk or CodeLearner.",
  },
  {
    title: "Learning unfamiliar technologies",
    placeholder: "How I ramp up on a new technology or API — add a real example.",
  },
];

export const nextChapter = {
  statement: "This is where I am right now — the journey is still going.",
};
