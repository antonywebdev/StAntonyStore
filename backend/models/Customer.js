const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Customer = new Schema({
    name: {
        type: String
     },
    email: {
        type: String
     },
    password: {
        type: String
     },
    phoneNumber: {
        type: Number
     },
    address1: {
        type: String
     },
    address2: {
        type: String
     },
    city: {
        type: String
     },
    state: {
        type: String
     },
    country: {
        type: String
     }
}, {
   collection: 'Customer'
})

module.exports = mongoose.model('Customer', Customer)