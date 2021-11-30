const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();
/*const connection = require('./public/scripting/dbconnection.js');
app.use(express.static('./public'));*/



app.get('/' && '/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/inseriralunos.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/inseriralunos.html'));
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/login.html'));
})

app.get('/consultaalunos.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/consultaalunos.html'));
})

/*
app.get('/:nome', function(req, res) {
    res.send('Hello ' + req.params.nome);
})*/



const port = 3002;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})