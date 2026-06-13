import { useAppStore } from "./store/useAppStore"
import EntryScreen from "./screens/Entry/EntryScreen"

function App() {
  const currentScreen = useAppStore((state) => state.currentScreen)

  return (
    <>
      { currentScreen == 'entry' && <EntryScreen /> }
    </>
  )
}

export default App