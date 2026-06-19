import { motion } from 'framer-motion'
import { useAppStore } from '../../store/useAppStore'
import { useAIResponse } from '../../hooks/useAIResponse'
import { QuestionInput } from './QuestionInput'
import { SuggestedQuestions } from './SuggestedQuestions'
import { ResponseDisplay } from './ResponseDisplay'
import { DURATION, EASING } from '../../constants/tokens'

export function CrossExaminationScreen() {
  const setScreen = useAppStore((state) => state.setScreen)
  const { response, isLoading, error, askQuestion } = useAIResponse()

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
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
          STEP 04 OF 04
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{
          width: '100%',
          maxWidth: '680px',
          margin: '0 auto',
          padding: '48px 24px',
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
              fontSize: '28px',
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