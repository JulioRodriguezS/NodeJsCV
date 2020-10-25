"use strict";

$("#downloadPDF").click(function (e) {
  e.preventDefault();
  var userId = $(this).data('id');
  $.get("/downloadPDF/".concat(userId)).done(function (data) {
    window.open("/public/pdfs/".concat(data), '_blank');
  });
});