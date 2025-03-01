"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplet, AlertCircle } from "lucide-react"

interface Plant {
  id: number
  name: string
  variety: string
  image: string
  status: string
  growthStage: string
  daysPlanted: number
  waterNeeds: string
}

export function PlantGrid() {
  const [filter, setFilter] = useState("all")
  const [plants, setPlants] = useState<Plant[]>([
    {
      id: 1,
      name: "Tomato Plant",
      variety: "Cherry",
      image: "/tomato.jpg.webp",
      status: "healthy",
      growthStage: "fruiting",
      daysPlanted: 45,
      waterNeeds: "medium",
    },
    {
      id: 2,
      name: "Basil",
      variety: "Sweet",
      image: "/Basil.webp",
      status: "needs-attention",
      growthStage: "mature",
      daysPlanted: 30,
      waterNeeds: "high",
    },
    {
      id: 3,
      name: "Lettuce",
      variety: "Romaine",
      image: "/Lettuce.webp",
      status: "healthy",
      growthStage: "growing",
      daysPlanted: 20,
      waterNeeds: "medium",
    },
    {
      id: 4,
      name: "Pepper",
      variety: "Bell",
      image: "/pepper.webp",
      status: "healthy",
      growthStage: "seedling",
      daysPlanted: 15,
      waterNeeds: "low",
    },
    {
      id: 5,
      name: "Strawberry",
      variety: "Alpine",
      image: "/strawbeery.avif",
      status: "needs-attention",
      growthStage: "flowering",
      daysPlanted: 35,
      waterNeeds: "medium",
    },
    {
      id: 6,
      name: "Mint",
      variety: "Spearmint",
      image: "/mint.webp",
      status: "healthy",
      growthStage: "mature",
      daysPlanted: 60,
      waterNeeds: "high",
    },
  ])

  const addPlant = (newPlant: Omit<Plant, "id">) => {
    setPlants([...plants, { ...newPlant, id: plants.length + 1 }])
  }

  const filteredPlants =
    filter === "all"
      ? plants
      : plants.filter((plant) =>
          filter === "needs-attention" ? plant.status === "needs-attention" : plant.growthStage === filter,
        )

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
        <TabsList className="grid grid-cols-4 md:w-auto md:grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="seedling">Seedling</TabsTrigger>
          <TabsTrigger value="growing">Growing</TabsTrigger>
          <TabsTrigger value="mature">Mature</TabsTrigger>
          <TabsTrigger value="fruiting">Fruiting</TabsTrigger>
          <TabsTrigger value="needs-attention">Needs Attention</TabsTrigger>
        </TabsList>
        <TabsContent value={filter} className="mt-4">
          {filteredPlants.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <AlertCircle className="h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-medium">No plants found</p>
              <p className="text-sm text-muted-foreground">Try changing your filter or add a new plant</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredPlants.map((plant) => (
                <Link href={`/plants/${plant.id}`} key={plant.id}>
                  <Card className="overflow-hidden h-full">
                    <div className="relative">
                      <Image
                        src={plant.image || "/placeholder.svg"}
                        alt={plant.name}
                        width={200}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                      {plant.status === "needs-attention" && (
                        <Badge variant="destructive" className="absolute top-2 right-2">
                          Needs Attention
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <div className="font-medium">{plant.name}</div>
                      <div className="text-xs text-muted-foreground">{plant.variety}</div>
                      <div className="flex items-center gap-1 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {plant.growthStage}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {plant.daysPlanted} days
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 flex justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Droplet className="h-3 w-3 mr-1" />
                        {plant.waterNeeds} water
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

