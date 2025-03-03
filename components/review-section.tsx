import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    author: "Camper1363533075",
    date: "Jan 2025",
    rating: 5,
    content:
      "Great staff and awesome food!! Atmosphere was excellent. We loved the service, quality of food and overall experience. Rating outdoors was excellent!",
    type: "Family",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    author: "Margaret V",
    date: "Feb 2025",
    rating: 5,
    content:
      "Beautiful restaurant. Food was great and environment was very peaceful and serene. Would highly recommend visiting this restaurant.",
    type: "Family",
    avatar: "/placeholder.svg?height=40&width=40",
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
  },
]

export function ReviewSection() {
  return (
    <div className="space-y-6">
      <div className="flex gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold">5.0</div>
          <div className="flex justify-center">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">2,105 reviews</div>
        </div>
        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <div className="w-12 text-sm">{rating} stars</div>
              <Progress value={rating === 5 ? 75 : rating === 4 ? 20 : 5} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <input type="search" placeholder="Search reviews..." className="rounded-md border px-3 py-2 text-sm" />
        <Button variant="outline">Write a Review</Button>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={review.avatar} />
                <AvatarFallback>{review.author.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{review.author}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{review.date}</span>
                  <span>•</span>
                  <span>{review.type}</span>
                </div>
              </div>
            </div>
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
            </div>
            <p className="text-sm">{review.content}</p>
            {review.images && (
              <div className="flex gap-2 pt-2">
                {review.images.map((image, index) => (
                  <div key={index} className="relative h-20 w-20">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Review image ${index + 1}`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

