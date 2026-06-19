import { motion } from 'framer-motion'

const SUGGESTED_QUESTIONS = [
  'Why did you choose Supabase over Firebase?',
  'What was the hardest bug you fixed?',
  'How do you decide when to use TanStack Query?',
  'What would you improve about DocGenius?',
]

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void
  disabled: boolean
}

export function SuggestedQuestions({ onSelect, disabled }: SuggestedQuestionsProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
      {SUGGESTED_QUESTIONS.map((q) => (
        <motion.button
          key={q}
          onClick={() => !disabled && onSelect(q)}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          style={{
            padding: '8px 14px',
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text-secondary)',
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
          }}
        >
          {q}
        </motion.button>
      ))}
    </div>
  )
}