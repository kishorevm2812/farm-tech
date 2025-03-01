"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { AddPlantModal } from "@/components/add-plant-modal"

export function PlantHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Plants</h1>
          <p className="text-muted-foreground">Manage your plant inventory</p>
        </div>
        <Button size="sm" onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Plant
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search plants..." className="pl-8" />
      </div>
      <AddPlantModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

