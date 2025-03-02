"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { AddPostModal } from "./add-post-modal"

export function CommunityHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePostSubmit = (post: {
    title: string
    content: string
    category: string
    image: File | null
  }) => {
    // Here you would typically send the data to your backend
    console.log("New post:", post)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">Connect with other urban farmers</p>
        </div>
        <Button
          size="sm"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search community posts..." className="pl-8" />
      </div>
      <AddPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostSubmit}
      />
    </div>
  )
}

