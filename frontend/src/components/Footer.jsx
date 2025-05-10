import { Button } from "@/components/ui/button"
import carImage from "../images/website-logo.webp"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 font-bold">
            <img src={carImage} alt="Car Logo" className="w-20 h-23" />
            <span>CARS24</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 CARS24. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 