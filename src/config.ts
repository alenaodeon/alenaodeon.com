// Single place for the facts that appear across the site.
export const site = {
  name: 'Alena Odeon',
  firstName: 'Alena',
  role: 'AI Product Manager',
  location: 'Munich, Germany',
  tagline: 'I take AI products from conception to launch.',
  description:
    'Alena Odeon is an AI Product Manager in Munich who takes 0→1 technical products from conception to launch: LLM assistants, agentic workflows, MCP servers, and the guardrails that make them trustworthy.',
  url: 'https://alenaodeon.com',
  email: 'alenaodeon@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alenaodeon/',
  // Put the PDF at public/Alena-Odeon-CV.pdf and this link works. Rename both if you prefer another filename.
  cv: '/Alena-Odeon-CV.pdf',
  // Shown in the hero status pill. Keep it to one line.
  now: 'Leading the agentic-AI initiative at Cybus',
  keywords: [
    'AI Product Manager',
    'Product Manager Munich',
    'LLM products',
    'Agentic workflows',
    'MCP server',
    'AI governance',
    '0 to 1 products',
  ],
} as const;

export const nav = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/blog' },
] as const;
