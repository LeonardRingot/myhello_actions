import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon'));

app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005 OUIIIIIIIIII  "));