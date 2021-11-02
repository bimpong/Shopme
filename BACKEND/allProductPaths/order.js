const {Order} = require('../product_models/orders');
const express = require('express');
const router = express.Router();

router.get(`/`, async (request, response) =>{
    const order= await Order.find();

    if(!order) {
        response.status(500).json({success: false})
    } 
    response.send(order);
})

module.exports =router;