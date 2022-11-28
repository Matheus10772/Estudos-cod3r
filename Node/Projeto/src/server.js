const porta = 3003;
const express = require('express');
const app = express();
const dataBase = require('./dataBase');
const bodyParser = require('body-parser');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, resp, next) => {
    console.log("midllware 1");
    next();
});

app.get('/produtos', (req, resp, next) => {
    resp.send(dataBase.getProdutos());
});

app.get('/produto/:id', (req, resp, next) => {
    resp.send(dataBase.getProduto(req.params.id));
});

app.post('/produto', (req, resp, next) => {
    dataBase.salvarProduto({
        name: req.body.nome,
        price: req.body.preco,
        size: req.body.quantidade
    });

    resp.send("Sucesso");
});

app.listen(porta, () => {
    console.log('Funciona');
});