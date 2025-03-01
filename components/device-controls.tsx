"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Droplet, Fan, Sun, Sprout } from "lucide-react"

export function DeviceControls() {
  const [devices, setDevices] = useState([
    {
      id: "irrigation",
      name: "Irrigation System",
      status: false,
      icon: Droplet,
      iconColor: "text-blue-500",
      intensity: 50,
    },
    {
      id: "fans",
      name: "Ventilation Fans",
      status: true,
      icon: Fan,
      iconColor: "text-sky-500",
      intensity: 70,
    },
    {
      id: "lights",
      name: "Grow Lights",
      status: true,
      icon: Sun,
      iconColor: "text-yellow-500",
      intensity: 80,
    },
    {
      id: "nutrient",
      name: "Nutrient Dispenser",
      status: false,
      icon: Sprout,
      iconColor: "text-green-500",
      intensity: 30,
    },
  ])

  const toggleDevice = (id: string) => {
    setDevices(devices.map((device) => (device.id === id ? { ...device, status: !device.status } : device)))
  }

  const setIntensity = (id: string, value: number[]) => {
    setDevices(devices.map((device) => (device.id === id ? { ...device, intensity: value[0] } : device)))
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Device Controls</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="flex flex-col space-y-2 p-3 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <device.icon className={`h-4 w-4 ${device.iconColor}`} />
                  <span className="font-medium">{device.name}</span>
                </div>
                <Switch checked={device.status} onCheckedChange={() => toggleDevice(device.id)} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground w-10">{device.intensity}%</span>
                <Slider
                  disabled={!device.status}
                  value={[device.intensity]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setIntensity(device.id, value)}
                  className="flex-1"
                />
                <Button variant="outline" size="sm" disabled={!device.status} className="w-16 text-xs">
                  {device.status ? "On" : "Off"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

