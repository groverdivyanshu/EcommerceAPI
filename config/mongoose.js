const mongoose=require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect("mongodb://127.0.0.1/EcommerceAPI");

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',
    function(){
        console.log('connect to databse');
    })
 module.exports=db;