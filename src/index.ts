import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Aucune idée si ca fonctionne'));

app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005"));