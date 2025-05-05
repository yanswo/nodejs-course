// O endereço desse servidor conectado a internet é:
// URL -> http://localhost:8383
// O servidor em IP é 127.0.0.1:8383

const express = require("express");
const app = express();
const PORT = 8383;

let data = ["yan"];

// Middleware
app.use(express.json());

// HTTP Verbs e os Routes
// Este metodo informa que a natureza do Request e da rotas é um subdirectório,
// ou seja, ele direciona o Request do corpo do codigo pra responder apropriadamente as rotas, isso se chama endpoint

// Type 1 - Website endpoints
app.get("/", (req, res) => {
  res.send(`
    <body style="background-color: #f0f0f0; font-family: Arial, sans-serif; padding: 20px;"> 
        <h1 style="color: #333;">Dados: </h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
    </body>
    `);
});
// endpoint GET, DELETE, PUT, POST, são os mais padronizados
app.get("/dashboard", (req, res) => {
  res.send(`
    <body style="background-color: #f0f0f0; font-family: Arial, sans-serif; padding: 20px;"> 
        <h1 style="color: #333;">Dashboard</h1>
        <a href="/">Inicio</a>
    </body>
    `);
});

// Type 2 - API endpoints

// CRUD - Create = Post, Read = Get, Update = Put, Delete = Delete
app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newData = req.body; // O body é o corpo do request, ou seja, o que vem dentro do request
  console.log(newData); // O que vem dentro do request é o que foi enviado pelo cliente, ou seja, o que foi enviado pelo front-end
  res.sendStatus(201); // CREATED

  data.push(newData.name);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("Deletamos o último elemento do array");
  res.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
