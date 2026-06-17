import { motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'
import { CandidateHeader } from './CandidateHeader'
import { SkillsSection } from './SkillsSection'
import { ProjectsSection } from './ProjectsSection'
import { CredentialsSection } from './CredentialsSection'
import { DURATION, EASING } from '../../constants/tokens'

export function ResumeReviewScreen() {
  const setScreen = useAppStore((state) => state.setScreen)

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--color-bg-primary)',
    }}>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
        borderBottom: '1px solid var(--color-border-subtle)',
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-text-muted)',
        }}>
          HIRING PORTAL v1.0
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--color-text-muted)',
        }}>
          STEP 02 OF 04
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{
          width: '100%',
          maxWidth: '680px',
          margin: '0 auto',
          padding: '48px 24px',
        }}>
          <CandidateHeader />
          <ProjectsSection />
          <SkillsSection />
          <CredentialsSection />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.normal / 1000, delay: 0.5, ease: EASING.outExpo }}
            style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}
          >
            <motion.button
              onClick={() => setScreen('technical-assessment')}
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
              Review Technical Work →
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div style={{
        padding: '16px 32px',
        borderTop: '1px solid var(--color-border-subtle)',
        flexShrink: 0,
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