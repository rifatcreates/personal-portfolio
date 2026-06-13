import type { CandidateProfile } from "../types";

export const candidate: CandidateProfile = {
    name: 'Rifat Ahmed',
    title: 'Frontend Developer',
    tagline: 'A Self-taught developer working with responsive web design',
    location: 'Dhaka, Bangladesh',

    skills: [
        { name: 'React', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'Framer Motion', category: 'frontend' },
        { name: 'Git', category: 'tooling' },
        { name: 'Figma', category: 'design' },
    ],

    projects: [
        {
        id: 'project-1',
        title: 'Project Name',
        subtitle: 'One line description',
        description: 'Longer description here',
        decisions: ['Why you made certain choices'],
        techStack: ['React', 'TypeScript'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        },
        {
        id: 'project-2',
        title: 'Project Name',
        subtitle: 'One line description',
        description: 'Longer description here',
        decisions: ['Why you made certain choices'],
        techStack: ['React', 'TypeScript'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        },
    ],

    certifications: [
        {
        id: 'cert-1',
        title: 'Certification Name',
        issuer: 'Meta',
        platform: 'Coursera',
        year: 2024,
        },
        {
        id: 'cert-2',
        title: 'Certification Name',
        issuer: 'Meta',
        platform: 'Coursera',
        year: 2024,
        },
        {
        id: 'cert-3',
        title: 'Certification Name',
        issuer: 'Meta',
        platform: 'Coursera',
        year: 2024,
        },
        {
        id: 'cert-4',
        title: 'Certification Name',
        issuer: 'IBM',
        platform: 'Coursera',
        year: 2024,
        },
    ],

    virtualExperiences: [
        {
        id: 've-1',
        company: 'Company Name',
        role: 'Role Title',
        tasks: ['Task one', 'Task two'],
        },
        {
        id: 've-2',
        company: 'Company Name',
        role: 'Role Title',
        tasks: ['Task one', 'Task two'],
        },
        {
        id: 've-3',
        company: 'Company Name',
        role: 'Role Title',
        tasks: ['Task one', 'Task two'],
        },
    ],
}