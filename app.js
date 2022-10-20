// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

//Requerimos nuestros archivos de rutas
const indexRouter = require('./routes/index');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(express.static(path.join(__dirname, "public"))); //definimos carpeta donde estan nuestros recursos estaticos
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false })); //define la forma que nos llega la info de los formularios, va siempre
app.use(express.json());

app.use(session({
    secret: "El mensaje secreto",
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

app.use(userLoggedMiddleware);

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./views"));
//Rutas van siempre al final
app.use('/', indexRouter); // Rutas para el main
app.use('/productos', productRouter); // Rutas referidas a productos
app.use('/user', userRouter); // Rutas referidas a usuarios

// ERROR 404 - comentado para poder trabajar con errores de formularios
app.use((req, res, next)=> {
    res.status(404).render('not-found')
})

app.listen(3000, () =>{
    console.log("Serving on port 3000!   http://localhost:3000/");
})




