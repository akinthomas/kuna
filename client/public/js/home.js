$(document).ready(function(){

	$('#signupbtn').on('submit', function(e){
		e.preventDefault();

		var signUpObj = {
		  first_name:$('#firstName').val(),
	      last_name:$('#lastName').val(),
	      username: $('#username').val(),
		  email: $('#email').val(),
		  password: $('#psw').val(),
		}

		$.ajax({
			
		});
	});
});