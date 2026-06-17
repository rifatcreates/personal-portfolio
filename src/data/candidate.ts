import type { CandidateProfile } from '../types'

export const candidate: CandidateProfile = {
  name: 'Rifat Ahmed',
  title: 'Frontend Developer',
  tagline: 'Frontend Developer who turns ideas into intelligent web experiences. Self-taught, AI-focused, and always building.',
  location: 'Dhaka, Bangladesh',

  skills: [
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Framer Motion', category: 'frontend' },
    { name: 'HTML & CSS', category: 'frontend' },
    { name: 'Zustand', category: 'frontend' },
    { name: 'TanStack Query', category: 'frontend' },
    { name: 'Supabase', category: 'tooling' },
    { name: 'REST APIs', category: 'tooling' },
    { name: 'Git & GitHub', category: 'tooling' },
    { name: 'Figma', category: 'design' },
  ],

  projects: [
    {
      id: 'doc-genius',
      title: 'DocGenius',
      subtitle: 'AI-powered code documentation generator',
      description: 'An AI-powered web app that automatically generates code documentation using Google Gemini API.',
      decisions: [
        'Used Gemini API over OpenAI for cost efficiency and generous free tier — important for a solo-built product',
        'Supabase for auth and storage so I could focus on the core AI feature instead of backend infrastructure',
        'TypeScript throughout to catch prompt-response shape mismatches early',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'REST APIs'],
      liveUrl: 'https://doc-genius-nine.vercel.app/',
      githubUrl: 'https://github.com/rifatcreates/doc-genius',
    },
    {
      id: 'resume-iq',
      title: 'ResumeIQ',
      subtitle: 'AI resume analyzer for PDF files',
      description: 'An AI-powered web app that analyzes PDF resumes using Google Gemini API.',
      decisions: [
        'TanStack Query for server state — analysis results needed caching so users could revisit without re-calling the API',
        'PDF parsing handled client-side to avoid sending raw files to a backend',
        'Supabase for persisting analysis history per user',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'TanStack Query'],
      liveUrl: 'https://resume-iq-five-theta.vercel.app/',
      githubUrl: 'https://github.com/rifatcreates/resume-iq',
    },
  ],

  certifications: [
    {
      id: 'cert-meta-react',
      title: 'Advanced React',
      issuer: 'Meta',
      platform: 'Coursera',
      year: 2026,
    },
    {
      id: 'cert-meta-html',
      title: 'HTML and CSS in Depth',
      issuer: 'Meta',
      platform: 'Coursera',
      year: 2026,
    },
    {
      id: 'cert-meta-ux',
      title: 'Principles of UX/UI Design',
      issuer: 'Meta',
      platform: 'Coursera',
      year: 2026,
    },
    {
      id: 'cert-ibm-git',
      title: 'Getting Started with Git and GitHub',
      issuer: 'IBM',
      platform: 'Coursera',
      year: 2026,
    },
  ],

  virtualExperiences: [
    {
      id: 've-skyscanner',
      company: 'Skyscanner',
      role: 'Front-End Software Engineering',
      platform: 'Forage',
      tasks: [
        'Built a date picker component following Skyscanner\'s Backpack design system',
        'Wrote unit tests using Jest to ensure component reliability',
        'Practiced working within a real-world component-driven frontend codebase',
      ],
    },
  ],
}