let button = document.getElementById("btn");
let name=document.getElementById("name")
let email=document.getElementById("email")
let phone=document.getElementById("phone")
let password=document.getElementById("pass")
let confrimPassword=document.getElementById("cpass")
// ------------------ Password Display FUNCTION ------------------ //
function eyeIconPass(fieldName,Icon,pass) {
  let icon = document.querySelector(`.${fieldName} .${Icon}`);

  icon.addEventListener("click", (event) => {
    event.preventDefault()
    if(icon.classList.contains("bi-eye-slash-fill")){
      icon.classList.remove("bi-eye-slash-fill")
      icon.classList.add("bi-eye-fill")
      pass.setAttribute("type","text")
      setTimeout(() => {
        icon.classList.add("bi-eye-slash-fill")
      icon.classList.remove("bi-eye-fill")
      pass.setAttribute("type","password")

      }, 20000);
    }
    else{
        icon.classList.add("bi-eye-slash-fill")
      icon.classList.remove("bi-eye-fill")
      pass.setAttribute("type","password")


    }

  });
}
//for fild4 means for Password//
eyeIconPass("field4","slashEye",document.getElementById("pass"))
//for field5 means for Confirm Password//
eyeIconPass("field5","slashEye2",document.getElementById("cpass"))


// ------------------ Error Message------------------ //
function error(value,message){
  let selected=document.getElementById(value);
let parentDiv=selected.parentElement.parentElement;
let checkIcon=parentDiv.querySelector(".checkIcon")
let exIcon=parentDiv.querySelector(".exclamIcon")
let errorMess=parentDiv.querySelector("small")
exIcon.classList.add("usexIcon")
errorMess.textContent=message
errorMess.classList.add("sError")
selected.classList.add("error")
selected.classList.remove("success")
checkIcon.classList.remove("scheckIcon")
}
// ------------------ Success Message------------------ //
function success(value){
  let selected=document.getElementById(value);
let parentDiv=selected.parentElement.parentElement;
let checkIcon=parentDiv.querySelector(".checkIcon")
let exIcon=parentDiv.querySelector(".exclamIcon")
let errorMess=parentDiv.querySelector("small")
 checkIcon.classList.add("scheckIcon")
selected.classList.add("success")
selected.classList.remove("error")
exIcon.classList.remove("usexIcon")
errorMess.innerHTML=""
}

// ------------------ Name Field Validation ------------------ //

//---Pattern for Name Field Validation---//
function validateName(name) {
  let regex = /^[A-Za-z\s]{3,30}$/;
  return regex.test(name.trim());
}
//---Checking Name field Using Conditions---//
function NameFieldValid(){
 if(name.value==""){
    error("name","*Name field is Empty")
     return false
  }
  else if(!validateName(name.value)){
     error("name","*Name must be 3–30 characters, letters only.")
     return false
  }
  else{
    success("name")
    return true
  }
}
// ------------------ Emial Field Validation ------------------ //
//---Pattern for email Field Validation---//
function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}
//---Checking emial field Using Conditions---//
function emailFieldValid(){
 if(email.value==""){
    error("email","*Email field is Empty")
    return false
  }
  else if(!validateEmail(email.value)){
     error("email","*Enter a valid email address (e.g. user@example.com)")
     return false
  }
  else{
    success("email")
    return true
  }
}
// ------------------ Phone Field Validation ------------------ //
//---Pattern for Phone Field Validation---//
function validatePhone(phone) {
  let regex = /^\+?\d{11}$/; 
  return regex.test(phone.trim());
}
//---Checking Phone field Using Conditions---//
function phoneFieldValid(){
 if(phone.value==""){
    error("phone","*Phone field is Empty")
    return false
  }
  else if(!validatePhone(phone.value)){
     error("phone","*Phone Number must be 11 digits long")
     return false
  }
  else{
    success("phone")
    return true
  }
}
// ------------------ Password Field Validation ------------------ //
//---Checking Password field Using Conditions---//
function passFieldValid() {
  if (password.value == "") {
    error("pass", "*Password field is Empty");
    return false;
  }
  if (!/[a-z]/.test(password.value)) {
    error("pass", "*Password must contain at least one lowercase letter.");
    return false;
  }
  if (!/[A-Z]/.test(password.value)) {
    error("pass", "*Password must contain at least one uppercase letter.");
    return false;
  }
  if (!/\d/.test(password.value)) {
    error("pass", "*Password must contain at least one number.");
    return false;
  }
  if (!/[.$!%?@&]/.test(password.value)) {
    error("pass", "*Password must contain at least one special character (. $ ! % ? & @).");
    return false;
  }
  if (password.value.length < 8) {
    error("pass", "*Password must be at least 8 characters long.");
    return false;
  }

  // ✅ If all conditions pass
  success("pass");
  return true;
}

// ------------------ Confirm Password Field Validation ------------------ //
//---Pattern for Confirm Password Field Validation---//

//---Checking Confirm Password field Using Conditions---//
function cpassFieldValid(){
 if(confrimPassword.value==""){
    error("cpass","*Password field is Empty")
    return false
  }
 if (!/[a-z]/.test(confrimPassword.value)) {
  error("cpass", "*Password must contain at least one lowercase letter.");
  return false;
}
if (!/[A-Z]/.test(confrimPassword.value)) {
  error("cpass", "*Password must contain at least one uppercase letter.");
  return false;
}
if (!/\d/.test(confrimPassword.value)) {
  error("cpass", "*Password must contain at least one number.");
  return false;
}
if (!/[.$!%?@&]/.test(confrimPassword.value)) {
  error("cpass", "*Password must contain at least one special character (. $ ! % ? & @).");
  return false;
}
if (confrimPassword.value.length < 8) {
  error("cpass", "*Password must be at least 8 characters long.");
  return false;
}

  else{
    success("cpass")
    return true
  }
}
// ------------------ Checking pass and confrim pass are same ------------------ //
function check() {
  if (password.value !== "" && confrimPassword.value !== "") {
    if (password.value !== confrimPassword.value) {
      error("cpass", "*Password does not match.");
      return false;
    } else {
      success("cpass");
      return true;
    }
  }
  return false;
}


// ------------------ Invoking All Fields Functions ------------------ //
button.addEventListener("click",(event)=>{
  event.preventDefault()
   NameFieldValid()
 emailFieldValid()
 phoneFieldValid()
 passFieldValid()
 cpassFieldValid()
 check()
if(NameFieldValid() && emailFieldValid() && phoneFieldValid() && passFieldValid() && check()) {
  setTimeout(()=>{
      Swal.fire({
      icon: "success",
      title: "Form Submitted!",
      text: "✅ Your form has been successfully submitted.",
       backdrop: false,
      confirmButtonText: "OK"
    });
  },1000)
} else {
  setTimeout(()=>{
   Swal.fire({
      icon: "error",
      title: "Form Not Submitted!",
      text: "❌ An error Occured, Please try again later!!.",
       backdrop: false,
      confirmButtonText: "OK"
    });
  },1000)
}

})
