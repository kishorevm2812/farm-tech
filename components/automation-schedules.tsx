"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Droplet, Sun, Fan, Clock } from "lucide-react"

export function AutomationSchedules() {
  const schedules = [
    {
      id: 1,
      name: "Morning Watering",
      device: "Irrigation System",
      icon: Droplet,
      iconColor: "text-blue-500",
      time: "07:00 AM",
      days: ["Mon", "Wed", "Fri"],
      duration: "10 min",
      active: true,
    },
    {
      id: 2,
      name: "Daytime Lighting",
      device: "Grow Lights",
      icon: Sun,
      iconColor: "text-yellow-500",
      time: "09:00 AM - 06:00 PM",
      days: ["Every day"],
      duration: "9 hours",
      active: true,
    },
    {
      id: 3,
      name: "Evening Ventilation",
      device: "Ventilation Fans",
      icon: Fan,
      iconColor: "text-sky-500",
      time: "06:00 PM",
      days: ["Every day"],
      duration: "30 min",
      active: false,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Automation Schedules</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full bg-background ${schedule.iconColor}`}>
                  <schedule.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">{schedule.name}</div>
                  <div className="text-xs text-muted-foreground">{schedule.device}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">{schedule.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {schedule.duration}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {schedule.days.map((day, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Switch checked={schedule.active} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

