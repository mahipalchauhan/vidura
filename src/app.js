import express from "express"
import cors from "cors"
import cookieParser  from "cookie-parser"

const app=express()

app.use(cookieParser)  //use cilent cookies and perform crud operations

app.use(cors({
    origin:process.env.CORS_ORIGIN,
credentials:true,
}))

app.use(express.json({limit:"16kb"}))  //for parsing application/json
app.use(express.urlencoded({extended:true,limit:"16kb"})) // for parsing url/json 
app.use(express.static("public"))


app.get('/',(req,res)=>{

})


export {app}

