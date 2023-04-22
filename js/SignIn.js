let arrData=[];

// if(sessionStorage.arrData != null){
//     arrData=JSON.parse(sessionStorage.arrData);
//   }
 
let userName1;
let userName2;
let userPassword;
let userEmail;
let userName;

let DataCollected=document.getElementById("datasub");

DataCollected.addEventListener("submit",function(event){
event.preventDefault();

  userName1=event.target.username1.value;
  userName2=event.target.username2.value;
  userPassword=event.target.userpassword.value;
  userEmail=event.target.useremail.value;
  userName=(userName1+" ").concat(userName2)
 console.log(userName)

  if(validateName(userName1) && validateName(userName2) && validatePassword() && validateEmail()){
		arrData.push(userName);
		sessionStorage.setItem('arrData',JSON.stringify(arrData) );
		// DataCollected.reset(); 
  }

});


function validateName(userName0) {
	let Name = userName0.toLowerCase();
	if (Name == "") {
	  alert("Name must be filled out");
	  return false;

	}else if(Name.includes(" ")){
		alert("Name must be filled with no spaces");
		return false;	
	} else if(arrData.includes(userName)){

		alert("Username already exists. welcome "+userName);
		return false;
	}
	
return true;

  }
  

  function validatePassword(){
	let password = userPassword;
			const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
			if (!passwordRegex.test(password)) {
				   alert("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character");
				   return false;
				 }
		return true;
	}   


	function validateEmail(){
		if (!/\S+@\S+\.\S+/.test(userEmail)) // search for at least non-whitespace characters
 {
	alert("E-mail must be in a valid format such as example@gmail.com");
	return false;
}
	return true;

	}