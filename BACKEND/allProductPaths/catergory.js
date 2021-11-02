const {Categories}=require('../product_models/product_categories')
const express = require('express');
const router = express.Router();

router.get(`/`, async (request, response) =>{
    const categoryList = await Categories.find();

    if(!categoryList) {
        response.status(500).json({success: false})
    } 
    response.send(categoryList);
})

module.exports =router;