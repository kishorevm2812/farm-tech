"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export function PlantNotes({ plantId }: { plantId: string }) {
  // In a real app, you would fetch this data from an API based on plantId
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: "2023-06-14",
      content: "Plant is growing well. Noticed first flowers appearing today.",
    },
    {
      id: 2,
      date: "2023-06-07",
      content: "Transplanted to a larger pot. Added fresh potting soil with extra perlite for drainage.",
    },
  ])

  const [newNote, setNewNote] = useState("")

  const handleAddNote = () => {
    if (newNote.trim()) {
      const today = new Date().toISOString().split("T")[0]
      setNotes([
        {
          id: Date.now(),
          date: today,
          content: newNote.trim(),
        },
        ...notes,
      ])
      setNewNote("")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="min-h-[100px]"
        />
        <Button onClick={handleAddNote} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Note
        </Button>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="border rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">{formatDate(note.date)}</div>
            <p className="text-sm whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}

        {notes.length === 0 && (
          <div className="text-center py-6 text-muted-foreground">No notes yet. Add your first note above.</div>
        )}
      </div>
    </div>
  )
}

