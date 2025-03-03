import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FeaturedRestaurantCardProps {
  id: string
  name: string
  image: string
  description: string
  cuisine: string
  rating: number
  specialOffer?: string
}

export function FeaturedRestaurantCard({
  id,
  name,
  image,
  description,
  cuisine,
  rating,
  specialOffer,
}: FeaturedRestaurantCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {specialOffer && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{specialOffer}</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <div className="flex items-center">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">{cuisine}</p>
        <p className="line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/restaurant/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

