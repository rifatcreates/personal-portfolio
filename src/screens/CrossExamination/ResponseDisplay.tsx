import { motion, AnimatePresence } from 'framer-motion'
import { candidate } from '../../data/candidate'

interface ResponseDisplayProps {
  response: string
  isLoading: boolean
  error: string | null
}

export function ResponseDisplay({ response, isLoading, error }: ResponseDisplayProps) {
  if (!response && !isLoading && !error) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isLoading ? 'loading' : error ? 'error' : 'response'}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        style={{
          marginTop: '20px',
          backgroundColor: 'var(--color-bg-surface)',
          border: `1px solid ${error ? 'var(--color-danger)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: error ? 'var(--color-danger)' : 'var(--color-accent)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--color-text-muted)',
          }}>
            {error ? 'ERROR' : `${candidate.name.toUpperCase()} RESPONDS`}
          </span>
        </div>

        {isLoading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
              }}
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
              }}
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
              }}
            />
            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginLeft: '4px' }}>
              Generating response
            </span>
          </div>
        )}

        {error && (
          <p style={{ fontSize: '14px', color: 'var(--color-danger)' }}>
            {error}
          </p>
        )}

        {response && !isLoading && (
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            {response}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  )
}