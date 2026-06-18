// Detailed breakdown of a single project, focused on engineering decisions

import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import type { Project } from '../../types'

interface ProjectDeepDiveProps {
  project: Project
  index: number
}

export function ProjectDeepDive({ project, index }: ProjectDeepDiveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: DURATION.slow / 1000,
        delay: index * 0.15,
        ease: EASING.outExpo,
      }}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        marginBottom: '20px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--color-text-muted)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '2px 8px',
          }}>
            PROJECT {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          marginBottom: '6px',
        }}>
          {project.title}
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}>
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
        {project.techStack.map((tech) => (
          <span key={tech} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            padding: '4px 10px',
            backgroundColor: 'var(--color-bg-elevated)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-text-secondary)',
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-border)', marginBottom: '20px' }} />

      {/* Engineering decisions */}
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: 'var(--color-accent)',
        marginBottom: '14px',
      }}>
        ENGINEERING DECISIONS
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {project.decisions.map((decision, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '14px',
              backgroundColor: 'var(--color-bg-elevated)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '2px solid var(--color-accent-dim)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-accent)',
              flexShrink: 0,
              marginTop: '1px',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              {decision}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, padding: '8px 16px', border: '1px solid var(--color-accent-dim)', borderRadius: 'var(--radius-md)', color: 'var(--color-accent)', textDecoration: 'none' }}>
            View Live
        </a>}

        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, padding: '8px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            Source Code
        </a>}
      </div>
    </motion.div>
  )
}