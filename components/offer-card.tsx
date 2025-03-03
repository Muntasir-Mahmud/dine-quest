import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OfferCardProps {
  name: string
  cuisine: string
  location: string
  price: string
  rating: number
  reviews: number
  offerTag: string
}

export default function OfferCard({ name, cuisine, location, price, rating, reviews, offerTag }: OfferCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src="/placeholder.svg?height=200&width=300" alt={name} fill className="object-cover" />
        <div className="absolute top-3 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1">{offerTag}</div>
        <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-white/80 rounded-full h-8 w-8">
          <Heart size={18} />
        </Button>
      </div>
      <div className="p-3">
        <Link href={`/restaurant/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <h3 className="font-semibold">{name}</h3>
        </Link>
        <div className="text-sm text-gray-600">
          {cuisine} | {location}
        </div>
        <div className="text-sm mt-1">{price}</div>
        <div className="flex items-center mt-1">
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  )
}

