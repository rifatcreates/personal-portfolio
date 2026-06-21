import type { CandidateProfile } from '../types'

export const candidate: CandidateProfile = {
  name: 'Rifat Ahmed',
  title: 'Frontend Developer',
  tagline: 'I am a self-taught Frontend Developer who builds AI-powered web applications from the ground up. Without a formal CS degree, I learned React, TypeScript, and modern web technologies through consistent practice, real projects, and a genuine willingness to be wrong and start over. I am still learning industry best practices — and actively chasing that growth.',
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
        'Chose Gemini API for its generous free tier with no credit card requirement — critical for a self-funded solo project, unlike most LLM APIs that require billing setup',
        'Supabase for auth and storage so I could focus on the core AI feature instead of backend infrastructure',
        'TypeScript with strict union types (e.g. Language: "javascript" | "typescript" | "python") to prevent invalid states across components, instead of loose string types',
        'Enforced Row Level Security (RLS) policies in Supabase so user data is protected at the database level — not just filtered in the frontend — even if client code has bugs',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'REST APIs'],
      detailedSummary: 'DocGenius is built with React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui for components. Routing uses React Router v6 with protected routes (/dashboard, /history) and public ones (/, /login, /signup). Authentication runs through Supabase email/password auth, with a custom useAuth hook listening to onAuthStateChange, and a ProtectedRoute wrapper that checks both loading and user state to avoid falsely redirecting logged-in users during the initial session check. A generations table stores each documentation request (code, language, output, user_id, timestamps), protected by Row Level Security policies so users can only access their own rows at the database level. The AI feature calls Google Gemini API (gemini-2.5-flash) directly via fetch, sending a structured prompt requesting an overview, function-by-function breakdown, and a README snippet, rendered with react-markdown. Clipboard API handles copy functionality, with sonner for toast notifications. Tricky bugs included Gemini 429 quota errors traced to account-level rate limits, a shadcn/ui import-alias setup requiring manual tsconfig.json path configuration, and an auth loading-state race condition in ProtectedRoute. Deployed on Vercel.',
      liveUrl: 'https://doc-genius-nine.vercel.app/',
      githubUrl: 'https://github.com/rifatcreates/doc-genius',
    },
    {
      id: 'resume-iq',
      title: 'ResumeIQ',
      subtitle: 'AI resume analyzer for PDF files',
      description: 'An AI-powered web app that analyzes PDF resumes using Google Gemini API.',
      decisions: [
        'TanStack Query to separate concerns — useMutation handled the Gemini API call\'s loading/error states cleanly, while useQuery cached the history list and auto-refetched after deletions via invalidateQueries',
        'PDF parsing handled client-side with pdfjs-dist to avoid sending raw files to a backend, keeping the app fully serverless',
        'Supabase for auth and persisting analysis history, with Row Level Security policies ensuring users could only access their own data',
        'State-based view switching (upload/loading/result) instead of React Router for the analyze page — avoided unnecessary routing complexity for what is fundamentally a single-purpose flow',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'TanStack Query'],
      detailedSummary: 'ResumeIQ uses React, TypeScript, and Vite, styled with Tailwind CSS and shadcn/ui components (Card, Button, Input, Badge, Sonner). Authentication and data persistence run through Supabase email/password auth, with Row Level Security policies ensuring each user only accesses their own analysis records. Routing uses React Router v6 with protected routes, handled through a custom useAuth hook listening to Supabase onAuthStateChange. The core analysis flow uses pdfjs-dist to extract text from uploaded PDFs entirely client-side, avoiding backend file processing. Extracted text is sent to Google Gemini API (gemini-2.0-flash-lite, chosen for generous free-tier limits after hitting quota errors on other models). The prompt itself instructs Gemini to detect whether the document is actually a resume and return a structured error if not, rather than building separate client-side validation. TanStack Query manages server state: useMutation wraps the Gemini call for loading/error/success states, while useQuery fetches analysis history with invalidateQueries triggering refetch after deletions. React Dropzone handles drag-and-drop uploads. Tricky bugs included PDF.js worker resolution failing in production and mobile browsers, fixed via CDN worker source, and repeated Gemini model/version mismatches causing 404 errors.',
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
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/9NUGK6JDF1OQ'
    },
    {
      id: 'cert-meta-html',
      title: 'HTML and CSS in Depth',
      issuer: 'Meta',
      platform: 'Coursera',
      year: 2026,
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/S0QM1X3LEZO7'
    },
    {
      id: 'cert-meta-ux',
      title: 'Principles of UX/UI Design',
      issuer: 'Meta',
      platform: 'Coursera',
      year: 2026,
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/MTQJ18BSGC3V'
    },
    {
      id: 'cert-ibm-git',
      title: 'Getting Started with Git and GitHub',
      issuer: 'IBM',
      platform: 'Coursera',
      year: 2026,
      verifyUrl: 'এখানে_প্রথম_link_বসাও'
    },
  ],

  virtualExperiences: [
    {
      id: 've-skyscanner',
      company: 'Skyscanner',
      role: 'Front-End Software Engineering',
      platform: 'Forage',
      verifyUrl: 'https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_69464a7e55d5b379b1777221_1779597126019_completion_certificate.pdf',
      tasks: [
        'Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.',
        'Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.',
        'Customised my application and ran automated tests to ensure it rendered properly.',
      ],
    },
  ],
}