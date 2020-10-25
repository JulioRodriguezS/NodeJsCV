"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var puppeteer = require('puppeteer');

var path = require('path');

var fs = require('fs');

var GenPDF =
/*#__PURE__*/
function () {
  function GenPDF() {
    _classCallCheck(this, GenPDF);
  }

  _createClass(GenPDF, [{
    key: "generatePDF",
    value: function generatePDF(userInfoObj) {
      var dirPath, existDir, todaysDate, fileName, filePath, browser, page;
      return regeneratorRuntime.async(function generatePDF$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dirPath = path.join(__dirname, '../', 'public', 'pdfs') + '/' + userInfoObj._id + '/';
              _context.next = 3;
              return regeneratorRuntime.awrap(fs.existsSync(dirPath));

            case 3:
              existDir = _context.sent;

              if (!existDir) {
                fs.mkdir(dirPath, function (err, dir) {
                  if (err) return 'err:' + err;
                });
              }

              fs.readdir(dirPath, function (err, files) {
                if (files !== 'undefined') {
                  if (files.length > 0) {
                    files.forEach(function (file) {
                      fs.unlink(dirPath + file, function (err) {
                        console.log(err);
                      });
                    });
                  }
                }
              });
              todaysDate = new Date();
              fileName = "".concat(userInfoObj.title.split(' ').join('-'), "_").concat(userInfoObj.name.replace(' ', ''), "_").concat(userInfoObj.lastName.replace(' ', ''), "_").concat(todaysDate.getTime(), ".pdf");
              filePath = dirPath + fileName;
              _context.next = 11;
              return regeneratorRuntime.awrap(puppeteer.launch());

            case 11:
              browser = _context.sent;
              _context.next = 14;
              return regeneratorRuntime.awrap(browser.newPage());

            case 14:
              page = _context.sent;
              _context.next = 17;
              return regeneratorRuntime.awrap(page["goto"]("https://young-eyrie-63712.herokuapp.com/".concat(userInfoObj._id), {
                timeout: 120000
              }));

            case 17:
              _context.next = 19;
              return regeneratorRuntime.awrap(page.setViewport({
                width: 1680,
                height: 1050
              }));

            case 19:
              _context.next = 21;
              return regeneratorRuntime.awrap(page.pdf({
                path: filePath,
                format: "A4",
                printBackground: true
              }));

            case 21:
              _context.next = 23;
              return regeneratorRuntime.awrap(browser.close());

            case 23:
              return _context.abrupt("return", userInfoObj._id + '/' + fileName);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return GenPDF;
}(); //function will check if a directory exists, and create it if it doesn't


function checkDirectory(directory, callback) {
  fs.stat(directory, function (err, stats) {
    //Check if error defined and the error code is "not exists"
    if (err && err.errno === 34) {
      //Create the directory, call the callback.
      fs.mkdir(directory, callback);
    } else {
      //just in case there was a different error:
      callback(err);
    }
  });
}

module.exports = GenPDF;