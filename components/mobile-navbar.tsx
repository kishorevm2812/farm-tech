"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Leaf, Cog, Users, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/plants",
      label: "Plants",
      icon: Leaf,
      active: pathname.startsWith("/plants"),
    },
    {
      href: "/automation",
      label: "Automation",
      icon: Cog,
      active: pathname.startsWith("/automation"),
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      active: pathname.startsWith("/community"),
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                  <span className="font-bold">Eco Farm</span>
                </Link>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 px-7 py-2 text-sm ${
                      route.active ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 ml-4 md:ml-0">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-bold hidden md:inline-block">Eco Farm</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 mx-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  route.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
        <div className="grid grid-cols-4 h-16">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex flex-col items-center justify-center gap-1 ${
                route.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <route.icon className="h-5 w-5" />
              <span className="text-xs">{route.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

