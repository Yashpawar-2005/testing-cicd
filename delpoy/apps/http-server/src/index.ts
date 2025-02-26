import express from 'express';
import {client} from '@repo/db/client'
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hi");
})
app.post("/signup",async(req,res)=>{
type jus={
    username:string,
    password:string
}
const {username,password}:jus=req.body();
const tem=await client.user.create({
    data:{
        username,
        password
    }
}
)
res.json({
    message:"signup working",
    id:tem.id
})
})
app.listen(3001);