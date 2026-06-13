import { motion } from "framer-motion"
import { candidate } from "../../data/candidate"
import { DURATION, EASING } from "../../constants/tokens"
interface NotificationCardProps {
    onBeginReview: () => void
}

export default function NotificationCard({ onBeginReview }: NotificationCardProps) {
    return (
        <motion.div initial= {{ opacity: 0, y: 24 }} animate= {{ opacity: 1, y: 0 }} transition={{ duration: DURATION.slow/1000, ease: EASING.outExpo, delay: 0.3 }} style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)',borderRadius: 'var(--radius-lg)', padding: '2.5rem', width: '100%', maxWidth: '480px' }}>

            <div className="flex items-center gap-2 mb-6">
                <div className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: '11px', letterSpacing: '0.15em' }}>NEW REQUEST</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '22px', fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.3, marginBottom: '0.75rem' }}>You have received a hiring request.</h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                A candidate has submitted their profile for the{' '}
                <span style={{ color: 'var(--color-text-primary)'}}>{candidate.title}</span>{' '}
                position. Review their work and make a decision.
            </p>

            <div style={{ height: '1px', backgroundColor: 'var(--color-border)', marginBottom: '1.5rem' }} />

            <div className="flex items-center justify-between mb-6">
                <div>

                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)',letterSpacing: '0.1em', marginBottom: '4px' }}>CANDIDATE</p>

                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{candidate.name}</p>
                    
                </div>
                <div style={{ textAlign: 'right' }}>

                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)',letterSpacing: '0.1em', marginBottom: '4px' }}>LOCATION</p>

                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{candidate.location}</p>

                </div>
            </div>

            <motion.button onClick={onBeginReview} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} style={{ width: '100%', padding: '0.875rem', backgroundColor: 'var(--color-accent)', color: '#0a0e1a', border: 'none', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)', fontSize: '14px',fontWeight: 600, letterSpacing: '0.02em', cursor: 'pointer' }}>Begin Review →</motion.button>

        </motion.div>
    )
}