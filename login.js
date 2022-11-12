function validate(e) {
	e.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "ashutosh" && password == "151015") {
		alert("Login Successfully");
		window.location.assign("animal_home.html");
	}
	else {
		alert("Please enter a currect username and password");
	}
}
//function loginprompt()
//{
	//alert("Please enter your username\n and password to login :)");
//}
