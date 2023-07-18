 function validate(){
 	var email = document.querySelector(".enta").value;
 	var isValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	var error = document.querySelector("input");
 	var att = document.querySelector(".code-red");
 	var main = document.querySelector(".main-card");
 	var success = document.querySelector(".success-card");

 	if (email == ""){

 			error.classList.add("error-form");
 			att.style.display = "inline-block";
 			error.style.transition = "all 0.25s ease-in-out";


 	}

 	else{
 		main.style.display = "none";
 		success.style.display = "block";
 		success.style.transition = "display 0.25s ease-in-out";

 	}

}