import { useAppStore } from "./store/useAppStore"

function App() {
  const currentScreen = useAppStore((state) => state.currentScreen)

  return (
    <main className="min-h-screen w-full" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div style={{ padding: '2rem', fontFamily: 'var(--font-mono)' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>SYSTEM READY</p>

        <h1 style={{ color: 'var(--color-accent)', fontSize: '24px', marginTop: '8px' }}>THE HIRING SIMULATION</h1>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginTop: '5px' }}>Current screen: {currentScreen}</p>
      </div>
    </main>
  )
}

export default App
