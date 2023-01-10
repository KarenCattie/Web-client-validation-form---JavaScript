/* 
Name: Yalin Su
Date: Nov 17, 2022
Section: CST 8285 section 300
Description: this is the external Javascript sheet for registration.html
*/
let emailInput = document.querySelector("#email");
let termsInput = document.querySelector("#terms");
let nameInput = document.querySelector("#login");
let passwordInput = document.querySelector("#pass");
let retypePasswordInput = document.querySelector("#pass2");
let newsInput = document.querySelector("#newsletter");

// create paragraph to display the error Msg returented by vaildateEmail() function 
// and assign this paragraph to the class warning to style the error MSg
let emailError = document.createElement("p");
emailError.setAttribute("class","warning");
//append the created element to the parent of textEmail div
document.querySelectorAll(".textEmail")[0].append(emailError);
emailError.style.color = "red";

// create paragraph to display the error Msg returented by validateTerm() function 
// and assign this paragraph to the class warning to style the error MSg
let termError = document.createElement("p");
termError.setAttribute("class","warning");
//append the created element to the parent of checkboxTerm div
document.querySelectorAll(".checkboxTerm")[0].append(termError);
termError.style.color = "red";

// create paragraph to display the error Msg returented by validateName() function 
// and assign this paragraph to the class warning to style the error MSg
let nameError = document.createElement("p");
nameError.setAttribute("class","warning");
//append the created element to the parent of textUserName div
document.querySelectorAll(".textUserName")[0].append(nameError);
nameError.style.color = "red";

// create paragraph to display the error Msg returented by validatePassword() function 
// and assign this paragraph to the class warning to style the error MSg
let passwordError = document.createElement("p");
passwordError.setAttribute("class","warning");
//append the created element to the parent of textPassword div
document.querySelectorAll(".textPassword")[0].append(passwordError);
passwordError.style.color = "red";

// create paragraph to display the error Msg returented by validateRetypePassword() function 
// and assign this paragraph to the class warning to style the error MSg
let retypePasswordError = document.createElement("p");
retypePasswordError.setAttribute("class","warning");
//append the created element to the parent of textRetypePassword div
document.querySelectorAll(".textRetypePassword")[0].append(retypePasswordError);
retypePasswordError.style.color = "red";

//define global variables for displaying the error message
let emailErrorMsg = "Email address should be non-empty with the format xyx@xyz.xyz.";
let termErrorMsg = "Please accept the terms and conditions.";
let nameErrorMsg1 = "User name should be non-empty, and within 20 characters long.";
let nameErrorMsg2 = "Login name must be less than 20 characters.";
let passwordErrorMsgLength = "password should be at least 6 characters long.";
let passwordErrorMsgCase = "password should have at least 1 uppercase letter and 1 lowercase letter.";
let passwordErrorMsgCheck = "Both password should be matched.";
let passwordErrorMsgBlank = "This field cannot be blank.";
let defaultMSg = "";

//method to validate email
function validateEmail()
{
    let email = emailInput.value;
    let regexp = /\S+@\S+\.\S+/;

    if(regexp.test(email))
    {
        error = defaultMSg;
    }
    else
    {
        error = emailErrorMsg;
    }
    return error;
}

//method to validate name
function validateName()
{  
    let name = nameInput.value;
    
    if(name === "" || name == null)
    {
        error = nameErrorMsg1;
    }
    else if( name.length >= 20)
    {
        error = nameErrorMsg2;
    }
    else
    {
        return defaultMSg;
    }
    return error;
}

//method to validate password
function validatePassword()
{
    let password = passwordInput.value;
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if(password.length < 6)
    {
        error = passwordErrorMsgLength;
    }
    else if(regexp.test(password))
    {
        error = defaultMSg;
    }
    else
    {
        error = passwordErrorMsgCase;
    }
    return error;
}

//method to validate re-type password
function validateRetypePassword()
{
    let repassword = retypePasswordInput.value;
    let password = passwordInput.value;
    if(repassword !== password)
    {
        error = passwordErrorMsgCheck;
    }
    else if(repassword === "" || repassword == null)
    {
        error = passwordErrorMsgBlank;
    }
    else
    {
        error = defaultMSg;
    }
    return error;
}

//method to validate newsletter checkbox
function validateNews()
{
    if(newsInput.checked)
    {
        error = alert("You might receive spam emails or mails by checking this box");
    }
    else
    {
        error = defaultMSg;
    }
    return error;
}

//method to validate term and condition checkbox
function validateTerm()
{
    if(termsInput.checked)
    {
        return defaultMSg;
    }
    else
    {
        return termErrorMsg;
    }
}

//event handler for sumbit event
function validate()
{
    let valid = true;
    let emailValidation = validateEmail();
    let termValidation = validateTerm();
    let nameValidation = validateName();
    let passwordValidation = validatePassword();
    let retypePasswordValidation = validateRetypePassword();
    let name = nameInput.value;

    if(emailValidation !== defaultMSg)
    {
        emailError.textContent = emailValidation;
        valid = false;
    }
    if(nameValidation !== defaultMSg)
    {
        nameError.textContent = nameValidation;
        valid = false;
    }
    if(passwordValidation !== defaultMSg)
    {
        passwordError.textContent = passwordValidation;
        valid = false;
    }
    if(retypePasswordValidation !== defaultMSg)
    {
        retypePasswordError.textContent = retypePasswordValidation;
        valid = false;
    }
    if(termValidation !== defaultMSg)
    {
        termError.textContent = termValidation;
        valid = false;
    }
    //after all the validation successed, convert the user name to all lower case.
    document.getElementById("login").value =name.toLowerCase();
    return valid;
}

//event listner to clear the text inside the 5 paragraph when click reset button
function resetFormError()
{
    emailError.textContent = defaultMSg;
    nameError.textContent = defaultMSg;
    passwordError.textContent = defaultMSg;
    retypePasswordError.textContent = defaultMSg;
    termError.textContent = defaultMSg;
}
//event listner for the reset button inside the form
document.form.addEventListener("reset",resetFormError);

//event listner for the email if user input the correct format of email,
//the error message will be clear
emailInput.addEventListener("blur",()=>{
    let email = validateEmail();
    if(email == defaultMSg)
    {
        emailError.textContent = defaultMSg;
    }
});

//event listner for the user name if user input the correct format of user name,
//the error message will be clear
nameInput.addEventListener("blur",()=>{
    let name = validateName();
    if(name == defaultMSg)
    {
        nameError.textContent = defaultMSg;
    }
});

//event listner for the password if user input the correct format of password,
//the error message will be clear
passwordInput.addEventListener("blur",()=>{
    let password = validatePassword();
    if(password == defaultMSg)
    {
        passwordError.textContent = defaultMSg;
    }
});

//event listner for the re-type password if user input the correct format of re-type password,
//the error message will be clear
retypePasswordInput.addEventListener("blur",()=>{
    let repassword = validateRetypePassword();
    if(repassword == defaultMSg)
    {
        retypePasswordError.textContent = defaultMSg;
    }
});

//event listner for the term and condition checkbox if user checked the term and condition checkbox,
//the error message will be clear
termsInput.addEventListener("change", function(){
    if(this.checked)
    {
        termError.textContent = defaultMSg;
    }
});







