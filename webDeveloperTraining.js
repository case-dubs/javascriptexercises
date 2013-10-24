function handleForm(){
	//alert('in handle form');
	var formIsValid = validateForm();
	if (!formIsValid){
		//PROBLEM: getting an invalid message even when everything is filled out correctly!
		displayMessages();
	}
	else{
		submitForm();
	}
};

function validateForm(){
	//console.log('in validateForm()');
	var firstName = document.getElementById('firstname').value;
	var lastName = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var gender = document.getElementsByName('gender').checked;
	//Courses checkboxes:
	var wcfChecked = document.getElementById('course_wcf').checked;
	var wbdChecked = document.getElementById('course_wdb').checked;
	//Coding experience checkboxes:
	var lang_vb = document.getElementById('lang_vb').checked;
	var lang_java = document.getElementById('lang_java').checked;
	var lang_ruby = document.getElementById('lang_ruby').checked;
	var lang_python = document.getElementById('lang_python').checked;
	var lang_php = document.getElementById('lang_php').checked;
	var lang_js = document.getElementById('lang_js').checked;
	var lang_other = document.getElementById('lang_other').checked;
	var otherDetails = document.getElementById('other_details').value;

 	/*regular expression to match only alphanumeric characters and spaces.*/
 	var re = /^[\w ]+$/;


	if (!re.test(firstName)){
		return false;
	//QUESTION: none of these console.log messages are appearing in the console! Why is that?!
		console.log('firstname error');
	}
	else if (!re.test(lastName)){
		return false;
		console.log('lastname error');
	}
	else if (email == ''){
		return false;
		console.log('email error');
	}
	else if (phone != '' && !re.test(phone)){
		return false;
		console.log('phone error');
	}
	else if (!gender){
		console.log("gender not checked.")
		return false;
	}
	else if (wcfChecked == false && wbdChecked == false){
		return false;
		console.log('courses error');
	}
	else if (lang_vb == false && lang_java == false && lang_ruby == false && lang_python == false && lang_php == false && lang_js == false && lang_other == false){
		return false;
		console.log('languages error');
	}
	else if (lang_other == true && otherDetails == ''){
		return false;
		console.log('other lang error');
	}
	else{
		return true;
		console.log('form is valid!');
	}

};

function displayMessages(){
	alert('invalid entries');
};

function submitForm(){
	alert('Valid Entries');
};