import { useState } from 'react'
import { candidate } from '../data/candidate'

interface UseAIResponseReturn {
  response: string
  isLoading: boolean
  error: string | null
  askQuestion: (question: string) => Promise<void>
}

export function useAIResponse(): UseAIResponseReturn {
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const askQuestion = async (question: string) => {
    setIsLoading(true)
    setError(null)
    setResponse('')

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY

    const contextPrompt = `You are answering interview questions on behalf of ${candidate.name}, a ${candidate.title}.

CANDIDATE BACKGROUND:
${candidate.tagline}
Location: ${candidate.location}

SKILLS:
${candidate.skills.map((s) => s.name).join(', ')}

PROJECTS:
${candidate.projects
  .map(
    (p) =>
      `- ${p.title}: ${p.description}\n  Tech: ${p.techStack.join(', ')}\n  Decisions: ${p.decisions.join(' | ')}\n  Technical Details: ${p.detailedSummary}`
  )
  .join('\n')}

CERTIFICATIONS:
${candidate.certifications.map((c) => `${c.title} (${c.issuer} via ${c.platform})`).join(', ')}

VIRTUAL EXPERIENCE:
${candidate.virtualExperiences.map((v) => `${v.role} at ${v.company} (${v.platform})`).join(', ')}

INSTRUCTIONS:
Answer the recruiter's question as if you ARE ${candidate.name}, in first person. Be honest, specific, and confident but not arrogant. Keep the answer under 100 words. If the question asks about something not in the background above, answer naturally based on general frontend development knowledge, but stay consistent with the candidate's actual skill level (self-taught, junior to mid level).

RECRUITER'S QUESTION: ${question}`

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: contextPrompt }] }],
          }),
        }
      )

      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`)
      }

      const data = await res.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

      if (!text) {
        throw new Error('No response received from AI')
      }

      setResponse(text)
    } catch (err) {
      setError('Something went wrong while generating the response. Please try again.')
      console.error('AI response error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return { response, isLoading, error, askQuestion }
}