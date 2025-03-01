import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Droplet, Sun, Thermometer, Wind } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PlantGrowthChart } from "@/components/plant-growth-chart"
import { PlantCareHistory } from "@/components/plant-care-history"
import { PlantNotes } from "@/components/plant-notes"

export default function PlantDetailsPage({ params }: { params: { id: string } }) {
  // Get plant data from the plant grid's static data
  const plants = [
    {
      id: 1,
      name: "Tomato Plant",
      variety: "Cherry",
      image: "/tomato.jpg.webp",
      status: "healthy",
      growthStage: "fruiting",
      daysPlanted: 45,
      waterNeeds: "medium",
      description: "A healthy cherry tomato plant with multiple fruit clusters. Currently in the fruiting stage and producing well.",
      optimalConditions: {
        temperature: "21-27°C",
        humidity: "50-70%",
        light: "Full sun",
        watering: "Regular, keep soil moist",
      },
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
      description: "A mature sweet basil plant that needs some attention. The leaves are ready for harvesting.",
      optimalConditions: {
        temperature: "18-24°C",
        humidity: "40-60%",
        light: "Partial to full sun",
        watering: "Keep soil consistently moist",
      },
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
      description: "A healthy romaine lettuce plant in its growing phase. The leaves are developing well.",
      optimalConditions: {
        temperature: "15-21°C",
        humidity: "45-65%",
        light: "Partial sun",
        watering: "Regular watering, avoid waterlogging",
      },
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
      description: "A young bell pepper plant in its seedling stage. Growing steadily with good potential.",
      optimalConditions: {
        temperature: "20-25°C",
        humidity: "60-70%",
        light: "Full sun",
        watering: "Light but frequent watering",
      },
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
      description: "An alpine strawberry plant in flowering stage. Requires attention for optimal fruit development.",
      optimalConditions: {
        temperature: "18-24°C",
        humidity: "55-65%",
        light: "Full sun to partial shade",
        watering: "Consistent moisture, well-drained",
      },
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
      description: "A thriving spearmint plant at mature stage. Ready for regular harvesting of aromatic leaves.",
      optimalConditions: {
        temperature: "18-22°C",
        humidity: "50-70%",
        light: "Partial to full sun",
        watering: "Keep soil consistently moist",
      },
    },
  ]

  const plant = plants.find(p => p.id === parseInt(params.id)) || plants[0]

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/plants">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">{plant.name}</h1>
        <Badge>{plant.variety}</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <Image
                src={plant.image || "/placeholder.svg"}
                alt={plant.name}
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Growth Stage</span>
                  <span className="font-medium capitalize">{plant.growthStage}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Days Planted</span>
                  <span className="font-medium">{plant.daysPlanted} days</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-medium mb-2">Plant Details</h2>
              <p className="text-sm text-muted-foreground mb-4">{plant.description}</p>

              <h3 className="text-sm font-medium mb-2">Optimal Conditions</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-orange-500" />
                  <div>
                    <div className="text-xs text-muted-foreground">Temperature</div>
                    <div className="text-sm">{plant.optimalConditions.temperature}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-blue-500" />
                  <div>
                    <div className="text-xs text-muted-foreground">Watering</div>
                    <div className="text-sm">{plant.optimalConditions.watering}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-sky-500" />
                  <div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                    <div className="text-sm">{plant.optimalConditions.humidity}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-yellow-500" />
                  <div>
                    <div className="text-xs text-muted-foreground">Light</div>
                    <div className="text-sm">{plant.optimalConditions.light}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="growth">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="growth">Growth</TabsTrigger>
              <TabsTrigger value="care">Care History</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="growth" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <PlantGrowthChart plantId={plant.id} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <PlantCareHistory plantId={plant.id} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <PlantNotes plantId={plant.id.toString()} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

