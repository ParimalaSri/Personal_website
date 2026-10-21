export type Category = 'Data Engineering' | 'AI' | 'Analytics'
export type Kind = 'personal' | 'professional' | 'concept'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  kind: Kind
  description: string
  tags: string[]
  categories: Category[]
  github?: string
  live?: string
  extra?: ProjectLink[]
  /** Shown instead of links when work is internal. */
  note?: string
  /** Set true to hide a project without deleting it. */
  hidden?: boolean
}

export const kindLabel: Record<Kind, string> = {
  personal: 'Personal project',
  professional: 'Professional work',
  concept: 'Concept · exploratory',
}

export const projects: Project[] = [
  {
    id: 'cyberintel',
    title: 'CyberIntel — AI-Powered Sales Intelligence',
    kind: 'personal',
    description:
      'Processes roughly 85 GB of extracted internet infrastructure data containing over 8.9 million records. Uses entity resolution to build company-level security signals, prioritize potential accounts, and support contact enrichment and AI-assisted analysis.',
    tags: ['Python', 'DuckDB', 'Parquet', 'FastAPI', 'Groq', 'Snov.io'],
    categories: ['Data Engineering', 'AI', 'Analytics'],
    github: 'https://github.com/ParimalaSri/CyberIntel',
  },
  {
    id: 'global-spend',
    title: 'Global Spend Analytics',
    kind: 'professional',
    description:
      'Data integration and analytics work at 3M that brings multiple source systems into Snowflake and standardizes outputs for downstream spend reporting. Described at a high level; details are confidential.',
    tags: ['Informatica', 'Snowflake', 'SQL'],
    categories: ['Data Engineering', 'Analytics'],
    note: 'Internal work — no public repository.',
  },
  {
    id: 'sap-snowflake',
    title: 'SAP-to-Snowflake Data Integration',
    kind: 'professional',
    description:
      'Data ingestion and transformation pipelines that land enterprise SAP data in Snowflake for analytics, with incremental loading and delete handling.',
    tags: ['Informatica IDMC', 'Snowflake', 'SQL', 'AWS'],
    categories: ['Data Engineering'],
    note: 'Internal work — no public repository.',
  },
  {
    id: 'vaidya-ai',
    title: 'Vaidya AI — Multilingual Rural Healthcare Platform',
    kind: 'concept',
    description:
      'An AI-focused healthcare platform concept designed to improve access to healthcare information through multilingual assistance for rural communities.',
    tags: ['LLM', 'Multilingual', 'Healthcare'],
    categories: ['AI'],
    github: 'https://github.com/Parimalasri13/AyurBot',
    live: 'https://ayur-bot.vercel.app',
    extra: [{ label: 'Presentation', href: 'https://canva.link/n9mxdvyyofahxwi' }],
  },
  {
    id: 'event-mapper',
    title: 'EventMapper',
    kind: 'personal',
    description:
      'A personal web project deployed on Vercel. TODO: replace this line with a one-sentence description of what EventMapper does.',
    tags: ['Web', 'Vercel'],
    categories: ['Analytics'],
    github: 'https://github.com/Parimalasri13/EventMapper11',
    live: 'https://event-mapper11.vercel.app',
    hidden: true, // un-hide once the description above is written
  },
  {
    id: 'construction-ai',
    title: 'AI-Powered Construction Planning',
    kind: 'concept',
    description: 'An exploratory concept applying AI to construction planning. Not yet built.',
    tags: ['AI', 'Planning'],
    categories: ['AI'],
    hidden: true, // set to false once you confirm you want this displayed
  },
]
