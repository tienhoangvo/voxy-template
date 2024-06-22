'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState<Boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const { theme, setTheme } = useTheme()
  if (!mounted) return null
  return (
    <select
      value={theme}
      onChange={(event) => {
        setTheme(event.target.value)
      }}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}
