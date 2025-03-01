import { AutomationHeader } from "@/components/automation-header"
import { SensorDashboard } from "@/components/sensor-dashboard"
import { AutomationSchedules } from "@/components/automation-schedules"
import { DeviceControls } from "@/components/device-controls"

export default function AutomationPage() {
  return (
    <div className="space-y-6 py-4">
      <AutomationHeader />
      <SensorDashboard />
      <DeviceControls />
      <AutomationSchedules />
    </div>
  )
}

