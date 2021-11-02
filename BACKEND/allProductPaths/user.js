const {User} = require('../product_models/app_users');
const express = require('express');
const router = express.Router();

router.get(`/`, async (request, response) =>{
    const userList = await Order.find();

    if(!userList) {
        response.status(500).json({success: false})
    } 
    response.send(userList);
})

module.exports =router;