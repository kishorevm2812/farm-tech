import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Droplet, Sun, Leaf } from "lucide-react"

export function PlantCareHistory({ plantId }: { plantId: string }) {
  // In a real app, you would fetch this data from an API based on plantId
  const careHistory = [
    {
      id: 1,
      date: "2023-06-15",
      action: "watering",
      details: "500ml water added",
      icon: Droplet,
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      date: "2023-06-13",
      action: "fertilizing",
      details: "Organic fertilizer applied",
      icon: Leaf,
      iconColor: "text-green-500",
    },
    {
      id: 3,
      date: "2023-06-10",
      action: "pruning",
      details: "Removed 3 yellow leaves",
      icon: Leaf,
      iconColor: "text-green-500",
    },
    {
      id: 4,
      date: "2023-06-08",
      action: "watering",
      details: "400ml water added",
      icon: Droplet,
      iconColor: "text-blue-500",
    },
    {
      id: 5,
      date: "2023-06-05",
      action: "light adjustment",
      details: "Moved to sunnier location",
      icon: Sun,
      iconColor: "text-yellow-500",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Care History</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {careHistory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{formatDate(item.date)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                  <span className="capitalize">{item.action}</span>
                </div>
              </TableCell>
              <TableCell>{item.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

