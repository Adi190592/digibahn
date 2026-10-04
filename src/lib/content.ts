// Centralised site content. Copy is intentionally short, technical and precise.

export type Capability = {
  index: string;
  slug: string;
  title: string;
  statement: string;
  services: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    slug: "ai-transformation",
    title: "AI Transformation",
    statement: "Move from AI experimentation to enterprise adoption.",
    services: [
      "AI Readiness Assessment",
      "Enterprise AI Strategy",
      "AI Opportunity Mapping",
      "AI Architecture",
      "GenAI Implementation",
      "AI Governance",
      "AI Adoption Roadmaps",
    ],
  },
  {
    index: "02",
    slug: "ai-engineering",
    title: "AI Engineering",
    statement: "Build intelligence directly into your technology stack.",
    services: [
      "Enterprise AI Agents",
      "LLM Applications",
      "Retrieval-Augmented Generation",
      "Knowledge Systems",
      "Multi-Agent Systems",
      "AI Copilots",
      "Model Integration",
      "Model Evaluation",
      "Private AI",
      "Edge AI",
    ],
  },
  {
    index: "03",
    slug: "enterprise-integration",
    title: "Enterprise Integration",
    statement: "Connect the systems your organization depends on.",
    services: [
      "API Integration",
      "Enterprise Application Integration",
      "ERP Integration",
      "CRM Integration",
      "Middleware",
      "Event-Driven Architecture",
      "Microservices",
      "Identity Integration",
      "Legacy System Integration",
    ],
  },
  {
    index: "04",
    slug: "product-engineering",
    title: "Product Engineering",
    statement: "Build the products your next decade depends on.",
    services: [
      "AI-Native Applications",
      "SaaS Platforms",
      "Enterprise Platforms",
      "Mobile Applications",
      "Web Applications",
      "MVP Development",
      "Product Modernization",
      "UX Engineering",
    ],
  },
  {
    index: "05",
    slug: "data-and-cloud",
    title: "Data & Cloud",
    statement: "Create the infrastructure intelligence depends on.",
    services: [
      "Cloud Architecture",
      "Cloud Modernization",
      "Data Platforms",
      "Data Engineering",
      "Data Lakes",
      "Data Warehouses",
      "Real-Time Data Pipelines",
      "MLOps",
      "AI Infrastructure",
    ],
  },
  {
    index: "06",
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    statement: "Turn workflows into intelligent systems.",
    services: [
      "AI Agents",
      "Process Automation",
      "Intelligent Document Processing",
      "Workflow Orchestration",
      "Conversational AI",
      "Decision Automation",
      "Customer Service Automation",
      "Back-Office Automation",
    ],
  },
];

export const PILLARS = [
  {
    index: "01",
    title: "Integrate",
    body: "Connect enterprise applications, infrastructure, data and workflows.",
  },
  {
    index: "02",
    title: "Modernize",
    body: "Transform legacy environments into scalable, cloud-ready digital architectures.",
  },
  {
    index: "03",
    title: "Intelligence",
    body: "Embed AI, automation, agents and decision intelligence into enterprise operations.",
  },
  {
    index: "04",
    title: "Engineer",
    body: "Design and build entirely new AI-native products, platforms and digital experiences.",
  },
];

export const EVOLUTION_STAGES = [
  { index: "01", title: "Digitized", body: "Applications and digital processes." },
  { index: "02", title: "Connected", body: "Integrated systems and APIs." },
  { index: "03", title: "Data-Driven", body: "Unified data and analytics." },
  { index: "04", title: "AI-Enabled", body: "AI embedded into applications." },
  {
    index: "05",
    title: "AI-Native",
    body: "Agents and intelligence operating across the enterprise.",
  },
];

export const ARCHITECTURE_LAYERS = [
  {
    index: "01",
    title: "Experience",
    nodes: ["Web", "Mobile", "Conversational Interfaces", "Copilots"],
  },
  {
    index: "02",
    title: "Intelligence",
    nodes: ["AI Agents", "LLMs", "Machine Learning", "Decision Engines"],
  },
  {
    index: "03",
    title: "Orchestration",
    nodes: ["APIs", "Workflows", "Event Streams", "Automation"],
  },
  {
    index: "04",
    title: "Enterprise Systems",
    nodes: ["ERP", "CRM", "HRMS", "SCM", "Custom Applications"],
  },
  {
    index: "05",
    title: "Data",
    nodes: ["Data Warehouse", "Data Lake", "Vector Databases", "Knowledge Graphs"],
  },
  {
    index: "06",
    title: "Infrastructure",
    nodes: ["Cloud", "Edge", "On-Premise", "Hybrid"],
  },
];

export const STUDIO_PROCESS = [
  { index: "01", title: "Discover", body: "Opportunity & user problem" },
  { index: "02", title: "Prototype", body: "Rapid functional prototype" },
  { index: "03", title: "Validate", body: "Real users + real workflows" },
  { index: "04", title: "Engineer", body: "Production architecture" },
  { index: "05", title: "Deploy", body: "Enterprise deployment" },
  { index: "06", title: "Evolve", body: "Continuous intelligence" },
];

export type Research = {
  title: string;
  area: string;
  status: "Released" | "Experimental" | "Research" | "Prototype" | "Production";
  description: string;
  technology: string[];
};

export const RESEARCH_AREAS = [
  "AI Agents",
  "Multi-Agent Systems",
  "Small Language Models",
  "Enterprise RAG",
  "Computer Vision",
  "Voice AI",
  "Multimodal AI",
  "Edge AI",
  "AI Security",
  "Model Evaluation",
  "Human-AI Interaction",
];

export const RESEARCH_PROJECTS: Research[] = [
  {
    title: "Orchestrated Agent Mesh",
    area: "Multi-Agent Systems",
    status: "Experimental",
    description:
      "A coordination layer that lets specialised agents negotiate tasks across enterprise systems without a central bottleneck.",
    technology: ["LangGraph", "Message Bus", "Tool Routing", "Policy Engine"],
  },
  {
    title: "Grounded Enterprise RAG",
    area: "Enterprise RAG",
    status: "Production",
    description:
      "Retrieval pipelines with access-aware grounding, citation integrity and evaluation harnesses for regulated environments.",
    technology: ["Vector Search", "Reranking", "Evals", "Access Control"],
  },
  {
    title: "Small Models, Local Inference",
    area: "Small Language Models",
    status: "Research",
    description:
      "Fine-tuned small language models running at the edge for latency, cost and data-residency constrained workloads.",
    technology: ["SLMs", "Quantization", "On-Device", "Distillation"],
  },
  {
    title: "Agent Observability",
    area: "Model Evaluation",
    status: "Prototype",
    description:
      "Tracing, replay and regression testing for agentic systems so behaviour stays legible before it reaches production.",
    technology: ["Tracing", "Replay", "Regression Suites", "Telemetry"],
  },
  {
    title: "Voice-First Operations",
    area: "Voice AI",
    status: "Experimental",
    description:
      "Low-latency speech interfaces for frontline and field operations that act across backend systems in real time.",
    technology: ["Streaming ASR", "TTS", "Turn-taking", "Function Calling"],
  },
  {
    title: "Policy-Aware AI Security",
    area: "AI Security",
    status: "Research",
    description:
      "Guardrails, prompt-injection defence and data-governance controls designed for agents operating on live systems.",
    technology: ["Guardrails", "Red-teaming", "Isolation", "Audit"],
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  problem: string;
  technology: string[];
  outcome: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "001",
    title: "Intelligent Enterprise Knowledge Platform",
    industry: "Financial Services",
    problem:
      "Built an enterprise knowledge intelligence layer allowing employees to query internal documents, policies and operational data using natural language.",
    technology: ["LLM", "RAG", "Vector Search", "Enterprise APIs", "Access Control"],
    outcome:
      "Faster knowledge retrieval and reduced operational dependency on manual search.",
  },
  {
    id: "002",
    title: "Agentic Service Operations",
    industry: "Telecommunications",
    problem:
      "Engineered customer-service agents able to resolve account, billing and provisioning requests by acting across CRM, billing and ticketing systems.",
    technology: ["AI Agents", "CRM Integration", "Event Streams", "Orchestration"],
    outcome:
      "Reduced resolution time and handoffs, with full auditability of every automated action.",
  },
  {
    id: "003",
    title: "Legacy-to-Cloud Intelligence Modernization",
    industry: "Manufacturing",
    problem:
      "Modernized a fragmented legacy estate into a connected, cloud-ready data platform feeding real-time analytics and AI.",
    technology: ["Cloud Architecture", "Event-Driven Integration", "Data Platform", "MLOps"],
    outcome:
      "Unified operational data and a foundation for predictive, intelligent workflows.",
  },
  {
    id: "004",
    title: "Intelligent Document Processing at Scale",
    industry: "Insurance",
    problem:
      "Replaced manual document handling with an intelligent pipeline that extracts, validates and routes high volumes of unstructured documents.",
    technology: ["IDP", "Computer Vision", "LLM Extraction", "Workflow Orchestration"],
    outcome:
      "Dramatically reduced manual processing with human-in-the-loop review on exceptions.",
  },
];

export const INDUSTRIES = [
  { slug: "bfsi", name: "BFSI" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "retail", name: "Retail" },
  { slug: "logistics", name: "Logistics" },
  { slug: "energy", name: "Energy" },
  { slug: "government", name: "Government" },
  { slug: "education", name: "Education" },
  { slug: "technology", name: "Technology" },
  { slug: "professional-services", name: "Professional Services" },
];

export const ENGAGEMENTS = [
  {
    index: "01",
    title: "AI Discovery",
    audience: "For organizations exploring AI.",
    deliverables: [
      "AI readiness assessment",
      "Opportunity mapping",
      "Architecture recommendations",
      "Implementation roadmap",
    ],
  },
  {
    index: "02",
    title: "Proof of Value",
    audience: "For organizations validating a use case.",
    deliverables: [
      "Functional prototype",
      "Business validation",
      "Architecture",
      "ROI assessment",
    ],
  },
  {
    index: "03",
    title: "Build",
    audience: "For organizations ready to deploy.",
    deliverables: ["Product engineering", "Integration", "Deployment", "Security", "Scale"],
  },
  {
    index: "04",
    title: "Evolve",
    audience: "For organizations continuously improving AI capabilities.",
    deliverables: [
      "Managed engineering",
      "Model optimization",
      "Agent development",
      "Platform enhancement",
      "Continuous experimentation",
    ],
  },
];

export const WHY_US = [
  {
    title: "AI-Native",
    body: "AI is not a capability we added. It shapes how we architect technology.",
  },
  {
    title: "Engineering-First",
    body: "Working systems over endless presentations.",
  },
  {
    title: "Enterprise-Aware",
    body: "We understand that AI must coexist with legacy systems, security, compliance and real operational constraints.",
  },
  {
    title: "Product Mindset",
    body: "We think about adoption, users and business outcomes — not just technical implementation.",
  },
  {
    title: "Technology Agnostic",
    body: "Architecture before vendor preference.",
  },
  {
    title: "Built to Evolve",
    body: "AI changes continuously. Your technology architecture should too.",
  },
];

export const TECH_ECOSYSTEM = [
  {
    category: "AI",
    items: ["OpenAI", "Anthropic", "Google Gemini", "Meta Llama", "Mistral", "Hugging Face"],
  },
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Snowflake", "Databricks", "Redis", "Vector Databases"],
  },
  {
    category: "Enterprise",
    items: ["SAP", "Salesforce", "Microsoft", "Oracle", "ServiceNow"],
  },
  {
    category: "Engineering",
    items: ["Python", "TypeScript", "React", "Next.js", "Node.js", "Kubernetes", "Docker"],
  },
];

export const AGENT_CAPABILITIES = [
  "Customer Service Agents",
  "Sales Agents",
  "Knowledge Agents",
  "Research Agents",
  "Finance Agents",
  "Operations Agents",
  "Employee Copilots",
  "Workflow Agents",
];

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "enterprise-architecture-in-the-age-of-ai-agents",
    title: "Why Enterprise Architecture Changes in the Age of AI Agents",
    category: "Architecture",
    excerpt:
      "When software can reason and act, the architecture that governs it has to change. A look at the new control plane.",
    readingTime: "7 min",
    date: "2026-09-18",
  },
  {
    slug: "rag-isnt-your-ai-strategy",
    title: "RAG Isn't Your AI Strategy",
    category: "Enterprise AI",
    excerpt:
      "Retrieval is a technique, not a strategy. What enterprises actually need beneath the retrieval layer.",
    readingTime: "6 min",
    date: "2026-08-30",
  },
  {
    slug: "the-api-economy-is-becoming-the-agent-economy",
    title: "The API Economy Is Becoming the Agent Economy",
    category: "Agents",
    excerpt:
      "APIs let systems call each other. Agents let systems reason about when and why. The shift is structural.",
    readingTime: "8 min",
    date: "2026-08-12",
  },
  {
    slug: "building-ai-systems-that-reach-production",
    title: "Building AI Systems That Actually Reach Production",
    category: "AI Engineering",
    excerpt:
      "The distance between a demo and a deployed system is where most AI initiatives fail. Closing it is an engineering problem.",
    readingTime: "9 min",
    date: "2026-07-25",
  },
  {
    slug: "why-every-enterprise-needs-an-intelligence-layer",
    title: "Why Every Enterprise Needs an Intelligence Layer",
    category: "Enterprise AI",
    excerpt:
      "The next layer of the enterprise stack isn't another application. It's intelligence that spans all of them.",
    readingTime: "6 min",
    date: "2026-07-03",
  },
  {
    slug: "from-saas-workflows-to-agentic-workflows",
    title: "From SaaS Workflows to Agentic Workflows",
    category: "Agents",
    excerpt:
      "Workflows used to be screens a person clicked through. Increasingly they're goals an agent pursues.",
    readingTime: "7 min",
    date: "2026-06-15",
  },
];

export const INSIGHT_CATEGORIES = [
  "AI Engineering",
  "Enterprise AI",
  "Agents",
  "Architecture",
  "Product Engineering",
  "Research",
  "Digital Transformation",
  "Data",
  "Cloud",
];

// Answer-engine (AEO) explainers — structured for FAQ schema.
export const FAQ = [
  {
    q: "What is an AI-native enterprise?",
    a: "An AI-native enterprise is one where intelligence is part of the architecture rather than an add-on. AI models, agents and automation operate across applications, data and workflows, so systems can reason and act, not only store and display information.",
  },
  {
    q: "What is AI engineering?",
    a: "AI engineering is the discipline of building production systems around AI models — agents, LLM applications, retrieval pipelines, evaluation and integration — with the reliability, security and observability enterprise systems require.",
  },
  {
    q: "What is enterprise AI integration?",
    a: "Enterprise AI integration connects AI models and agents to the systems an organization already runs — ERP, CRM, data platforms and APIs — so intelligence can operate on real business data and workflows under existing security and governance.",
  },
  {
    q: "What are AI agents?",
    a: "AI agents are software systems that use models to reason about a goal, decide on actions and carry them out across tools and systems. In the enterprise they operate across CRM, ERP, email, data and workflows with auditability and controls.",
  },
  {
    q: "How can AI agents integrate with ERP systems?",
    a: "Agents integrate with ERP systems through APIs, event-driven interfaces and middleware, using access-aware tooling so they can read and act on ERP data within the permissions, approvals and audit trails the organization already enforces.",
  },
  {
    q: "What is an AI Product Studio?",
    a: "An AI Product Studio designs and engineers new products where AI is part of the product architecture — moving from discovery and prototype through validation to production deployment, rather than treating AI as a feature bolted on at the end.",
  },
  {
    q: "What is an AI Engineering Lab?",
    a: "An AI Engineering Lab explores emerging AI technologies — agents, multimodal systems, small language models, edge intelligence and enterprise RAG — before they become mainstream, turning research into prototypes and then into deployable systems.",
  },
  {
    q: "What is RAG?",
    a: "RAG (Retrieval-Augmented Generation) grounds a language model's responses in retrieved, authoritative data. In the enterprise it is combined with access control, reranking and evaluation so answers are accurate, cited and permission-aware.",
  },
];

export const SHIFT_LINES = [
  "Software connected businesses.",
  "Cloud connected infrastructure.",
  "Data connected decisions.",
];
