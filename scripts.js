/* Add your JavaScript to this file */
window.onload= function()
{

const email = document.getElementByID('email');
const form = document.getElementByTag('form');
/*const errorElm = document.getElementByID('error');*/

form.addEventListener('submit', (e) => { 

	let message = [];
	if(email.value ==='') || (email.value == null){
		e.preventDefault();
		alert('Please enter valid email address!');
	}

	/*if (message.length > 0) {
		e.preventDefault();
		errorElm.innerText = message.join(',')
	}*/
	else{
		alert("Thank you! Your email address: " + email + " has been added to our mailing list!");
	}

}

	/*document.getElementByClass('message').innerHTML = emails;*/