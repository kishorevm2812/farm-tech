"use client"

import { useRef } from "react"
import { PlantHeader } from "@/components/plant-header"
import { PlantGrid } from "@/components/plant-grid"

export default function PlantsPage() {
  const plantGridRef = useRef<{ addPlant: (plant: Omit<Plant, "id">) => void } | null>(null)

  const handleAddPlant = (plant: Omit<Plant, "id">) => {
    if (plantGridRef.current) {
      plantGridRef.current.addPlant(plant)
    }
  }

  return (
    <div className="space-y-6 py-4">
      <PlantHeader onAddPlant={handleAddPlant} />
      <PlantGrid ref={plantGridRef} />
    </div>
  )
}

