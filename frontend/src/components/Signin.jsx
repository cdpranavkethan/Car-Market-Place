import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import carImage from "../images/website-logo.webp"
import googleLogo from "../images/google Logo.png"
import { motion } from "framer-motion"
import {useNavigate} from "react-router-dom"



const Signin = () => {

    const [formData,setFormData]=useState({})
    const navigate= useNavigate()
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const res=await fetch('/api/auth/signin',{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data=await res.json()
            console.log(data)
            if(data.success===true && data.token){
                localStorage.setItem('access_token', data.token)
                navigate('/')
            }
            
        }catch(err){
            console.log("server error")
        }
    }


    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-background -mt-20">
            <div className="flex flex-col items-center font-bold hover:opacity-80 transition-opacity">
                <Link to="/" className="flex items-center gap-2">
                    <img src={carImage} alt="Car Logo" className="h-28 w-auto"/>
                </Link>
                <h1 className="text-2xl font-bold">Sign in</h1>
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <CardContent className="w-full bg-card rounded-2xl p-8 shadow-lg bg-[#191919] flex flex-col gap-6">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input 
                                id="email" 
                                name="email"
                                type="email" 
                                placeholder="Enter your email"
                                required 
                                className="w-full h-10 text-sm"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <Input 
                                id="password" 
                                name="password"
                                type="password" 
                                placeholder="Enter your password"
                                required 
                                className="w-full h-10 text-sm"
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" className="w-full h-10 text-base mt-2">Continue</Button>
                    </form>

                    <div className="flex items-center gap-2 my-2">
                        <div className="flex-1 h-px bg-muted-foreground/30" />
                        <span className="text-xs text-muted-foreground">or</span>
                        <div className="flex-1 h-px bg-muted-foreground/30" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                            <img src={googleLogo} alt="Google Logo" className="h-5 w-5" /> Continue with Google
                        </Button>
                    </div>

                    <div className="mt-2 text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </motion.div>    
        </div>
    )
}

export default Signin;