'use strict';
//id name display name desc
//product id category name displ desc
const mongoose = require('mongoose');
const products = mongoose.Schema({
    name: {type:String, required:true},
    category:{type:String, required:true},
    description: {type:String, required: true}
})

module.exports = mongoose.model('products', products)