const userRoutes = require("./src/routes/userRoutes"); // como se fosse importação de biblioteca
const bookRoutes = require("./src/routes/bookRoutes");
require('dotenv').config()
const connectDB = require("./database");
const express = require("express"); // como se fosse importação de biblioteca
const app = express(); // instanciando o app, uma propriedade que cria o servidor


const port = process.env.PORT; //criando rota

connectDB();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/book", bookRoutes);


// Retorno da porta que o servidor está rodando
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

