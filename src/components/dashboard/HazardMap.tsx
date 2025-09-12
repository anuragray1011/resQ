import { useState } from "react";
import { MapPin, AlertTriangle, Camera, MessageSquare, Waves, Wind, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Chatbot from "../Chatbot";
// import Chatbot from "@/components/Chatbot"; // <-- make sure you import your chatbot

interface HazardReport {
  id: string;
  type: "tsunami" | "hurricane" | "flooding" | "coastal_erosion";
  severity: "low" | "medium" | "high" | "critical";
  location: { lat: number; lng: number };
  title: string;
  description: string;
  timestamp: string;
  hasMedia: boolean;
  verificationStatus: "pending" | "verified" | "false_alarm";
  socialMentions: number;
}

const mockReports: HazardReport[] = [
  {
    id: "1",
    type: "tsunami",
    severity: "critical",
    location: { lat: 33.7, lng: -118.2 },
    title: "Unusual wave patterns observed",
    description: "Large waves approaching shore, water receding rapidly",
    timestamp: "2 minutes ago",
    hasMedia: true,
    verificationStatus: "verified",
    socialMentions: 247
  },
  {
    id: "2",
    type: "flooding",
    severity: "medium",
    location: { lat: 33.6, lng: -118.1 },
    title: "Street flooding in downtown area",
    description: "Water level rising on Main Street",
    timestamp: "15 minutes ago",
    hasMedia: true,
    verificationStatus: "verified",
    socialMentions: 89
  },
  {
    id: "3",
    type: "hurricane",
    severity: "high",
    location: { lat: 33.8, lng: -118.3 },
    title: "Strong winds and debris",
    description: "Hurricane-force winds causing damage",
    timestamp: "1 hour ago",
    hasMedia: false,
    verificationStatus: "pending",
    socialMentions: 156
  }
];

const getHazardIcon = (type: string) => {
  switch (type) {
    case "tsunami": return Waves;
    case "hurricane": return Wind;
    case "flooding": return Cloud;
    default: return AlertTriangle;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical": return "bg-destructive text-destructive-foreground border-destructive";
    case "high": return "bg-emergency text-emergency-foreground border-emergency";
    case "medium": return "bg-yellow-500 text-white border-yellow-500";
    case "low": return "bg-safe text-safe-foreground border-safe";
    default: return "bg-muted text-muted-foreground border-border";
  }
};

export function HazardMap() {
  const [selectedReport, setSelectedReport] = useState<HazardReport | null>(null);
  const [filter, setFilter] = useState<string>("all");

  return (
    <div className="space-y-6">
      {/* ================= Map Section ================= */}
      <div className="relative h-[600px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-card">
        
        {/* Map Grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute border-b border-gray-300"
              style={{ top: `${i * 5}%`, width: "100%" }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute border-r border-gray-300"
              style={{ left: `${i * 5}%`, height: "100%" }}
            />
          ))}
        </div>

        {/* Filter Controls */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex flex-wrap gap-2">
            {["all", "tsunami", "hurricane", "flooding", "coastal_erosion"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterType)}
                className="capitalize"
              >
                {filterType === "all" ? "All Reports" : filterType.replace("_", " ")}
              </Button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="absolute top-4 right-4 z-10">
          <Card className="p-3 bg-card/95 backdrop-blur-sm">
            <h4 className="font-semibold text-sm mb-2">Severity Levels</h4>
            <div className="space-y-1">
              {[
                { level: "Critical", color: "bg-destructive" },
                { level: "High", color: "bg-emergency" },
                { level: "Medium", color: "bg-yellow-500" },
                { level: "Low", color: "bg-safe" }
              ].map(({ level, color }) => (
                <div key={level} className="flex items-center gap-2 text-xs">
                  <div className={`w-3 h-3 rounded-full ${color}`} />
                  <span>{level}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Hazard Reports */}
        {mockReports.map((report) => {
          const Icon = getHazardIcon(report.type);
          return (
            <div
              key={report.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{
                left: `${((report.location.lng + 118.3) / 0.3) * 100}%`,
                top: `${(1 - (report.location.lat - 33.5) / 0.4) * 100}%`
              }}
              onClick={() => setSelectedReport(report)}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center shadow-lg
                animate-pulse-glow transition-transform hover:scale-110
                ${getSeverityColor(report.severity)}
              `}>
                <Icon className="w-4 h-4" />
              </div>
              {report.severity === "critical" && (
                <div className="absolute inset-0 w-8 h-8 rounded-full animate-emergency-pulse" />
              )}
            </div>
          );
        })}

        {/* Selected Report Panel */}
        {selectedReport && (
          <div className="absolute bottom-4 left-4 right-4 z-30">
            <Card className="p-4 bg-card/95 backdrop-blur-sm animate-slide-up">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {(() => {
                    const Icon = getHazardIcon(selectedReport.type);
                    return <Icon className="w-5 h-5 text-primary" />;
                  })()}
                  <h3 className="font-semibold">{selectedReport.title}</h3>
                  <span className={`
                    px-2 py-1 rounded-full text-xs font-medium
                    ${getSeverityColor(selectedReport.severity)}
                  `}>
                    {selectedReport.severity}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedReport(null)}
                >
                  ×
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{selectedReport.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>{selectedReport.timestamp}</span>
                  {selectedReport.hasMedia && (
                    <div className="flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      <span>Media attached</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>{selectedReport.socialMentions} mentions</span>
                  </div>
                </div>
                <span className={`
                  px-2 py-1 rounded-full text-xs
                  ${selectedReport.verificationStatus === "verified" 
                    ? "bg-safe/20 text-safe" 
                    : "bg-yellow-500/20 text-yellow-700"}
                `}>
                  {selectedReport.verificationStatus}
                </span>
              </div>
            </Card>
          </div>
        )}

        {/* Hotspot Indicators */}
        <div className="absolute bottom-20 right-4 z-10">
          <Card className="p-3 bg-card/95 backdrop-blur-sm">
            <h4 className="font-semibold text-sm mb-2">Active Hotspots</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-destructive rounded-full animate-emergency-pulse" />
                <span>Downtown Coast (3 reports)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-emergency rounded-full animate-pulse-glow" />
                <span>Marina District (2 reports)</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/*Chatbot Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
        <Chatbot/>
      </div>
    </div>
  );
}
