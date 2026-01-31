const express = require('express'); //1. Importa o express
const app = express(); //2.Inicia o app
const port = 3000; //Define a porta

//3. Manda o servidor  rodar
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});