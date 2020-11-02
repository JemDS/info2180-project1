/* Add your JavaScript to this file */
window.onload= function()
{

var email = document.getElementByID('email');
var form = document.getElementByTag('form');
/*const errorElm = document.getElementByID('error');*/

form.addEventListener('submit', (e) => { 

	if(email.value ==='') || (email.value == null){
		e.preventDefault();
		alert('Please enter valid email address!');
	}
	else{
		alert("Thank you! Your email address: " + email + " has been added to our mailing list!");
	}
}