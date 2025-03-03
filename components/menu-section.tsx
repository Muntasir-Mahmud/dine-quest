import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const menuItems = [
  {
    id: 1,
    name: "Beef Supreme",
    description: "Juicy beef burger topped with cheese, mixed herbs, creamy sauce and fresh mint mayo",
    price: "৳350",
    rating: 4.5,
    reviews: 71,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Beef Supreme",
    description: "Juicy beef burger topped with cheese, mixed herbs, creamy sauce and fresh mint mayo",
    price: "৳350",
    rating: 4.5,
    reviews: 71,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Beef Supreme",
    description: "Juicy beef burger topped with cheese, mixed herbs, creamy sauce and fresh mint mayo",
    price: "৳350",
    rating: 4.5,
    reviews: 71,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Beef Supreme",
    description: "Juicy beef burger topped with cheese, mixed herbs, creamy sauce and fresh mint mayo",
    price: "৳350",
    rating: 4.5,
    reviews: 71,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function MenuSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Menu</h3>
        <Button variant="outline">View Full Menu</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {menuItems.map((item) => (
          <Card key={item.id}>
            <div className="flex">
              <div className="relative h-32 w-32">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="rounded-l-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{item.rating}</span>
                      <span className="text-sm text-muted-foreground">({item.reviews})</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

