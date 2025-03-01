import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileNavbar } from "@/components/mobile-navbar"
import { ToastProvider } from "@/components/use-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eco-Friendly Urban Farming Assistant",
  description: "Mobile app for managing your urban farm",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ToastProvider>
            <div className="flex flex-col min-h-screen">
              <MobileNavbar />
              <main className="flex-1 container pb-16">{children}</main>
            </div>
            <Toaster />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

