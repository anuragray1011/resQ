import { useState } from "react";
import { Heart, MessageCircle, Share, AlertTriangle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SocialPost {
  id: string;
  platform: "twitter" | "instagram" | "facebook";
  author: string;
  content: string;
  timestamp: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  sentiment: "positive" | "negative" | "neutral";
  hazardKeywords: string[];
  location?: string;
  verified: boolean;
}

const mockPosts: SocialPost[] = [
  {
    id: "1",
    platform: "twitter",
    author: "@coastalwatch",
    content: "Massive waves hitting the pier right now! Water is receding fast - this doesn't look normal. #tsunami #warning #LosAngeles",
    timestamp: "3 min ago",
    engagement: { likes: 156, comments: 23, shares: 89 },
    sentiment: "negative",
    hazardKeywords: ["tsunami", "waves", "warning"],
    location: "Odisha",
    verified: true
  },
  {
    id: "2",
    platform: "instagram",
    author: "beach_lover",
    content: "The water just went crazy here! Flooding everywhere on the boardwalk. Stay safe everyone! 🌊⚠️",
    timestamp: "7 min ago",
    engagement: { likes: 89, comments: 15, shares: 34 },
    sentiment: "negative",
    hazardKeywords: ["flooding", "water", "stay safe"],
    location: "Punjab",
    verified: false
  },
  {
    id: "3",
    platform: "facebook",
    author: "News Daily",
    content: "Emergency services are responding quickly to the coastal flooding. Proud of our first responders! 👏",
    timestamp: "12 min ago",
    engagement: { likes: 45, comments: 8, shares: 12 },
    sentiment: "positive",
    hazardKeywords: ["emergency", "flooding", "responders"],
    verified: false
  },
  {
    id: "4",
    platform: "twitter",
    author: "@weather_alerts",
    content: "URGENT: Tsunami warning issued for Goa. Evacuate coastal areas immediately. Official alert.",
    timestamp: "15 min ago",
    engagement: { likes: 1203, comments: 156, shares: 678 },
    sentiment: "negative",
    hazardKeywords: ["tsunami", "warning", "evacuate", "urgent"],
    verified: true
  }
];

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "twitter": return "bg-blue-500";
    case "instagram": return "bg-gradient-to-r from-purple-500 to-pink-500";
    case "facebook": return "bg-blue-600";
    default: return "bg-gray-500";
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "text-safe";
    case "negative": return "text-emergency";
    default: return "text-muted-foreground";
  }
};

export function SocialMediaFeed() {
  const [filter, setFilter] = useState<string>("all");

  const filteredPosts = mockPosts.filter(post =>
    filter === "all" || post.sentiment === filter || post.hazardKeywords.includes(filter)
  );

  return (
    <Card className="max-h-[600px] shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-1.5">
            <TrendingUp className="w-5 h-5 text-primary" />
            Social Media Monitor
          </CardTitle>
          <div className="flex gap-2">
            {["all", "urgent", "tsunami", "flooding"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterType)}
                className="capitalize"
              >
                {filterType}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto pr-2 space-y-3 max-h-[520px]">
        <div className="space-y-3 h-full overflow-y-auto pr-2">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${getPlatformColor(post.platform)}`} />
                  <span className="font-semibold text-sm">{post.author}</span>
                  {post.verified && (
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{post.timestamp}</span>
              </div>

              {/* Content */}
              <p className="text-sm mb-3 leading-relaxed">{post.content}</p>

              {/* Keywords & Location */}
              <div className="flex flex-wrap gap-1 mb-3">
                {post.hazardKeywords.map((keyword) => (
                  <Badge
                    key={keyword}
                    variant="secondary"
                    className={`text-xs ${["tsunami", "warning", "urgent", "evacuate"].includes(keyword)
                        ? "bg-emergency/20 text-emergency"
                        : "bg-primary/20 text-primary"
                      }`}
                  >
                    {keyword}
                  </Badge>
                ))}
                {post.location && (
                  <Badge variant="outline" className="text-xs">
                    📍 {post.location}
                  </Badge>
                )}
              </div>

              {/* Engagement & Sentiment */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.engagement.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.engagement.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share className="w-3 h-3" />
                    <span>{post.engagement.shares}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${getSentimentColor(post.sentiment)}`}>
                    {post.sentiment}
                  </span>
                  {post.hazardKeywords.some(keyword =>
                    ["tsunami", "warning", "urgent", "evacuate"].includes(keyword)
                  ) && (
                      <AlertTriangle className="w-4 h-4 text-emergency animate-emergency-pulse" />
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}