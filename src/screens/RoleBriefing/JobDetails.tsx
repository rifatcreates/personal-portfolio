import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import { company } from '../../data/company'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal / 1000, ease: EASING.outExpo },
  },
}

interface SectionProps {
  title: string
  items: readonly string[]
  accentDot?: boolean
}

function ListSection({ title, items, accentDot = false }: SectionProps) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: 'var(--color-text-muted)',
        marginBottom: '12px',
      }}>
        {title}
      </p>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
          >
            <span style={{
              marginTop: '7px',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              flexShrink: 0,
              backgroundColor: accentDot
                ? 'var(--color-accent)'
                : 'var(--color-text-muted)',
            }} />
            <span style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export function JobDetails() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.slow / 1000, delay: 0.2 }}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
      }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'var(--color-text-muted)',
            marginBottom: '4px',
          }}>
            OPEN ROLE
          </p>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
          }}>
            {company.role.title}
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[company.role.type, company.role.level].map((tag) => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              padding: '4px 10px',
              border: '1px solid var(--color-accent-dim)',
              borderRadius: '4px',
              color: 'var(--color-accent)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        height: '1px',
        backgroundColor: 'var(--color-border)',
        marginBottom: '20px',
      }} />

      <p style={{
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.7,
        marginBottom: '24px',
      }}>
        {company.role.description}
      </p>

      <ListSection title="RESPONSIBILITIES" items={company.role.responsibilities} />
      <ListSection title="REQUIREMENTS" items={company.role.requirements} accentDot />
      <ListSection title="NICE TO HAVE" items={company.role.niceToHave} />
    </motion.div>
  )
}