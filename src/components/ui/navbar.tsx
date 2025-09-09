import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Globe, Bell } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "ES", "FR", "PT"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
            src="ResQ.png"
            alt="ResQ Logo"
            className="h-14 w-auto object-contain"
            />
            <span className="text-sm text-muted-foreground hidden sm:block">Emergency Response</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm">Dashboard</Button>
            <Button variant="ghost" size="sm">Reports</Button>
            <Button variant="ghost" size="sm">Analytics</Button>
            <Button variant="ghost" size="sm">Alerts</Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentIndex = languages.indexOf(language);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setLanguage(languages[nextIndex]);
                }}
                className="flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emergency rounded-full animate-emergency-pulse" />
            </Button>

            {/* Profile */}
            <Button variant="default" size="sm" className="bg-ocean-gradient hover:opacity-90">
              Login
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">Dashboard</Button>
              <Button variant="ghost" className="justify-start">Reports</Button>
              <Button variant="ghost" className="justify-start">Analytics</Button>
              <Button variant="ghost" className="justify-start">Alerts</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}