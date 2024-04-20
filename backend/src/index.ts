import express,{Request,Response} from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import userRoutes from "./routes/user"
import authRoutes from "./routes/auth"
import cookieParser from "cookie-parser";
import path from 'path'
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string).then(()=>{
    console.log("mongo connected")
}).catch((error)=>{
    console.log("not connected",error)
})
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.FRONTNED_URL,
    credentials:true,
}))
app.use(express.static(path.join(__dirname,"../../frontend/dist")))
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

app.listen(7000,()=>{
    console.log('server running on loclahost 7000')
})


// pass123