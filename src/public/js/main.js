$("#downloadPDF").click(async function(e){
  e.preventDefault()
  const userId = $(this).data('id')
  await $.post(`/downloadPDF/${userId}`)
  .done((data)=> {
    window.open(`/public/pdfs/${data}`,'_blank')
  })
})
