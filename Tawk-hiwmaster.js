jQuery(function($) { 

  $('#widg1').hide()
  $('#widg2').hide()
  $('#widg3').hide()
  $('#widg4').hide()

  $(document).on( 'click', '#w-tabs-0-data-w-tab-0', function() {
    console.log("clicked one")
    $('#widg1').show()
    $('#widg2').hide()
    $('#widg3').hide()
    $('#widg4').hide()
  })

  $(document).on('click', '#w-tabs-0-data-w-tab-1', function() {
    console.log("clicked two")
    $('#widg1').hide()
    $('#widg2').show()
    $('#widg3').hide()
    $('#widg4').hide()
  })

  $(document).on('click', '#w-tabs-0-data-w-tab-2',  function() {
    console.log("clicked three")
    $('#widg1').hide()
    $('#widg2').hide()
    $('#widg3').show()
    $('#widg4').hide()
  })

  $(document).on('click', '#w-tabs-0-data-w-tab-3', function() {
    console.log("clicked four")
    $('#widg1').hide()
    $('#widg2').hide()
    $('#widg3').hide()
    $('#widg4').show()
  })

  $('#w-tabs-0-data-w-tab-0').click()
  
})
