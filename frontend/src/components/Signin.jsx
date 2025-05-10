import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import carImage from "../images/website-logo.webp"

const Signin = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-background -mt-20">
            <div className="flex flex-col items-center font-bold hover:opacity-80 transition-opacity">
                <div className="flex items-center gap-2">
                    <img src={carImage} alt="Car Logo" className="w-16 h-20"/>
                </div>
                <h1 className="text-2xl font-bold mt-2">Sign in</h1>
            </div>
            <CardContent className="w-full max-w-md bg-card rounded-lg p-8 shadow-lg bg-[#191919]">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            placeholder="Enter your email"
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <Input 
                            id="password" 
                            name="password"
                            type="password" 
                            placeholder="Enter your password"
                            required 
                        />
                    </div>
                    <Button type="submit" className="w-full">Sign in</Button>
                </form>

                <div className="mt-6 text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>            
        </div>
    )
}

export default Signin;