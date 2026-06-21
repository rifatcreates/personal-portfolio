import { motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'
import { DURATION, EASING } from '../../constants/tokens'

export function DecisionButtons() {
  const setDecision = useAppStore((state) => state.setDecision)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow / 1000, ease: EASING.outExpo }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      }}
    >
      <motion.button
        onClick={() => setDecision('hire')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          padding: '24px',
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-success)',
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: 'var(--color-success)',
          marginBottom: '8px',
        }}>
          DECISION
        </p>
        <p style={{
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}>
          Hire
        </p>
      </motion.button>

      <motion.button
        onClick={() => setDecision('pass')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          padding: '24px',
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: 'var(--color-text-muted)',
          marginBottom: '8px',
        }}>
          DECISION
        </p>
        <p style={{
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}>
          Pass
        </p>
      </motion.button>
    </motion.div>
  )
}