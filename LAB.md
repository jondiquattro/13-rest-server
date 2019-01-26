# LAB - Data Modeling

## Before you begin
* Create a new repository and copy the contents of this lab folder into it.
* You'll need to initialize this folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Overview
You have been provided a partially working API server. The assignment for today is to complete the server's functionality by creating the data models and writing a full test suite

## Assignment 1: Data Modeling
* The provided API server is setup to work, but the data models are incomplete
* Implement 2 data models, in different manners, using only TDD
* Do not use the server routes to test the models. Once you're finished the TDD, the server should "just work", so long as your models obey the contract (noted in the routes)

  * **Categories**
    * Create this as an in-memory model
    * The model class should hold and manage the data
    * The model class should expose methods that match REST verbs
      * `get()`
      * `post()`
      * `put()`
      * `delete()`
  * **Products**
    * Create this as a mongoose model
    * Create a mongoose schemas for this collection
    * The model class should expose methods that match REST verbs
      * `get()`
      * `post()`
      * `put()`
      * `delete()`
* Write a full suite of tests 
      
## Assignment 2: Back Up The Truck...
Whoops.  Because ... 'reasons', you are being forced to unwind all of that hard work you just did and de-modularize the server code back into a "monolith"

* Create a new branch in your repo and move the server as you've built it into that branch. You may still deploy/travis test this branch and keep it for posterity.
* Create another new working branch.
* Move all of the functionality back into a single `server.js` file. You may still keep the modeling that you've done, but we want to re-combine all of the routes and route handler functions, middleware, and even the models back into one file.
* Don't write any new tests
  * All of your previous tests should work exactly the same.

### Deployment
* Your server must be deployed at Heroku
* Deploy the modularized and monolithic versions separately
  * Each branch can go to a separate Heroku Dyno
* Your routes should all be testable remotely

### Testing
* Write a complete set of tests for all data models, independent of the server
* For testing the server and routes, use `supertest` to do end-to-end testing
  * What we're testing is not whether express works, but whether your routes are doing the correct things.
* Your tests must be running green on travis.com

###  Documentation
* Complete the README.md file included in the lab folder
* Be sure to include the URLs to your server, api docs, and jsdocs at Heroku
* Write JSDoc for every function
* Create a `docs` folder 
* Put an updated swagger.json file in that folder
* Run `jsdoc` and target the doc folder as the target for the build.
