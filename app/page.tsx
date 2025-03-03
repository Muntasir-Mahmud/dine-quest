import Image from "next/image"
import Link from "next/link"
import { MapPin, Search, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CategoryCard from "@/components/category-card"
import { FeaturedRestaurantCard } from "@/components/featured-restaurant-card"
import OfferCard from "@/components/offer-card"

const featuredRestaurants = [
  {
    id: "1",
    name: "The Rustic Table",
    image: "/placeholder.svg?height=300&width=400&text=Rustic+Table",
    description: "Farm-to-table cuisine with a cozy atmosphere and seasonal menu.",
    cuisine: "American",
    rating: 4.7,
    specialOffer: "10% Off Dinner",
  },
  {
    id: "2",
    name: "Sushi Zen",
    image: "/placeholder.svg?height=300&width=400&text=Sushi+Zen",
    description: "Authentic Japanese sushi and sashimi prepared by master chefs.",
    cuisine: "Japanese",
    rating: 4.9,
  },
  {
    id: "3",
    name: "La Trattoria",
    image: "/placeholder.svg?height=300&width=400&text=La+Trattoria",
    description: "Family-owned Italian restaurant serving homemade pasta and wood-fired pizzas.",
    cuisine: "Italian",
    rating: 4.5,
    specialOffer: "Free Dessert",
  },
  {
    id: "4",
    name: "Spice Route",
    image: "/placeholder.svg?height=300&width=400&text=Spice+Route",
    description: "A culinary journey through India with authentic regional dishes.",
    cuisine: "Indian",
    rating: 4.6,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex items-center justify-between border-b">
        <Link href="/" className="text-2xl font-bold text-red-600">
          DineQuest
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <div className="flex items-center gap-1 px-3 py-2 border-r">
              <MapPin size={18} className="text-red-500" />
              <span className="text-sm">Lalbaag, Dhaka</span>
            </div>
            <button className="bg-red-600 p-2 rounded-r-md">
              <Search size={20} className="text-white" />
            </button>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Sign in</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Restaurant+Ambiance"
          alt="Restaurant ambiance"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Stop looking for a restaurant - find it.</h1>
          <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-full overflow-hidden flex items-center p-2">
            <Search size={20} className="text-gray-600 ml-2 mr-2" />
            <Input
              type="text"
              placeholder="Search for Restaurants by Name, Cuisine, Location"
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-800 placeholder:text-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-4 justify-items-center">
          <CategoryCard icon="🍕" name="Italian" />
          <CategoryCard icon="🌮" name="Mexican" />
          <CategoryCard icon="🍜" name="Asian" />
          <CategoryCard icon="🍔" name="American" />
          <CategoryCard icon="🥑" name="Vegetarian" />
          <CategoryCard icon="🦞" name="Seafood" />
          <CategoryCard icon="🍨" name="Desserts" />
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-8 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Featured Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <FeaturedRestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Link href="/restaurants" className="text-blue-600 hover:underline">
            See More
          </Link>
        </div>
      </section>

      {/* Top Offers Section */}
      <section className="py-8 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Top Offers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <OfferCard
            name="Anchor & James"
            cuisine="American"
            location="Downtown Union Street"
            price="$30 and under"
            rating={4.5}
            reviews={1987}
            offerTag="Buy 1 Get 1"
          />
          <OfferCard
            name="Anchor & James"
            cuisine="American"
            location="Downtown Union Street"
            price="$30 and under"
            rating={4.5}
            reviews={1987}
            offerTag="Buy 2 Get 1"
          />
          <OfferCard
            name="Anchor & James"
            cuisine="American"
            location="Downtown Union Street"
            price="$30 and under"
            rating={4.5}
            reviews={1987}
            offerTag="Flat 30% Off"
          />
          <OfferCard
            name="Anchor & James"
            cuisine="American"
            location="Downtown Union Street"
            price="$30 and under"
            rating={4.5}
            reviews={1987}
            offerTag="Flat 40% Off"
          />
        </div>
        <div className="flex justify-end mt-4">
          <Link href="/offers" className="text-blue-600 hover:underline">
            See More
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-100 mt-auto pt-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">DineQuest</h3>
              <ul className="space-y-2">
                <li className="text-sm">Company</li>
                <li className="text-sm">Who we are</li>
                <li className="text-sm">Blog</li>
                <li className="text-sm">Career</li>
                <li className="text-sm">Contact</li>
                <li className="text-sm">Investor Relations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">For Restaurants</h3>
              <ul className="space-y-2">
                <li className="text-sm">Add Restaurant</li>
                <li className="text-sm">Business App</li>
                <li className="text-sm">Products for Business</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">For Foodies</h3>
              <ul className="space-y-2">
                <li className="text-sm">Code of Conduct</li>
                <li className="text-sm">Community</li>
                <li className="text-sm">Blogger Help</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">For You</h3>
              <ul className="space-y-2">
                <li className="text-sm">Privacy</li>
                <li className="text-sm">Terms</li>
                <li className="text-sm">Security</li>
                <li className="text-sm">Sitemap</li>
              </ul>
              <h3 className="text-sm font-semibold mt-6 mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
              </div>
              <div className="mt-4 space-y-2">
                <Image
                  src="/app-store.svg"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/google-play.svg"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-6 text-xs">
            <p>
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content
              Policies. All trademarks are properties of their respective owners. 2023 Ekrop Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
