const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const connection = require('./public/scripts/dbcon.js');
app.use(express.static('./public'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/index.html'));
})

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/index.html'));
})

app.get('/inseriralunos', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/inseriralunos.html'));
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/login.html'));
})

app.get('/consultaalunos', function(req, res) {
    res.sendFile(path.join(__dirname, './public/view/consultaalunos.html'));
})

/*
app.get('/:nome', function(req, res) {
    res.send('Hello ' + req.params.nome);
})*/

app.get('/navbar', function(req, res) {
    res.sendFile(path.join(__dirname, './public/navbar/navbar.html'));
})

app.get('/cb', function(req, res) {
    connection.query('SELECT * FROM turmas', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else {
            console.log(result) //formato json
            res.json(result)
        }
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})