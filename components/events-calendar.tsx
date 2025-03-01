import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function EventsCalendar() {
  const events = [
    {
      id: 1,
      title: "Urban Farming Workshop",
      date: "2023-06-25",
      time: "10:00 AM - 12:00 PM",
      location: "Community Garden Center",
      description:
        "Learn the basics of urban farming, including container gardening, vertical growing, and soil management.",
      attendees: 18,
      category: "Workshop",
    },
    {
      id: 2,
      title: "Seed Swap Event",
      date: "2023-07-02",
      time: "2:00 PM - 4:00 PM",
      location: "Riverside Park Pavilion",
      description: "Bring your extra seeds to trade with other gardeners. All varieties welcome!",
      attendees: 24,
      category: "Community",
    },
    {
      id: 3,
      title: "Composting Masterclass",
      date: "2023-07-10",
      time: "6:00 PM - 7:30 PM",
      location: "Urban Ecology Center",
      description: "Expert-led session on creating and maintaining effective compost systems for urban gardens.",
      attendees: 12,
      category: "Education",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <Badge>{event.category}</Badge>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <div className="flex items-center gap-1 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{event.attendees} attending</span>
            </div>
            <Button size="sm">RSVP</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

