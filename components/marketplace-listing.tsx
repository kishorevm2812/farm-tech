import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, MessageSquare } from "lucide-react"

export function MarketplaceListing() {
  const listings = [
    {
      id: 1,
      title: "Fresh Organic Tomatoes",
      image: "/tomato.jpg.webp",
      price: "$4.50",
      unit: "per pound",
      location: "Downtown Community Garden",
      distance: "0.8 miles away",
      seller: "Urban Greens Co-op",
      available: "3 lbs available",
    },
    {
      id: 2,
      title: "Heirloom Lettuce Mix",
      image: "/Lettuce.webp",
      price: "$3.00",
      unit: "per bunch",
      location: "Riverside Farms",
      distance: "1.2 miles away",
      seller: "River Valley Growers",
      available: "8 bunches available",
    },
    {
      id: 3,
      title: "Basil Plant Seedlings",
      image: "/Basil.webp",
      price: "$2.50",
      unit: "each",
      location: "Sunshine Community Garden",
      distance: "0.5 miles away",
      seller: "Green Thumb Nursery",
      available: "12 plants available",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {listings.map((listing) => (
        <Card key={listing.id} className="overflow-hidden">
          <div className="flex">
            <div className="w-1/3">
              <Image
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                width={150}
                height={150}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="font-medium">{listing.title}</h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-lg font-bold">{listing.price}</span>
                <span className="text-xs text-muted-foreground">{listing.unit}</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{listing.location}</span>
              </div>
              <div className="text-xs text-muted-foreground ml-4">{listing.distance}</div>
              <div className="mt-2">
                <Badge variant="outline" className="text-xs">
                  {listing.available}
                </Badge>
              </div>
            </div>
          </div>
          <CardFooter className="flex justify-between p-3 bg-muted">
            <div className="text-xs">Seller: {listing.seller}</div>
            <Button size="sm" variant="secondary">
              <MessageSquare className="h-3 w-3 mr-1" />
              Contact
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

