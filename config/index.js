var _ = require("lodash");
var defaults = require("./default.js");
console.log(process.env.NODE_ENV);
var config = require("./" + (process.env.NODE_ENV || "development") + ".js");
module.exports = _.merge({}, defaults, config);