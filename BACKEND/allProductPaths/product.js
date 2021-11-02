const {Products} = require('../product_models/products');
const express = require('express');
const router = express.Router();

const api=process.env.API_URL;
router.get(`/`,async (request,response)=> {

    const list=await Products.find();
   response.send(list)}
   );
   router.post(`/`,(request,response)=> {
   
    const product=new Products({
       name:request.body.name,
   
       image:request.body.image,
       countInStock:request.body.countInStock,
       title:request.body.title
    
     

    })
    product.save().then((createproduct=>{
        response.status(201).json(createproduct)
    })).catch((err)=>response.status(500).json({
     error:err,
     success:false
   
    }))
   
   

    
   }
   );
   

module.exports =router;