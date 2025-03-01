import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardWidgets } from "@/components/dashboard-widgets"
import { QuickActions } from "@/components/quick-actions"
import { RecentAlerts } from "@/components/recent-alerts"
import { FarmSummary } from "@/components/farm-summary"

export default function Dashboard() {
  return (
    <div className="space-y-6 py-4">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <DashboardWidgets />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <RecentAlerts />
        </div>
      </div>
      <FarmSummary />
    </div>
  )
}

