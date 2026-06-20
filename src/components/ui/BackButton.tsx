import { motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'

export function BackButton() {
  const goBack = useAppStore((state) => state.goBack)

  return (
    <motion.button
      onClick={goBack}
      whileHover={{ x: -2 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'none',
        border: 'none',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.1em',
        cursor: 'pointer',
        padding: 0,
      }}
    >
      ← BACK
    </motion.button>
  )
}