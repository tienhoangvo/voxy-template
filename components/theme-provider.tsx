'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ReactNode } from 'react'

export default function ThemeProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableColorScheme
      enableSystem
    >
      {children}
    </NextThemesProvider>
  )
}
