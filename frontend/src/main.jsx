import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
