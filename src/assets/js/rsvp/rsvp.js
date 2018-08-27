var $form = $('form#rsvpform'),
    url = 'https://script.google.com/macros/s/AKfycbzoPQoLokSVqlN1tQ4k5o5jN3GdY0VvOW2rv5g2Grm1okgZ52k/exec'

$('#submitButton').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
