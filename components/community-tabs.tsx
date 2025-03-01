"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommunityForum } from "@/components/community-forum"
import { MarketplaceListing } from "@/components/marketplace-listing"
import { EventsCalendar } from "@/components/events-calendar"

export function CommunityTabs() {
  const [activeTab, setActiveTab] = useState("forum")

  return (
    <Tabs defaultValue="forum" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="forum">Forum</TabsTrigger>
        <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
      </TabsList>
      <TabsContent value="forum" className="mt-4">
        <CommunityForum />
      </TabsContent>
      <TabsContent value="marketplace" className="mt-4">
        <MarketplaceListing />
      </TabsContent>
      <TabsContent value="events" className="mt-4">
        <EventsCalendar />
      </TabsContent>
    </Tabs>
  )
}

