// ************ Require's ************
const express = require("express");
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const methodOverride =  require('method-override');

// ************ express() ************
const app = express();

// ************ Middleware ************
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

// ************ Template Engine ************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// Mapping the EJS template engine to ".html" files (para que poder renderizar HTMLs además de ejs)
app.engine('html', require('ejs').renderFile);

//const mainRouter = require('./routes/index'); // Rutas main
const loginRouter = require('./routes/loginRoutes'); // Rutas /login
const registerRouter = require('./routes/registerRoutes'); // Rutas /register
const recoverPassRouter = require('./routes/recoverPassRoutes'); // Rutas /recoverPassword
const productCartRouter = require(path.join(__dirname, './routes/productCart'));
const productDetailRouter = require(path.join(__dirname, './routes/productDetail'));
const productCreateRouter = require(path.join(__dirname, './routes/productCreate'));
const productEditRouter = require(path.join(__dirname, './routes/productEdit'));

//app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/recoverPassword', recoverPassRouter);
app.use('/productCart', productCartRouter);
app.use('/productDetail', productDetailRouter);
app.use('/productCreate', productCreateRouter);
app.use('/productEdit', productEditRouter);

app.listen(3000, (req, res)=>{
    console.log("Server running on port 3000");
});


app.get("/", (req, res) => {
    res.render(path.resolve(__dirname, ("./views/index.html")));
});

app.get("/recoverPassword",(req,res)=>{
    res.render(__dirname + "/views/recoverPassword.html");
});

app.get("/headerFooter",(req,res)=>{
    res.render(__dirname + "/views/headerFooter.html");
});

// ************ exports app ************
module.exports = app;
