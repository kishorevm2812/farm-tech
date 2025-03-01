import { CommunityHeader } from "@/components/community-header"
import { CommunityTabs } from "@/components/community-tabs"

export default function CommunityPage() {
  return (
    <div className="space-y-6 py-4">
      <CommunityHeader />
      <CommunityTabs />
    </div>
  )
}

