"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function AutomationHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Automation</h1>
        <p className="text-muted-foreground">Monitor and control your farm systems</p>
      </div>
      <Button
        size="sm"
        onClick={() => {
          // This is a placeholder function. In a real app, you'd open a modal or navigate to a new page.
          alert("New Schedule functionality will be implemented here")
        }}
      >
        <Plus className="h-4 w-4 mr-2" />
        New Schedule
      </Button>
    </div>
  )
}

