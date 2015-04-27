function sendMail(){
	this.event.preventDefault();
  if( $("#email").val() && $("#name").val() && $("#message").val() ){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'SfwRClgjlAwZ4dKqOQRuog',
        'message': {
          'from_email': $("#email").val(),
          'from_name': $("#name").val(),
          'subject': 'Portafolio Contact',
          'html': $("#message").val(),
          'to': [
            {
              'email': 'dcividanes91@gmail.com',
              'name': 'Domingo Cividanes',
              'type': 'to'
            }
          ],
        }
      }
    }).done(function(response) {
    	alert("Message sent successfully");
  	}).fail(function(response){
  		alert("Message can't be sent");
  	}); 
  }
  alert("Fill all fields before sending");
}