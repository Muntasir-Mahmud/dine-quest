import Link from "next/link"

interface CategoryCardProps {
  icon: string
  name: string
}

export default function CategoryCard({ icon, name }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${name.toLowerCase()}`}
      className="flex flex-col items-center justify-center w-24 h-24 border rounded-lg hover:shadow-md transition-shadow"
    >
      <span className="text-3xl mb-1">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </Link>
  )
}

