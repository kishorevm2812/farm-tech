import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp } from "lucide-react"

export function CommunityForum() {
  const posts = [
    {
      id: 1,
      title: "Growing desi tomatoes in balcony garden",
      content:
        "Namaste friends! I am growing desi tomatoes in my flat's balcony using vertical planters. Let me share some useful tips that worked wonderfully for me...",
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Growing Tips",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Natural remedies for aphids using neem",
      content:
        "Dear gardeners, my mirchi plants were troubled by aphids. I tried some desi organic solutions using neem oil and wanted to share the results with you all...",
      author: {
        name: "Rajesh Patel",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Pest Control",
      likes: 18,
      comments: 12,
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Swadeshi automated watering system",
      content:
        "Greetings! I have made a simple automated watering system using Arduino and basic components. Total cost was only Rs. 4000. Very cost-effective solution...",
      author: {
        name: "Arjun Mehta",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "DIY Projects",
      likes: 42,
      comments: 15,
      time: "1 day ago",
    },
  ]

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-xs text-muted-foreground">{post.time}</div>
                </div>
              </div>
              <Badge variant="outline">{post.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-medium mb-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.content}</p>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-4 w-4 mr-2" />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              {post.comments}
            </Button>
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

