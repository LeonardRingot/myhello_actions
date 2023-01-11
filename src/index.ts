import express from "express";

const app = express()

app.get('/helloleo', (req, res) => res.send('Aucune idée si ca fonctionne'));
app.get('/docker', (req, res) => res.send('Hello test '));
app.listen(3005, ()=> console.log("je suis leonard ringot sur le port 3005 et zéé partiiiiiii  "));