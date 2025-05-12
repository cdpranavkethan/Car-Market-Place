import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/components/Home"
import Signin from "@/components/Signin"
import SignUp from "@/components/SignUp"
import Account from "@/components/Account"
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {!isLoginPage && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
      <Toaster />
    </div>
  )
}