# The Hiring Simulation

An interactive, reverse-role portfolio experience — the recruiter becomes the hiring manager of a fictional fintech company and goes through a real hiring process to evaluate me as a candidate.

**[Live Demo →](তোমার_vercel_url_এখানে_বসাও)**

## What This Is

Instead of a traditional scroll-down portfolio, this simulates an actual hiring flow:

1. **Entry** — Receive a hiring request notification
2. **Role Briefing** — Review the fictional company and job description
3. **Resume Review** — See my profile, skills, projects, and credentials
4. **Technical Assessment** — Deep dive into engineering decisions on real projects
5. **Cross-Examination** — Ask me anything via a live AI-powered interview (Gemini API)
6. **Culture Fit** — A look at how I work and what I value
7. **Hire Decision** — Make the final call

## Tech Stack

- React 18 + TypeScript (Vite)
- Tailwind CSS / Inline styling with CSS custom properties
- Framer Motion for animation
- Zustand for state management
- Google Gemini API for the AI interview feature

## Why I Built It This Way

I'm a self-taught frontend developer without a formal CS background, currently looking for my first role. Rather than listing skills in a static page, I wanted to build something that demonstrates how I think — about state, about user flow, about making technical decisions and being able to explain them.

Every project shown in the Technical Assessment screen includes the actual reasoning behind technical choices, not just a list of technologies.

## Running Locally

```bash
npm install
npm run dev
```

You'll need a Gemini API key in a `.env.local` file:

1. Get a free API key from the [Google AI Studio](https://aistudio.google.com/).
2. Create a file named `.env.local` in the root directory of this project.
3. Add your key to the file using the following variable name:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here

## Contact

- GitHub: [@rifatcreates](https://github.com/rifatcreates)
- Email: rifat.ahmed.div@gmail.com