// ************ Require's ************

const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

//Requerimos nuestros archivos de rutas
const indexRouter = require('./routes/index');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************

app.use(express.static(path.join(__dirname, "public"))); //definimos carpeta donde estan nuestros recursos estaticos
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false })); //define la forma que nos llega la info de los formularios, va siempre
app.use(express.json());

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./views"));
//Rutas van siempre al final
app.use('/', indexRouter); // Rutas para el main
app.use('/productos', productRouter); // Rutas referidas a productos
app.use('/users', userRouter); // Rutas referidas a usuarios

app.use((req, res, next)=> {
    res.status(404).render('not-found')
})

app.listen(3000, () =>{
    console.log('Servidor corriendo');
})




