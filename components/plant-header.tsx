"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AddPlantModal } from "@/components/add-plant-modal"

interface PlantHeaderProps {
  onAddPlant: (plant: Omit<Plant, "id">) => void
}

export function PlantHeader({ onAddPlant }: PlantHeaderProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">My Plants</h1>
      <Button onClick={() => setIsAddModalOpen(true)}>Add Plant</Button>
      <AddPlantModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={onAddPlant}
      />
    </div>
  )
}

