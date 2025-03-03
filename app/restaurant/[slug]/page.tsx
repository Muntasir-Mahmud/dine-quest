"use client"
import Link from "next/link"
import { ArrowLeft, Clock, Heart, MapPin, Phone, Share2, Star, Wifi, Wine, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/image-gallery"
import { MenuSection } from "@/components/menu-section"
import { ReviewSection } from "@/components/review-section"
import { RestaurantMap } from "@/components/restaurant-map"

export default function RestaurantProfile() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back to Home</span>
        </Link>
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/restaurants" className="hover:text-foreground">
          Restaurant
        </Link>
        <span>/</span>
        <span className="text-foreground">Chillox</span>
      </div>

      {/* Image Gallery */}
      <ImageGallery
        images={[
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Restaurant interior",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Beef Supreme Burger",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Restaurant Menu",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            {/* Restaurant Info */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">Chillox</h1>
                <p className="text-muted-foreground">Burger • American</p>
                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.5</span>
                  <span className="text-muted-foreground">(2,105 reviews)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share restaurant</span>
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>Open Now • 10 am - 10 pm</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Dhanmondi, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+8801956789000</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Button variant="secondary" size="sm">
                <Wifi className="mr-2 h-4 w-4" /> Free WiFi
              </Button>
              <Button variant="secondary" size="sm">
                <Wine className="mr-2 h-4 w-4" /> Full Bar
              </Button>
              <Button variant="secondary" size="sm">
                <Utensils className="mr-2 h-4 w-4" /> Table Service
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <Button className="flex-1">Add Review</Button>
              <Button variant="outline" className="flex-1">
                Bookmark
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="menu" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>
              <TabsContent value="menu" className="mt-6">
                <MenuSection />
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <ReviewSection />
              </TabsContent>
              <TabsContent value="info" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold">About Chillox</h3>
                  <p className="text-muted-foreground">
                    Welcome to Chillox, your destination for premium burgers in Dhaka. We take pride in serving
                    high-quality, handcrafted burgers made with locally sourced ingredients. Our restaurant offers a
                    casual dining experience with a modern atmosphere.
                  </p>
                  <h3 className="mt-6 text-lg font-semibold">Location & Hours</h3>
                  <p className="text-muted-foreground">
                    Located in the heart of Dhanmondi, we&apos;re easily accessible and offer both dine-in and takeaway
                    services. Open daily from 10 AM to 10 PM.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-card">
              <RestaurantMap address="Level - 3, AMM Center 56/A Rd 3A, Dhaka 1209" />
              <div className="p-4 text-sm text-muted-foreground">Level - 3, AMM Center 56/A Rd 3A, Dhaka 1209</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const runtime = "edge";