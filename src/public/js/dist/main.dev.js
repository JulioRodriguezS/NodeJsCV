"use strict";

$("#downloadPDF").click(function _callee(e) {
  var userId;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          userId = $(this).data('id');
          _context.next = 4;
          return regeneratorRuntime.awrap($.post("/downloadPDF/".concat(userId)).done(function (data) {
            window.open("/public/pdfs/".concat(data), '_blank');
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});