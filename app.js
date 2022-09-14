const express = require('express');

var indexRouter = require('./routes/index');

const app = express();

const path = require('path');

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);

app.listen(3000, () =>{
    console.log('Servidor corriendo');
})

app.get('/', (req,res) =>{
    res.render('home');
})

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.get('/carrito', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/carrito.html'));
})

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
})


