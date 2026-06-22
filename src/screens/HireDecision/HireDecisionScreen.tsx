import { useAppStore } from '../../store/useAppStore'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { BackButton } from '../../components/ui/BackButton'
import { DecisionButtons } from './DecisionButtons'
import { DecisionResponse } from './DecisionResponse'
import { useIsMobile } from '../../hooks/useIsMobile'

export function HireDecisionScreen() {
  useScrollToTop()
  const isMobile = useIsMobile()
  const decision = useAppStore((state) => state.decision)

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Top bar */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '8px' : '0',
        padding: isMobile ? '14px 16px' : '20px 32px',
        borderBottom: '1px solid var(--color-border-subtle)',
        flexShrink: 0,
        maxWidth: '1040px',
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <BackButton />
          {!isMobile && (
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'var(--color-text-muted)',
            }}>
              HIRING PORTAL v1.0
            </span>
          )}
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-text-muted)',
        }}>
          FINAL DECISION
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{
          width: '100%',
          maxWidth: '880px',
          margin: '0 auto',
          padding: isMobile ? '32px 16px' : '48px 24px',
        }}>
          <div style={{ marginBottom: '28px' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'var(--color-text-muted)',
              marginBottom: '8px',
            }}>
              END OF SIMULATION
            </p>
            <h1 style={{
              fontSize: isMobile ? '22px' : '28px',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '8px',
            }}>
              What's your call?
            </h1>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              You've reviewed the profile, the projects, and the interview. Make your decision.
            </p>
          </div>

          <DecisionButtons />
          <DecisionResponse decision={decision} />
        </div>
      </div>

      <div style={{
        padding: isMobile ? '12px 16px' : '16px 32px',
        borderTop: '1px solid var(--color-border-subtle)',
        flexShrink: 0,
        maxWidth: '1040px',
        margin: '0 auto',
        width: '100%',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-text-muted)',
        }}>
          THE HIRING SIMULATION © 2025
        </span>
      </div>
    </div>
  )
}