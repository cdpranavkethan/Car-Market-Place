import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun, ChevronRight, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Link, useNavigate } from "react-router-dom"
import carImage from "../images/website-logo.webp"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    const token = localStorage.getItem('access_token')
    setLoggedIn(!!token)
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setLoggedIn(false)
    navigate('/signin')
  }

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
        <Link to="/" className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
            <img src={carImage} alt="Car Logo" className="w-20 h-23"/>
            <span>CARS24</span>
        </Link>
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
          {isLoggedIn ? (
            <div className="relative">
              <Button className="rounded-full" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                Menu
              </Button>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-background border rounded-lg shadow-lg py-2"
                >
                  <Link
                    to="/account"
                    className="flex items-center px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setUserMenuOpen(false)
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-accent"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Log in
              </Link>

            </>
          )}
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
              <Link to="/signin" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Log in
              </Link>
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