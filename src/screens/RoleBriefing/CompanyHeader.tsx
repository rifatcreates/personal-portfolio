import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import { company } from '../../data/company'

export function CompanyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.normal / 1000, ease: EASING.outExpo }}
      style={{ marginBottom: '2rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-text-muted)',
        }}>
          COMPANY BRIEF
        </span>
        <span style={{ color: 'var(--color-border)' }}>—</span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-accent)',
        }}>
          CONFIDENTIAL
        </span>
      </div>

      <h1 style={{
        fontSize: '32px',
        fontWeight: 600,
        color: 'var(--color-text-primary)',
        marginBottom: '4px',
      }}>
        {company.name}
      </h1>

      <p style={{
        fontSize: '14px',
        color: 'var(--color-text-secondary)',
        marginBottom: '16px',
      }}>
        {company.tagline}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[company.stage, company.domain, company.location, company.size].map((item) => (
          <span key={item} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            padding: '4px 10px',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            color: 'var(--color-text-secondary)',
          }}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}