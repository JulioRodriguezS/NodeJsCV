"use strict";

var moment = require('moment');

var helpers = {};

helpers.dateMonthYear = function (datatime) {
  var d = moment(datatime).format('MMMM, YYYY');
  return d;
};

module.exports = helpers;