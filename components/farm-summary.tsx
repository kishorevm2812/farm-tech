import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Leaf, Droplet, Zap } from "lucide-react"

export function FarmSummary() {
  const resources = [
    {
      name: "Water Usage",
      current: 65,
      max: 100,
      unit: "L",
      icon: Droplet,
      color: "text-blue-500",
    },
    {
      name: "Nutrient Levels",
      current: 42,
      max: 50,
      unit: "ppm",
      icon: Leaf,
      color: "text-green-500",
    },
    {
      name: "Energy Usage",
      current: 3.2,
      max: 5,
      unit: "kWh",
      icon: Zap,
      color: "text-amber-500",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Farm Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
            <span className="text-3xl font-bold">12</span>
            <span className="text-xs text-muted-foreground">Plants</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
            <span className="text-3xl font-bold">4</span>
            <span className="text-xs text-muted-foreground">Growing Zones</span>
          </div>
        </div>

        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <resource.icon className={`h-4 w-4 ${resource.color}`} />
                  <span className="text-sm">{resource.name}</span>
                </div>
                <span className="text-sm font-medium">
                  {resource.current}/{resource.max} {resource.unit}
                </span>
              </div>
              <Progress value={(resource.current / resource.max) * 100} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

