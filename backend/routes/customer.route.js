const express = require('express')
const app = express()
const customerRoute = express.Router()

// Customer model
let Customer = require('../models/Customer')

// Add Customer
customerRoute.route('/createCustomer').post((req, res, next) => {
  console.log('req.bodyreq.body',req.body);
  Customer.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Add Customer
// Login Customer 
customerRoute.route('/read/:username/:password').get((req, res) => {
  Customer.findOne(req.params.email,req.params.password, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Login Customer 

module.exports = customerRoute
