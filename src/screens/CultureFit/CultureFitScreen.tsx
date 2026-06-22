import { motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { BackButton } from '../../components/ui/BackButton'
import { TraitCard } from './TraitCard'
import { cultureFitTraits } from '../../data/cultureFit'
import { DURATION, EASING } from '../../constants/tokens'
import { useIsMobile } from '../../hooks/useIsMobile'

export function CultureFitScreen() {
  useScrollToTop()
  const isMobile = useIsMobile()
  const setScreen = useAppStore((state) => state.setScreen)

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
          FINAL REVIEW
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
              CULTURE FIT
            </p>
            <h1 style={{
              fontSize: isMobile ? '22px' : '28px',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '8px',
            }}>
              How I Work
            </h1>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              Beyond the code — a look at working style and values.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '16px',
          }}>
            {cultureFitTraits.map((trait, index) => (
              <TraitCard
                key={trait.id}
                title={trait.title}
                description={trait.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.normal / 1000, delay: 0.5, ease: EASING.outExpo }}
            style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end' }}
          >
            <motion.button
              onClick={() => setScreen('hire-decision')}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              Make Final Decision →
            </motion.button>
          </motion.div>
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