$("#downloadPDF").click(function(e){
  e.preventDefault()
  const userId = $(this).data('id')
  $.get(`/downloadPDF/${userId}`)
  .done((data)=> {
    window.open(`/public/pdfs/${data}`,'_blank')
  })
})
