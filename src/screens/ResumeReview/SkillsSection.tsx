import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import { candidate } from '../../data/candidate'
import type { Skill } from '../../types'

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'FRONTEND',
  tooling: 'TOOLS & SERVICES',
  design: 'DESIGN',
  other: 'OTHER',
}

export function SkillsSection() {
  const categories = ['frontend', 'tooling', 'design'] as Skill['category'][]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.normal / 1000, delay: 0.1, ease: EASING.outExpo }}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '16px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: 'var(--color-text-muted)',
        marginBottom: '20px',
      }}>
        TECHNICAL SKILLS
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {categories.map((category) => {
          const skills = candidate.skills.filter(s => s.category === category)
          if (skills.length === 0) return null

          return (
            <div key={category}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'var(--color-text-muted)',
                marginBottom: '10px',
                opacity: 0.7,
              }}>
                {categoryLabels[category]}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill) => (
                  <span key={skill.name} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    padding: '5px 12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-text-secondary)',
                    letterSpacing: '0.03em',
                  }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}