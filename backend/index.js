import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import cors from 'cors'

dotenv.config()


const mongodbURL=process.env.mongodbURL;
mongoose.connect(mongodbURL)
.then(()=>{console.log("connected to mongoDB")})
.catch((err)=>{console.log("mongodb connection error",err.message)})

const app=express();
app.use(cors())

app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log(`server is running in port : ${process.env.PORT}`)
})

app.use('/api/auth',authRouter);