import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import { candidate } from '../../data/candidate'
import type { Decision } from '../../types'

interface DecisionResponseProps {
  decision: Decision
}

export function DecisionResponse({ decision }: DecisionResponseProps) {
  if (decision === 'pending') return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow / 1000, ease: EASING.outExpo }}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: `1px solid ${decision === 'hire' ? 'var(--color-success)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        marginTop: '24px',
      }}
    >
      {decision === 'hire' ? (
        <>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'var(--color-success)',
            marginBottom: '12px',
          }}>
            OFFER EXTENDED
          </p>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '12px',
          }}>
            Good call.
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}>
            This was a simulation, but the candidate is real — and currently looking for their first frontend role. {candidate.name} built every project shown here from scratch, learned the stack independently, and would bring the same ownership to your team. Reach out, the conversation is open.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/rifatcreates"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px 18px',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              View GitHub
            </a>
            
            <a
              href="mailto:rifat.ahmed.dev@gmail.com"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px 18px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              Send Email
            </a>

            <a href="tel:+8801886661618"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px 18px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              Call
            </a>
          </div>
        </>
      ) : (
        <>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'var(--color-text-muted)',
            marginBottom: '12px',
          }}>
            DECISION RECORDED
          </p>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '12px',
          }}>
            Fair enough.
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}>
            Not every role is the right fit, and that's okay. If something changes or another opportunity comes up, {candidate.name}'s contact details are below. Thanks for taking the time to go through this.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/rifatcreates"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px 18px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              View GitHub
            </a>
            
            <a
              href="mailto:rifat.ahmed.dev@gmail.com"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px 18px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              Send Email
            </a>

            <a href="tel:+8801886661618"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px 18px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              Call
            </a>
          </div>
        </>
      )}
    </motion.div>
  )
}