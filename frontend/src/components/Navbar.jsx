import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import carImage from "../images/website-logo.webp"
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className={`sticky top-4 z-50 w-full transition-all duration-300 px-4`}>
      <div
        className={`container mx-auto rounded-full backdrop-blur-lg ${
          isScrolled ? "bg-background/80 shadow-md" : "bg-background/30"
        } h-16 flex items-center justify-between px-6`}
      >
        <div className="flex items-center gap-2 font-bold">
            <img src={carImage} alt="Car Logo" className="w-20 h-23" />
            <span>CARS24</span>
          </div>
        <nav className="hidden md:flex gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Log in
          </a>
          <Button className="rounded-full">
            Get Started
            <ChevronRight className="ml-1 size-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 inset-x-4 bg-background/95 backdrop-blur-lg border rounded-xl shadow-lg"
        >
          <div className="py-4 px-6 flex flex-col gap-4">
            <a href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <a href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Log in
              </a>
              <Button className="rounded-full">
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
} 