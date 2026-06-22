import { motion } from "framer-motion"
import { candidate } from "../../data/candidate"
import { DURATION, EASING } from "../../constants/tokens"
import { useIsMobile } from "../../hooks/useIsMobile"

export function CandidateHeader() {
    const isMobile = useIsMobile()

    return (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DURATION.normal / 1000, ease: EASING.outExpo }} style={{ marginBottom: '2.5rem' }} >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--color-text-muted)', marginBottom: '12px' }} >CANDIDATE FILE — ACTIVE REVIEW</p>

            <h1 style={{ fontSize: isMobile ? '26px' : '36px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px',letterSpacing: '-0.02em' }} >{candidate.name}</h1>

            <p style={{ fontSize: '16px', color: 'var(--color-accent)', fontWeight: 500, marginBottom: '12px' }} >{candidate.title}</p>

            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '16px' }} >{candidate.tagline}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-success)',display: 'inline-block' }} />

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-muted)' }}>{candidate.location}</span>
            </div>
        </motion.div>
    )
}