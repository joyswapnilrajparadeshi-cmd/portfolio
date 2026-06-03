export const profile = {
  name: 'Joy Swapnil Raj Paradeshi',
  shortName: 'Joy Swapnil Raj',
  role: 'AI Research Intern & AI Full-Stack Developer',
  location: 'Hyderabad, India',
  email: 'joyswapnilrajparadeshi@gmail.com',
  github: 'https://github.com/joyswapnilrajparadeshi-cmd',
  linkedin: 'https://www.linkedin.com/in/joy-swapnil-raj-paradeshi-23b3aa387',
  resume: 'assets/resume/Joy_Swapnil_Resume.pdf',
  photo: 'assets/profile/joy-profile.jpg',
  headline: 'AI Research Intern building intelligent agents, automation systems, and full-stack products.',
  summary:
    'I build practical AI systems with n8n, OpenAI, React, Node.js, Supabase, geospatial interfaces, dashboards, and automation workflows. My work connects research, product engineering, and real-world problem solving through deployed projects and working AI agents.',
  availability: 'Open to AI research, full-stack development, product engineering, and automation opportunities'
};

export const proofBadges = [
  'AI Research Intern @ DeepDrishti.ai',
  'GATE 2026 Qualified',
  'NPTEL NLP Top 5%',
  'JNTUA Academic Topper',
  '9 Production-style n8n Agents',
  'CrisisTwin AI Builder'
];

export const stats = [
  { value: '9', label: 'AI automation agents built with n8n, OpenAI, Qdrant, Gmail, Sheets, Calendar, Telegram, and Twilio' },
  { value: 'Top 5%', label: 'NPTEL Natural Language Processing certification' },
  { value: 'GATE', label: 'Qualified GATE 2026' },
  { value: 'Live', label: 'Hosted CrisisTwin AI full-stack disaster-response platform' }
];

export const experience = [
  {
    company: 'DeepDrishti.ai',
    role: 'AI Research Intern',
    location: 'Hyderabad, India',
    period: 'Current',
    description:
      'Working on AI research workflows, n8n-based automation agents, and intelligent systems that connect AI models, APIs, triggers, webhooks, vector databases, and multi-step task orchestration.',
    highlights: [
      'Built n8n-based AI agents for Telegram chat, RAG knowledge retrieval, support desk automation, email drafting, daily briefings, calls, meetings, and appointment scheduling.',
      'Designed workflows involving triggers, webhooks, AI model calls, Qdrant retrieval, Ollama embeddings, Google Sheets, Gmail, Google Calendar, Twilio, and external API tools.',
      'Structured agent workflows with clear triggers, model reasoning, tool integrations, outputs, and operational logging.'
    ]
  }
];

export const flagshipProjects = [
  {
    title: 'CrisisTwin AI',
    tag: 'Flagship AI Product',
    status: 'Hosted project',
    live: 'https://crisistwin-ai.onrender.com',
    github: 'https://github.com/joyswapnilrajparadeshi-cmd/crisistwin-ai',
    cover: 'assets/crisistwin-ai/screenshots/02-map-risk.png',
    screenshots: [
      'assets/crisistwin-ai/screenshots/01-dashboard.png',
      'assets/crisistwin-ai/screenshots/02-map-risk.png',
      'assets/crisistwin-ai/screenshots/03-ai-image-intelligence.png',
      'assets/crisistwin-ai/screenshots/04-pdf-report.png'
    ],
    description:
      'A full-stack AI-powered disaster-response digital twin that combines OpenStreetMap/Leaflet geospatial context, weather-based risk scoring, image intelligence, routing, role-based access, saved missions, and PDF report export.',
    problem:
      'During crisis situations, responders need fast situational awareness across weather, routes, locations, images, mission data, and reports.',
    solution:
      'CrisisTwin AI brings these workflows into a single dashboard where users can analyze locations, visualize risk, generate AI-assisted insights, plan routes, save missions, and export structured reports.',
    features: [
      'OpenStreetMap and Leaflet geospatial dashboard',
      'Weather-based risk scoring and crisis context',
      'AI image intelligence for field assessment',
      'Emergency routing and mission planning',
      'Supabase authentication and role-based access',
      'Saved missions and mission history',
      'PDF report export for documentation'
    ],
    stack: ['React', 'Vite', 'Express', 'OpenAI', 'Supabase', 'Leaflet', 'OpenStreetMap', 'PDF Export']
  }
];

export const n8nAgents = [
  {
    id: 'agent-01',
    title: 'Telegram AI Bot Agent',
    category: 'n8n + Telegram + OpenAI',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'An AI-powered Telegram chatbot workflow that checks Telegram updates, extracts user messages, processes them through an OpenAI-powered AI Agent, and sends responses back to Telegram.',
    tools: ['n8n', 'Telegram Bot API', 'OpenAI Chat Model', 'AI Agent', 'JavaScript Code Node', 'Schedule Trigger'],
    workflow: [
      'Scheduled trigger checks Telegram updates',
      'HTTP request fetches new bot messages',
      'JavaScript node stores last update ID and extracts chat text',
      'AI Agent generates the response using OpenAI',
      'Telegram node sends the reply back to the user'
    ],
    screenshots: [
      'assets/n8n-agents/agent-01/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-01/images/02-telegram-response.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-01/workflows/telegram-ai-bot-agent-redacted.json',
    codePreview: 'Schedule Trigger → Telegram getUpdates → JavaScript Parser → AI Agent → Telegram Reply'
  },
  {
    id: 'agent-02',
    title: 'RAG Knowledge Base Assistant',
    category: 'n8n + RAG + Qdrant',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A Retrieval-Augmented Generation assistant that ingests documentation into Qdrant and answers questions only from retrieved knowledge-base context.',
    tools: ['n8n', 'Qdrant Vector Store', 'Ollama Embeddings', 'OpenAI Chat Model', 'LangChain AI Agent', 'Document Loader'],
    workflow: [
      'Document ingestion reads and extracts text files',
      'Ollama creates embeddings using nomic-embed-text',
      'Qdrant stores knowledge-base vectors',
      'Chat trigger receives user questions',
      'AI Agent uses Qdrant retrieval before answering'
    ],
    screenshots: [
      'assets/n8n-agents/agent-02/images/01-ingestion-workflow.png',
      'assets/n8n-agents/agent-02/images/02-retrieval-workflow.png',
      'assets/n8n-agents/agent-02/images/03-output-or-chat-result.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-02/workflows/rag-knowledge-base-assistant-redacted.json',
    codePreview: 'Text Files → Embeddings → Qdrant Insert + Chat Trigger → Qdrant Retrieve-as-Tool → Grounded Answer'
  },
  {
    id: 'agent-03',
    title: 'AI Auto Call Reminder Agent',
    category: 'n8n + Voice Automation',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A consent-based reminder call workflow that collects reminder details, generates a short polite call script with AI, and triggers an automated voice call through Twilio.',
    tools: ['n8n', 'OpenAI Chat Model', 'Twilio Calls API', 'JavaScript Code Node', 'Form Trigger', 'HTTP Request'],
    workflow: [
      'Form collects recipient, phone number, purpose, and deadline',
      'AI Agent creates a concise call message',
      'JavaScript parses the AI JSON response',
      'HTTP request sends TwiML to Twilio',
      'Recipient receives an automated reminder call'
    ],
    screenshots: [
      'assets/n8n-agents/agent-03/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-03/images/02-reminder-form.png',
      'assets/n8n-agents/agent-03/images/03-call-output.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-03/workflows/ai-auto-call-reminder-agent-redacted.json',
    codePreview: 'Form → AI call script → JSON parser → Twilio Calls API → Voice reminder'
  },
  {
    id: 'agent-04',
    title: 'Daily AI Briefing Agent',
    category: 'n8n + Live Data + Email',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A daily automation that creates a clean morning briefing with live Mumbai weather, Bitcoin/Ethereum prices, and latest AI news, then sends it by email.',
    tools: ['n8n', 'OpenAI Chat Model', 'Open-Meteo API', 'CoinGecko API', 'GNews API', 'SMTP Email', 'HTTP Request Tools'],
    workflow: [
      'Schedule trigger runs daily',
      'AI Agent plans the briefing',
      'Weather, crypto, and news tools fetch live data',
      'AI formats the briefing with clear sections',
      'Email node sends the final report'
    ],
    screenshots: [
      'assets/n8n-agents/agent-04/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-04/images/02-email-briefing-output.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-04/workflows/daily-ai-briefing-agent-redacted.json',
    codePreview: 'Schedule → AI Agent → Weather API + Crypto API + News API → Email briefing'
  },
  {
    id: 'agent-05',
    title: 'SmartDesk AI Assistant',
    category: 'n8n + RAG Support Desk',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A knowledge-base support assistant that accepts form questions, retrieves answers from Qdrant, logs interactions in Google Sheets, and optionally emails the answer through Gmail.',
    tools: ['n8n', 'OpenAI Chat Model', 'Qdrant Vector Store', 'Ollama Embeddings', 'Google Sheets', 'Gmail', 'Form Trigger'],
    workflow: [
      'User submits a question through a form',
      'AI Agent retrieves context from Qdrant',
      'Answer is generated only from knowledge-base content',
      'Interaction is logged into Google Sheets',
      'Gmail sends the answer when requested'
    ],
    screenshots: [
      'assets/n8n-agents/agent-05/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-05/images/02-question-form.png',
      'assets/n8n-agents/agent-05/images/03-google-sheets-log.png',
      'assets/n8n-agents/agent-05/images/04-email-answer-output.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-05/workflows/smartdesk-ai-assistant-redacted.json',
    codePreview: 'Form → RAG Agent → Qdrant Tool → Google Sheets Log → Gmail Response'
  },
  {
    id: 'agent-06',
    title: 'AI Google Meet Setter Agent',
    category: 'n8n + Lead Qualification',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A lead qualification workflow that reviews Google Meet requests, approves valid business requests, creates a Meet space, and sends approval or rejection emails.',
    tools: ['n8n', 'OpenAI Chat Model', 'Google Meet API', 'Gmail', 'Form Trigger', 'IF Logic', 'HTTP Request'],
    workflow: [
      'Form collects name, email, company, requirement, and budget',
      'AI Agent validates lead quality and budget',
      'IF node separates approved and rejected requests',
      'Approved path creates a Google Meet link',
      'Gmail sends approval or rejection message'
    ],
    screenshots: [
      'assets/n8n-agents/agent-06/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-06/images/02-meet-request-form.png',
      'assets/n8n-agents/agent-06/images/03-approval-email-output.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-06/workflows/google-meet-setter-agent-redacted.json',
    codePreview: 'Form → AI qualification → IF approved → Google Meet link → Gmail notification'
  },
  {
    id: 'agent-07',
    title: 'AI Appointment Setter Agent',
    category: 'n8n + CRM + Calendar',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A complete appointment automation system that qualifies consultation leads, scores them hot/warm/cold, creates calendar events, logs leads, and sends follow-up emails.',
    tools: ['n8n', 'OpenAI Chat Model', 'Google Calendar', 'Google Sheets', 'SMTP Email', 'JavaScript Code Node', 'Lead Scoring'],
    workflow: [
      'Consultation form captures lead and meeting preferences',
      'AI Agent qualifies and scores the lead',
      'JavaScript parses the structured JSON output',
      'Qualified leads receive calendar events and confirmation emails',
      'Incomplete leads receive follow-up detail requests'
    ],
    screenshots: [
      'assets/n8n-agents/agent-07/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-07/images/02-consultation-form.png',
      'assets/n8n-agents/agent-07/images/03-confirmation-email-output.png',
      'assets/n8n-agents/agent-07/images/04-google-sheets-lead-log.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-07/workflows/ai-appointment-setter-agent-redacted.json',
    codePreview: 'Form → AI lead scoring → Calendar booking → Sheets CRM → Confirmation/follow-up email'
  },
  {
    id: 'agent-08',
    title: 'AI Email Assistant Agent',
    category: 'n8n + Gmail + Human Review',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A productivity agent that monitors unread Gmail messages, classifies them, summarizes urgency, drafts safe professional replies, and creates Gmail drafts for human approval.',
    tools: ['n8n', 'Gmail Trigger', 'Gmail Draft API', 'OpenAI Chat Model', 'JavaScript Code Node', 'IF Logic', 'Email Classification'],
    workflow: [
      'Gmail trigger watches unread inbox messages',
      'Workflow fetches the full email',
      'AI Agent classifies category, urgency, summary, and reply need',
      'JavaScript parses the AI JSON output',
      'If a reply is needed, Gmail draft is created for review'
    ],
    screenshots: [
      'assets/n8n-agents/agent-08/images/01-workflow-overview.png',
      'assets/n8n-agents/agent-08/images/02-gmail-draft-output.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-08/workflows/ai-email-assistant-agent-redacted.json',
    codePreview: 'Gmail Trigger → AI classifier → JSON parser → Reply needed check → Draft creation'
  },
  {
    id: 'agent-09',
    title: 'Meeting Intelligence Agent',
    category: 'n8n + Meeting Ops',
    visibility: 'Workflow screenshots and automation blueprint available.',
    purpose:
      'A meeting operations assistant that analyzes uploaded meeting notes, extracts summaries, decisions, action items, owners, deadlines, and follow-up drafts, then logs everything into Google Sheets.',
    tools: ['n8n', 'OpenAI Chat Model', 'Form Trigger', 'File Text Extraction', 'Google Sheets', 'JavaScript Code Node', 'Action Item Tracking'],
    workflow: [
      'User uploads a meeting document through a form',
      'File extraction converts the document into text',
      'AI Agent creates summary, decisions, action items, and follow-up draft',
      'JavaScript parses the structured JSON output',
      'Meeting summary and action items are stored in separate Sheets tabs'
    ],
    screenshots: [
      'assets/n8n-agents/agent-09/images/01-workflow-overview.png'
    ],
    workflowFile: 'assets/n8n-agents/agent-09/workflows/meeting-intelligence-agent-redacted.json',
    codePreview: 'Upload notes → Extract text → AI analysis → Summary log → Action-item tracker'
  }
];

export const projects = [
  {
    title: 'Smart Cultivation System',
    category: 'AI + Agriculture',
    description:
      'AI-powered smart farming system for fertilizer recommendation and crop yield prediction, designed to support practical agricultural decision-making.',
    live: 'https://smart-cultivation.kesug.com',
    github: '',
    image: 'assets/projects/smart-cultivation.png',
    stack: ['AI', 'Prediction', 'Web App', 'Agriculture']
  },
  {
    title: 'Municipal Complaint System',
    category: 'Civic Tech',
    description:
      'Citizen complaint-management platform with admin and user workflows for efficient issue tracking and resolution.',
    live: 'https://municipal-complaint.ct.ws',
    github: '',
    image: 'assets/projects/municipal.png',
    stack: ['Admin Panel', 'User Roles', 'Dashboard']
  },
  {
    title: 'Leave Management System',
    category: 'Operations',
    description:
      'Workflow application for employee leave requests, approvals, status tracking, and administrative visibility.',
    live: 'https://leave-management.kesug.com',
    github: '',
    image: 'assets/projects/leave.png',
    stack: ['Workflow', 'Approvals', 'Tracking']
  },
  {
    title: 'Smart Community Complaint System',
    category: 'Community Platform',
    description:
      'Complaint system with notifications, analytics, and dashboards for community issue management.',
    live: 'https://sih-project.kesug.com',
    github: '',
    image: 'assets/projects/community.png',
    stack: ['Dashboards', 'Notifications', 'Analytics']
  },
  {
    title: 'Alumni Management System',
    category: 'Education Platform',
    description:
      'Platform for alumni profiles, events, donations, communication, and college community engagement.',
    live: 'https://alumni-management.kesug.com',
    github: '',
    image: 'assets/projects/alumni.png',
    stack: ['Community', 'Events', 'Management']
  }
];

export const achievements = [
  {
    title: 'JNTUA Academic Topper',
    type: 'Academic Excellence',
    description: 'Recognized by JNTUA for academic excellence and consistent top performance.',
    proof: 'assets/certificates/new/jntua-academic-topper.pdf',
    proofLabel: 'View certificate'
  },
  {
    title: 'NPTEL Natural Language Processing - Top 5%',
    type: 'AI / NLP Certification',
    description: 'Secured Top 5% performance in the NPTEL Natural Language Processing certification.',
    proof: 'assets/certificates/new/nptel-nlp-top-5.pdf',
    proofLabel: 'View certificate'
  },
  {
    title: 'GATE 2026 Qualified',
    type: 'Computer Science Fundamentals',
    description: 'Qualified GATE 2026, demonstrating strong computer science fundamentals and exam-level technical preparation.',
    proof: '',
    proofLabel: 'Qualified'
  },
  {
    title: 'One Week Domain Specific Workshop',
    type: 'Workshop',
    description: 'Completed a one-week domain-specific technical workshop focused on applied learning and practical implementation.',
    proof: 'assets/certificates/new/domain-specific-workshop.pdf',
    proofLabel: 'View certificate'
  },
  {
    title: 'AI Research Intern at DeepDrishti.ai',
    type: 'Professional Experience',
    description: 'Working as an AI Research Intern in Hyderabad, building agentic workflows, automation systems, and AI-powered research utilities.',
    proof: '',
    proofLabel: 'Current role'
  }
];

export const certifications = [
  {
    title: 'NPTEL Natural Language Processing - Top 5%',
    provider: 'NPTEL',
    category: 'AI / NLP',
    file: 'assets/certificates/new/nptel-nlp-top-5.pdf'
  },
  {
    title: 'JNTUA Academic Topper Certificate',
    provider: 'JNTUA',
    category: 'Academic Excellence',
    file: 'assets/certificates/new/jntua-academic-topper.pdf'
  },
  {
    title: 'One Week Domain Specific Workshop',
    provider: 'Workshop Certificate',
    category: 'Workshop',
    file: 'assets/certificates/new/domain-specific-workshop.pdf'
  },
  {
    title: 'Google AI for Everyone',
    provider: 'Google',
    category: 'AI',
    file: 'assets/certificates/existing/google-ai-for-everyone.pdf'
  },
  {
    title: 'IBM Prompt Engineering',
    provider: 'IBM',
    category: 'AI',
    file: 'assets/certificates/existing/ibm-prompt-engineering.pdf'
  },
  {
    title: 'Introduction to ChatGPT',
    provider: 'Certification',
    category: 'AI',
    file: 'assets/certificates/existing/introduction-to-chatgpt.pdf'
  },
  {
    title: 'Cybersecurity Fundamentals',
    provider: 'Certification',
    category: 'Cybersecurity',
    file: 'assets/certificates/existing/cybersecurity-fundamentals.pdf'
  },
  {
    title: 'Cryptography in IT Security & Hacking',
    provider: 'Certification',
    category: 'Cybersecurity',
    file: 'assets/certificates/existing/cryptography-in-it-security.pdf'
  },
  {
    title: 'Fundamentals of Cryptography',
    provider: 'Certification',
    category: 'Cryptography',
    file: 'assets/certificates/existing/fundamentals-of-cryptography.pdf'
  },
  {
    title: 'Python Case Study - Cryptography',
    provider: 'Certification',
    category: 'Cryptography',
    file: 'assets/certificates/existing/python-cryptography-case-study.pdf'
  },
  {
    title: 'Introduction to PKI',
    provider: 'Certification',
    category: 'Cryptography',
    file: 'assets/certificates/existing/introduction-to-pki.pdf'
  },
  {
    title: 'GFG Aptitude & Reasoning',
    provider: 'GeeksforGeeks',
    category: 'Aptitude',
    file: 'assets/certificates/existing/gfg-aptitude-reasoning.pdf'
  }
];

export const skills = [
  {
    group: 'Programming Foundation',
    items: ['C', 'Java', 'Python', 'JavaScript', 'Problem Solving', 'Git', 'GitHub']
  },
  {
    group: 'Frontend Engineering',
    items: ['HTML', 'CSS', 'React', 'Vite', 'Responsive UI', 'Modern Web Design']
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'Authentication', 'Role-Based Access']
  },
  {
    group: 'AI & Automation',
    items: ['OpenAI', 'Prompt Engineering', 'n8n', 'AI Agents', 'Workflow Automation', 'NLP', 'RAG']
  },
  {
    group: 'Agentic Integrations',
    items: ['Qdrant', 'Ollama Embeddings', 'Telegram Bot API', 'Twilio', 'Gmail', 'Google Sheets', 'Google Calendar']
  },
  {
    group: 'Data & Analytics',
    items: ['Power BI', 'Excel', 'Dashboards', 'Reports', 'Data Workflows']
  },
  {
    group: 'Product Systems',
    items: ['Supabase', 'PostgreSQL', 'PDF Reports', 'Saved Workflows', 'Admin Panels']
  },
  {
    group: 'Geospatial & Crisis Tech',
    items: ['Leaflet', 'OpenStreetMap', 'Routing', 'Weather APIs', 'Risk Scoring']
  }
];