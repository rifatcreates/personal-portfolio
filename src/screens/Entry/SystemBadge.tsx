export default function SystemBadge() {
    return (
        <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--color-success)' }} />

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)', letterSpacing: '0.15em' }}>HIRING PORTAL v1.0</span>
        </div>
    )
}