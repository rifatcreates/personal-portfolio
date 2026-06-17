// Project cards showing candidate's work

import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import { candidate } from '../../data/candidate'

export function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.normal / 1000, delay: 0.2, ease: EASING.outExpo }}
      style={{ marginBottom: '16px' }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-text-muted)',
          marginBottom: '16px',
        }}
      >
        PROJECTS
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {candidate.projects.map((project, index) => {
          const cardDelay = 0.2 + index * 0.1

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: DURATION.normal / 1000,
                delay: cardDelay,
                ease: EASING.outExpo,
              }}
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '4px 10px',
                        border: '1px solid var(--color-accent-dim)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--color-accent)',
                        textDecoration: 'none',
                        letterSpacing: '0.05em',
                      }}
                    >
                      LIVE
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '4px 10px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        letterSpacing: '0.05em',
                      }}
                    >
                      GITHUB
                    </a>
                  )}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: '14px',
                }}
              >
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      padding: '3px 8px',
                      backgroundColor: 'var(--color-bg-elevated)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-text-muted)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
