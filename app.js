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

//const mainRouter = require('./routes/index'); // Rutas main
const loginRouter = require('./routes/loginRoutes'); // Rutas /login
const registerRouter = require('./routes/registerRoutes'); // Rutas /register
const recoverPassRouter = require('./routes/recoverPassRoutes'); // Rutas /recoverPassword

//app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/recoverPassword', recoverPassRouter);

app.listen(3000, (req, res)=>{
    console.log("Server running on port 3000");
});

// ************ exports app ************
module.exports = app;

app.get("/", (req, res) => {
    res.render(path.resolve(__dirname, ("./views/index.html")));
});

app.get("/productCart", (req,res)=>{
    res.render(__dirname + "/views/productCart.html");
});

app.get("/productDetail",(req,res)=>{
    res.render(__dirname + "/views/productDetail.html");
});

app.get("/recoverPassword",(req,res)=>{
    res.render(__dirname + "/views/recoverPassword.html");
});

app.get("/headerFooter",(req,res)=>{
    res.render(__dirname + "/views/headerFooter.html");
});

