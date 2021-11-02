const { response } = require("express");
const mongoose=require("mongoose");
const express= require("express");
const app=express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const morgan=require("morgan");


app.use(morgan('tiny'));


require("dotenv/config");


const Products = require('./allProductPaths/product')
const user=require('./allProductPaths/user')
const order=require('./allProductPaths/order')
const categories=require('./allProductPaths/catergory')
const api=process.env.API_URL;

app.use(`${api}/products`, Products)
app.use(`${api}/products`, user)
app.use(`${api}/products`, order)
app.use(`${api}/products`, categories)






mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{console.log('connection successfull')})
.catch(()=>{console.log('error')})

app.listen(5000,()=>{
console.log(api);
    console.log("welcome toserver");
});