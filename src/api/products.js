'use strict';

const express = require('express');

const Products = require('../models/products.js');
const products = new Products();

const router = express.Router();

// ROUTES
router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', postProducts);

router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', putProducts);
router.delete('/api/v1/products/:id', deleteProducts);

// FUNCTIONS
function getProducts(request,response,next) {
  console.log('called');

  // expects an array of objects back
  products.get()
    .then( data => {//not being resolved
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function getProduct(request,response,next) {
  // expects an array with one object in it

  products.get(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function postProducts(request,response,next) {
  // expects the record that was just added to the database
  // console.log('called');
  products.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


function putProducts(request,response,next) {
  // expects the record that was just updated in the database
  products.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function deleteProducts(request,response,next) {
  // Expects no return value (the resource should be gone)
  products.delete(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

module.exports = router;
