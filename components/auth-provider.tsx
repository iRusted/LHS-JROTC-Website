'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type Cadet = {
  name: string
  rank: string
  email: string
}

type AuthContextValue = {
  cadet: Cadet | null
  login: (cadet: Cadet) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [cadet, setCadet] = useState<Cadet | null>(null)

  const value = useMemo<AuthContextValue>(
    () => ({
      cadet,
      login: (next) => setCadet(next),
      logout: () => setCadet(null),
    }),
    [cadet],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
