console.log("server ready!");
const express=require('express');
const app=express(); 
const path=require('path');
const errorController=require('./controllers/error');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','views');
const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
// const { ppid } = require('process');
app.use(express.static(path.join(__dirname,'/public')));

app.use(shopRouter);
app.use(adminRouter);
app.use(errorController.get404);

app.listen(3000);