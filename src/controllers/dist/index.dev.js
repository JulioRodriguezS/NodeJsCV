"use strict";

var fetch = require('node-fetch'); //api heroku server 


var apiUrl = 'https://peaceful-taiga-91600.herokuapp.com/'; //api local node
//const apiUrl = 'http://localhost:3000/'
//api local docker
//const apiUrl = 'http://localhost:90/'

module.exports = {
  gets: function gets(dir, param) {
    var completedir;
    return regeneratorRuntime.async(function gets$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            completedir = apiUrl + dir + '/';
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(completedir + param).then(function (promss) {
              return promss.json();
            }).then(function (content) {
              return content;
            })["catch"](function (err) {
              return "err: ".concat(err);
            }));

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  posts: function posts(dir, params) {
    var completedir, response;
    return regeneratorRuntime.async(function posts$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            completedir = apiUrl + dir;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch(completedir, {
              method: 'post',
              body: JSON.stringify(params),
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response.json());

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", "err: ".concat(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }
};