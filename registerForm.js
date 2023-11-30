document.getElementById("submitButton").addEventListener("click", function(e) {e.preventDefault();console.log(e);});
document.getElementById("submitButton").addEventListener("dblclick", function(e) {e.preventDefault();console.log(e)});

document.getElementById("submitButton").onclick = function(event){
    event.preventDefault();
    console.log(event);
}

document.getElementById("submitButton").ondblclick = function(event){
    event.preventDefault();
    console.log(event);
}

function validate(event){
    //e.preventDefault();

    let emailId = document.getElementById("inputEmail4").value;
    let password = document.getElementById("inputPassword4").value;
    let confirmPassword = document.getElementById("inputPassword5").value;
    let phoneNumber = document.getElementById("inputPhoneNumber4").value;

    let errorElement = document.getElementById("errorInfo");
    let errors=[];

    if(password !== confirmPassword){
        let confirmPasswordElement = document.getElementById("confirmPasswordErrorInfo");
        confirmPasswordElement.innerHTML= "Password is not same";
        confirmPasswordElement.style.color="red";
        
        errors.push("Password is not same.");
    }
    //errors= "Password is not same."
    if(isNaN(phoneNumber)){
        let phoneNumberElement = document.getElementById("phoneErrorInfo");
        phoneNumberElement.innerHTML= "Enter correct phone number";
        phoneNumberElement.style.color="red";

        errors= ''+ "Phone Number is Incorrect.";
    }
    //errors="Password is not same. Phone Number is Incorrect."


    if(errors.length > 0){
        //
        errorElement.innerHTML = errors;
        errorElement.style.color="red";
        return false;
    }

    return true;
}
