import { PlantHeader } from "@/components/plant-header"
import { PlantGrid } from "@/components/plant-grid"

export default function PlantsPage() {
  return (
    <div className="space-y-6 py-4">
      <PlantHeader />
      <PlantGrid />
    </div>
  )
}

