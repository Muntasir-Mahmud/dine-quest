"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import RestaurantCard from "@/components/restaurant-card"
import { FilterSection } from "@/components/filter-section"

export default function SearchResults() {
  const [priceRange, setPriceRange] = useState<string>("")
  const [sortBy, setSortBy] = useState<string>("")

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card py-4 px-6 flex items-center justify-between border-b">
        <Link href="/" className="text-2xl font-bold text-primary">
          DineQuest
        </Link>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Lalbagh, Dhaka" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lalbagh">Lalbagh, Dhaka</SelectItem>
              <SelectItem value="dhanmondi">Dhanmondi, Dhaka</SelectItem>
              <SelectItem value="gulshan">Gulshan, Dhaka</SelectItem>
            </SelectContent>
          </Select>
          <Button>Sign in</Button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/restaurants" className="hover:text-foreground">
          Restaurants
        </Link>
        <span>/</span>
        <span className="text-foreground">Lalbagh</span>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <Card className="w-64 shrink-0">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <Button variant="link" className="h-auto p-0">
                Clear All
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="space-y-6">
                  {/* Price Range */}
                  <FilterSection title="Price">
                    <div className="flex gap-2">
                      {["₹", "₹₹", "₹₹₹", "₹₹₹₹"].map((price) => (
                        <Button
                          key={price}
                          variant={priceRange === price ? "default" : "outline"}
                          size="sm"
                          className="flex-1"
                          onClick={() => setPriceRange(price)}
                        >
                          {price}
                        </Button>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Type */}
                  <FilterSection title="Type">
                    <div className="space-y-2">
                      {["Restaurant", "Fine Dining", "Street Food", "Bangla Hotel"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={type} />
                          <Label htmlFor={type}>{type}</Label>
                        </div>
                      ))}
                    </div>
                  </FilterSection>

                  {/* Categories */}
                  <FilterSection title="Categories">
                    <div className="space-y-2">
                      {["Thai-Chinese", "American", "Asian Fusion", "Ramen"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <Label htmlFor={category}>{category}</Label>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="mt-2 h-auto p-0">
                      See all
                    </Button>
                  </FilterSection>

                  {/* Features */}
                  <FilterSection title="Features">
                    <div className="space-y-2">
                      {["Rooftop", "Convention Centre", "Outdoor", "Scenic View"].map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox id={feature} />
                          <Label htmlFor={feature}>{feature}</Label>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="mt-2 h-auto p-0">
                      See all
                    </Button>
                  </FilterSection>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Filters</Button>
            </CardFooter>
          </Card>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Top Restaurants in Lalbagh</h1>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="secondary">
                    Offers <span className="ml-1">×</span>
                  </Button>
                  <Button variant="outline">Burger</Button>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="reviews">Number of Reviews</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              {/* Regular Restaurant Cards */}
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <RestaurantCard
                    key={i}
                    name="Cafe Darbar"
                    type="Restaurant"
                    cuisine="American"
                    priceRange="₹₹"
                    rating={3.5}
                    reviews={1897}
                    address="Bikalpa Tower, 74, Satmosjid Road, Rd No 5/A, Dhaka 1205"
                    description="Enjoy American cuisine in a cozy atmosphere."
                    tags={["American", "Burger", "Pizza", "Coffee"]}
                    image="/placeholder.svg?height=400&width=600"
                  />
                ))}

              {/* Special Restaurant Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>3. Ben Thai Cafe</CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                        </div>
                        <span className="text-sm">4.4</span>
                        <span className="text-sm text-muted-foreground">(1.2k reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Lower Nob Hill • $$ • Closed until 11:30 AM</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Thai", "Noodles", "Casual", "Islanwise"].map((tag) => (
                          <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button>Reserve</Button>
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="relative aspect-square">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Thai food"
                            fill
                            className="rounded-lg object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* More Regular Restaurant Cards */}
              <RestaurantCard
                name="Cafe Darbar"
                type="Restaurant"
                cuisine="American"
                priceRange="₹₹"
                rating={3.5}
                reviews={1897}
                address="Bikalpa Tower, 74,Satmosjid Road, Rd No 5/A, Dhaka 1205"
                description="Enjoy American cuisine in a cozy atmosphere."
                tags={["American", "Burger", "Pizza", "Coffee"]}
                image="/placeholder.svg?height=400&width=600"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
