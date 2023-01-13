import express from "express";

const app = express()
app.get('/docker',(req,res)=>res.send('DOCKER'));
app.get('/hello', (req, res) => res.send('Hello Simplona'));

app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005"));