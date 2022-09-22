const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

const path = require('path');

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);

app.use((req, res, next)=> {
    res.status(404).render('not-found')
})
app.listen(3000, () =>{
    console.log('Servidor corriendo');
})



