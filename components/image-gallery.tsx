"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Grid2X2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="grid h-[400px] grid-cols-4 grid-rows-1 gap-2">
        <div className="relative col-span-2 row-span-1">
          <Image src={images[0].src || "/placeholder.svg"} alt={images[0].alt} fill className="object-cover" priority />
        </div>
        <div className="relative">
          <Image src={images[1].src || "/placeholder.svg"} alt={images[1].alt} fill className="object-cover" />
        </div>
        <div className="relative">
          <Dialog>
            <DialogTrigger asChild>
              <div className="group relative h-full cursor-pointer">
                <Image src={images[2].src || "/placeholder.svg"} alt={images[2].alt} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                  <div className="text-center">
                    <Grid2X2 className="mx-auto h-6 w-6" />
                    <span className="mt-1 block text-sm">See More</span>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
              <DialogTitle className="sr-only">Image Gallery</DialogTitle>
              <div className="relative aspect-video">
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
