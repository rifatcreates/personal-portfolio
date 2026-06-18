import { useAppStore } from "./store/useAppStore"
import EntryScreen from "./screens/Entry/EntryScreen"
import { RoleBriefingScreen } from "./screens/RoleBriefing/RoleBriefingScreen"
import { ResumeReviewScreen } from "./screens/ResumeReview/ResumeReviewScreen"
import { TechnicalAssessmentScreen } from "./screens/TechnicalAssessment/TechnicalAssessmentScreen"

function App() {
  const currentScreen = useAppStore((state) => state.currentScreen)

  return (
    <>
      { currentScreen === 'entry' && <EntryScreen /> }
      { currentScreen === 'role-briefing' && <RoleBriefingScreen /> }
      { currentScreen === 'resume-review' && <ResumeReviewScreen/> }
      { currentScreen === 'technical-assessment' && <TechnicalAssessmentScreen /> }
    </>
  )
}

export default App