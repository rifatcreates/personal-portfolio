import { AnimatePresence, motion } from "framer-motion"
import { useAppStore } from "./store/useAppStore"
import EntryScreen from "./screens/Entry/EntryScreen"
import { RoleBriefingScreen } from "./screens/RoleBriefing/RoleBriefingScreen"
import { ResumeReviewScreen } from "./screens/ResumeReview/ResumeReviewScreen"
import { TechnicalAssessmentScreen } from "./screens/TechnicalAssessment/TechnicalAssessmentScreen"
import { CrossExaminationScreen } from "./screens/CrossExamination/CrossExaminationScreen"
import { CultureFitScreen } from "./screens/CultureFit/CultureFitScreen"
import { HireDecisionScreen } from "./screens/HireDecision/HireDecisionScreen"

function App() {
  const currentScreen = useAppStore((state) => state.currentScreen)

  return (
    <AnimatePresence mode="wait">
      <motion.div key={currentScreen} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
        { currentScreen === 'entry' && <EntryScreen /> }
        { currentScreen === 'role-briefing' && <RoleBriefingScreen /> }
        { currentScreen === 'resume-review' && <ResumeReviewScreen/> }
        { currentScreen === 'technical-assessment' && <TechnicalAssessmentScreen /> }
        { currentScreen === 'cross-examination' && <CrossExaminationScreen /> }
        { currentScreen === 'culture-fit' && <CultureFitScreen /> }
        { currentScreen === 'hire-decision' && <HireDecisionScreen /> }
      </motion.div>
    </AnimatePresence>
  )
}

export default App