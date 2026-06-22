import { useState } from 'react'
import { motion } from 'framer-motion'

interface QuestionInputProps {
  onSubmit: (question: string) => void
  isLoading: boolean
}

export function QuestionInput({ onSubmit, isLoading }: QuestionInputProps) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (value.trim() === '' || isLoading) return
    onSubmit(value.trim())
    setValue('')
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit()
        }}
        placeholder="Ask the candidate a question..."
        aria-label="Type your interview question"
        style={{
          flex: 1,
          padding: '14px 16px',
          backgroundColor: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-text-primary)',
          fontSize: '14px',
          fontFamily: 'var(--font-sans)',
          outline: 'none',
        }}
      />
      <motion.button
        onClick={handleSubmit}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
        style={{
          padding: '14px 22px',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg-primary)',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-sans)',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.6 : 1,
        }}
      >
        {isLoading ? 'Thinking...' : 'Ask'}
      </motion.button>
    </div>
  )
}