const express = require('express');
const app = express();
const path = require("path");
const port = 3030;

app.use(express.static(path.join(__dirname, 'public')))

/* Vista Home */
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))
/* Vista Login */
app.get('/login', (req,res)=>{res.sendFile(path.join(__dirname,"views/login.html"))})
/* Vista Register */
app.get('/register', (req,res)=>{res.sendFile(path.join(__dirname,"views/register.html"))})

app.listen(port, () => console.log(`Se levantó con éxito el servidor en http://localhost:${port}`))