import { useAppStore } from "../../store/useAppStore"
import NotificationCard from "./NotificationCard"
import SystemBadge from "./SystemBadge"
import { useIsMobile } from '../../hooks/useIsMobile'

export default function EntryScreen() {
    const isMobile = useIsMobile()
    const setScreen = useAppStore((state) => state.setScreen)

    return (
        <div className="min-h-screen w-full flex flex-col" >
            <div
                className="flex items-center justify-between"
                style={{
                    padding: isMobile ? '14px 16px' : '20px 32px',
                    borderBottom: '1px solid var(--color-border-subtle)',
                }}
            >

                <SystemBadge />

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)',letterSpacing: '0.1em' }}>CONFIDENTIAL</span>

            </div>

            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <NotificationCard onBeginReview={() => setScreen('role-briefing')} />
            </div>

            <div
                style={{
                    padding: isMobile ? '12px 16px' : '16px 32px',
                    borderTop: '1px solid var(--color-border-subtle)',
                }}
            >
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: isMobile ? '9px' : '11px',
                        color: 'var(--color-text-muted)',
                        letterSpacing: '0.1em',
                    }}
                >
                    THE HIRING SIMULATION © 2025
                </span>
            </div>
        </div>
    )
}