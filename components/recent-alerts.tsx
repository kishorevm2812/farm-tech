import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Droplet, Thermometer, Bug, AlertTriangle } from "lucide-react"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      title: "Low Water Level",
      description: "Zone 2 moisture below 40%",
      icon: Droplet,
      iconColor: "text-blue-500",
      timestamp: "10 min ago",
      severity: "warning",
    },
    {
      id: 2,
      title: "Temperature Alert",
      description: "Temperature above optimal range",
      icon: Thermometer,
      iconColor: "text-red-500",
      timestamp: "25 min ago",
      severity: "critical",
    },
    {
      id: 3,
      title: "Possible Pest Detected",
      description: "Unusual leaf patterns in tomatoes",
      icon: Bug,
      iconColor: "text-amber-500",
      timestamp: "2 hours ago",
      severity: "warning",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <Alert key={alert.id} variant={alert.severity === "critical" ? "destructive" : "default"}>
            <alert.icon className={`h-4 w-4 ${alert.iconColor}`} />
            <AlertTitle className="text-sm font-medium">{alert.title}</AlertTitle>
            <AlertDescription className="text-xs flex justify-between">
              <span>{alert.description}</span>
              <span className="text-muted-foreground">{alert.timestamp}</span>
            </AlertDescription>
          </Alert>
        ))}
        {alerts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <AlertTriangle className="h-10 w-10 text-muted-foreground/50" />
            <p className="mt-2 text-sm text-muted-foreground">No alerts at the moment</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

