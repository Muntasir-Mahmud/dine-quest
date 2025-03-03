import type { ReactNode } from "react"

interface FilterSectionProps {
  title: string
  children: ReactNode
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">{title}</h3>
      {children}
    </div>
  )
}

