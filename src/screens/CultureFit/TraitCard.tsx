import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'

interface TraitCardProps {
  title: string
  description: string
  index: number
}

export function TraitCard({ title, description, index }: TraitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: DURATION.normal / 1000,
        delay: index * 0.1,
        ease: EASING.outExpo,
      }}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '22px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--color-accent)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 style={{
          fontSize: '15px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}>
          {title}
        </h3>
      </div>
      <p style={{
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
      }}>
        {description}
      </p>
    </motion.div>
  )
}