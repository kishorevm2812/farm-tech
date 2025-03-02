"use client"

import { useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface AddPlantModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (plant: Omit<Plant, "id">) => void
}

export function AddPlantModal({ isOpen, onClose, onSubmit }: AddPlantModalProps) {
  const [plantName, setPlantName] = useState("")
  const [plantVariety, setPlantVariety] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = () => {
    if (!plantName || !plantVariety) {
      alert("Please fill in all required fields")
      return
    }

    onSubmit({
      name: plantName,
      variety: plantVariety,
      image: previewUrl || "/placeholder.svg",
      status: "healthy",
      growthStage: "seedling",
      daysPlanted: 0,
      waterNeeds: "medium"
    })

    setPlantName("")
    setPlantVariety("")
    setSelectedImage(null)
    setPreviewUrl(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Plant</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="plant-name" className="text-right">
              Name
            </Label>
            <Input
              id="plant-name"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="plant-variety" className="text-right">
              Variety
            </Label>
            <Input
              id="plant-variety"
              value={plantVariety}
              onChange={(e) => setPlantVariety(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="plant-image" className="text-right">
              Image
            </Label>
            <div className="col-span-3">
              <Input id="plant-image" type="file" accept="image/*" onChange={handleImageChange} />
              {previewUrl && (
                <img
                  src={previewUrl || "/placeholder.svg"}
                  alt="Plant preview"
                  className="mt-2 max-w-full h-auto max-h-40 object-contain"
                />
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit}>
            Add Plant
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

