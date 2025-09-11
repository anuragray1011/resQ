import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { HazardMap } from "@/components/dashboard/HazardMap";
import { SocialMediaFeed } from "@/components/dashboard/SocialMediaFeed";
import { ReportForm } from "@/components/dashboard/ReportForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Map, 
  MessageSquare, 
  FileText, 
  Brain, 
  Globe,
  AlertTriangle,
  TrendingUp,
  Users
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  ResQ Command Center
                </h1>
                <p className="text-muted-foreground">
                  Real-time coastal hazard monitoring and emergency response coordination
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Multi-Language
                </Button>
                <Button className="bg-emergency-gradient hover:opacity-90 shadow-emergency">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Emergency Alert
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mb-8">
            <StatsOverview />
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map className="w-4 h-4" />
                <span className="hidden sm:inline">Live Map</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Social Feed</span>
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Reports</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">AI Insights</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <HazardMap />
                </div>
                
                {/* Report Form */}
                <div className="space-y-6">
                  <ReportForm />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="map" className="space-y-6">
              <HazardMap />
            </TabsContent>

            <TabsContent value="social" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <SocialMediaFeed />
                </div>
                <div className="space-y-4">
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Trending Keywords
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { word: "tsunami", count: 247, trend: "up" },
                          { word: "flooding", count: 156, trend: "up" },
                          { word: "evacuation", count: 89, trend: "neutral" },
                          { word: "emergency", count: 67, trend: "down" }
                        ].map((item) => (
                          <div key={item.word} className="flex items-center justify-between">
                            <span className="text-sm">{item.word}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{item.count}</span>
                              <div className={`w-2 h-2 rounded-full ${
                                item.trend === "up" ? "bg-emergency" : 
                                item.trend === "down" ? "bg-safe" : "bg-muted"
                              }`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Sentiment Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Negative</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="w-3/4 h-full bg-emergency rounded-full" />
                            </div>
                            <span className="text-xs text-muted-foreground">75%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Neutral</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="w-1/5 h-full bg-yellow-500 rounded-full" />
                            </div>
                            <span className="text-xs text-muted-foreground">20%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Positive</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="w-1/20 h-full bg-safe rounded-full" />
                            </div>
                            <span className="text-xs text-muted-foreground">5%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ReportForm />
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: "1",
                          title: "Tsunami warning observed",
                          location: "Kerala",
                          time: "2 min ago",
                          severity: "critical"
                        },
                        {
                          id: "2",
                          title: "Street flooding reported",
                          location: "Punjab",
                          time: "15 min ago",
                          severity: "medium"
                        },
                        {
                          id: "3",
                          title: "Strong winds and debris",
                          location: "Odisha",
                          time: "1 hour ago",
                          severity: "high"
                        }
                      ].map((report) => (
                        <div key={report.id} className="border rounded-lg p-3 hover:shadow-md transition-all">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium text-sm">{report.title}</h4>
                              <p className="text-xs text-muted-foreground">{report.location}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-xs text-muted-foreground">{report.time}</span>
                              <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                                report.severity === "critical" ? "bg-destructive/20 text-destructive" :
                                report.severity === "high" ? "bg-emergency/20 text-emergency" :
                                "bg-yellow-500/20 text-yellow-700"
                              }`}>
                                {report.severity}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      AI Threat Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-emergency/10 border border-emergency/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-5 h-5 text-emergency" />
                          <span className="font-semibold text-emergency">High Risk Detected</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          AI analysis indicates 89% probability of significant tsunami impact based on 
                          social media reports, seismic data, and historical patterns.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Risk Factors:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Rapid water recession reported (95% confidence)</li>
                          <li>• Unusual wave patterns detected (87% confidence)</li>
                          <li>• High social media alert volume (234% above normal)</li>
                          <li>• Seismic activity correlation (72% match)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Response Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { action: "Issue immediate evacuation alert", priority: "critical" },
                        { action: "Deploy emergency response teams", priority: "high" },
                        { action: "Activate emergency shelters", priority: "high" },
                        { action: "Coordinate with media outlets", priority: "medium" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">{item.action}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.priority === "critical" ? "bg-destructive/20 text-destructive" :
                            item.priority === "high" ? "bg-emergency/20 text-emergency" :
                            "bg-yellow-500/20 text-yellow-700"
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}