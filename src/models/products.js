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
    console.log(record);
    console.log(_id)
    return ProductsModel.findOneAndReplace({_id}, {record})
 
  }

  delete(_id) {
    ProductsModel.deleteOne({_id});
  }

  sanitize(record) {
  }

}

module.exports = Products;
