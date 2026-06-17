export type Screen = 'entry' | 'role-briefing' | 'resume-review' | 'technical-assessment' | 'cross-examination' | 'culture-fit' | 'hire-decision'

export type Decision = 'hire' | 'pass' | 'pending'

export interface Skill {
    name: string
    category: 'frontend' | 'tooling' | 'design' | 'other'
}

export interface Project {
    id: string
    title: string
    subtitle: string
    description: string
    decisions: string[]
    techStack: string[]
    liveUrl?: string
    githubUrl?: string
}

export interface Certification {
    id: string
    title: string
    issuer: 'Meta' | 'IBM'
    platform: 'Coursera'
    year: number
}

export interface VirtualExperience {
    id: string
    company: string
    role: string
    platform: string
    tasks: string[]
}

export interface CandidateProfile {
    name: string
    title: string
    tagline: string
    location: string
    skills: Skill[]
    projects: Project[]
    certifications: Certification[]
    virtualExperiences: VirtualExperience[]
}