'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TransactionSchema = new Schema({
  username: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  transactionAmount: {
    type: Number
  }
});

module.exports = mongoose.model('Transactions', TransactionSchema);