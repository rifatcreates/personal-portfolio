export const COLORS = {
  bgPrimary: '#0a0e1a',
  bgSecondary: '#0f1424',
  bgSurface: '#141929',
  bgElevated: '#1a2035',
  textPrimary: '#f0f2f8',
  textSecondary: '#8892a4',
  textMuted: '#4a5568',
  accent: '#f59e0b',
  accentDim: '#92610a',
  border: '#1e2d45',
  danger: '#ef4444',
  success: '#10b981',
} as const

export const DURATION = {
  fast: 150,
  normal: 300,
  slow: 600,
  cinematic: 1200,
} as const

export const EASING = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
} as const

export const Z_INDEX = {
  base: 0,
  overlay: 10,
  modal: 20,
  toast: 30,
} as const