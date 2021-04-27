// ************ Require's ************
const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const methodOverride =  require('method-override');

// ************ express() ************
const app = express();

app.use(cookies());

const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(userLoggedMiddleware);

// ************ Middleware ************
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ************ Template Engine ************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);

const recoverPassRouter = require(path.join(__dirname,'./routes/recoverPassRoutes'));
const productCartRouter = require(path.join(__dirname, './routes/productCart'));
const productDetailRouter = require(path.join(__dirname, './routes/productDetail'));
const productCreateRouter = require(path.join(__dirname, './routes/productCreate'));
const productEditRouter = require(path.join(__dirname, './routes/productEdit'));
const productsRouter = require(path.join(__dirname, './routes/products'));
const indexRouter = require(path.join(__dirname, './routes/indexRoutes'));
const userRouter = require(path.join(__dirname, './routes/userRoutes'));
const userRoleRouter = require(path.join(__dirname, '/routes/userRoleRoutes'));
const menuRouter = require(path.join(__dirname, './routes/menus'));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/users/roles', userRoleRouter);
app.use('/recoverPassword', recoverPassRouter);
app.use('/productCart', productCartRouter);
app.use('/productDetail', productDetailRouter);
app.use('/productCreate', productCreateRouter);
app.use('/productEdit', productEditRouter);
app.use('/products', productsRouter);
app.use('/menus', menuRouter);


app.listen(3000, (req, res)=>{
    console.log("Server running on port 3000");
});

app.get("/headerFooter",(req,res)=>{
    res.render(__dirname + "/views/headerFooter.html");
});

// ************ exports app ************
module.exports = app;
