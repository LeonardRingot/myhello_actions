import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express()
app.get('/docker',(req,res)=>res.send(process.env.ID));
app.get('/hello', (req, res) => res.send('Hello Simplona'));

app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005"));