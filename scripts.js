/* Add your JavaScript to this file */
window.onload= function()
{

var email = document.getElementById('email');
var form = document.getElementsByTagName('form')[0];

form.addEventListener("submit", (e) => 
	{ 
	e.preventDefault();

  	if(email.value ==''){
		alert('Please enter valid email address!');
	}

	else if(email.value == null){
		alert('Please enter valid email address!');
	}
	else{
		alert("Thank you! Your email address: " + email.value + " has been added to our mailing list!");
	}
	});
}