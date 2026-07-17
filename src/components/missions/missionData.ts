export type Metric = { label: string; value: number };

export type Mission = {
  id: string;
  number: string;
  title: string;
  category: string;
  objective: string;
  problem: string;
  role: string;
  technicalChallenge: string;
  solution: string;
  outcome: string;
  techStack: string[];
  architecture: string[];
  metrics: Metric[];
  github: string;
  demo: string;
};

export const missions: Mission[] = [
  {
    id: "datatalk",
    number: "01",
    title: "DataTalk",
    category: "Multi-Agent Data Analytics",
    objective:
      "Non-technical users routinely need to analyze large datasets but can't write SQL or Python.",
    problem:
      "Querying 100,000+ row datasets in natural language, without exposing raw data to an LLM.",
    role: "End-to-end builder — designed the agent-routing architecture and the sandboxed local execution layer.",
    technicalChallenge:
      "Keeping data fully local and secure while still letting an LLM reason about it accurately enough to route and generate correct queries.",
    solution:
      "A system that automatically routes natural-language requests across SQL, Python, and search agents on a TypeScript + Express backend. LLMs only ever see schema metadata — never raw dataset contents — while all execution runs locally through DuckDB. Statistical analysis and chart generation run inside a sandboxed Python environment with strict resource controls, rather than giving the LLM direct execution access.",
    outcome: "Natural-language querying over 100K+ row datasets in under 15 seconds, no manual scripting required.",
    techStack: ["ReactJS", "TypeScript", "Express.js", "DuckDB", "LLM APIs"],
    architecture: [
      "Natural-language query",
      "Agent router — SQL / Python / Search",
      "Schema-only context passed to LLM",
      "Sandboxed local execution (DuckDB)",
      "Result & chart response",
    ],
    metrics: [
      { label: "Architecture", value: 5 },
      { label: "Backend", value: 4 },
      { label: "Frontend", value: 3 },
      { label: "AI Systems", value: 5 },
      { label: "Scalability", value: 4 },
      { label: "Complexity", value: 5 },
    ],
    github: "https://github.com/Dakshkweera/Natwest-Hackathon",
    demo: "https://natwest-hackathon-beta.vercel.app/",
  },
  {
    id: "dhanalysis",
    number: "02",
    title: "Dhanalysis",
    category: "Portfolio Analytics Platform",
    objective: "Manual Excel-based portfolio analysis doesn't scale past a handful of stocks and takes hours to redo.",
    problem: "Computing XIRR, CAGR, drawdown, and risk metrics reliably across a real multi-stock portfolio.",
    role: "End-to-end builder — designed the metrics engine, benchmarking pipeline, and multi-user auth layer.",
    technicalChallenge: "Keeping financial calculations accurate while ingesting rate-limited external market data reliably.",
    solution:
      "A platform automating XIRR, CAGR, drawdown, and risk metric computation across 20+ stocks, with NIFTY 50 benchmarking, rate-limited market data ingestion, and scheduled automated reporting. A portfolio-aware AI insight layer sits on top of the raw metrics, backed by Firebase Auth with JWT session management for proper multi-user portfolio isolation.",
    outcome: "Hours of manual Excel work replaced with instant, reliable analytics.",
    techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    architecture: [
      "Rate-limited market data ingestion",
      "XIRR / CAGR / drawdown engine",
      "NIFTY 50 benchmarking",
      "AI insight layer",
      "Scheduled reports + multi-user auth",
    ],
    metrics: [
      { label: "Architecture", value: 4 },
      { label: "Backend", value: 5 },
      { label: "Frontend", value: 3 },
      { label: "AI Systems", value: 3 },
      { label: "Scalability", value: 4 },
      { label: "Complexity", value: 4 },
    ],
    github: "https://github.com/Dakshkweera",
    demo: "https://dhanalysis.vercel.app/",
  },
  {
    id: "codelearner",
    number: "03",
    title: "CodeLearner",
    category: "Code Navigation Platform",
    objective: "Understanding an unfamiliar codebase by reading files one at a time is slow and error-prone.",
    problem: "Making a large, unfamiliar GitHub repository navigable and queryable quickly.",
    role: "End-to-end builder — designed the AST chunking pipeline and the RAG retrieval layer behind the assistant.",
    technicalChallenge: "Chunking code in a way that preserves enough context for the RAG assistant to answer accurately.",
    solution:
      "A platform that ingests GitHub repositories, builds dependency graphs with React Flow, and runs a RAG-based AI assistant (Perplexity API) for context-aware Q&A grounded in the actual repository — supporting 100+ files per session. Uses a Tree-sitter AST parser with function-level chunking instead of naive line-based splitting, backed by JWT auth, rate-limited APIs, and PostgreSQL-backed session persistence.",
    outcome: "~65% reduction in codebase onboarding time.",
    techStack: ["ReactJS", "Node.js", "Express.js", "PostgreSQL", "TypeScript"],
    architecture: [
      "GitHub repository ingestion",
      "Tree-sitter AST chunking",
      "Dependency graph (React Flow)",
      "RAG assistant (Perplexity API)",
      "Context-aware Q&A response",
    ],
    metrics: [
      { label: "Architecture", value: 5 },
      { label: "Backend", value: 4 },
      { label: "Frontend", value: 4 },
      { label: "AI Systems", value: 5 },
      { label: "Scalability", value: 3 },
      { label: "Complexity", value: 4 },
    ],
    github: "https://github.com/Dakshkweera/codelearner",
    demo: "https://code-learner-theta.vercel.app/",
  },
];
