"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplet, Sun, Wind } from "lucide-react"

export function SensorDashboard() {
  const sensors = [
    {
      id: "temp",
      name: "Temperature",
      value: "24°C",
      status: "normal",
      icon: Thermometer,
      iconColor: "text-orange-500",
      change: "+1.2°C",
      changeDirection: "up",
    },
    {
      id: "humidity",
      name: "Humidity",
      value: "65%",
      status: "normal",
      icon: Droplet,
      iconColor: "text-blue-500",
      change: "-2%",
      changeDirection: "down",
    },
    {
      id: "light",
      name: "Light Level",
      value: "12,500 lux",
      status: "high",
      icon: Sun,
      iconColor: "text-yellow-500",
      change: "+1,200 lux",
      changeDirection: "up",
    },
    {
      id: "airflow",
      name: "Air Flow",
      value: "0.5 m/s",
      status: "low",
      icon: Wind,
      iconColor: "text-sky-500",
      change: "-0.1 m/s",
      changeDirection: "down",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Sensor Readings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sensors.map((sensor) => (
                <div key={sensor.id} className="flex flex-col p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <sensor.icon className={`h-4 w-4 ${sensor.iconColor}`} />
                      <span className="text-sm font-medium">{sensor.name}</span>
                    </div>
                    <Badge
                      variant={
                        sensor.status === "normal" ? "outline" : sensor.status === "high" ? "destructive" : "secondary"
                      }
                    >
                      {sensor.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">{sensor.value}</div>
                  <div className={`text-xs ${sensor.changeDirection === "up" ? "text-green-500" : "text-red-500"}`}>
                    {sensor.change} from last hour
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            <div className="flex items-center justify-center h-[200px] bg-muted rounded-lg">
              <p className="text-muted-foreground">Sensor history charts will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

