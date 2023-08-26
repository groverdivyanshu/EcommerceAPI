// importing required packages
const express=require('express');
const port=8000;
const routes=require('./routes/product');
const db=require('./config/mongoose');

// initializing express
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// using routes
app.use('/products',routes)

// starting the server
app.listen(port,function(err){
    if(err){
    console.log("error is cocming",err);
    return;

    };
    
console.log("server is running");
}

);