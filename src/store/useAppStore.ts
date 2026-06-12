import { create } from "zustand";
import type { Screen, Decision } from "../types";

interface AppState {
    currentScreen: Screen
    decision: Decision
    isTransitioning: boolean
    setScreen: (screen: Screen) => void
    setDecision: (decision: Decision) => void
    setTransitioning: (value: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  currentScreen: 'entry',
  decision: 'pending',
  isTransitioning: false,
  setScreen: (screen) => set({ currentScreen: screen }),
  setDecision: (decision) => set({ decision }),
  setTransitioning: (value) => set({ isTransitioning: value }),
}))