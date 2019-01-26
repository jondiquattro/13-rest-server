'use strict';

const uuid = require('uuid/v4');

const ProductsModel = require('./products-schema');
const schema = {
};

class Products {

  constructor() {
  
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return ProductsModel.find(queryObject);
    }
  
  post(record) {
    let newRecord = new ProductsModel(record);
    return newRecord.save();


  }

  put(_id, record) {
    let queryObject = _id ? {_id} : {};
    return ProductsModel.findOneAndReplace(queryObject, {record})

 
  }

  delete(_id) {
    console.log(_id)
    let queryObject = _id ? {_id} : {};
    return ProductsModel.findOneAndDelete(queryObject);
  }

  

}

module.exports = Products;
