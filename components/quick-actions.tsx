"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Sun, Leaf, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function QuickActions() {
  const { toast } = useToast()
  const [isWatering, setIsWatering] = useState(false)
  const [isAdjustingLight, setIsAdjustingLight] = useState(false)
  const [isAddingNutrients, setIsAddingNutrients] = useState(false)
  const [isControllingPests, setIsControllingPests] = useState(false)

  const handleAction = (action: string, setStateFunction: (state: boolean) => void) => {
    setStateFunction(true)
    setTimeout(() => {
      setStateFunction(false)
      toast({
        title: "Action Completed",
        description: `${action} action has been performed successfully.`,
      })
    }, 2000)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-20 flex flex-col gap-1"
            onClick={() => handleAction("Water Plants", setIsWatering)}
            disabled={isWatering}
          >
            <Droplet className={`h-5 w-5 ${isWatering ? "animate-pulse text-blue-500" : "text-blue-500"}`} />
            <span>{isWatering ? "Watering..." : "Water Plants"}</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col gap-1"
            onClick={() => handleAction("Adjust Lighting", setIsAdjustingLight)}
            disabled={isAdjustingLight}
          >
            <Sun className={`h-5 w-5 ${isAdjustingLight ? "animate-pulse text-yellow-500" : "text-yellow-500"}`} />
            <span>{isAdjustingLight ? "Adjusting..." : "Adjust Lighting"}</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col gap-1"
            onClick={() => handleAction("Add Nutrients", setIsAddingNutrients)}
            disabled={isAddingNutrients}
          >
            <Leaf className={`h-5 w-5 ${isAddingNutrients ? "animate-pulse text-green-500" : "text-green-500"}`} />
            <span>{isAddingNutrients ? "Adding..." : "Add Nutrients"}</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col gap-1"
            onClick={() => handleAction("Pest Control", setIsControllingPests)}
            disabled={isControllingPests}
          >
            <AlertCircle className={`h-5 w-5 ${isControllingPests ? "animate-pulse text-red-500" : "text-red-500"}`} />
            <span>{isControllingPests ? "Controlling..." : "Pest Control"}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

