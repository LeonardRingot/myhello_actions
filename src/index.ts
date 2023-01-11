import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon'));
app.get('/docker', (req, res) => res.send('Hello test '));
app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005 et zéé partiiiiiii  "));