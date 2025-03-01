"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export function CommunityHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">Connect with other urban farmers</p>
        </div>
        <Button
          size="sm"
          onClick={() => {
            // This is a placeholder function. In a real app, you'd open a modal or navigate to a new page.
            alert("New Post functionality will be implemented here")
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search community posts..." className="pl-8" />
      </div>
    </div>
  )
}

