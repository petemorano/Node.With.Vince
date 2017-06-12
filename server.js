var express = require('express'),
  app = express(),

  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Transaction = require('./api/models/TransactionListModel'),
  bodyParser = require('body-parser');

var config = require('./config');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/transactiondb'); 
mongoose.connect(config.dbstring.connection);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/TransactionListRoutes');
routes(app);


app.listen(port);


console.log('transaction list RESTful API server started on: ' + port);