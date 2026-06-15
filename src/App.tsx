import { useAppStore } from "./store/useAppStore"
import EntryScreen from "./screens/Entry/EntryScreen"
import { RoleBriefingScreen } from "./screens/RoleBriefing/RoleBriefingScreen"

function App() {
  const currentScreen = useAppStore((state) => state.currentScreen)

  return (
    <>
      { currentScreen === 'entry' && <EntryScreen /> }
      { currentScreen === 'role-briefing' && <RoleBriefingScreen /> }
    </>
  )
}

export default App