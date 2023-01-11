import express from "express";
require('dotenv');

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon 1'));
app.get('/test', (req, res) => res.send('Hello Docker ' + process.env.id));
app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005"));