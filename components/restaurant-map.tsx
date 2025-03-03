"use client"

import { useEffect, useRef } from "react"

interface RestaurantMapProps {
  address: string
}

export function RestaurantMap({ }: RestaurantMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize map here using your preferred mapping service
    // For example, using Google Maps or Mapbox
    // This is a placeholder that shows an iframe with OpenStreetMap
    if (mapRef.current) {
      const iframe = document.createElement("iframe")
      iframe.style.border = "none"
      iframe.style.width = "100%"
      iframe.style.height = "300px"
      iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=90.3742,23.7461,90.3842,23.7561&layer=mapnik`
      mapRef.current.appendChild(iframe)
    }

    return () => {
      // Store a reference to the current value
      const currentMapRef = mapRef.current
      if (currentMapRef) {
        currentMapRef.innerHTML = ""
      }
    }
  }, []) // Refs don't need to be in the dependency array

  return <div className="h-[300px] w-full overflow-hidden rounded-lg" ref={mapRef} />
}
