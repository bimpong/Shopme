const mongoose=require("mongoose");
const productschem=mongoose.Schema({
    name:String,
 image:String,
    countInStock:Number,
    title:{
        type:String,
        required:true
    }
  
    

})

exports.Products=mongoose.model("Products",productschem)