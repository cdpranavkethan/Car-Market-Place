import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/components/Home"

export default function App() {
  return (
    <Router>
    <div className="flex min-h-[100dvh] flex-col">
        <Navbar />
      <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </main>
        <Footer />
                </div>
    </Router>
  )
}
