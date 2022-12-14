// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
var cors = require('cors')



//ruta APIS

const apiProductRouter = require('./routes/api/productRoutesApi');
const apiUserRouter = require('./routes/api/userRoutesApi');

//Requerimos nuestros archivos de rutas
const indexRouter = require('./routes/index');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');


// ************ express() - (don't touch) ************
const app = express();

//Cors

app.use(cors());

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
app.use('/api/products', apiProductRouter);
app.use('/api/users', apiUserRouter);

// ERROR 404 - comentado para poder trabajar con errores de formularios
app.use((req, res, next)=> {
    res.status(404).render('not-found')
})

app.listen(process.env.PORT || 3005, () =>{
    console.log("Serving on port 3005!   http://localhost:3005/");
})




