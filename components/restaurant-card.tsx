import { CardDescription } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RestaurantCardProps {
  name: string
  type: string
  cuisine: string
  priceRange: string
  rating: number
  reviews: number
  address: string
  description: string
  tags: string[]
  image: string
}

export function RestaurantCard({
  name,
  type,
  cuisine,
  priceRange,
  rating,
  reviews,
  address,
  description,
  tags = [],
  image,
}: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/restaurant/${name.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="flex">
          <div className="relative h-48 w-72 shrink-0">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <CardContent className="flex-1 p-6">
            <CardHeader className="p-0">
              <CardTitle>{name}</CardTitle>
              <CardDescription>
                {type} • {cuisine} • {priceRange}
              </CardDescription>
            </CardHeader>
            <div className="flex items-center gap-1 mt-2">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
              </div>
              <span className="text-sm">{rating}</span>
              <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm truncate">{address}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {description} <span className="text-primary">more</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )) || null}
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  )
}

export default RestaurantCard

