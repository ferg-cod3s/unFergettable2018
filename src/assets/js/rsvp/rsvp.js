var url = 'https://script.google.com/macros/s/AKfycbzoPQoLokSVqlN1tQ4k5o5jN3GdY0VvOW2rv5g2Grm1okgZ52k/exec'

$('#rsvpForm').submit(function(e) {
  console.log("you clicked submit!")
  // Abort any pending requests
  if (request){
    request.abort();
  }

  //local variables!
  var $form = $(this);

  //select and cache all input fields!
  var $inputs = $form.find("input, select, button, textarea");

  //serialize the data
  var serializedData = $form.serialize();

  //disable inputs while submitting... this makes sense
  $inputs.prop("disabled", true);

  //fire off request to /form.php... this is where i get lost
  request = $ajax({
    url: url,
    type: "POST",
    data: serializedData
  });

  //Callback handler, called on success
  request.done(function(response, textStatus, jqXHR){
    //logging messages
    console.log("Hooray, it worked!");
    console.log(response);
    console.log(textStatus);
    console.log(jqXHR);
  });

  //Callback handler, called on fail
  request.fail(function (jqXHR, textStatus, errorThrown){
    // Log the error to the console
    console.error(
        "The following error occurred: "+
        textStatus, errorThrown
    );
  });

// Callback handler that will be called regardless if the request failed or succeeded
  request.always(function () {
    // Reenable the inputs
    $inputs.prop("disabled", false);
  });

  // Prevent default posting of form
  event.preventDefault();
})
