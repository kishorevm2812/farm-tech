"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type Toast = {
  id: string
  title?: string
  description?: string
  duration?: number
}

type ToastContextType = {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])

    if (toast.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration || 3000)
    }
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return {
    toast: (props: Omit<Toast, "id">) => {
      context.addToast(props)
    },
    toasts: context.toasts,
    dismissToast: context.removeToast,
  }
}

