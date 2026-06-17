import { motion } from 'framer-motion'
import { DURATION, EASING } from '../../constants/tokens'
import { candidate } from '../../data/candidate'

export function CredentialsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.normal / 1000, delay: 0.3, ease: EASING.outExpo }}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '16px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: 'var(--color-text-muted)',
        marginBottom: '20px',
      }}>
        CREDENTIALS
      </p>

      <div style={{ marginBottom: '24px' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: 'var(--color-text-muted)',
          marginBottom: '12px',
          opacity: 0.7,
        }}>
          CERTIFICATIONS
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {candidate.certifications.map((cert) => (
            <div
              key={cert.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  padding: '2px 8px',
                  border: `1px solid ${cert.issuer === 'Meta' ? 'var(--color-accent-dim)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-sm)',
                  color: cert.issuer === 'Meta' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  letterSpacing: '0.05em',
                }}>
                  {cert.issuer}
                </span>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                }}>
                  {cert.title}
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-text-muted)',
              }}>
                {cert.platform} · {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        height: '1px',
        backgroundColor: 'var(--color-border)',
        marginBottom: '20px',
      }} />

      <div>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: 'var(--color-text-muted)',
          marginBottom: '12px',
          opacity: 0.7,
        }}>
          VIRTUAL EXPERIENCE
        </p>

        {candidate.virtualExperiences.map((exp) => (
          <div key={exp.id}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '10px',
            }}>
              <div>
                <p style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                  marginBottom: '2px',
                }}>
                  {exp.company}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                }}>
                  {exp.role} Job Simulation
                </p>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-text-muted)',
              }}>
                {exp.platform}
              </span>
            </div>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              {exp.tasks.map((task) => (
                <li key={task} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                }}>
                  <span style={{
                    marginTop: '7px',
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-text-muted)',
                    flexShrink: 0,
                  }} />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}