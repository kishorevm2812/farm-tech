"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnvironmentChart } from "@/components/environment-chart"
import { SoilMoistureChart } from "@/components/soil-moisture-chart"

export function DashboardWidgets() {
  const [activeTab, setActiveTab] = useState("environment")

  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Real-Time Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="environment" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="soil">Soil Moisture</TabsTrigger>
          </TabsList>
          <TabsContent value="environment" className="h-[300px]">
            <EnvironmentChart />
          </TabsContent>
          <TabsContent value="soil" className="h-[300px]">
            <SoilMoistureChart />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

