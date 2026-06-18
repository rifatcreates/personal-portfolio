import { useAppStore } from "../../store/useAppStore"
import NotificationCard from "./NotificationCard"
import SystemBadge from "./SystemBadge"

export default function EntryScreen() {
    const setScreen = useAppStore((state) => state.setScreen)

    return (
        <div className="min-h-screen w-full flex flex-col" >
            <div className="flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid var(--color-border-subtle)'}}>

                <SystemBadge />

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)',letterSpacing: '0.1em' }}>CONFIDENTIAL</span>

            </div>

            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <NotificationCard onBeginReview={() => setScreen('role-briefing')} />
            </div>

            <div className="px-8 py-4" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)',letterSpacing: '0.1em' }}>THE HIRING SIMULATION © 2025</span>
            </div>
        </div>
    )
}