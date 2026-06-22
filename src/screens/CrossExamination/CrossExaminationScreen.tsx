import { motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'
import { useAIResponse } from '../../hooks/useAIResponse'
import { QuestionInput } from './QuestionInput'
import { SuggestedQuestions } from './SuggestedQuestions'
import { ResponseDisplay } from './ResponseDisplay'
import { DURATION, EASING } from '../../constants/tokens'
import { BackButton } from '../../components/ui/BackButton'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { useIsMobile } from '../../hooks/useIsMobile'

export function CrossExaminationScreen() {
  useScrollToTop()
  const isMobile = useIsMobile()
  const setScreen = useAppStore((state) => state.setScreen)
  const { response, isLoading, error, askQuestion } = useAIResponse()

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
          STEP 04 OF 04
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
              LIVE INTERVIEW
            </p>
            <h1 style={{
              fontSize: isMobile ? '22px' : '28px',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '8px',
            }}>
              Ask Anything
            </h1>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}>
              This is a live AI-powered interview. Ask a question and the candidate will respond based on their real projects and experience.
            </p>
          </div>

          <QuestionInput onSubmit={askQuestion} isLoading={isLoading} />
          <SuggestedQuestions onSelect={askQuestion} disabled={isLoading} />
          <ResponseDisplay response={response} isLoading={isLoading} error={error} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.normal / 1000, delay: 0.3, ease: EASING.outExpo }}
            style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}
          >
            <motion.button
              onClick={() => setScreen('culture-fit')}
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
              Continue →
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