import { create } from 'zustand'
import type { Screen, Decision } from '../types'

interface AppState {
  currentScreen: Screen
  screenHistory: Screen[]
  decision: Decision
  isTransitioning: boolean
  setScreen: (screen: Screen) => void
  goBack: () => void
  setDecision: (decision: Decision) => void
  setTransitioning: (value: boolean) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  currentScreen: 'entry',
  screenHistory: [],
  decision: 'pending',
  isTransitioning: false,

  setScreen: (screen) => {
    const current = get().currentScreen
    set((state) => ({
      currentScreen: screen,
      screenHistory: [...state.screenHistory, current],
    }))
  },

  goBack: () => {
    const history = get().screenHistory
    if (history.length === 0) return
    const previous = history[history.length - 1]
    set({
      currentScreen: previous,
      screenHistory: history.slice(0, -1),
    })
  },

  setDecision: (decision) => set({ decision }),
  setTransitioning: (value) => set({ isTransitioning: value }),
}))