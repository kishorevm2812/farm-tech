import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your urban farm</p>
      </div>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
    </div>
  )
}

