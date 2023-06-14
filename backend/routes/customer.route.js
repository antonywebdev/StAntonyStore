const express = require('express')
const app = express()
const customerRoute = express.Router()

// Employee model
let Customer = require('../models/Customer')

// Add Employee
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

module.exports = customerRoute
