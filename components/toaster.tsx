"use client"

import { useToast } from "@/components/ui/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts, dismissToast } = useToast()

  if (!toasts.length) return null

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-2 w-full max-w-sm">
      {toasts.map((toast) => (
        <div key={toast.id} className="bg-background border rounded-lg shadow-lg p-4 flex items-start gap-3">
          <div className="flex-1">
            {toast.title && <div className="font-medium">{toast.title}</div>}
            {toast.description && <div className="text-sm text-muted-foreground">{toast.description}</div>}
          </div>
          <button onClick={() => dismissToast(toast.id)} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}

